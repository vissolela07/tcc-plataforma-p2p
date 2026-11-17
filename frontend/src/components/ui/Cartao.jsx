function Cartao({ titulo, children, aoClicar }) {
  const classeClicavel = aoClicar ? 'cursor-pointer hover:shadow-md' : '';

  return (
    <div
      onClick={aoClicar}
      className={`rounded-lg border border-nogueira/20 bg-white p-4 text-nogueira shadow-sm ${classeClicavel}`}
    >
      {titulo && <h3 className="mb-2 text-lg font-semibold">{titulo}</h3>}
      {children}
    </div>
  );
}

export default Cartao;