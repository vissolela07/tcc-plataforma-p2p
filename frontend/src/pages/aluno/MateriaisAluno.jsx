import MaterialCartao from '../ui/MaterialCartao'

const materiais = [
  {
    id: 12,
    titulo: 'Exercícios de funções em C',
    descricao: 'Lista de 10 exercícios resolvidos.',
    disciplina: { id: 2, nome: 'Programação' },
    autor: { id: 7, nome: 'Rui' },
    mediaAvaliacao: 4.5,
    numAvaliacoes: 8,
    criadoEm: '2026-11-02'
  },
  {
    id: 13,
    titulo: 'Resumo de equações do segundo grau',
    descricao: 'Explicação da fórmula resolvente com exemplos.',
    disciplina: { id: 3, nome: 'Matemática' },
    autor: { id: 1, nome: 'Ana' },
    mediaAvaliacao: null,
    numAvaliacoes: 0,
    criadoEm: '2026-11-03'
  }
]

function MateriaisAluno() {
  return (
    <div className="space-y-6 p-6">
      <h1 className="text-3xl font-bold text-nogueira">
        Materiais
      </h1>

      {materiais.length === 0 ? (
        <p className="text-nogueira">
          Nenhum material encontrado.
        </p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {materiais.map((material) => (
            <MaterialCartao
              key={material.id}
              material={material}
              caminhoDetalhe={`/aluno/materiais/${material.id}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default MateriaisAluno