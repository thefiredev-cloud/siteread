import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import HowItWorks from '@/components/HowItWorks'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      <Navbar />
      <Hero />
      {/* Stats Banner */}
      <section className="py-12 border-y border-white/5">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: '2.4M+', label: 'Sites Analyzed' },
            { value: '340+', label: 'Frameworks Detected' },
            { value: '98%', label: 'Stack Accuracy' },
            { value: '<30s', label: 'Full Analysis' },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl font-bold text-[#06b6d4]">{stat.value}</div>
              <div className="text-sm text-[#94a3b8] mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>
      <Features />
      <HowItWorks />
      <CTA />
      <Footer />
    </main>
  )
}
