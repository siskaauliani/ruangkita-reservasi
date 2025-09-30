import { useNavigate } from "react-router-dom";
import "./Hero.css";

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Selamat Datang di <span>RuangKita</span></h1>
        <p>Platform reservasi modern untuk mempermudah pengelolaan ruang bersama.</p>
        <div className="hero-buttons">
          <button className="btn primary" onClick={() => navigate("/reservasi")}>
            Mulai Sekarang
          </button>
          <button className="btn secondary">Pelajari Lebih Lanjut</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
