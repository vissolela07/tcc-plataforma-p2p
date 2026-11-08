const estilos = {
  sucesso: 'border-green-300 bg-green-50 text-green-800',
  erro: 'border-red-300 bg-red-50 text-red-800',
  info: 'border-blue-300 bg-blue-50 text-blue-800',
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