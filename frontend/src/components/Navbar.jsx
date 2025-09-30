import "./Navbar.css";

function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="navbar">
      <div className="logo">RuangKita</div>
      <div className="links">
        <a href="#features">Fitur</a>
        <a href="#testimonials">Testimoni</a>
        <button className="toggle" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
