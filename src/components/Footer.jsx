export default function Footer() {
  return (
    <footer id="about" className="mx-auto mt-12 w-full max-w-6xl px-4 pb-10 text-center text-sm text-white/60">
      <p>
        This page lets you try the Granny Game inside your browser. If the embed doesn't load, use the button below to open
        it in a new tab.
      </p>
      <a
        href="https://replit.com/@aryanbramhne477/GrannyGame?s=app"
        target="_blank"
        rel="noreferrer"
        className="mt-4 inline-block rounded-lg bg-indigo-600 px-4 py-2 font-medium text-white shadow hover:bg-indigo-500"
      >
        Open in new tab
      </a>
    </footer>
  );
}
