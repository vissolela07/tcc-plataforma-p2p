import { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { useAuth } from '../../context/AuthContext'
import { api } from '../../services/api'
import Alerta from '../../components/ui/Alerta'
import Botao from '../../components/ui/Botao'
import CampoTexto from '../../components/ui/CampoTexto'

function Registo() {
  const { entrar } = useAuth()
  const navigate = useNavigate()

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [confirmarSenha, setConfirmarSenha] = useState('')
  const [erro, setErro] = useState('')
  const [aSubmeter, setASubmeter] = useState(false)

  async function lidarComSubmissao(evento) {
    evento.preventDefault()
    setErro('')

    if (!nome || !email || !senha || !confirmarSenha) {
      setErro('Preencha todos os campos.')
      return
    }

    if (senha !== confirmarSenha) {
      setErro('As senhas não coincidem.')
      return
    }

    setASubmeter(true)

    try {
      await api.post('/auth/registo', { nome, email, senha })
      await entrar(email, senha)
      navigate('/aluno', { replace: true })
    } catch (err) {
      setErro(err.message || 'Não foi possível criar a conta.')
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
        <h1 className="text-2xl font-bold">Criar conta</h1>

        {erro && <Alerta tipo="erro" mensagem={erro} />}

        <CampoTexto
          rotulo="Nome"
          nome="nome"
          valor={nome}
          aoMudar={setNome}
        />

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

        <CampoTexto
          rotulo="Confirmar senha"
          nome="confirmarSenha"
          tipo="password"
          valor={confirmarSenha}
          aoMudar={setConfirmarSenha}
        />

        <Botao
          texto={aSubmeter ? 'A criar conta...' : 'Criar conta'}
          tipo="submit"
          desativado={aSubmeter}
        />

        <p className="text-sm text-center">
          Já tem conta?{' '}
          <Link to="/login" className="font-medium text-terracota underline">
            Entrar
          </Link>
        </p>
      </form>
    </div>
  )
}

export default Registo