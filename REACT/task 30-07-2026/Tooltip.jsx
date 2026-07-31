import ReactDOM from "react-dom";
import "./Tooltip.css";

function Tooltip(){

return ReactDOM.createPortal(

<div className="tooltip">

Click to Continue

</div>,

document.getElementById("portal-root")

);

}

export default Tooltip;