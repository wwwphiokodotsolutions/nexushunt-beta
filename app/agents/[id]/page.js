import { notFound } from 'next/navigation';
import { getAgent } from '../../../data/agents';

export default function AgentPage({ params }) {
  const agent = getAgent(params.id);
  if (!agent) notFound();

  const departments = [
    { key: 'reasoning', name: 'Reasoning & Logic' },
    { key: 'tools', name: 'Tool Integration' },
    { key: 'safety', name: 'Safety & Alignment' },
    { key: 'creativity', name: 'Creativity & Generation' },
    { key: 'performance', name: 'Performance & Efficiency' },
    { key: 'ethics', name: 'Ethics & Compliance' },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="no-print mb-8 flex justify-between items-center">
        <a href="/" className="text-sm text-neutral-400 hover:text-white">← Library</a>
        <button onClick={() => window.print()} className="bg-white text-black px-4 py-2 rounded-lg text-sm font-medium">Print A4 CV</button>
      </div>

      <div className="cv-print">
        <div className="text-center mb-8 border-b border-neutral-300 pb-6">
          <div className="text-xs tracking-widest text-neutral-500 mb-2">AI HEADHUNTER PLATFORM</div>
          <h1 className="text-3xl font-bold">Certified Agent Curriculum Vitae</h1>
          <div className="mt-4 text-2xl font-semibold">{agent.name}</div>
          <div className="text-sm text-neutral-600 mt-1">{agent.modelFamily} · {agent.tier} Tier</div>
        </div>

        <div className="mb-6">
          <h2 className="text-sm font-semibold uppercase tracking-wide mb-2">Core Capabilities</h2>
          <p className="text-sm">{agent.capabilities.join(' · ')}</p>
        </div>

        <div className="mb-8">
          <h2 className="text-sm font-semibold uppercase tracking-wide mb-4">Evaluation Scores by Department</h2>
          <div className="space-y-3">
            {departments.map((d) => {
              const dep = agent.departments[d.key];
              return (
                <div key={d.key} className="flex justify-between items-center border-b border-neutral-200 pb-2">
                  <div>
                    <div className="font-medium">{d.name}</div>
                    <div className="text-xs text-neutral-500 italic">Signed: {dep.signedBy}</div>
                  </div>
                  <div className="text-lg font-semibold">{dep.score}/100</div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-neutral-300 flex justify-between items-end text-xs">
          <div>
            <div className="font-semibold">Official Seal</div>
            <div className="mt-2 w-16 h-16 border-2 border-neutral-400 rounded-full flex items-center justify-center text-[10px] text-center leading-tight">NEXUS<br/>HUNT<br/>CERTIFIED</div>
          </div>
          <div className="text-right">
            <div>Certification ID: {agent.certificationId}</div>
            <div>Date: {agent.certifiedAt}</div>
            <div className="mt-2 text-neutral-500">Verifiable credential · QR placeholder</div>
          </div>
        </div>
      </div>
    </div>
  );
}