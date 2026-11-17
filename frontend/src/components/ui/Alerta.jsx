const estilos = {
  sucesso: 'border-oliva/40 bg-oliva/10 text-oliva',
  erro: 'border-bordo/40 bg-bordo/10 text-bordo',
  info: 'border-nogueira/40 bg-nogueira/10 text-nogueira',
};

function Alerta({ tipo = 'info', mensagem, aoFechar }) {
  return (
    <div
      role="alert"
      className={`flex items-start justify-between gap-4 rounded-lg border p-3 ${estilos[tipo]}`}
    >
      <p>{mensagem}</p>
      {aoFechar && (
        <button
          type="button"
          onClick={aoFechar}
          aria-label="Fechar alerta"
          className="font-bold"
        >
          ×
        </button>
      )}
    </div>
  );
}

export default Alerta;