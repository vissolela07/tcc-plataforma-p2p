import { useState } from 'react'
import { useNavigate } from 'react-router'
import { useAuth } from '../../context/AuthContext'

function Login() {
  const { entrar } = useAuth()
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [erro, setErro] = useState('')
  const [aSubmeter, setASubmeter] = useState(false)

  async function lidarComSubmissao(evento) {
    evento.preventDefault()
    setErro('')
    setASubmeter(true)

    try {
      const dadosUtilizador = await entrar(email, senha)
      const papel = dadosUtilizador?.papel

      if (papel === 'aluno') {
        navigate('/aluno', { replace: true })
      } else if (papel === 'professor') {
        navigate('/professor', { replace: true })
      } else if (papel === 'administrador') {
        navigate('/admin', { replace: true })
      } else {
        setErro('Papel de utilizador não reconhecido.')
      }
    } catch (err) {
      setErro(err.message || 'Não foi possível iniciar sessão.')
    } finally {
      setASubmeter(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-creme text-nogueira p-4">
      <form
        onSubmit={lidarComSubmissao}
        className="w-full max-w-sm border border-nogueira rounded p-6 flex flex-col gap-4"
      >
        <h1 className="text-2xl font-bold">Iniciar sessão</h1>

        {erro && (
          <p className="text-sm text-terracota font-medium">
            {erro}
          </p>
        )}

        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-3 py-2 rounded border border-nogueira bg-creme"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="senha" className="text-sm font-medium">
            Senha
          </label>
          <input
            id="senha"
            type="password"
            required
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className="px-3 py-2 rounded border border-nogueira bg-creme"
          />
        </div>

        <button
          type="submit"
          disabled={aSubmeter}
          className="mt-2 px-4 py-2 rounded bg-terracota text-creme font-semibold disabled:opacity-60"
        >
          {aSubmeter ? 'A entrar...' : 'Entrar'}
        </button>
      </form>
    </div>
  )
}

export default Login