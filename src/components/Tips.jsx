export default function Tips() {
  const tips = [
    {
      title: "How to Start",
      body: "Click the Play button inside the embedded window. If controls don't respond, click once on the game area to focus it.",
    },
    {
      title: "Controls",
      body: "Use WASD or arrow keys to move, Space to interact. If the game shows on-screen controls, prefer those on mobile.",
    },
    {
      title: "Performance",
      body: "Close other heavy tabs. If the game lags, reduce the window size or open the game in a new tab.",
    },
    {
      title: "Audio",
      body: "Your browser may block sound until you interact. Click anywhere in the game area then toggle audio inside the game UI.",
    },
  ];

  return (
    <section id="tips" className="mx-auto mt-10 w-full max-w-6xl px-4">
      <h2 className="mb-4 text-xl font-semibold text-white">Tips for a Smooth Experience</h2>
      <ul className="grid gap-4 sm:grid-cols-2">
        {tips.map((t) => (
          <li key={t.title} className="rounded-xl border border-white/10 bg-black/40 p-4">
            <h3 className="mb-1 font-medium text-white">{t.title}</h3>
            <p className="text-sm text-white/70">{t.body}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
