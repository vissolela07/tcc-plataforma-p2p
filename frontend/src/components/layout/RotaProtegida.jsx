import { Navigate } from 'react-router'
import { useAuth } from '../../context/AuthContext'

export function RotaProtegida({ children, papeis }) {
  const { utilizador, aCarregar, papel } = useAuth()

  if (aCarregar) {
    return (
      <div className="flex items-center justify-center h-screen bg-creme text-nogueira">
        <p className="text-xl font-semibold">A carregar...</p>
      </div>
    )
  }

  if (!utilizador) {
    return <Navigate to="/login" replace />
  }

  if (papeis && !papeis.includes(papel)) {
    return <Navigate to={`/${papel}`} replace />
  }

  return children
}