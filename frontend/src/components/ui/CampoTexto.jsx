import { useId } from 'react'

export default function CampoTexto({
  rotulo,
  nome,
  tipo = 'text',
  valor,
  aoMudar,
  placeholder,
  erro
}) {
  const id = useId()
  const erroId = `${id}-erro`

  return (
    <div className="space-y-1">
      <label
        htmlFor={id}
        className="block font-medium text-nogueira"
      >
        {rotulo}
      </label>

      <input
        id={id}
        name={nome}
        type={tipo}
        value={valor}
        onChange={(evento) => aoMudar(evento.target.value)}
        placeholder={placeholder}
        aria-invalid={Boolean(erro)}
        aria-describedby={erro ? erroId : undefined}
        className={`
          w-full rounded-lg border bg-white px-3 py-2
          text-nogueira placeholder:text-nogueira/60
          focus-visible:outline-2 focus-visible:outline-offset-2
          focus-visible:outline-terracota
          ${erro ? 'border-bordo' : 'border-nogueira/40'}
        `}
      />

      {erro && (
        <p id={erroId} className="text-sm text-bordo">
          {erro}
        </p>
      )}
    </div>
  )
}