import ReactDOM from "react-dom";
import "./Popup.css";

function Popup(){

return ReactDOM.createPortal(

<div className="popup">

Product Added Successfully!

</div>,

document.getElementById("portal-root")

);

}

export default Popup;