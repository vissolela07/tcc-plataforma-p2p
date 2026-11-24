import { useAuth } from '../../context/AuthContext'

function Navbar({ aoAbrirMenu }) {
  const { utilizador, sair } = useAuth()

  return (
    <header className="flex items-center justify-between gap-3 px-4 py-3 bg-creme border-b border-nogueira text-nogueira">
      <div className="flex items-center gap-3 min-w-0">
        {aoAbrirMenu && (
          <button
            type="button"
            onClick={aoAbrirMenu}
            aria-label="Abrir menu"
            className="md:hidden px-3 py-1.5 rounded border border-nogueira/40 text-xl leading-none"
          >
            ☰
          </button>
        )}

        <span className="font-semibold truncate">
          {utilizador ? utilizador.nome : 'Utilizador'}
        </span>
      </div>

      <button
        type="button"
        onClick={sair}
        className="shrink-0 px-3 py-1.5 rounded bg-terracota text-creme"
      >
        Terminar sessão
      </button>
    </header>
  )
}

export default Navbar