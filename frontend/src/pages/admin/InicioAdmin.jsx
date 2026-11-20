import { useAuth } from '../../context/AuthContext'

function InicioAdmin() {
  const { utilizador } = useAuth()

  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-bold">
        Administração — {utilizador?.nome || 'Administrador'}
      </h1>
      <p className="text-nogueira/80">
        Administra utilizadores, cursos e configurações gerais da plataforma.
      </p>
    </section>
  )
}

export default InicioAdmin