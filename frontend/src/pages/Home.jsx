function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>
        Selamat Datang di <span style={{ color: "#3b82f6" }}>RuangKita</span>
      </h1>
      <p style={{ fontSize: "1.2rem", color: "#6b7280", maxWidth: "600px", margin: "0 auto" }}>
        Sistem Informasi Reservasi Ruang Rapat modern untuk mendukung produktivitas tim Anda. 
        Pesan ruang rapat kapan saja, dengan mudah dan cepat.
      </p>
      <img 
        src="https://cdn-icons-png.flaticon.com/512/747/747310.png" 
        alt="meeting" 
        style={{ width: "200px", marginTop: "30px" }} 
      />
    </div>
  )
}
export default Home
