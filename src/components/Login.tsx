import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'

// Image assets from Figma
const imgLogo = "https://www.figma.com/api/mcp/asset/d1804ed4-4f21-46db-806f-0909cc84a943"
const imgVector = "https://www.figma.com/api/mcp/asset/52cf41b5-877e-43eb-b152-55a7ce342ca8"
const imgVector1 = "https://www.figma.com/api/mcp/asset/e314bf99-6f1e-4f63-8831-06aa04db624b"

export default function Login() {
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const isFormValid = email.trim() !== '' && password.trim() !== ''

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!isFormValid) return
    // Handle login logic here
    console.log('Login attempt:', { email, password, rememberMe })
  }

  return (
    <div className="login-container">
      <div className="login-background">
        <div className="login-content">
          <div className="login-card-wrapper">
            <div className="login-logo">
              <img src={imgLogo} alt="ERGO 360° Logo" />
            </div>
            <div className="login-card">
              <div className="login-card-header">
                <h1 className="login-title">Entrar</h1>
                <p className="login-description">
                  Digite seu email e senha para acessar o sistema
                </p>
              </div>
              <form className="login-form" onSubmit={handleSubmit}>
                <div className="form-field">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="form-input"
                    placeholder="seu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="password" className="form-label">
                    Senha
                  </label>
                  <div className="password-input-wrapper">
                    <input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      className="form-input password-input"
                      placeholder="Digite sua senha"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                      type="button"
                      className="password-toggle"
                      onClick={() => setShowPassword(!showPassword)}
                      aria-label={showPassword ? 'Ocultar senha' : 'Mostrar senha'}
                    >
                      <div className="eye-icon">
                        <div className="eye-icon-vector">
                          <img src={imgVector} alt="" />
                        </div>
                        <div className="eye-icon-vector">
                          <img src={imgVector1} alt="" />
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
                <div className="form-options">
                  <label className="remember-me">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                    />
                    <span>Lembrar de mim</span>
                  </label>
                  <button
                    type="button"
                    className="forgot-password"
                    onClick={() => navigate('/recuperar-acesso')}
                  >
                    Esqueci minha senha
                  </button>
                </div>
                <button
                  type="submit"
                  className={`login-button ${isFormValid ? 'login-button-enabled' : ''}`}
                  disabled={!isFormValid}
                >
                  Entrar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

