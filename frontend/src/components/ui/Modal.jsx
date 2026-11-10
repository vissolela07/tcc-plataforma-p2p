import { useEffect } from 'react';

function Modal({ aberto, aoFechar, titulo, children }) {
  useEffect(() => {
    if (!aberto) return;

    function aoCarregarTecla(evento) {
      if (evento.key === 'Escape') aoFechar();
    }

    document.addEventListener('keydown', aoCarregarTecla);

    return () => {
      document.removeEventListener('keydown', aoCarregarTecla);
    };
  }, [aberto, aoFechar]);

  if (!aberto) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div
        role="dialog"
        aria-modal="true"
        aria-label={titulo}
        className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg"
      >
        <div className="mb-4 flex items-start justify-between gap-4">
          <h2 className="text-lg font-semibold">{titulo}</h2>
          <button
            type="button"
            onClick={aoFechar}
            aria-label="Fechar"
            className="font-bold"
          >
            ×
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

export default Modal;