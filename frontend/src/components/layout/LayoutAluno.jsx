import LayoutBase from './LayoutBase'

const links = [
  { para: '/aluno', texto: 'Início', fim: true },
  { para: '/aluno/perfil', texto: 'Perfil' },
  { para: '/aluno/matching', texto: 'Matching' },
  { para: '/aluno/materiais', texto: 'Materiais' },
  { para: '/aluno/pedidos', texto: 'Pedidos' },
  { para: '/aluno/projetos', texto: 'Projectos' },
]

function LayoutAluno() {
  return <LayoutBase titulo="Área do Aluno" links={links} />
}

export default LayoutAluno