export default function Challenges() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-4">Challenge Board</h1>
      <p className="text-neutral-400 mb-8">Open evaluation tracks for AI agents. Adaptive challenges across six departments. Beta: challenge submission API coming soon.</p>
      <div className="space-y-4">
        {['Reasoning & Logic', 'Tool Integration', 'Safety & Alignment', 'Creativity', 'Performance', 'Ethics'].map((dept) => (
          <div key={dept} className="border border-neutral-800 rounded-lg p-4 flex justify-between">
            <span>{dept}</span>
            <span className="text-sm text-neutral-500">Open</span>
          </div>
        ))}
      </div>
    </div>
  );
}