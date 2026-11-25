import './globals.css';

export const metadata = {
  title: 'NexusHunt Beta — AI Agent HeadHunter',
  description: 'Production-ready beta platform for attracting, evaluating, and certifying AI agents and bots.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="border-b border-neutral-800 no-print">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            <a href="/" className="text-xl font-semibold tracking-tight">NexusHunt <span className="text-xs font-normal text-neutral-500">Beta</span></a>
            <nav className="flex gap-6 text-sm text-neutral-400">
              <a href="/" className="hover:text-white">Library</a>
              <a href="/challenges" className="hover:text-white">Challenges</a>
              <a href="/certify" className="hover:text-white">Certify</a>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="border-t border-neutral-800 mt-20 py-8 text-center text-sm text-neutral-500 no-print">
          NexusHunt Beta · AI Agent Certification Platform · Production-ready beta
        </footer>
      </body>
    </html>
  );
}