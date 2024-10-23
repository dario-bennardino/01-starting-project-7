import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";

function Modal({ open, children, onClose }) {
  // Definisce il componente `Modal`, che accetta due props:
  // - `open`: un booleano che determina se il modal è aperto o chiuso.
  // - `children`: il contenuto che verrà visualizzato all'interno del modal.
  const dialog = useRef(); // Crea un riferimento (`ref`) per l'elemento <dialog>. Questo permette di accedere all'elemento direttamente, se necessario.

  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [open]);

  return createPortal(
    // `createPortal` viene utilizzato per "spostare" il rendering di un elemento fuori dalla normale gerarchia DOM.
    // In questo caso, il contenuto del dialogo viene reso all'interno di un elemento nel DOM con id "modal".

    <dialog className="modal" ref={dialog} onClose={onClose}>
      {/* Viene creato un elemento <dialog> con la classe "modal". Il riferimento `ref={dialog}` permette di accedere a questo elemento DOM direttamente tramite `dialog.current`. */}
      {/* Il valore della proprietà `open` determina se il dialogo è aperto o chiuso. */}
      {open ? children : null}
      {/* Il contenuto del modal viene iniettato qui tramite la prop `children`. */}
    </dialog>,
    document.getElementById("modal")
  );
}

export default Modal;
