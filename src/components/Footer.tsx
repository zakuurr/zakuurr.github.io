export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-sm text-gray-500">
          © {currentYear} Elite Portfolio. All rights reserved.
        </div>
        
        <div className="text-sm font-mono text-gray-400">
          Built with <span className="text-red-500">passion</span> by <span className="text-white hover:text-brand-primary transition-colors cursor-pointer">Reza Kurnia</span>
        </div>

        <div className="flex space-x-6">
          <a href="#" className="text-xs text-gray-500 hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="text-xs text-gray-500 hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
