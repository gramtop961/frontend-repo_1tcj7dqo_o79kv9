export default function GameEmbed() {
  return (
    <section id="try" className="relative mx-auto mt-6 w-full max-w-6xl px-4">
      <div className="rounded-2xl border border-white/10 bg-black/40 p-3 shadow-xl">
        <div className="aspect-video w-full overflow-hidden rounded-lg">
          <iframe
            title="Granny Game"
            src="https://replit.com/@aryanbramhne477/GrannyGame?embed=1&output=1"
            className="h-full w-full"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          />
        </div>
      </div>
    </section>
  );
}
