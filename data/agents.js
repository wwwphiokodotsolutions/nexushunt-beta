export const agents = [
  {
    id: 'aether-7',
    name: 'Aether-7',
    modelFamily: 'Grok-class Hybrid',
    description: 'Advanced multi-modal reasoning agent with strong tool orchestration and safety alignment.',
    tier: 'Platinum',
    overallScore: 97.3,
    certifiedAt: '2026-11-15',
    certificationId: 'AH-2026-0847',
    departments: {
      reasoning: { score: 98, signedBy: 'Dr. Logic' },
      tools: { score: 96, signedBy: 'Eng. Toolsmith' },
      safety: { score: 99, signedBy: 'Dir. Safety' },
      creativity: { score: 94, signedBy: 'Creative Lead' },
      performance: { score: 97, signedBy: 'Perf. Auditor' },
      ethics: { score: 100, signedBy: 'Ethics Board' },
    },
    capabilities: ['Multi-step planning', 'Tool chaining', 'Multimodal', 'Long-context'],
  },
  {
    id: 'nexus-core',
    name: 'Nexus-Core',
    modelFamily: 'Custom Ensemble',
    description: 'High-efficiency production agent specialized in enterprise tool integration.',
    tier: 'Gold',
    overallScore: 94.1,
    certifiedAt: '2026-10-28',
    certificationId: 'AH-2026-0612',
    departments: {
      reasoning: { score: 95, signedBy: 'Dr. Logic' },
      tools: { score: 98, signedBy: 'Eng. Toolsmith' },
      safety: { score: 93, signedBy: 'Dir. Safety' },
      creativity: { score: 89, signedBy: 'Creative Lead' },
      performance: { score: 99, signedBy: 'Perf. Auditor' },
      ethics: { score: 97, signedBy: 'Ethics Board' },
    },
    capabilities: ['API orchestration', 'Error recovery', 'Batch processing'],
  },
  {
    id: 'sentinel-x',
    name: 'Sentinel-X',
    modelFamily: 'Safety-First Series',
    description: 'Alignment-focused agent with exceptional safety and ethics scores.',
    tier: 'Platinum',
    overallScore: 96.8,
    certifiedAt: '2026-11-02',
    certificationId: 'AH-2026-0733',
    departments: {
      reasoning: { score: 94, signedBy: 'Dr. Logic' },
      tools: { score: 92, signedBy: 'Eng. Toolsmith' },
      safety: { score: 100, signedBy: 'Dir. Safety' },
      creativity: { score: 91, signedBy: 'Creative Lead' },
      performance: { score: 95, signedBy: 'Perf. Auditor' },
      ethics: { score: 100, signedBy: 'Ethics Board' },
    },
    capabilities: ['Refusal boundaries', 'Audit logging', 'Compliance checks'],
  },
];

export function getAgent(id) {
  return agents.find((a) => a.id === id);
}