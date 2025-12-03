import { useNavigate } from 'react-router-dom'
import './RequestSent.css'

// Image assets from Figma
const imgLogo = "https://www.figma.com/api/mcp/asset/9c2b1d1b-86a0-4424-9d75-bccc444e2ef6"
const imgIcon = "https://www.figma.com/api/mcp/asset/eaae0dc9-ae6a-4caf-a429-3f2eb5a4962f"

export default function RequestSent() {
  const navigate = useNavigate()

  const handleBackToLogin = () => {
    navigate('/')
  }

  return (
    <div className="request-sent-container">
      <div className="request-sent-background">
        <div className="request-sent-content">
          <div className="request-sent-card-wrapper">
            <div className="request-sent-logo">
              <img src={imgLogo} alt="ERGO 360° Logo" />
            </div>
            <div className="request-sent-card">
              <div className="request-sent-card-header">
                <h1 className="request-sent-title">Recuperar acesso</h1>
                <p className="request-sent-description">
                  Solicitação enviada com sucesso
                </p>
              </div>
              <div className="request-sent-content-area">
                <div className="success-alert">
                  <div className="success-icon">
                    <img src={imgIcon} alt="Success icon" />
                  </div>
                  <p className="success-message">
                    Se o email existir, enviaremos um link para redefinir sua senha.
                  </p>
                </div>
                <button
                  type="button"
                  className="back-to-login-button"
                  onClick={handleBackToLogin}
                >
                  Voltar para o login
                </button>
              </div>
            </div>
            <div className="request-sent-footer">
              <p>Protótipo — navegação simulada</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

