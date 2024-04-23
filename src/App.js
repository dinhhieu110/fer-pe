import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar/NavBar.jsx';
import Home from './pages/home/Home';
import Videos from './pages/videos/Videos';
import Footer from './components/footer/Footer.jsx';
import { Container } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Container fluid className="wrap">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/videos" element={<Videos />} />
          </Routes>
        </Container>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
