import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'

export default function Protocol() {
  return (
    <>
      <Navigation />
      
      {/* Hero */}
      <section className="section-hero text-center bg-gradient">
        <div className="container">
          <h1 className="text-6xl font-bold mb-md">Human-AI Communication Protocol</h1>
          <p className="text-xl">A new emoji system designed for human-AI interaction</p>
        </div>
      </section>
      
      {/* Content */}
      <section className="section bg-secondary">
        <div className="container content-narrow">
          <div className="text-lg mb-xl line-height-relaxed">
            <p className="mb-md">
              Human-to-human emojis don't work for AI conversations. They were designed to convey emotions between people, not to signal processing states between humans and machines.
            </p>
            <p>
              This protocol solves that gap with three pillars designed specifically for human-AI interaction.
            </p>
          </div>
          
          <div className="card mb-lg border-left-cyan">
            <h3 className="text-3xl font-bold mb-md">1. Understanding</h3>
            <p className="text-base opacity-70 mb-md">Did the AI actually get what you asked?</p>
            <div className="flex gap-md flex-wrap">
              <div className="card text-center flex-1 min-width-150">
                <span className="text-5xl mb-sm display-block">✅</span>
                <div className="font-semibold text-cyan">Aligned</div>
              </div>
              <div className="card text-center flex-1 min-width-150">
                <span className="text-5xl mb-sm display-block">🔄</span>
                <div className="font-semibold text-cyan">Checking</div>
              </div>
              <div className="card text-center flex-1 min-width-150">
                <span className="text-5xl mb-sm display-block">❓</span>
                <div className="font-semibold text-cyan">Lost</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  )
}
