import { Link } from 'react-router'
import Cartao from '../ui/Cartao'
import Etiqueta from '../ui/Etiqueta'

export default function MaterialCartao({ material, caminhoDetalhe }) {
  return (
    <Cartao titulo={material.titulo}>
      <div className="space-y-3">
        <Etiqueta texto={material.disciplina.nome} cor="neutra" />

        <p className="text-nogueira">
          {material.descricao}
        </p>

        <p className="text-sm text-nogueira">
          Publicado por {material.autor.nome}
        </p>

        <p className="text-sm text-nogueira">
          {material.numAvaliacoes > 0
            ? `Avaliação: ${material.mediaAvaliacao} de 5 (${material.numAvaliacoes} avaliações)`
            : 'Ainda sem avaliações'}
        </p>

        <Link
          to={caminhoDetalhe}
          className="
            inline-block rounded font-medium text-bordo underline
            underline-offset-4 hover:text-nogueira
            focus-visible:outline-2 focus-visible:outline-offset-2
            focus-visible:outline-bordo
          "
        >
          Ver detalhes
        </Link>
      </div>
    </Cartao>
  )
}