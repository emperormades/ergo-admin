import { useNavigate } from 'react-router-dom'
import './RequestSent.css'

const LOGO_URL =
  'https://ixvxepakkdqeaaodseel.supabase.co/storage/v1/object/public/ergo-admin/auth/logo_inicial.png'

const CHECK_ICON_URL =
  'https://ixvxepakkdqeaaodseel.supabase.co/storage/v1/object/public/ergo-admin/auth/check.svg'

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
              <img src={LOGO_URL} alt="ERGO 360° Logo" />
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
                    <img src={CHECK_ICON_URL} alt="Success icon" />
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
          </div>
        </div>
      </div>
    </div>
  )
}

