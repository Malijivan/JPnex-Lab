import { Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-jp-navylight/30 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-gradient-to-br from-cyan-400 to-purple-500 glow-cyan flex items-center justify-center">
                <span className="text-white font-black text-sm">JP</span>
              </div>
              <span className="text-xl font-bold tracking-tighter text-white">JP<span className="text-cyan-400">nex</span></span>
            </div>
            <p className="text-gray-400 text-sm max-w-sm">
              We craft next-generation digital solutions, automating workflows and bringing cutting-edge technologies to your business.
            </p>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact</h4>
            <div className="space-y-3">
              <a href="mailto:jivanmali841@gmail.com" className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                <Mail size={18} className="text-cyan-400" />
                jivanmali841@gmail.com
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Location</h4>
            <div className="flex gap-3 text-gray-400 text-sm">
              <MapPin size={18} className="text-cyan-400 shrink-0 mt-0.5" />
              <span className="leading-relaxed leading-6">
                Asalod Shahada, <br />
                Nandurbar, Maharashtra
              </span>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 mt-12 pt-8 text-center flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} JPnex Agency. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
