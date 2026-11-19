import { useAuth } from '../../context/AuthContext'

function InicioAluno() {
  const { utilizador } = useAuth()

  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-bold">
        Bem-vindo, {utilizador?.nome || 'Aluno'}
      </h1>
      <p className="text-nogueira/80">
        Acompanha os teus materiais, o teu perfil e os projetos da plataforma.
      </p>
    </section>
  )
}

export default InicioAluno