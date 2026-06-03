import { Link } from 'react-router-dom';
import { Terminal, Smartphone, Code2, Database, ChevronRight, Send, CheckCircle2, Loader2 } from 'lucide-react';
import { useState, FormEvent } from 'react';

export default function Home() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleContactSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    const form = e.currentTarget;
    const data = new FormData(form);
    
    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setIsSuccess(true);
        form.reset();
        setTimeout(() => setIsSuccess(false), 5000); // Hide success message after 5 seconds
      } else {
        let errorMessage = "There was a problem sending your message. Please try again.";
        try {
          const resData = await response.json();
          if (resData.error) {
            errorMessage = resData.error;
          } else if (resData.errors && resData.errors.length > 0) {
            errorMessage = resData.errors.map((err: any) => err.message).join(", ");
          }
        } catch (e) {
          // ignore
        }
        setError(errorMessage);
      }
    } catch (err) {
      setError("There was a problem sending your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col gap-32 pb-20">
      {/* Hero Section */}
      <section className="relative pt-20 flex flex-col justify-center items-center text-center px-6 min-h-[60vh]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/20 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/20 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br from-cyan-400 to-purple-500 glow-cyan flex items-center justify-center mb-8 relative z-10">
          <span className="text-white font-black text-3xl md:text-4xl tracking-tighter">JP</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white max-w-4xl leading-[1.1] relative z-10">
          We Craft <span className="text-gradient">Next-Gen</span> <br className="hidden md:block" />Digital Solutions
        </h1>
        
        <p className="mt-8 text-lg text-gray-400 max-w-2xl relative z-10">
          Transforming ideas into high-performance web applications, mobile platforms, and robust automation systems.
        </p>
        
        <div className="mt-12 relative z-10 flex flex-col sm:flex-row gap-6">
          <Link 
            to="/order" 
            className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-cyan-400 text-jp-navy font-bold glow-hover-cyan transition-all flex items-center gap-2 justify-center"
          >
            Get A Free Quote
            <ChevronRight size={18} />
          </Link>
          <a 
            href="#services" 
            className="px-8 py-4 rounded-full glass text-white font-medium hover:bg-white/10 transition-all flex items-center gap-2 justify-center"
          >
            Explore Services
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="max-w-7xl mx-auto px-6 w-full mt-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">Our Services</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Web Development", icon: <Code2 className="text-cyan-400" size={32} />, tags: ["PHP", "Python", "JS"] },
            { title: "App Development", icon: <Smartphone className="text-purple-400" size={32} />, tags: ["Java", "React Native"] },
            { title: "Software & Automation", icon: <Terminal className="text-cyan-400" size={32} />, tags: ["C++", "Python Scripts"] },
            { title: "Database Solutions", icon: <Database className="text-purple-400" size={32} />, tags: ["MySQL", "PostgreSQL"] }
          ].map((service, idx) => (
            <div key={idx} className="glass p-8 rounded-2xl flex flex-col h-full hover:border-cyan-400/50 glow-hover-cyan transition-all group">
              <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
              <div className="flex flex-wrap gap-2 mt-auto pt-4 relative z-10">
                {service.tags.map(tag => (
                  <span key={tag} className="text-xs font-mono px-3 py-1 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 text-cyan-50 rounded-full border border-cyan-500/30 group-hover:border-cyan-400/60 group-hover:shadow-[0_0_15px_rgba(0,255,255,0.2)] group-hover:text-white transition-all cursor-default">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Products & Portfolio Section */}
      <section id="products" className="max-w-7xl mx-auto px-6 w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">Featured Products</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {[
            { name: "College Community Portal", desc: "A connected hub for students and faculty.", glow: "glow-cyan" },
            { name: "Result Scraper System", desc: "Automated high-speed data extraction.", glow: "glow-purple" }
          ].map((product, idx) => (
            <div key={idx} className={`relative rounded-3xl overflow-hidden glass group p-1 ${product.glow}`}>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-jp-navy/90 z-10" />
              <img 
                src={`https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80`} 
                alt={product.name} 
                className="w-full h-64 object-cover rounded-2xl opacity-50 group-hover:opacity-70 transition-opacity group-hover:scale-105 duration-500"
              />
              <div className="absolute bottom-6 left-8 right-8 z-20 flex justify-between items-end">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{product.name}</h3>
                  <p className="text-sm text-gray-300">{product.desc}</p>
                </div>
                <button className="px-5 py-2 rounded-full glass text-cyan-400 font-medium hover:bg-white/10 hover:text-white transition-all text-sm shrink-0">
                  Live Demo
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Link 
            to="/order" 
            className="px-10 py-5 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-bold text-lg glow-cyan flex items-center gap-3 hover:scale-105 transition-transform"
          >
            Order Products
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-3xl mx-auto px-6 w-full">
        <div className="glass p-8 md:p-12 rounded-3xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-[100px] rounded-full point-events-none" />
          <div className="text-center mb-10 relative z-10">
            <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">Let's Talk</h2>
            <p className="text-gray-400">Tell us about your next project.</p>
          </div>
          
          <form 
            action="https://formspree.io/f/mnjrkngn"
            method="POST"
            onSubmit={handleContactSubmit}
            className="space-y-6 relative z-10"
          >
            {isSuccess && (
              <div className="bg-green-500/10 border border-green-500/50 rounded-xl p-4 flex items-center gap-3 text-green-400">
                <CheckCircle2 className="shrink-0" />
                <p>Thanks! Your message has been sent.</p>
              </div>
            )}
            
            {error && (
              <div className="bg-red-500/10 border border-red-500/50 rounded-xl p-4 text-red-400">
                <p>{error}</p>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300 ml-1">Name</label>
                <input 
                  type="text" 
                  name="Name"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all placeholder:text-gray-600"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300 ml-1">Email</label>
                <input 
                  type="email" 
                  name="Email"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all placeholder:text-gray-600"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300 ml-1">Requirements</label>
              <textarea 
                name="Requirements"
                required
                className="w-full h-32 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all resize-none placeholder:text-gray-600"
                placeholder="How can we help?"
              />
            </div>
            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 rounded-xl bg-white/10 text-white font-medium hover:bg-white/20 border border-white/10 hover:border-white/20 transition-all flex items-center justify-center gap-2 group disabled:opacity-70 disabled:hover:scale-100 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="animate-spin w-5 h-5" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Send size={18} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                </>
              )}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
