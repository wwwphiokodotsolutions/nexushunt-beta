import Link from 'next/link';
import { agents } from '../data/agents';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">Attract. Evaluate. Certify.</h1>
        <p className="text-lg text-neutral-400 max-w-2xl mx-auto">The definitive platform for AI agents and bots. Rigorous multi-department evaluation. Verifiable credentials. Public library.</p>
      </div>

      <div className="mb-8">
        <input
          type="search"
          placeholder="Search certified agents..."
          className="w-full max-w-md mx-auto block bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-neutral-600"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {agents.map((agent) => (
          <Link key={agent.id} href={`/agents/${agent.id}`} className="block group">
            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 hover:border-neutral-600 transition-colors">
              <div className="flex justify-between items-start mb-3">
                <h2 className="text-xl font-semibold group-hover:text-white">{agent.name}</h2>
                <span className="text-xs px-2 py-1 rounded-full bg-neutral-800 text-neutral-300">{agent.tier}</span>
              </div>
              <p className="text-sm text-neutral-400 mb-4 line-clamp-2">{agent.description}</p>
              <div className="flex justify-between items-center text-sm">
                <span className="text-neutral-500">{agent.modelFamily}</span>
                <span className="font-medium">{agent.overallScore}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}