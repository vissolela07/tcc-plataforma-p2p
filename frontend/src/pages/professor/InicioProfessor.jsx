import { useAuth } from '../../context/AuthContext'

function InicioProfessor() {
  const { utilizador } = useAuth()

  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-bold">
        Painel do Professor — {utilizador?.nome || 'Professor'}
      </h1>
      <p className="text-nogueira/80">
        Gere as turmas, partilha materiais e acompanha os projetos submetidos.
      </p>
    </section>
  )
}

export default InicioProfessor