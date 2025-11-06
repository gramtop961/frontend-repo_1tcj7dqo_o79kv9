import Navbar from "./components/Navbar";
import GameEmbed from "./components/GameEmbed";
import Tips from "./components/Tips";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b0b12] via-[#0b0b12] to-[#121225] text-white">
      <Navbar />

      <section className="mx-auto mt-8 w-full max-w-6xl px-4 text-center">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Play Granny Game Instantly
        </h1>
        <p className="mt-2 text-white/70">
          Embedded right here for quick access. Click inside the frame to focus, then press play.
        </p>
      </section>

      <GameEmbed />
      <Tips />
      <Footer />
    </div>
  );
}

export default App;
