import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Dashboard.css'
import LineChart from './LineChart'
import BarChart from './BarChart'
import AddPackageModal from './AddPackageModal'
import imgImageErgo360 from '../../images/logo_interno.png'
import imgIcon3 from '../../images/dashboard.svg'
import imgIcon4 from '../../images/usuarios.svg'
import imgIcon5 from '../../images/financeiro.svg'
import imgIcon6 from '../../images/configuracoes.svg'
import imgIcon from '../../images/pacote.svg'
import imgIcon1 from '../../images/corrente.svg'
import imgIcon2 from '../../images/corrente.svg'
import imgIcon9 from '../../images/lupa.svg'
import imgIcon7 from '../../images/calendario.svg'
import imgIcon8 from '../../images/seta_baixo.svg'
import imgIcon10 from '../../images/pessoa.svg'

// Image assets from Figma

export default function Dashboard() {
  const [selectedCategory, setSelectedCategory] = useState<'Empresa' | 'Autônomo'>('Empresa')
  const navigate = useNavigate()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null)

  // Dados para categoria Empresa
  const empresaLineData = [
    { date: '20/09', value: 28 },
    { date: '23/09', value: 32 },
    { date: '26/09', value: 24 },
    { date: '29/09', value: 28 },
    { date: '02/10', value: 42 },
    { date: '05/10', value: 38 },
    { date: '08/10', value: 35 },
    { date: '11/10', value: 40 },
    { date: '14/10', value: 43 },
    { date: '17/10', value: 45 },
  ]

  const empresaBarData = [
    { date: '20/09', value: 0 },
    { date: '23/09', value: 0 },
    { date: '26/09', value: 0 },
    { date: '29/09', value: 0 },
    { date: '02/10', value: 20 },
    { date: '05/10', value: 20 },
    { date: '08/10', value: 48 },
    { date: '11/10', value: 10 },
    { date: '14/10', value: 0 },
    { date: '17/10', value: 0 },
  ]

  // Dados para categoria Autônomo
  const autonomoLineData = [
    { date: '20/09', value: 6 },
    { date: '23/09', value: 8 },
    { date: '26/09', value: 5 },
    { date: '29/09', value: 7 },
    { date: '02/10', value: 12 },
    { date: '05/10', value: 10 },
    { date: '08/10', value: 9 },
    { date: '11/10', value: 11 },
    { date: '14/10', value: 13 },
    { date: '17/10', value: 15 },
  ]

  const autonomoBarData = [
    { date: '20/09', value: 0 },
    { date: '23/09', value: 0 },
    { date: '26/09', value: 0 },
    { date: '29/09', value: 0 },
    { date: '02/10', value: 50 },
    { date: '05/10', value: 50 },
    { date: '08/10', value: 120 },
    { date: '11/10', value: 25 },
    { date: '14/10', value: 0 },
    { date: '17/10', value: 0 },
  ]

  const handleOpenModal = (userName: string) => {
    setSelectedUserId(userName)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedUserId(null)
  }

  const handleAddPackage = (quantity: number) => {
    if (selectedUserId) {
      console.log(`Adicionando ${quantity} laudos para ${selectedUserId}`)
      // Aqui você pode adicionar a lógica para adicionar o pacote
    }
  }

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="dashboard-sidebar">
        <div className="sidebar-navigation">
          <div className="nav-button active">
            <img src={imgIcon3} alt="" className="nav-icon" />
            <span>Dashboard</span>
          </div>
          <div className="nav-button" onClick={() => navigate('/usuarios')}>
            <img src={imgIcon4} alt="" className="nav-icon" />
            <span>Usuários</span>
          </div>
          <div className="nav-button" onClick={() => navigate('/financeiro')}>
            <img src={imgIcon5} alt="" className="nav-icon" />
            <span>Financeiro</span>
          </div>
          <div className="nav-button">
            <img src={imgIcon6} alt="" className="nav-icon" />
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
      <div className="dashboard-navbar">
        <div className="navbar-content">
          <div className="navbar-logo">
            <img src={imgImageErgo360} alt="ERGO 360°" />
          </div>
          <div className="navbar-center">
            <div className="navbar-search">
              <img src={imgIcon9} alt="" className="search-icon" />
              <input type="text" placeholder="Buscar..." />
            </div>
            <div className="navbar-date-filter">
              <img src={imgIcon7} alt="" />
              <span>Últimos 30 dias</span>
              <img src={imgIcon8} alt="" />
            </div>
          </div>
          <div className="navbar-avatar">
            <img src={imgIcon10} alt="" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="dashboard-main">
        <div className="dashboard-header">
          <h1>Dashboard</h1>
          <p>Visão geral do sistema</p>
        </div>

        {/* KPI Cards */}
        <div className="dashboard-kpis">
          <div className="kpi-card">
            <div className="kpi-header">
              <span>Laudos (30 dias)</span>
              <div className="kpi-icon-bg">
                <div className="kpi-icon">📄</div>
              </div>
            </div>
            <div className="kpi-value">365</div>
            <div className="kpi-footer">
              <div className="kpi-trend">
                <span className="trend-up">↑</span>
                <span className="trend-positive">18.5%</span>
              </div>
              <span className="kpi-period">Últimos 30 dias</span>
            </div>
          </div>

          <div className="kpi-card">
            <div className="kpi-header">
              <span>Usuários ativos (30 dias)</span>
              <div className="kpi-icon-bg">
                <div className="kpi-icon">👥</div>
              </div>
            </div>
            <div className="kpi-value">11</div>
            <div className="kpi-footer">
              <div className="kpi-trend">
                <span className="trend-up">↑</span>
                <span className="trend-positive">12.5%</span>
              </div>
              <span className="kpi-period">Últimos 30 dias</span>
            </div>
          </div>

          <div className="kpi-card split">
            <div className="split-kpi left">
              <span className="split-label">Próximos</span>
              <span className="split-value warning">1</span>
            </div>
            <div className="split-kpi right">
              <span className="split-label">No limite</span>
              <span className="split-value danger">1</span>
            </div>
          </div>

          <div className="kpi-card">
            <div className="kpi-header">
              <span>Receita de laudos extras (30 dias)</span>
              <div className="kpi-icon-bg">
                <div className="kpi-icon">💰</div>
              </div>
            </div>
            <div className="kpi-value">R$ 2.390</div>
            <div className="kpi-footer">
              <div className="kpi-trend">
                <span className="trend-up">↑</span>
                <span className="trend-positive">22.7%</span>
              </div>
              <span className="kpi-period">Últimos 30 dias</span>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="dashboard-category-filter">
          <div className="category-header">
            <h3>Atividade por categoria</h3>
            <p>Visualize os dados por tipo de usuário</p>
          </div>
          <div className="category-selector">
            <span>Categoria:</span>
            <div className="category-tabs">
              <button
                className={`category-tab ${selectedCategory === 'Empresa' ? 'active' : ''}`}
                onClick={() => setSelectedCategory('Empresa')}
              >
                Empresa
              </button>
              <button
                className={`category-tab ${selectedCategory === 'Autônomo' ? 'active' : ''}`}
                onClick={() => setSelectedCategory('Autônomo')}
              >
                Autônomo
              </button>
            </div>
          </div>
        </div>

        {/* Charts */}
        <div className="dashboard-charts">
          <div className="chart-card">
            <LineChart
              title="Laudos por dia (30 dias)"
              data={selectedCategory === 'Empresa' ? empresaLineData : autonomoLineData}
              yAxisDomain={selectedCategory === 'Empresa' ? [0, 60] : [0, 24]}
              yAxisTicks={selectedCategory === 'Empresa' ? [0, 15, 30, 45, 60] : [0, 6, 12, 18, 24]}
            />
          </div>
          <div className="chart-card">
            <BarChart
              title="Extras por dia (30 dias)"
              data={selectedCategory === 'Empresa' ? empresaBarData : autonomoBarData}
              yAxisDomain={selectedCategory === 'Empresa' ? [0, 60] : [0, 200]}
              yAxisTicks={selectedCategory === 'Empresa' ? [0, 15, 30, 45, 60] : [0, 50, 100, 150, 200]}
            />
          </div>
        </div>

        {/* Tables */}
        <div className="dashboard-tables">
          <div className="table-card">
            <h3>Usuários no limite (mês)</h3>
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th>Categoria</th>
                    <th>Saldo (mês)</th>
                    <th>Ações</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Carlos Mota</td>
                    <td>Autônomo</td>
                    <td className="text-danger">0</td>
                    <td>
                      <button
                        className="action-button"
                        onClick={() => handleOpenModal('Carlos Mota')}
                      >
                        <img src={imgIcon} alt="" />
                        Adicionar pacote
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>
                        <div>Fernando Lima</div>
                        <div className="sub-text">VarejoMax</div>
                      </div>
                    </td>
                    <td>Empresa</td>
                    <td className="text-warning">5</td>
                    <td>
                      <button
                        className="action-button"
                        onClick={() => handleOpenModal('Fernando Lima')}
                      >
                        <img src={imgIcon} alt="" />
                        Adicionar pacote
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="table-card">
            <h3>Renovações em 30 dias</h3>
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Cliente</th>
                    <th>Data</th>
                    <th>Valor</th>
                    <th>Método</th>
                    <th>Ações</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Carlos Mota</td>
                    <td>25/10/2025</td>
                    <td>R$ 399</td>
                    <td>boleto</td>
                    <td>
                      <button className="action-button">
                        <img src={imgIcon1} alt="" />
                        Gerar link
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>Ricardo Santos</td>
                    <td>01/11/2025</td>
                    <td>R$ 899</td>
                    <td>cartão</td>
                    <td>
                      <button className="action-button">
                        <img src={imgIcon2} alt="" />
                        Gerar link
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>Mariana Silva</td>
                    <td>05/11/2025</td>
                    <td>R$ 399</td>
                    <td>cartão</td>
                    <td>
                      <button className="action-button">
                        <img src={imgIcon2} alt="" />
                        Gerar link
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>
                        <div>Ana Ribeiro</div>
                        <div className="sub-text">LogiTrans</div>
                      </div>
                    </td>
                    <td>10/11/2025</td>
                    <td>R$ 899</td>
                    <td>cartão</td>
                    <td>
                      <button className="action-button">
                        <img src={imgIcon2} alt="" />
                        Gerar link
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>
                        <div>Fernando Lima</div>
                        <div className="sub-text">VarejoMax</div>
                      </div>
                    </td>
                    <td>12/11/2025</td>
                    <td>R$ 899</td>
                    <td>cartão</td>
                    <td>
                      <button className="action-button">
                        <img src={imgIcon2} alt="" />
                        Gerar link
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Add Package Modal */}
      <AddPackageModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onAdd={handleAddPackage}
      />
    </div>
  )
}

