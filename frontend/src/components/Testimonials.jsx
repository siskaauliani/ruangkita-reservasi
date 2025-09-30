import "./Testimonials.css";

function Testimonials() {
  const testimonials = [
    { name: "Andi", feedback: "Reservasi jadi super gampang, tim saya terbantu banget!" },
    { name: "Siska", feedback: "Tampilannya modern dan mudah digunakan." },
    { name: "Rina", feedback: "Fitur lengkap, saya suka dark mode nya!" },
  ];

  return (
    <section id="testimonials" className="testimonials">
      <h2 className="section-title">Apa Kata Mereka?</h2>
      <div className="testi-cards container">
        {testimonials.map((t, i) => (
          <div key={i} className="testi-card">
            <p>“{t.feedback}”</p>
            <h4>- {t.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
