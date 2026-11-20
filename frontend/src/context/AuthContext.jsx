import { createContext, useContext, useState, useEffect } from 'react'
import { api } from '../services/api'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [utilizador, setUtilizador] = useState(null)
  const [token, setToken] = useState(localStorage.getItem('token'))
  const [aCarregar, setACarregar] = useState(true)

  useEffect(() => {
    async function carregarUtilizador() {
      if (!token) {
        setACarregar(false)
        return
      }

      try {
        const dados = await api.get('/auth/eu')
        setUtilizador(dados.utilizador || dados)
      } catch (erro) {
        localStorage.removeItem('token')
        setToken(null)
        setUtilizador(null)
      } finally {
        setACarregar(false)
      }
    }

    carregarUtilizador()
  }, [token])

  async function entrar(email, senha) {
    const resposta = await api.post('/auth/login', { email, senha })
    
    const novoToken = resposta.token
    const dadosUtilizador = resposta.utilizador

    localStorage.setItem('token', novoToken)
    setToken(novoToken)
    setUtilizador(dadosUtilizador)

    return dadosUtilizador
  }

  function sair() {
    localStorage.removeItem('token')
    setToken(null)
    setUtilizador(null)
    window.location.href = '/login'
  }

  const valor = {
    utilizador,
    token,
    papel: utilizador?.papel || null,
    aCarregar,
    entrar,
    sair,
  }

  return (
    <AuthContext.Provider value={valor}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}