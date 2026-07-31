import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Footer() {
  const { theme } = useContext(ThemeContext);

  return (
    <footer className={`footer ${theme}`}>
      <h3>Current Theme : {theme}</h3>
    </footer>
  );
}

export default Footer;