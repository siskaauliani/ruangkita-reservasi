import "./Features.css";

function Features() {
  const features = [
    { title: "Reservasi Mudah", desc: "Pesan ruang hanya dalam beberapa klik." },
    { title: "Kolaborasi", desc: "Ajak timmu untuk bergabung dan reservasi bersama." },
    { title: "Aman & Terpercaya", desc: "Data dijaga dengan keamanan terbaik." },
  ];

  return (
    <section id="features" className="features container">
      <h2 className="section-title">Fitur Utama</h2>
      <div className="cards">
        {features.map((f, i) => (
          <div key={i} className="card">
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
