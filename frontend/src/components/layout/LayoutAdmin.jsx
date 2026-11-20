import { NavLink, Outlet } from 'react-router'
import Navbar from './Navbar'

function LayoutAdmin() {
  const estiloLink = ({ isActive }) =>
    isActive
      ? 'block px-3 py-2 rounded bg-terracota text-creme font-semibold'
      : 'block px-3 py-2 rounded text-nogueira hover:bg-creme/70'

  return (
    <div className="min-h-screen flex bg-creme text-nogueira">
      <aside className="w-60 shrink-0 border-r border-nogueira p-4 flex flex-col gap-4">
        <span className="text-lg font-bold">Administração</span>

        <nav className="flex flex-col gap-1">
          <NavLink to="/admin" end className={estiloLink}>
            Início
          </NavLink>
          <NavLink to="/admin/utilizadores" className={estiloLink}>
            Utilizadores
          </NavLink>
          <NavLink to="/admin/cursos" className={estiloLink}>
            Cursos
          </NavLink>
          <NavLink to="/admin/configuracoes" className={estiloLink}>
            Configurações
          </NavLink>
        </nav>
      </aside>

      <div className="flex-1 flex flex-col min-w-0">
        <Navbar />

        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default LayoutAdmin