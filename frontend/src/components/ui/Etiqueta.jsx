const cores = {
  principal: 'bg-terracota text-white',
  sucesso: 'bg-oliva text-white',
  neutra: 'bg-creme text-nogueira',
  erro: 'bg-bordo text-white'
}

export default function Etiqueta({
  texto,
  cor = 'principal'
}) {
  return (
    <span
      className={`
        inline-flex items-center rounded-full
        px-3 py-1 text-sm font-medium
        ${cores[cor] || cores.principal}
      `}
    >
      {texto}
    </span>
  )
}