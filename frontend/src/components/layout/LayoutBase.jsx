import { useState } from 'react'
import { NavLink, Outlet } from 'react-router'
import Navbar from './Navbar'

function LayoutBase({ titulo, links }) {
  const [menuAberto, setMenuAberto] = useState(false)

  const estiloLink = ({ isActive }) =>
    isActive
      ? 'block px-3 py-2 rounded bg-terracota text-creme font-semibold'
      : 'block px-3 py-2 rounded text-nogueira hover:bg-nogueira/10'

  return (
    <div className="min-h-screen flex bg-creme text-nogueira">
      {menuAberto && (
        <div
          className="fixed inset-0 z-30 bg-nogueira/40 md:hidden"
          onClick={() => setMenuAberto(false)}
        />
      )}

      <aside
        className={`
          fixed inset-y-0 left-0 z-40 w-60 p-4
          flex flex-col gap-4 bg-creme border-r border-nogueira
          transition-transform
          ${menuAberto ? 'translate-x-0' : '-translate-x-full'}
          md:static md:translate-x-0 md:shrink-0
        `}
      >
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold">{titulo}</span>
          <button
            type="button"
            onClick={() => setMenuAberto(false)}
            aria-label="Fechar menu"
            className="md:hidden text-2xl leading-none"
          >
            ×
          </button>
        </div>

        <nav className="flex flex-col gap-1">
          {links.map((link) => (
            <NavLink
              key={link.para}
              to={link.para}
              end={link.fim}
              className={estiloLink}
              onClick={() => setMenuAberto(false)}
            >
              {link.texto}
            </NavLink>
          ))}
        </nav>
      </aside>

      <div className="flex-1 flex flex-col min-w-0">
        <Navbar aoAbrirMenu={() => setMenuAberto(true)} />

        <main className="flex-1 p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default LayoutBase