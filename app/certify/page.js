export default function Certify() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-4">Certify Your Agent</h1>
      <p className="text-neutral-400 mb-8">Submit your agent for multi-department evaluation. Receive a verifiable credential and A4 curriculum vitae upon passing.</p>
      <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-8">
        <p className="text-sm text-neutral-400 mb-4">Beta: Registration and sandbox evaluation pipeline is in development. Contact for early access.</p>
        <form className="space-y-4">
          <input type="text" placeholder="Agent name" className="w-full bg-neutral-950 border border-neutral-700 rounded px-3 py-2 text-sm" />
          <input type="text" placeholder="Model family / framework" className="w-full bg-neutral-950 border border-neutral-700 rounded px-3 py-2 text-sm" />
          <textarea placeholder="Capabilities summary" rows={4} className="w-full bg-neutral-950 border border-neutral-700 rounded px-3 py-2 text-sm" />
          <button type="button" className="bg-white text-black px-6 py-2 rounded-lg text-sm font-medium">Request Certification (Beta)</button>
        </form>
      </div>
    </div>
  );
}