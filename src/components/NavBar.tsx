export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full h-auto z-50 backdrop-blur-md bg-black/30">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <a
          href="#"
          aria-label="Home"
          className="w-12 h-12 flex items-center justify-center rounded-full border border-white/20 text-xl font-bold hover:bg-white/5 transition-transform transform hover:-translate-y-0.5"
        >
          JK
        </a>

        <div className="flex gap-4 text-sm">
          <a href="#about" className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-transform transform hover:-translate-y-0.5">About</a>
          <a href="#skills" className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-transform transform hover:-translate-y-0.5">Skills</a>
          <a href="#projects" className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-transform transform hover:-translate-y-0.5">Projects</a>
          <a href="#contact" className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-transform transform hover:-translate-y-0.5">Contact</a>
        </div>

      </div>
    </nav>
  );
}