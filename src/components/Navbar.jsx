import { Gamepad2 } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/60 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600/90 text-white shadow-lg shadow-indigo-600/30">
            <Gamepad2 size={20} />
          </div>
          <span className="font-semibold tracking-tight text-white">Granny Game Launcher</span>
        </div>
        <nav className="hidden items-center gap-6 text-sm text-white/80 sm:flex">
          <a href="#try" className="transition-colors hover:text-white">Try</a>
          <a href="#tips" className="transition-colors hover:text-white">Tips</a>
          <a href="#about" className="transition-colors hover:text-white">About</a>
        </nav>
      </div>
    </header>
  );
}
