import { useCallback, useEffect, useLayoutEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './AdminSidebar.css'
import { iconUrls } from '../constants/iconUrls'

const STORAGE_KEY = 'ergo-admin-sidebar-collapsed'

function readCollapsed(): boolean {
  try {
    return localStorage.getItem(STORAGE_KEY) === '1'
  } catch {
    return false
  }
}

export default function AdminSidebar() {
  const navigate = useNavigate()
  const [collapsed, setCollapsed] = useState(readCollapsed)

  useLayoutEffect(() => {
    document.documentElement.classList.toggle('admin-sidebar-collapsed', collapsed)
    try {
      localStorage.setItem(STORAGE_KEY, collapsed ? '1' : '0')
    } catch {
      /* ignore */
    }
  }, [collapsed])

  useEffect(() => {
    return () => {
      document.documentElement.classList.remove('admin-sidebar-collapsed')
    }
  }, [])

  const toggleCollapsed = useCallback(() => {
    setCollapsed((c) => !c)
  }, [])

  const asideClass = collapsed ? 'admin-sidebar admin-sidebar--collapsed' : 'admin-sidebar'

  const navItemClassName = ({ isActive }: { isActive: boolean }) =>
    `admin-sidebar-item${isActive ? ' active' : ''}`

  const handleLogout = () => navigate('/')

  return (
    <aside className={asideClass}>
      <nav className="admin-sidebar-nav" aria-label="Principal">
        <div className="admin-sidebar-toggle-row">
          <button
            type="button"
            className="admin-sidebar-collapse-btn"
            aria-label={collapsed ? 'Expandir menu lateral' : 'Recolher menu lateral'}
            aria-expanded={!collapsed}
            title={collapsed ? 'Expandir menu' : 'Recolher menu'}
            onClick={toggleCollapsed}
          >
            {collapsed ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                  d="M9 18l6-6-6-6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                  d="M15 18l-6-6 6-6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>
        </div>

        <NavLink
          to="/dashboard"
          end
          title={collapsed ? 'Dashboard' : undefined}
          className={navItemClassName}
        >
          <img src={iconUrls.dashboard} alt="" className="admin-sidebar-icon" />
          <span className="admin-sidebar-label">Dashboard</span>
        </NavLink>

        <NavLink
          to="/usuarios"
          title={collapsed ? 'Usuários' : undefined}
          className={navItemClassName}
        >
          <img src={iconUrls.usuarios} alt="" className="admin-sidebar-icon" />
          <span className="admin-sidebar-label">Usuários</span>
        </NavLink>

        <NavLink
          to="/financeiro"
          title={collapsed ? 'Financeiro' : undefined}
          className={navItemClassName}
        >
          <img src={iconUrls.financeiro} alt="" className="admin-sidebar-icon" />
          <span className="admin-sidebar-label">Financeiro</span>
        </NavLink>

        <div
          className="admin-sidebar-item admin-sidebar-item-static"
          title={collapsed ? 'Configurações' : undefined}
        >
          <img src={iconUrls.configuracoes} alt="" className="admin-sidebar-icon" />
          <span className="admin-sidebar-label">Configurações</span>
        </div>

        <button
          type="button"
          aria-label="Sair"
          title={collapsed ? 'Sair' : undefined}
          onClick={handleLogout}
          className="admin-sidebar-item admin-sidebar-item-logout"
        >
          <svg
            className="admin-sidebar-icon"
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
          <span className="admin-sidebar-label">Sair</span>
        </button>
      </nav>
    </aside>
  )
}
