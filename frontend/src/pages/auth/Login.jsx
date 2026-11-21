import { useState } from 'react'
import { useNavigate } from 'react-router'
import { useAuth } from '../../context/AuthContext'
import Alerta from '../../components/ui/Alerta'
import Botao from '../../components/ui/Botao'
import CampoTexto from '../../components/ui/CampoTexto'

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

    if (!email || !senha) {
      setErro('Preencha o email e a senha.')
      return
    }

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
        className="w-full max-w-sm border border-nogueira/20 bg-white rounded-lg p-6 flex flex-col gap-4"
      >
        <h1 className="text-2xl font-bold">Iniciar sessão</h1>

        {erro && <Alerta tipo="erro" mensagem={erro} />}

        <CampoTexto
          rotulo="Email"
          nome="email"
          tipo="email"
          valor={email}
          aoMudar={setEmail}
        />

        <CampoTexto
          rotulo="Senha"
          nome="senha"
          tipo="password"
          valor={senha}
          aoMudar={setSenha}
        />

        <Botao
          texto={aSubmeter ? 'A entrar...' : 'Entrar'}
          tipo="submit"
          desativado={aSubmeter}
        />
      </form>
    </div>
  )
}

export default Login