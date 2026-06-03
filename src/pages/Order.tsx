import { ArrowLeft, Rocket, CheckCircle2, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, FormEvent, useEffect } from 'react';

export default function Order() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
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
        let errorMessage = "There was a problem submitting your order. Please try again.";
        try {
          const data = await response.json();
          if (data.error) {
            errorMessage = data.error;
          } else if (data.errors && data.errors.length > 0) {
            errorMessage = data.errors.map((e: any) => e.message).join(", ");
          }
        } catch (e) {
          // Keep default message if not JSON
        }
        setError(errorMessage);
      }
    } catch (err) {
      setError("There was a problem submitting your order. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-12 pb-32">
      <Link 
        to="/" 
        className="inline-flex items-center gap-2 text-cyan-400 font-medium hover:text-cyan-300 transition-colors mb-10"
      >
        <ArrowLeft size={20} />
        Back to Home
      </Link>

      <div className="glass p-8 md:p-12 rounded-3xl relative overflow-hidden glow-cyan">
        <div className="absolute top-0 right-0 w-80 h-80 bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="relative z-10 mb-10">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(0,255,255,0.3)]">
            <Rocket className="text-white w-8 h-8" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">Initiate Your Project</h1>
          <p className="text-gray-400">Fill out the specifications below to request a tailored quote. We bring your vision to life.</p>
        </div>

        {/* 
          Formspree Integration
        */}
        <form 
          action="https://formspree.io/f/mnjrkngn" 
          method="POST"
          onSubmit={handleSubmit}
          className="space-y-6 relative z-10"
        >
          {isSuccess && (
            <div className="bg-green-500/10 border border-green-500/50 rounded-xl p-4 flex items-center gap-3 text-green-400">
              <CheckCircle2 className="shrink-0" />
              <p>Thanks! Your order has been placed. We'll be in touch soon.</p>
            </div>
          )}
          
          {error && (
            <div className="bg-red-500/10 border border-red-500/50 rounded-xl p-4 text-red-400">
              <p>{error}</p>
            </div>
          )}

          {/* Full Name & Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="fullName" className="text-sm font-medium text-gray-300 ml-1">Full Name *</label>
              <input 
                type="text" 
                id="fullName"
                name="Full Name"
                required
                className="w-full bg-jp-navy/50 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all placeholder:text-gray-600"
                placeholder="e.g. Satoshi Nakamoto"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-300 ml-1">Email Address *</label>
              <input 
                type="email" 
                id="email"
                name="Email"
                required
                className="w-full bg-jp-navy/50 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all placeholder:text-gray-600"
                placeholder="satoshi@domain.com"
              />
            </div>
          </div>

          {/* Contact & Project Type */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium text-gray-300 ml-1">Phone / WhatsApp Number *</label>
              <input 
                type="tel" 
                id="phone"
                name="Active Number"
                required
                className="w-full bg-jp-navy/50 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all placeholder:text-gray-600"
                placeholder="+1 234 567 8900"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="projectType" className="text-sm font-medium text-gray-300 ml-1">Project Type *</label>
              <select 
                id="projectType"
                name="Project Type"
                required
                defaultValue=""
                className="w-full bg-jp-navy/50 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all appearance-none cursor-pointer"
              >
                <option value="" disabled className="text-gray-600">Select an option</option>
                <option value="Website">Website Development</option>
                <option value="Mobile Application">Mobile Application</option>
                <option value="Automation Script">Automation Script</option>
                <option value="Database Design">Database Design</option>
              </select>
            </div>
          </div>

          {/* Scale Needed */}
          <div className="space-y-2">
            <label htmlFor="scale" className="text-sm font-medium text-gray-300 ml-1">Pages / Scale Needed</label>
            <select 
              id="scale"
              name="Pages Needed"
              defaultValue=""
              className="w-full bg-jp-navy/50 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all appearance-none cursor-pointer"
            >
              <option value="" disabled className="text-gray-600">Estimate size</option>
              <option value="1-3 pages">Small (1-3 pages / script)</option>
              <option value="4-10 pages">Medium (4-10 pages / app)</option>
              <option value="10+ pages">Large (10+ pages)</option>
              <option value="Enterprise">Enterprise / Custom Architecture</option>
            </select>
          </div>

          {/* Details */}
          <div className="space-y-2">
            <label htmlFor="specs" className="text-sm font-medium text-gray-300 ml-1">Additional Specifications</label>
            <textarea 
              id="specs"
              name="Specifications"
              rows={5}
              className="w-full bg-jp-navy/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all resize-none placeholder:text-gray-600"
              placeholder="Describe your vision, features needed, or budget constraints..."
            />
          </div>

          {/* Submit */}
          <div className="pt-4">
            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold text-lg hover:scale-[1.02] shadow-[0_0_20px_rgba(0,255,255,0.4)] transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:hover:scale-100 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="animate-spin w-6 h-6" />
                  Sending...
                </>
              ) : (
                "Place Order"
              )}
            </button>
            <p className="text-center text-xs text-gray-500 mt-4">
              By placing an order, you agree to receive follow-up emails regarding your request.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
