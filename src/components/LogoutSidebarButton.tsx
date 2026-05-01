import { useNavigate } from 'react-router-dom'

export default function LogoutSidebarButton() {
  const navigate = useNavigate()

  return (
    <button
      type="button"
      className="nav-button nav-button-logout"
      aria-label="Sair"
      onClick={() => navigate('/')}
    >
      <svg
        className="nav-icon"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
        />
      </svg>
      <span>Sair</span>
    </button>
  )
}
