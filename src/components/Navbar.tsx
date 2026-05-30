import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 glass border-b-0 border-white/10 top-0 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold tracking-tighter flex items-center gap-2">
          <div className="w-8 h-8 rounded bg-gradient-to-br from-cyan-400 to-purple-500 glow-cyan flex items-center justify-center">
            <span className="text-white font-black text-sm">JP</span>
          </div>
          <span className="text-white">JP<span className="text-cyan-400">nex</span></span>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <Link to="/" className="hover:text-cyan-400 transition-colors">Home</Link>
          <a href="/#services" className="hover:text-cyan-400 transition-colors">Services</a>
          <a href="/#products" className="hover:text-cyan-400 transition-colors">Products</a>
          <a href="/#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          <a href="https://www.jivanmali.me/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">Portfolio</a>
        </div>
        <Link 
          to="/order" 
          className="hidden md:flex items-center justify-center px-6 py-2.5 rounded-full bg-transparent border border-cyan-400 text-cyan-400 font-medium glow-hover-cyan transition-all"
        >
          Free Quote
        </Link>
      </div>
    </nav>
  );
}
