import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Users.css'
import AddPackageModal from './AddPackageModal'
import ConfirmDeleteModal from './ConfirmDeleteModal'

// Image assets from Figma
const imgImageErgo360 = "https://www.figma.com/api/mcp/asset/0f731cc3-e2b7-4a9c-bc2b-8fc879ff0d6b"
const imgIcon = "https://www.figma.com/api/mcp/asset/b40514f3-c34f-42c0-a986-54208dd54967"
const imgIcon1 = "https://www.figma.com/api/mcp/asset/c42b510c-0347-4f6a-9253-daebf43fe941"
const imgIcon2 = "https://www.figma.com/api/mcp/asset/e436e54c-c998-40cf-9598-d8e312c4f1a5"
const imgIcon3 = "https://www.figma.com/api/mcp/asset/789c4ab8-9acc-4f66-bd8e-c9b8265aef1f"
const imgIcon4 = "https://www.figma.com/api/mcp/asset/1790ac06-2bc7-4668-8d79-516a740d23bd"
const imgIcon5 = "https://www.figma.com/api/mcp/asset/6b61d0e9-b4fb-4c72-a8f1-1a1faebc84a8"
const imgIcon6 = "https://www.figma.com/api/mcp/asset/b4371036-4394-4b02-a61a-184ad7226151"
const imgIcon7 = "https://www.figma.com/api/mcp/asset/b8fe03e6-d27a-4071-b49c-bc0a72b36a84"
const imgIcon8 = "https://www.figma.com/api/mcp/asset/8e3f90ed-36b1-49b9-9e04-7ba82998d3c0"
const imgIcon9 = "https://www.figma.com/api/mcp/asset/dbc6b38d-be17-4c54-916a-6f6689aaebac"
const imgIcon10 = "https://www.figma.com/api/mcp/asset/f9d2f1b9-6e8a-4343-871d-7ad46fbe2fa8"
const imgIcon11 = "https://www.figma.com/api/mcp/asset/7c16f120-46f7-4e3d-bcbc-45504b1d870c"
const imgIcon12 = "https://www.figma.com/api/mcp/asset/1bee1bdd-f407-489c-9ba8-7fd5463c8039"
const imgIcon13 = "https://www.figma.com/api/mcp/asset/fb85fd14-79cf-4073-8fea-3dee81a88721"
const imgIcon14 = "https://www.figma.com/api/mcp/asset/3c38ae35-c99b-4335-ac1d-ffbd4b4e9bf2"
const imgIcon15 = "https://www.figma.com/api/mcp/asset/5b4d1876-b0f4-4fc3-b284-060c3c5b5861"

interface User {
  id: number
  name: string
  company?: string
  category: 'Empresa' | 'Autônomo'
  subscription: 'Ativa' | 'Em teste' | 'Pendente' | 'Inadimplente'
  lastAccess: string
  reports: number
  balance: number
  balanceTotal: number
  extras: number | string
}

export default function Users() {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [userToDelete, setUserToDelete] = useState<{ id: number; name: string } | null>(null)

  const users: User[] = [
    {
      id: 1,
      name: 'Ana Ribeiro',
      company: 'LogiTrans',
      category: 'Empresa',
      subscription: 'Ativa',
      lastAccess: '6 dias atrás',
      reports: 32,
      balance: 48,
      balanceTotal: 80,
      extras: 30
    },
    {
      id: 2,
      name: 'Carlos Mota',
      category: 'Autônomo',
      subscription: 'Em teste',
      lastAccess: '1 semana atrás',
      reports: 20,
      balance: 0,
      balanceTotal: 20,
      extras: '—'
    },
    {
      id: 3,
      name: 'Letícia Nunes',
      company: 'Hospital Vida',
      category: 'Empresa',
      subscription: 'Pendente',
      lastAccess: '4 dias atrás',
      reports: 185,
      balance: 65,
      balanceTotal: 250,
      extras: 50
    },
    {
      id: 4,
      name: 'Ricardo Santos',
      category: 'Autônomo',
      subscription: 'Ativa',
      lastAccess: '2 dias atrás',
      reports: 12,
      balance: 38,
      balanceTotal: 50,
      extras: '—'
    },
    {
      id: 5,
      name: 'Paula Costa',
      category: 'Autônomo',
      subscription: 'Ativa',
      lastAccess: '1 dia atrás',
      reports: 8,
      balance: 22,
      balanceTotal: 30,
      extras: 10
    },
    {
      id: 6,
      name: 'Fernando Lima',
      company: 'VarejoMax',
      category: 'Empresa',
      subscription: 'Ativa',
      lastAccess: '5 horas atrás',
      reports: 45,
      balance: 5,
      balanceTotal: 50,
      extras: '—'
    },
    {
      id: 7,
      name: 'Mariana Silva',
      category: 'Autônomo',
      subscription: 'Ativa',
      lastAccess: '22 horas atrás',
      reports: 15,
      balance: 5,
      balanceTotal: 20,
      extras: '—'
    },
    {
      id: 8,
      name: 'João Almeida',
      category: 'Autônomo',
      subscription: 'Inadimplente',
      lastAccess: '1 semana atrás',
      reports: 48,
      balance: 202,
      balanceTotal: 250,
      extras: 200
    }
  ]

  const getSubscriptionBadgeClass = (subscription: string) => {
    switch (subscription) {
      case 'Ativa':
        return 'badge-active'
      case 'Em teste':
        return 'badge-test'
      case 'Pendente':
        return 'badge-pending'
      case 'Inadimplente':
        return 'badge-overdue'
      default:
        return ''
    }
  }

  const getProgressBarColor = (balance: number, total: number) => {
    const percentage = (balance / total) * 100
    if (percentage >= 80) return '#00c950'
    if (percentage >= 50) return '#f0b100'
    return '#fb2c36'
  }

  const getProgressBarWidth = (balance: number, total: number) => {
    return `${(balance / total) * 100}%`
  }

  const handleOpenModal = (userId: number) => {
    setSelectedUserId(userId)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedUserId(null)
  }

  const handleAddPackage = (quantity: number) => {
    if (selectedUserId) {
      console.log(`Adicionando ${quantity} laudos para o usuário ${selectedUserId}`)
      // Aqui você pode adicionar a lógica para adicionar o pacote
    }
  }

  const handleOpenDeleteModal = (userId: number, userName: string) => {
    setUserToDelete({ id: userId, name: userName })
    setIsDeleteModalOpen(true)
  }

  const handleCloseDeleteModal = () => {
    setIsDeleteModalOpen(false)
    setUserToDelete(null)
  }

  const handleConfirmDelete = () => {
    if (userToDelete) {
      console.log(`Removendo usuário ${userToDelete.id}: ${userToDelete.name}`)
      // Aqui você pode adicionar a lógica para remover o usuário
    }
  }

  return (
    <div className="users-container">
      {/* Sidebar */}
      <div className="users-sidebar">
        <div className="sidebar-navigation">
          <div className="nav-button" onClick={() => navigate('/dashboard')}>
            <img src={imgIcon9} alt="" className="nav-icon" />
            <span>Dashboard</span>
          </div>
          <div className="nav-button active">
            <img src={imgIcon10} alt="" className="nav-icon" />
            <span>Usuários</span>
          </div>
          <div className="nav-button" onClick={() => navigate('/financeiro')}>
            <img src={imgIcon11} alt="" className="nav-icon" />
            <span>Financeiro</span>
          </div>
          <div className="nav-button">
            <img src={imgIcon12} alt="" className="nav-icon" />
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
      <div className="users-navbar">
        <div className="navbar-content">
          <div className="navbar-logo">
            <img src={imgImageErgo360} alt="ERGO 360°" />
          </div>
          <div className="navbar-center">
            <div className="navbar-search">
              <img src={imgIcon14} alt="" className="search-icon" />
              <input type="text" placeholder="Buscar..." />
            </div>
            <div className="navbar-date-filter">
              <img src={imgIcon13} alt="" />
              <span>Últimos 30 dias</span>
              <img src={imgIcon3} alt="" />
            </div>
          </div>
          <div className="navbar-avatar">
            <img src={imgIcon15} alt="" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="users-main">
        <div className="users-header">
          <div className="users-title-section">
            <h1>Usuários</h1>
            <p>Gerencie os usuários do sistema</p>
          </div>
          <div className="users-actions">
            <button className="export-button">
              <img src={imgIcon} alt="" />
              Exportar CSV
            </button>
            <button className="new-user-button">
              <img src={imgIcon1} alt="" />
              Novo Usuário
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="users-filters">
          <div className="filter-group">
            <label>Pesquisar</label>
            <div className="search-input-wrapper">
              <img src={imgIcon2} alt="" className="search-icon" />
              <input
                type="text"
                placeholder="Buscar por nome ou email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div className="filter-group">
            <label>Categoria</label>
            <div className="filter-select">
              <span>Todas</span>
              <img src={imgIcon3} alt="" />
            </div>
          </div>
          <div className="filter-group">
            <label>Status</label>
            <div className="filter-select">
              <span>Todos os status</span>
              <img src={imgIcon3} alt="" />
            </div>
          </div>
          <div className="filter-group">
            <label>Laudos</label>
            <div className="filter-select">
              <span>Todos</span>
              <img src={imgIcon3} alt="" />
            </div>
          </div>
          <div className="filter-group">
            <label>Saldo</label>
            <div className="filter-select">
              <span>Todos</span>
              <img src={imgIcon3} alt="" />
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="users-table-container">
          <table className="users-table">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Categoria</th>
                <th>Assinatura</th>
                <th>Último acesso</th>
                <th>
                  <div className="sortable-header">
                    Laudos (mês)
                    <img src={imgIcon4} alt="" />
                  </div>
                </th>
                <th>
                  <div className="sortable-header">
                    Saldo (mês)
                    <img src={imgIcon4} alt="" />
                  </div>
                </th>
                <th>
                  <div className="sortable-header">
                    Extras (mês)
                    <img src={imgIcon4} alt="" />
                  </div>
                </th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>
                    <div className="user-name-cell">
                      <div className="user-name">{user.name}</div>
                      {user.company && (
                        <div className="user-company">{user.company}</div>
                      )}
                    </div>
                  </td>
                  <td>{user.category}</td>
                  <td>
                    <span className={`subscription-badge ${getSubscriptionBadgeClass(user.subscription)}`}>
                      {user.subscription}
                    </span>
                  </td>
                  <td className="text-center">{user.lastAccess}</td>
                  <td className="text-center">{user.reports}</td>
                  <td>
                    <div className="balance-cell">
                      <div className="balance-value">{user.balance}</div>
                      <div className="balance-progress">
                        <div
                          className="progress-bar"
                          style={{
                            width: getProgressBarWidth(user.balance, user.balanceTotal),
                            backgroundColor: getProgressBarColor(user.balance, user.balanceTotal)
                          }}
                        />
                      </div>
                      <div className="balance-text">de {user.balanceTotal} no mês</div>
                    </div>
                  </td>
                  <td className="text-center">
                    {typeof user.extras === 'number' ? `+${user.extras}` : user.extras}
                  </td>
                  <td>
                    <div className="actions-cell">
                      <button
                        className="action-icon-button"
                        onClick={() => handleOpenModal(user.id)}
                        title="Adicionar pacote"
                      >
                        <img src={imgIcon5} alt="" />
                      </button>
                      <button
                        className="action-icon-button"
                        title="Editar"
                        onClick={() => navigate(`/usuarios/editar/${user.id}`)}
                      >
                        <img src={imgIcon6} alt="" />
                      </button>
                      <button
                        className="action-icon-button"
                        title="Excluir"
                        onClick={() => handleOpenDeleteModal(user.id, user.name)}
                      >
                        <img src={imgIcon7} alt="" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Package Modal */}
      <AddPackageModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onAdd={handleAddPackage}
      />

      {/* Confirm Delete Modal */}
      <ConfirmDeleteModal
        isOpen={isDeleteModalOpen}
        onClose={handleCloseDeleteModal}
        onConfirm={handleConfirmDelete}
        userName={userToDelete?.name}
      />
    </div>
  )
}

