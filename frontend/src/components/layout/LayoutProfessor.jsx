import { NavLink, Outlet } from 'react-router'
import Navbar from './Navbar'

function LayoutProfessor() {
  const estiloLink = ({ isActive }) =>
    isActive
      ? 'block px-3 py-2 rounded bg-terracota text-creme font-semibold'
      : 'block px-3 py-2 rounded text-nogueira hover:bg-creme/70'

  return (
    <div className="min-h-screen flex bg-creme text-nogueira">
      <aside className="w-60 shrink-0 border-r border-nogueira p-4 flex flex-col gap-4">
        <span className="text-lg font-bold">Área do Professor</span>

        <nav className="flex flex-col gap-1">
          <NavLink to="/professor" end className={estiloLink}>
            Início
          </NavLink>
          <NavLink to="/professor/materiais" className={estiloLink}>
            Materiais
          </NavLink>
          <NavLink to="/professor/projetos" className={estiloLink}>
            Projectos
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

export default LayoutProfessor