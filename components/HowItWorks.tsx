export default function HowItWorks() {
  const steps = [
    { number: '01', title: 'Enter Any URL', description: 'Paste the URL of any website — public or private (with auth).' },
    { number: '02', title: 'AI Analyzes Everything', description: 'SiteRead scans all layers: frontend, backend signals, infrastructure, and design patterns.' },
    { number: '03', title: 'Get Full Intelligence', description: 'Receive a complete report with stack breakdown, architecture diagram, and rebuild-ready scaffold.' },
  ]

  return (
    <section id="how-it-works" className="py-24 bg-white/[0.01]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">How It <span className="text-[#06b6d4]">Works</span></h2>
          <p className="text-[#94a3b8]">Three steps from URL to full architectural intelligence.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={step.number} className="relative">
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-[#06b6d4]/30 to-transparent z-10" />
              )}
              <div className="glass rounded-xl p-8">
                <div className="text-5xl font-bold text-[#06b6d4]/20 mb-4">{step.number}</div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-[#94a3b8]">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
