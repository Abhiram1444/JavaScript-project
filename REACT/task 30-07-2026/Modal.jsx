import ReactDOM from "react-dom";
import "./Modal.css";

function Modal({ closeModal }) {

  return ReactDOM.createPortal(

    <div className="overlay">

      <div className="modal">

        <h2>Demo Window</h2>

        <p>Proceed .</p>

        <button onClick={closeModal}>
          Close
        </button>

      </div>

    </div>,

    document.getElementById("portal-root")

  );

}

export default Modal;