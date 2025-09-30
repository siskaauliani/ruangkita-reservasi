import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Reservasi from './pages/Reservasi'
import Tentang from './pages/Tentang'

function App() {
  return (
    <div>
      {/* Navbar */}
      <nav style={styles.nav}>
        <h2 style={styles.logo}>RuangKita</h2>
        <ul style={styles.menu}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/reservasi">Reservasi</Link></li>
          <li><Link to="/tentang">Tentang</Link></li>
        </ul>
      </nav>

      {/* Routing */}
      <div style={styles.content}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reservasi" element={<Reservasi />} />
          <Route path="/tentang" element={<Tentang />} />
        </Routes>
      </div>
    </div>
  )
}

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 30px',
    background: '#2563eb',
    color: 'white',
  },
  logo: {
    margin: 0,
  },
  menu: {
    display: 'flex',
    gap: '20px',
    listStyle: 'none',
  },
  content: {
    padding: '20px',
  },
}

export default App
