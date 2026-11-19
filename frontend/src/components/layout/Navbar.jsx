import { useAuth } from '../../context/AuthContext'

function Navbar() {
  const { utilizador, sair } = useAuth()

  return (
    <header className="flex items-center justify-between px-4 py-3 bg-creme border-b border-nogueira text-nogueira">
      <span className="font-semibold">
        {utilizador ? utilizador.nome : 'Utilizador'}
      </span>

      <button
        type="button"
        onClick={sair}
        className="px-3 py-1.5 rounded bg-terracota text-creme"
      >
        Terminar sessão
      </button>
    </header>
  )
}

export default Navbar