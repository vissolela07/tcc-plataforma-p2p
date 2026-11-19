import { useState } from 'react'
import Botao from '../../components/ui/Botao'
import CampoTexto from '../../components/ui/CampoTexto'

function InicioAluno() {
  const [nome, setNome] = useState('')
  const [erro, setErro] = useState('')

  function atualizarNome(texto) {
    setNome(texto)
    setErro('')
  }

  function testarCampo(evento) {
    evento.preventDefault()

    if (!nome.trim()) {
      setErro('Preenche o teu nome.')
      return
    }

    setErro('')
    alert(`Olá, ${nome.trim()}!`)
  }

  return (
    <div className="space-y-6 p-6">
      <h1 className="text-3xl font-bold text-nogueira">
        Início do aluno
      </h1>

      <div className="flex flex-wrap gap-3">
        <Botao
          texto="Testar botão"
          onClick={() => alert('O botão funcionou!')}
        />
        <Botao texto="Secundário" variante="secundario" />
        <Botao texto="Perigo" variante="perigo" />
        <Botao texto="Desactivado" desativado />
      </div>

      <form
        onSubmit={testarCampo}
        className="max-w-md space-y-4"
      >
        <CampoTexto
          rotulo="O teu nome"
          nome="nome"
          valor={nome}
          aoMudar={atualizarNome}
          placeholder="Escreve o teu nome"
          erro={erro}
        />

        <Botao texto="Testar campo" tipo="submit" />
      </form>
    </div>
  )
}

export default InicioAluno