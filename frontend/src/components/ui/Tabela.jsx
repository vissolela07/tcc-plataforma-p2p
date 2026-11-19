export default function Tabela({
  colunas,
  linhas,
  acoes,
  mensagemVazia = 'Sem resultados.'
}) {
  if (linhas.length === 0) {
    return (
      <p className="rounded-lg bg-creme p-4 text-nogueira">
        {mensagemVazia}
      </p>
    )
  }

  return (
    <div className="overflow-x-auto rounded-lg border border-nogueira/20">
      <table className="w-full text-left text-sm text-nogueira">
        <thead className="bg-creme">
          <tr>
            {colunas.map((coluna) => (
              <th
                key={coluna.chave}
                scope="col"
                className="px-4 py-3 font-semibold"
              >
                {coluna.titulo}
              </th>
            ))}

            {acoes && (
              <th scope="col" className="px-4 py-3 font-semibold">
                Acções
              </th>
            )}
          </tr>
        </thead>

        <tbody className="divide-y divide-nogueira/20">
          {linhas.map((linha) => (
            <tr key={linha.id} className="hover:bg-creme/40">
              {colunas.map((coluna) => (
                <td key={coluna.chave} className="px-4 py-3">
                  {linha[coluna.chave]}
                </td>
              ))}

              {acoes && (
                <td className="px-4 py-3">
                  {acoes(linha)}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}