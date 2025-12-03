import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import PasswordRecovery from './components/PasswordRecovery'
import RequestSent from './components/RequestSent'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/recuperar-acesso" element={<PasswordRecovery />} />
        <Route path="/solicitacao-enviada" element={<RequestSent />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

