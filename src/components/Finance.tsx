import { useNavigate } from 'react-router-dom'
import './Finance.css'

// Image assets from Figma
const imgImageErgo360 = "https://www.figma.com/api/mcp/asset/8a0a9ebd-6ff4-47e4-abd0-d7e75778451d"
const imgVector = "https://www.figma.com/api/mcp/asset/6c4a7113-65ea-4b93-9083-706b6e8fea14"
const imgVector1 = "https://www.figma.com/api/mcp/asset/bcee4747-2231-489f-a579-4766c05be084"
const imgIcon = "https://www.figma.com/api/mcp/asset/d00247be-9a97-4bce-ba9a-777b9a396306"
const imgIcon1 = "https://www.figma.com/api/mcp/asset/e5a843dd-92f4-4c1c-ad34-3dc170d3728f"
const imgVector2 = "https://www.figma.com/api/mcp/asset/a873c6b4-00d4-420b-87da-ef9f970df58a"
const imgVector3 = "https://www.figma.com/api/mcp/asset/14663b83-8fc6-4f78-b030-c50b2f1b1999"
const imgVector4 = "https://www.figma.com/api/mcp/asset/cba9b76c-7300-44f6-8288-111da15bfb1c"
const imgVector5 = "https://www.figma.com/api/mcp/asset/fe135c4e-2f5b-4596-a598-a490076c28ab"
const imgVector6 = "https://www.figma.com/api/mcp/asset/e342dd02-48e1-4579-99a0-6f1b093c941e"
const imgIcon2 = "https://www.figma.com/api/mcp/asset/978037bc-d475-4d87-af13-c296a6451567"
const imgIcon3 = "https://www.figma.com/api/mcp/asset/7f486e29-6ff0-48eb-8c62-26412e18a1da"
const imgIcon4 = "https://www.figma.com/api/mcp/asset/3114de36-ad34-4857-a1e0-4e1e830d1a57"
const imgIcon5 = "https://www.figma.com/api/mcp/asset/0c55e3ee-5f96-4e67-97ad-cd54f69bc0e2"
const imgIcon6 = "https://www.figma.com/api/mcp/asset/33bda385-a7d5-4d4f-a8d8-cac32f0fe385"
const imgIcon7 = "https://www.figma.com/api/mcp/asset/c72b947c-16db-4b2f-ad6f-774ba5f96c42"
const imgIcon8 = "https://www.figma.com/api/mcp/asset/03979208-2ad1-4456-92fd-29251f914272"
const imgIcon9 = "https://www.figma.com/api/mcp/asset/51aba376-635b-4837-aa79-cb9b943af0ee"
const imgIcon10 = "https://www.figma.com/api/mcp/asset/151b24aa-1100-42ab-9831-155e6ee8a26e"
const imgIcon11 = "https://www.figma.com/api/mcp/asset/b522a786-c1c2-45cd-92ec-a24d3fd1b0c9"
const imgIcon12 = "https://www.figma.com/api/mcp/asset/bb0f44e4-b4ea-4d07-8f2f-90ab7665338a"

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
                  <img src={imgVector} alt="" className="kpi-icon-img" />
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
                  <img src={imgVector2} alt="" className="kpi-icon-img" />
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
                  <img src={imgVector4} alt="" className="kpi-icon-img" />
                  <img src={imgVector5} alt="" className="kpi-icon-img" />
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
                  <img src={imgVector} alt="" className="kpi-icon-img" />
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
            <button className="generate-link-button">
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
    </div>
  )
}

