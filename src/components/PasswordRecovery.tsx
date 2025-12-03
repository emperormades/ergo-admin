import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './PasswordRecovery.css'

// Image assets from Figma
const imgLogo = "https://www.figma.com/api/mcp/asset/bb5f27b6-6888-46ae-9d22-232a0c260aeb"

export default function PasswordRecovery() {
  const [email, setEmail] = useState('')
  const navigate = useNavigate()

  const isFormValid = email.trim() !== ''

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!isFormValid) return
    // Handle password recovery logic here
    console.log('Password recovery request:', { email })
    // In a real app, you would send a recovery email here
    // Navigate to success page
    navigate('/solicitacao-enviada')
  }

  const handleBackToLogin = () => {
    navigate('/')
  }

  return (
    <div className="password-recovery-container">
      <div className="password-recovery-background">
        <div className="password-recovery-content">
          <div className="password-recovery-card-wrapper">
            <div className="password-recovery-logo">
              <img src={imgLogo} alt="ERGO 360° Logo" />
            </div>
            <div className="password-recovery-card">
              <div className="password-recovery-card-header">
                <h1 className="password-recovery-title">Recuperar acesso</h1>
                <p className="password-recovery-description">
                  Digite seu email para receber um link de recuperação
                </p>
              </div>
              <form className="password-recovery-form" onSubmit={handleSubmit}>
                <div className="form-field">
                  <label htmlFor="recovery-email" className="form-label">
                    Email
                  </label>
                  <input
                    id="recovery-email"
                    type="email"
                    className="form-input"
                    placeholder="seu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  className={`recovery-button ${isFormValid ? 'recovery-button-enabled' : ''}`}
                  disabled={!isFormValid}
                >
                  Enviar link
                </button>
                <button
                  type="button"
                  className="back-to-login-button"
                  onClick={handleBackToLogin}
                >
                  Voltar para o login
                </button>
              </form>
            </div>
            <div className="password-recovery-footer">
              <p>Protótipo — navegação simulada</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

