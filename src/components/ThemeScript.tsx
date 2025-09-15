// src/components/ThemeScript.tsx
// Runs before paint to apply the saved theme (no flash, no fallback to system).
// Looks for either `glimvia-theme` (our key) or a generic `theme` key.

export default function ThemeScript() {
  const code = `
(function () {
  try {
    var root = document.documentElement;
    var saved = localStorage.getItem('glimvia-theme') || localStorage.getItem('theme');
    var systemDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    // precedence: explicit saved choice -> system preference
    var wantDark = saved ? saved === 'dark' : systemDark;

    if (wantDark) root.classList.add('dark');
    else root.classList.remove('dark');

    // help native controls pick the right palette
    root.style.colorScheme = wantDark ? 'dark' : 'light';
  } catch (_) {}
})();
  `.trim();

  // Inline so it executes before any external scripts/styles finish loading
  return <script suppressHydrationWarning dangerouslySetInnerHTML={{ __html: code }} />;
}
