import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './EditUser.css'
import ConfirmDeleteModal from './ConfirmDeleteModal'

// Image assets from Figma
const imgImageErgo360 = "https://www.figma.com/api/mcp/asset/9e49d523-2454-4979-9cbe-3cc8aa89efa3"
const imgIcon = "https://www.figma.com/api/mcp/asset/f0379232-868d-4d50-bc01-9eddf179bcd7"
const imgIcon1 = "https://www.figma.com/api/mcp/asset/80d311a9-5df6-4059-98f9-3a9052908769"
const imgIcon2 = "https://www.figma.com/api/mcp/asset/d875e4a9-2c80-414f-83d6-ca58a6ac918a"
const imgIcon3 = "https://www.figma.com/api/mcp/asset/20325668-a70e-4519-8ad4-e35ef3c44c09"
const imgIcon4 = "https://www.figma.com/api/mcp/asset/6e31ba10-4fa7-4edb-8a2c-046996c91056"
const imgIcon5 = "https://www.figma.com/api/mcp/asset/7cea5efc-827e-484c-8293-be7ad1d53e1c"
const imgIcon6 = "https://www.figma.com/api/mcp/asset/7a8ff2eb-420b-4afb-b852-265e742e4e6c"
const imgIcon7 = "https://www.figma.com/api/mcp/asset/1900fa1d-728b-4bad-8912-0ed442246af9"
const imgIcon8 = "https://www.figma.com/api/mcp/asset/731844f4-99c9-4eff-8a89-0251757b701e"
const imgIcon9 = "https://www.figma.com/api/mcp/asset/38d1671d-9962-4148-b93c-3eb2cf2f4819"

// Mock data for different users
const mockUsers = {
  '1': {
    name: 'Ana Ribeiro',
    email: 'ana@logitrans.com.br',
    phone: '(11) 98765-4321',
    category: 'Empresa' as const,
    company: 'LogiTrans',
    isActive: true,
    subscriptionStatus: 'Ativa',
    packageLaudos: '50 laudos',
    seats: '3',
    renewal: '10/11/2025',
    paymentMethod: 'Cartão',
    extrasTotal: 30,
    extrasHistory: [
      { date: '05/10/2025', quantity: '+20', value: 'R$ 180.00' },
      { date: '12/10/2025', quantity: '+10', value: 'R$ 95.00' }
    ]
  },
  '2': {
    name: 'Carlos Mota',
    email: 'carlos@gmail.com',
    phone: '(51) 99876-5432',
    category: 'Autônomo' as const,
    company: '',
    isActive: true,
    subscriptionStatus: 'Em teste',
    packageLaudos: '20 laudos',
    seats: '1',
    renewal: '25/10/2025',
    paymentMethod: 'Boleto',
    extrasTotal: 0,
    extrasHistory: []
  }
}

export default function EditUser() {
  const navigate = useNavigate()
  const { id } = useParams<{ id: string }>()
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)

  // Get user data from mock or default
  const userData = id && mockUsers[id as keyof typeof mockUsers]
    ? mockUsers[id as keyof typeof mockUsers]
    : mockUsers['1']

  const [formData, setFormData] = useState({
    name: userData.name,
    email: userData.email,
    phone: userData.phone,
    category: userData.category,
    company: userData.company,
    isActive: userData.isActive,
    subscriptionStatus: userData.subscriptionStatus,
    packageLaudos: userData.packageLaudos,
    seats: userData.seats,
    renewal: userData.renewal,
    paymentMethod: userData.paymentMethod
  })

  const [extrasHistory, setExtrasHistory] = useState(userData.extrasHistory)
  const [extrasTotal, setExtrasTotal] = useState(userData.extrasTotal)

  // Update form data when user changes
  useEffect(() => {
    if (id && mockUsers[id as keyof typeof mockUsers]) {
      const user = mockUsers[id as keyof typeof mockUsers]
      setFormData({
        name: user.name,
        email: user.email,
        phone: user.phone,
        category: user.category,
        company: user.company,
        isActive: user.isActive,
        subscriptionStatus: user.subscriptionStatus,
        packageLaudos: user.packageLaudos,
        seats: user.seats,
        renewal: user.renewal,
        paymentMethod: user.paymentMethod
      })
      setExtrasHistory(user.extrasHistory)
      setExtrasTotal(user.extrasTotal)
    }
  }, [id])

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSave = () => {
    console.log('Salvando dados:', formData)
    // Aqui você pode adicionar a lógica para salvar
  }

  const handleSuspend = () => {
    console.log('Suspender usuário')
    // Aqui você pode adicionar a lógica para suspender
  }

  const handleOpenDeleteModal = () => {
    setIsDeleteModalOpen(true)
  }

  const handleCloseDeleteModal = () => {
    setIsDeleteModalOpen(false)
  }

  const handleConfirmDelete = () => {
    console.log('Removendo usuário')
    // Aqui você pode adicionar a lógica para remover
    navigate('/usuarios')
  }

  return (
    <div className="edit-user-container">
      {/* Sidebar */}
      <div className="edit-user-sidebar">
        <div className="sidebar-navigation">
          <div className="nav-button" onClick={() => navigate('/dashboard')}>
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
      <div className="edit-user-navbar">
        <div className="navbar-content">
          <div className="navbar-logo">
            <img src={imgImageErgo360} alt="ERGO 360°" />
          </div>
          <div className="navbar-center">
            <div className="navbar-search">
              <img src={imgIcon8} alt="" />
              <input type="text" placeholder="Buscar..." />
            </div>
            <div className="navbar-date-filter">
              <img src={imgIcon7} alt="" />
              <span>Últimos 30 dias</span>
              <img src={imgIcon2} alt="" />
            </div>
          </div>
          <div className="navbar-avatar">
            <img src={imgIcon9} alt="" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="edit-user-main">
        <div className="edit-user-header">
          <button className="back-button" onClick={() => navigate('/usuarios')}>
            <img src={imgIcon} alt="" />
            Voltar
          </button>
          <div className="header-title">
            <h1>Editar Usuário</h1>
            <p>Gerencie os dados e assinatura do usuário</p>
          </div>
        </div>

        <div className="edit-user-content">
          <div className="edit-user-left">
            {/* Dados Gerais Card */}
            <div className="info-card">
              <h3 className="card-title">Dados gerais</h3>
              <div className="card-content">
                <div className="form-group">
                  <label>
                    Nome <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label>
                    Email <span className="required">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label>Telefone</label>
                  <input
                    type="text"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label>Categoria</label>
                  <div className="radio-group">
                    <label className="radio-option">
                      <input
                        type="radio"
                        name="category"
                        value="Empresa"
                        checked={formData.category === 'Empresa'}
                        onChange={(e) => handleInputChange('category', e.target.value)}
                      />
                      <span>Empresa</span>
                    </label>
                    <label className="radio-option">
                      <input
                        type="radio"
                        name="category"
                        value="Autônomo"
                        checked={formData.category === 'Autônomo'}
                        onChange={(e) => handleInputChange('category', e.target.value)}
                      />
                      <span>Autônomo</span>
                    </label>
                  </div>
                </div>

                {formData.category === 'Empresa' && (
                  <div className="form-group">
                    <label>Empresa</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                    />
                  </div>
                )}

                <div className="form-group toggle-group">
                  <div className="toggle-label">
                    <label>Ativo</label>
                    <p>Usuário pode acessar o sistema</p>
                  </div>
                  <label className="toggle-switch">
                    <input
                      type="checkbox"
                      checked={formData.isActive}
                      onChange={(e) => handleInputChange('isActive', e.target.checked)}
                    />
                    <span className="toggle-slider"></span>
                  </label>
                </div>
              </div>
            </div>

            {/* Assinatura Card */}
            <div className="info-card">
              <h3 className="card-title">Assinatura</h3>
              <div className="card-content">
                <div className="form-group">
                  <label>Status</label>
                  <div className="select-wrapper">
                    <select
                      value={formData.subscriptionStatus}
                      onChange={(e) => handleInputChange('subscriptionStatus', e.target.value)}
                    >
                      <option>Ativa</option>
                      <option>Em teste</option>
                      <option>Pendente</option>
                      <option>Inadimplente</option>
                    </select>
                    <img src={imgIcon2} alt="" className="select-arrow" />
                  </div>
                </div>

                <div className="divider"></div>

                <div className="extras-section">
                  <div className="extras-header">
                    <h4>Laudos extras (mês)</h4>
                    <p>Total de extras: +{extrasTotal}</p>
                  </div>
                  {extrasHistory.length > 0 ? (
                    <div className="extras-table">
                      <div className="extras-table-header">
                        <div>Data</div>
                        <div>Quantidade</div>
                        <div>Valor (R$)</div>
                      </div>
                      {extrasHistory.map((item, index) => (
                        <div key={index} className="extras-table-row">
                          <div>{item.date}</div>
                          <div className="text-right">{item.quantity}</div>
                          <div className="text-right">{item.value}</div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="extras-empty">
                      <p>Nenhum laudo extra adicionado neste mês</p>
                    </div>
                  )}
                </div>

                <div className="divider"></div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Pacote de laudos/mês</label>
                    <div className="select-wrapper">
                      <select
                        value={formData.packageLaudos}
                        onChange={(e) => handleInputChange('packageLaudos', e.target.value)}
                      >
                        <option>50 laudos</option>
                        <option>100 laudos</option>
                        <option>200 laudos</option>
                      </select>
                      <img src={imgIcon2} alt="" className="select-arrow" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Assentos</label>
                    <input
                      type="text"
                      value={formData.seats}
                      onChange={(e) => handleInputChange('seats', e.target.value)}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Renovação</label>
                  <input
                    type="text"
                    value={formData.renewal}
                    onChange={(e) => handleInputChange('renewal', e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label>Método de pagamento</label>
                  <div className="select-wrapper">
                    <select
                      value={formData.paymentMethod}
                      onChange={(e) => handleInputChange('paymentMethod', e.target.value)}
                    >
                      <option>Cartão</option>
                      <option>Boleto</option>
                      <option>PIX</option>
                    </select>
                    <img src={imgIcon2} alt="" className="select-arrow" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Ações Card */}
          <div className="actions-card">
            <h3 className="card-title">Ações</h3>
            <div className="actions-content">
              <button className="action-button primary" onClick={handleSave}>
                Salvar
              </button>
              <div className="divider"></div>
              <button className="action-button secondary" onClick={handleSuspend}>
                Suspender
              </button>
              <button className="action-button danger" onClick={handleOpenDeleteModal}>
                Remover
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Confirm Delete Modal */}
      <ConfirmDeleteModal
        isOpen={isDeleteModalOpen}
        onClose={handleCloseDeleteModal}
        onConfirm={handleConfirmDelete}
        userName={formData.name}
      />
    </div>
  )
}

