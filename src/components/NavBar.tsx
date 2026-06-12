export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md">
      <div className="w-full mx-auto px-8 py-6 flex justify-between items-center">

        <h1 className="font-bold text-xl">
          JK
        </h1>

        <div className="flex gap-8 text-sm">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

      </div>
    </nav>
  );
}