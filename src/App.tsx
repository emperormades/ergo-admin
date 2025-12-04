import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import PasswordRecovery from './components/PasswordRecovery'
import RequestSent from './components/RequestSent'
import Dashboard from './components/Dashboard'
import Users from './components/Users'
import EditUser from './components/EditUser'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/recuperar-acesso" element={<PasswordRecovery />} />
        <Route path="/solicitacao-enviada" element={<RequestSent />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/usuarios" element={<Users />} />
        <Route path="/usuarios/editar/:id" element={<EditUser />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

