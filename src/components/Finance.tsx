import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Finance.css'
import PaymentLinkModal from './PaymentLinkModal'
import imgImageErgo360 from '../../images/logo_interno.png'
import imgIcon11 from '../../images/lupa.svg'
import imgIcon10 from '../../images/calendario.svg'
import imgIcon2 from '../../images/seta_baixo.svg'
import imgIcon12 from '../../images/pessoa.svg'
import imgIcon6 from '../../images/dashboard.svg'
import imgIcon7 from '../../images/usuarios.svg'
import imgIcon8 from '../../images/financeiro.svg'
import imgIcon9 from '../../images/configuracoes.svg'
import imgVector1 from '../../images/tendencia.svg'
import imgVector6 from '../../images/receitas.svg'
import imgVector3 from '../../images/dinheiro.svg'
import imgIcon1 from '../../images/info.svg'
import imgIcon from '../../images/seta_cima_verde.svg'
import imgIcon3 from '../../images/download.svg'
import imgIcon4 from '../../images/corrente_branca.svg'
import imgIcon5 from '../../images/vision.svg'

// Image assets from Figma

interface Charge {
  id: string
  company: string
  responsible: string
  category: 'Empresa' | 'Autônomo'
  value: string
  status: 'Pago' | 'Pendente' | 'Inadimplente'
  issueDate: string
  dueDate: string
  nfe: string | null
}

export default function Finance() {
  const navigate = useNavigate()
  const [isPaymentLinkModalOpen, setIsPaymentLinkModalOpen] = useState(false)

  const charges: Charge[] = [
    {
      id: 'COB-2025-001',
      company: 'LogiTrans',
      responsible: 'Ana Ribeiro',
      category: 'Empresa',
      value: 'R$ 899',
      status: 'Pago',
      issueDate: '01/10/2025',
      dueDate: '10/10/2025',
      nfe: 'Baixar'
    },
    {
      id: 'COB-2025-002',
      company: 'Carlos Mota',
      responsible: 'Carlos Mota',
      category: 'Autônomo',
      value: 'R$ 399',
      status: 'Pendente',
      issueDate: '05/10/2025',
      dueDate: '25/10/2025',
      nfe: null
    },
    {
      id: 'COB-2025-003',
      company: 'Hospital Vida',
      responsible: 'Letícia Nunes',
      category: 'Empresa',
      value: 'R$ 2.999',
      status: 'Pendente',
      issueDate: '10/10/2025',
      dueDate: '15/10/2025',
      nfe: null
    },
    {
      id: 'COB-2025-004',
      company: 'Ricardo Santos',
      responsible: 'Ricardo Santos',
      category: 'Autônomo',
      value: 'R$ 899',
      status: 'Pago',
      issueDate: '01/10/2025',
      dueDate: '01/11/2025',
      nfe: 'Baixar'
    },
    {
      id: 'COB-2025-005',
      company: 'Paula Costa',
      responsible: 'Paula Costa',
      category: 'Autônomo',
      value: 'R$ 399',
      status: 'Pago',
      issueDate: '20/10/2025',
      dueDate: '20/11/2025',
      nfe: 'Baixar'
    },
    {
      id: 'COB-2025-006',
      company: 'VarejoMax',
      responsible: 'Fernando Lima',
      category: 'Empresa',
      value: 'R$ 899',
      status: 'Pago',
      issueDate: '12/10/2025',
      dueDate: '12/11/2025',
      nfe: 'Baixar'
    },
    {
      id: 'COB-2025-007',
      company: 'Mariana Silva',
      responsible: 'Mariana Silva',
      category: 'Autônomo',
      value: 'R$ 399',
      status: 'Pago',
      issueDate: '05/10/2025',
      dueDate: '05/11/2025',
      nfe: 'Baixar'
    },
    {
      id: 'COB-2025-008',
      company: 'João Almeida',
      responsible: 'João Almeida',
      category: 'Autônomo',
      value: 'R$ 899',
      status: 'Inadimplente',
      issueDate: '01/10/2025',
      dueDate: '08/10/2025',
      nfe: 'Baixar'
    }
  ]

  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case 'Pago':
        return 'badge-paid'
      case 'Pendente':
        return 'badge-pending'
      case 'Inadimplente':
        return 'badge-overdue'
      default:
        return ''
    }
  }

  return (
    <div className="finance-container">
      {/* Sidebar */}
      <div className="finance-sidebar">
        <div className="sidebar-navigation">
          <div className="nav-button" onClick={() => navigate('/dashboard')}>
            <img src={imgIcon6} alt="" className="nav-icon" />
            <span>Dashboard</span>
          </div>
          <div className="nav-button" onClick={() => navigate('/usuarios')}>
            <img src={imgIcon7} alt="" className="nav-icon" />
            <span>Usuários</span>
          </div>
          <div className="nav-button active">
            <img src={imgIcon8} alt="" className="nav-icon" />
            <span>Financeiro</span>
          </div>
          <div className="nav-button">
            <img src={imgIcon9} alt="" className="nav-icon" />
            <span>Configurações</span>
          </div>
          <div className="nav-button logout-button" onClick={() => navigate('/')}>
            <svg className="nav-icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 14H3C2.46957 14 1.96086 13.7893 1.58579 13.4142C1.21071 13.0391 1 12.5304 1 12V4C1 3.46957 1.21071 2.96086 1.58579 2.58579C1.96086 2.21071 2.46957 2 3 2H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M11 11L15 8L11 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M15 8H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Sair</span>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <div className="finance-navbar">
        <div className="navbar-content">
          <div className="navbar-logo">
            <img src={imgImageErgo360} alt="ERGO 360°" />
          </div>
          <div className="navbar-center">
            <div className="navbar-search">
              <img src={imgIcon11} alt="" />
              <input type="text" placeholder="Buscar..." />
            </div>
            <div className="navbar-date-filter">
              <img src={imgIcon10} alt="" />
              <span>Últimos 30 dias</span>
              <img src={imgIcon2} alt="" />
            </div>
          </div>
          <div className="navbar-avatar">
            <img src={imgIcon12} alt="" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="finance-main">
        <div className="finance-header">
          <h1>Financeiro</h1>
          <p>Gerencie cobranças e assinaturas</p>
        </div>

        {/* KPI Cards */}
        <div className="finance-kpi-cards">
          <div className="kpi-card">
            <div className="kpi-header">
              <span>Novas assinaturas</span>
              <div className="kpi-icon-bg">
                <div className="kpi-icon">
                  <img src={imgVector1} alt="" className="kpi-icon-img" />
                </div>
              </div>
            </div>
            <div className="kpi-value">2</div>
            <div className="kpi-footer">
              <div className="kpi-trend">
                <img src={imgIcon} alt="" className="trend-icon" />
                <span className="trend-positive">50%</span>
              </div>
              <span className="kpi-period">Últimos 30 dias</span>
            </div>
            <button className="kpi-info-button">
              <img src={imgIcon1} alt="" />
            </button>
          </div>

          <div className="kpi-card">
            <div className="kpi-header">
              <span>Base atual / ARR</span>
              <div className="kpi-icon-bg">
                <div className="kpi-icon">
                  <img src={imgVector3} alt="" className="kpi-icon-img" />
                </div>
              </div>
            </div>
            <div className="kpi-value">5 / R$ 42K</div>
            <div className="kpi-footer">
              <div className="kpi-trend">
                <img src={imgIcon} alt="" className="trend-icon" />
                <span className="trend-positive">8.3%</span>
              </div>
              <span className="kpi-period">Últimos 30 dias</span>
            </div>
            <button className="kpi-info-button">
              <img src={imgIcon1} alt="" />
            </button>
          </div>

          <div className="kpi-card">
            <div className="kpi-header">
              <span>Receitas laudos extras</span>
              <div className="kpi-icon-bg">
                <div className="kpi-icon">
                  <img src={imgVector6} alt="" className="kpi-icon-img" />
                </div>
              </div>
            </div>
            <div className="kpi-value">R$ 4.850</div>
            <div className="kpi-footer">
              <div className="kpi-trend">
                <img src={imgIcon} alt="" className="trend-icon" />
                <span className="trend-positive">22.7%</span>
              </div>
              <span className="kpi-period">Últimos 30 dias</span>
            </div>
            <button className="kpi-info-button">
              <img src={imgIcon1} alt="" />
            </button>
          </div>

          <div className="kpi-card">
            <div className="kpi-header">
              <span>Conversão - Laudos</span>
              <div className="kpi-icon-bg">
                <div className="kpi-icon">
                  <img src={imgVector1} alt="" className="kpi-icon-img" />
                </div>
              </div>
            </div>
            <div className="kpi-value">18.5%</div>
            <div className="kpi-footer">
              <div className="kpi-trend">
                <img src={imgIcon} alt="" className="trend-icon" />
                <span className="trend-positive">3.2%</span>
              </div>
              <span className="kpi-period">Últimos 30 dias</span>
            </div>
            <button className="kpi-info-button">
              <img src={imgIcon1} alt="" />
            </button>
          </div>
        </div>

        {/* Filters and Actions */}
        <div className="finance-filters">
          <div className="filter-select">
            <span>Todos os status</span>
            <img src={imgIcon2} alt="" />
          </div>
          <div className="filter-select">
            <span>Todas</span>
            <img src={imgIcon2} alt="" />
          </div>
          <div className="filter-select">
            <span>Todos os produtos</span>
            <img src={imgIcon2} alt="" />
          </div>
          <div className="filter-actions">
            <button className="export-button">
              <img src={imgIcon3} alt="" />
              Baixar CSV
            </button>
            <button
              className="generate-link-button"
              onClick={() => setIsPaymentLinkModalOpen(true)}
            >
              <img src={imgIcon4} alt="" />
              Gerar link de cobrança
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="finance-table-container">
          <table className="finance-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Empresa/Responsável</th>
                <th>Categoria</th>
                <th>Valor</th>
                <th>Status</th>
                <th>Emissão</th>
                <th>Vencimento</th>
                <th>NF-e</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {charges.map((charge) => (
                <tr key={charge.id}>
                  <td className="charge-id">{charge.id}</td>
                  <td>
                    <div className="charge-company-cell">
                      <div className="charge-company">{charge.company}</div>
                      <div className="charge-responsible">{charge.responsible}</div>
                    </div>
                  </td>
                  <td>{charge.category}</td>
                  <td>{charge.value}</td>
                  <td>
                    <span className={`status-badge ${getStatusBadgeClass(charge.status)}`}>
                      {charge.status}
                    </span>
                  </td>
                  <td>{charge.issueDate}</td>
                  <td>{charge.dueDate}</td>
                  <td>
                    {charge.nfe ? (
                      <button className="nfe-button">{charge.nfe}</button>
                    ) : (
                      <span className="nfe-empty">-</span>
                    )}
                  </td>
                  <td>
                    <button className="action-icon-button">
                      <img src={imgIcon5} alt="" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Payment Link Modal */}
      <PaymentLinkModal
        isOpen={isPaymentLinkModalOpen}
        onClose={() => setIsPaymentLinkModalOpen(false)}
      />
    </div>
  )
}

