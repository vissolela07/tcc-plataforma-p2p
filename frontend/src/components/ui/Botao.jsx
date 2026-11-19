const variantes = {
  principal: 'bg-terracota text-white hover:bg-nogueira',
  secundario: 'bg-creme text-nogueira hover:bg-creme/80',
  perigo: 'bg-bordo text-white hover:bg-bordo/90'
}

export default function Botao({
  texto,
  onClick,
  variante = 'principal',
  tipo = 'button',
  desativado = false
}) {
  return (
    <button
      type={tipo}
      onClick={onClick}
      disabled={desativado}
      className={`
        inline-flex items-center justify-center rounded-lg
        px-4 py-2 font-medium transition-colors
        focus-visible:outline-2 focus-visible:outline-offset-2
        focus-visible:outline-nogueira
        disabled:pointer-events-none disabled:opacity-50
        ${variantes[variante] || variantes.principal}
      `}
    >
      {texto}
    </button>
  )
}