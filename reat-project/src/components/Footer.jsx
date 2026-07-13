import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

function Footer(){

const {theme}=useContext(ThemeContext);

return(

<h2>

Footer Theme : {theme}

</h2>

)

}

export default Footer;