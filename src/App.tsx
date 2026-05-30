import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Order from './pages/Order';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-grid-pattern overflow-x-hidden">
        <Navbar />
        <main className="flex-grow pt-24">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/order" element={<Order />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
