import LayoutBase from './LayoutBase'

const links = [
  { para: '/professor', texto: 'Início', fim: true },
  { para: '/professor/materiais', texto: 'Materiais' },
  { para: '/professor/projetos', texto: 'Projectos' },
]

function LayoutProfessor() {
  return <LayoutBase titulo="Área do Professor" links={links} />
}

export default LayoutProfessor