import { useContext } from "react";
import { useSelector } from "react-redux";
import { ThemeContext } from "../context/ThemeContext";

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const cartItems = useSelector((state) => state.cart.items);

  return (
    <header
      className={`header ${theme}`}
    >
      <h1>Abhiram's shopping cart</h1>

      <div className="header-right">
        <button onClick={toggleTheme}>
          {theme === "light"
            ? "🌙 Dark Mode"
            : "☀️ Light Mode"}
        </button>

        <h3>🛒 Cart : {cartItems.length}</h3>
      </div>
    </header>
  );
}

export default Header;