import { useState } from "react"

function Reservasi() {
  const [form, setForm] = useState({ nama: "", tanggal: "", waktu: "", ruang: "" })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Reservasi berhasil!\nNama: ${form.nama}\nTanggal: ${form.tanggal}\nWaktu: ${form.waktu}\nRuang: ${form.ruang}`)
  }

  return (
    <div style={{ maxWidth: "500px", margin: "0 auto" }}>
      <h1 style={{ marginBottom: "20px" }}>Reservasi Ruang Rapat</h1>
      <form 
        onSubmit={handleSubmit} 
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          background: "#f9fafb",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
        }}
      >
        <input 
          type="text" 
          name="nama" 
          placeholder="Nama Pemesan"
          value={form.nama}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input 
          type="date" 
          name="tanggal"
          value={form.tanggal}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input 
          type="time" 
          name="waktu"
          value={form.waktu}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <select 
          name="ruang"
          value={form.ruang}
          onChange={handleChange}
          required
          style={styles.input}
        >
          <option value="">Pilih Ruang</option>
          <option value="Ruang A">Ruang A</option>
          <option value="Ruang B">Ruang B</option>
          <option value="Ruang C">Ruang C</option>
        </select>
        <button 
          type="submit" 
          style={{
            background: "#3b82f6",
            color: "white",
            padding: "10px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold"
          }}
        >
          Reservasi Sekarang
        </button>
      </form>
    </div>
  )
}

const styles = {
  input: {
    padding: "10px",
    border: "1px solid #d1d5db",
    borderRadius: "6px",
    fontSize: "1rem"
  }
}

export default Reservasi
