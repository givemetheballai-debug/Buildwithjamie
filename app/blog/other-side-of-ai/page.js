import Navigation from '../../../components/Navigation'
import Footer from '../../../components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'The Other Side of AI: Can We Build the Future Without Losing Ourselves? | Jamie Williams',
  description: 'Gen Z\'s AI skepticism, data-center emissions, and creative ethics are reshaping marketing. Here\'s how brands can use AI responsibly—amplifying human voices instead of replacing them.',
}

export default function OtherSideOfAI() {
  return (
    <>
      <Navigation />
      
      {/* Hero */}
      <section className="section-hero bg-gradient">
        <div className="container content-narrow text-center">
          <h1 className="text-5xl font-bold mb-md">The Other Side of AI: Can We Build the Future Without Losing Ourselves?</h1>
          <div className="mb-md" style={{display: 'flex', gap: '0.5rem', justifyContent: 'center', flexWrap: 'wrap'}}>
            <span className="badge badge-live">Ethics</span>
            <span className="badge badge-live">AI Strategy</span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="section bg-secondary">
        <div className="container content-narrow">
          <article className="text-lg line-height-relaxed">
            
            <p className="mb-lg">
              Just a year ago, marketers couldn't move fast enough to slap "AI-powered" on everything. Now, the energy feels… different.
            </p>

            <p className="mb-lg">
              Gen Z—the trendsetters who shape culture—are showing AI fatigue. They're skeptical of AI influencers, wary of AI art, and asking hard questions about energy use, bias, and creativity.
            </p>

            <p className="mb-xl">
              It's not that people don't want AI—they just want accountable AI.
            </p>

            <h2 className="text-3xl font-bold text-cyan mb-md">1. The Ethical Dilemma of Modern Marketing</h2>
            
            <p className="mb-md opacity-70">
              Marketers and creators are caught between two truths:
            </p>

            <p className="mb-md opacity-70">
              Use AI and risk alienating consumers who fear it's soulless or exploitative.
            </p>

            <p className="mb-xl opacity-70">
              Ignore AI and risk being left behind.
            </p>

            <p className="mb-xl opacity-70">
              Efficiency vs. empathy has always been the marketing trade-off. AI just turned the dial up.
            </p>

            <h2 className="text-3xl font-bold text-cyan mb-md">2. The AI Backlash Is Real — But So Is the Revolution</h2>
            
            <p className="mb-md opacity-70">
              The revolution is happening. AI is already how ideas get sourced, tested, and shipped. But backlash is useful—it's pressure that keeps us honest.
            </p>

            <p className="mb-md opacity-70">
              When consumers push back, they're really saying:
            </p>

            <ul className="mb-xl opacity-70" style={{listStyle: 'disc', paddingLeft: '2rem'}}>
              <li className="mb-sm">Don't just bolt on a chatbot; solve a real problem.</li>
              <li className="mb-sm">Don't mimic creativity; collaborate with it.</li>
              <li className="mb-sm">Don't erase artists; elevate them.</li>
            </ul>

            <h2 className="text-3xl font-bold text-cyan mb-md">3. The Environmental Cost We Can't Ignore</h2>
            
            <p className="mb-md opacity-70">
              Every query, image, and model runs on servers that burn energy. Data centers are the new factories.
            </p>

            <p className="mb-xl opacity-70">
              If we're building the next industrial revolution, it's on us to build it sustainably. AI that's "smart" but careless with resources isn't progress—it's regression with better branding.
            </p>

            <h2 className="text-3xl font-bold text-cyan mb-md">4. Diversity Is the Real AI Safety Feature</h2>
            
            <p className="mb-md opacity-70">
              If AI is trained by a narrow slice of humanity, it will serve a narrow slice of humanity.
            </p>

            <p className="mb-xl opacity-70">
              Diverse teams aren't just a checkbox—they're a safeguard. AI that listens to more voices will create output that reflects the world it claims to serve.
            </p>

            <h2 className="text-3xl font-bold text-cyan mb-md">5. The Future of AI Marketing Isn't Automation — It's Amplification</h2>
            
            <p className="mb-md opacity-70">
              The real win isn't replacing people. It's empowering them. AI should:
            </p>

            <ul className="mb-md opacity-70" style={{listStyle: 'disc', paddingLeft: '2rem'}}>
              <li className="mb-sm">Source and synthesize ideas faster.</li>
              <li className="mb-sm">Enable personalization that feels real.</li>
              <li className="mb-sm">Let small teams punch way above their weight.</li>
            </ul>

            <p className="mb-xl opacity-70">
              But it should never flatten emotion or fake authenticity. If your audience can tell an algorithm wrote it, you've already lost them.
            </p>

            <h2 className="text-3xl font-bold text-cyan mb-md">6. So Where Do We Go From Here?</h2>
            
            <p className="mb-md opacity-70">
              Consumers can demand better. Marketers can build better. We can use AI—but insist it's ethical, inclusive, and human-centric.
            </p>

            <p className="mb-xl opacity-70">
              AI isn't the villain. It's the mirror. And how we use it will define the next decade of creativity.
            </p>

            <p className="text-xl font-bold text-center mt-xl mb-xl">
              "The point isn't to stop the future — it's to make sure humans are still invited to it."
            </p>

          </article>

          {/* Back to Blog */}
          <div className="text-center mt-xl">
            <Link href="/blog" className="btn btn-outline no-underline">
              ← Back to Blog
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
