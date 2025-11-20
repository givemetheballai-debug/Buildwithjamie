'use client'

import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Navigation />
      
      {/* Stats Hero Section */}
      <section className="section-hero text-center bg-primary hero-pattern">
        <div className="container">
          <div className="grid grid-3 mb-xl mx-auto max-w-1000">
            <div className="stat-card">
              <h2 className="text-gradient text-6xl font-bold mb-sm stat-number">48%</h2>
              <p className="text-lg opacity-70">Don't know how to use AI effectively</p>
            </div>
            <div className="stat-card">
              <h2 className="text-gradient text-6xl font-bold mb-sm stat-number">52%</h2>
              <p className="text-lg opacity-70">Don't see AI as relevant to their work</p>
            </div>
            <div className="stat-card">
              <h2 className="text-gradient text-6xl font-bold mb-sm stat-number">15%</h2>
              <p className="text-lg opacity-70">Of AI projects actually deliver ROI</p>
            </div>
          </div>
          
          <h1 className="text-4xl font-bold mb-md headline-tight gradient-shimmer">
            Learn from someone building AI products daily—not just talking about them.
          </h1>
          <p className="text-xl opacity-70">Here's what I'm discovering.</p>
        </div>
      </section>

      {/* Credibility Strip */}
      <section className="section-sm text-center bg-tertiary border-top">
        <div className="container">
          <p className="text-xl mb-sm">
            15+ years in marketing and advertising. Early adopter who connects AI, business, and culture. Now shipping AI products and discovering what actually works through systematic experimentation.
          </p>
          <p className="text-base italic opacity-70">
            Award-winning marketer (Future Media 100, Global Innovation winner).
          </p>
        </div>
      </section>

      {/* Start Here - Featured Resources */}
      <section className="section bg-secondary">
        <div className="container">
          <h2 className="text-4xl font-bold mb-lg">Start Here</h2>
          
          <div className="grid grid-3 gap-md mb-xl">
            {/* Intro to AI - Featured Card */}
            <a 
              href="/resources/explainers" 
              className="card-featured card-interactive card-featured-flex"
              aria-label="Learn AI fundamentals"
            >
              <div>
                <div className="text-5xl mb-md" aria-hidden="true">🎓</div>
                <h3 className="text-3xl font-bold mb-md">Intro to AI</h3>
                <p className="text-xl opacity-70 line-height-snug">
                  For the 48% who don't know where to start. Clear, practical guidance.
                </p>
              </div>
              <div className="text-lg font-semibold mt-lg pt-md border-top-translucent">
                Start learning →
              </div>
            </a>

            {/* Prompt Library */}
            <a 
              href="/resources/prompts" 
              className="card card-interactive card-hover-lift"
              aria-label="Get AI prompts"
            >
              <div className="text-4xl mb-sm" aria-hidden="true">💬</div>
              <h3 className="text-2xl font-bold mb-sm">Prompt Library</h3>
              <p className="text-base opacity-70">Copy-paste prompts that actually work. No fluff.</p>
              <div className="text-base font-semibold text-cyan mt-md">Get prompts →</div>
            </a>

            {/* Context Template */}
            <a 
              href="/resources/context-template" 
              className="card card-interactive card-hover-lift"
              aria-label="Download context template"
            >
              <div className="text-4xl mb-sm" aria-hidden="true">📄</div>
              <h3 className="text-2xl font-bold mb-sm">Context Template</h3>
              <p className="text-base opacity-70">Stop repeating yourself. Make AI remember.</p>
              <div className="text-base font-semibold text-cyan mt-md">Download →</div>
            </a>
          </div>

          {/* What Nobody Tells You - NEW SECTION */}
          <h2 className="text-4xl font-bold mb-md">What Nobody Tells You About AI</h2>
          <p className="text-lg opacity-70 mb-lg">
            The real barriers to AI adoption—and the hard truths I've learned building products and working at enterprise scale.
          </p>
          
          <div className="grid grid-3 gap-md mb-xl">
            <div className="card">
              <h3 className="text-2xl font-bold mb-sm">Why do 85% of AI projects fail?</h3>
              <p className="text-base opacity-70 mb-md">
                Companies jump to implementation without understanding where AI adds genuine value vs. where it's just hype. They don't design for AI's unpredictability, and they don't know what "scalable AI product" actually means beyond the pilot.
              </p>
              <p className="text-base font-semibold text-cyan">
                Most failures happen before you write a single line of code.
              </p>
            </div>

            <div className="card">
              <h3 className="text-2xl font-bold mb-sm">What friction is everyone ignoring?</h3>
              <p className="text-base opacity-70 mb-md">
                I've documented 10+ fundamental friction points in human-AI collaboration: vague revision requests, content approval gaps, invisible time constraints, shifting motivations. These aren't bugs—they're infrastructure gaps.
              </p>
              <p className="text-base font-semibold text-cyan">
                Nobody's building the collaboration layer. That's the opportunity.
              </p>
            </div>

            <div className="card">
              <h3 className="text-2xl font-bold mb-sm">Where does AI actually fail?</h3>
              <p className="text-base opacity-70 mb-md">
                Built 5+ products. AI struggles with factual accuracy, multi-step reasoning, consistency over time, and nuanced context. The gap between demos and production is massive.
              </p>
              <p className="text-base font-semibold text-cyan">
                Know the limits before you build. It'll save you months.
              </p>
            </div>
          </div>

          {/* Latest Thinking - Blog Preview */}
          <h2 className="text-4xl font-bold mb-lg">Latest Thinking</h2>
          
          <div className="grid grid-3 gap-md mb-xl">
            <a 
              href="/blog/5-problems" 
              className="card card-interactive card-hover-lift"
              data-analytics="blog-5-problems-click"
            >
              <div className="media-container media-container-16-9 mb-md">
                <Image 
                  src="https://images.unsplash.com/photo-1763568258143-904ea924ac53?q=80&w=2070&auto=format&fit=crop"
                  alt="5 Problems Everyone Has With AI"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="badge badge-coming-soon mb-sm">BLOG</div>
              <h3 className="text-2xl font-bold mb-sm">
                5 Problems Everyone Has With AI (And How to Fix Them)
              </h3>
              <p className="opacity-70">
                The real barriers to AI adoption—and the practical solutions that actually work.
              </p>
            </a>

            <a 
              href="/blog/enterprise-ai" 
              className="card card-interactive card-hover-lift"
            >
              <div className="media-container media-container-16-9 mb-md">
                <Image 
                  src="https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?q=80&w=996&auto=format&fit=crop"
                  alt="Why 75% of AI Projects Fail"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="badge badge-premium mb-sm">COMING SOON</div>
              <h3 className="text-2xl font-bold mb-sm">
                Why 75% of AI Projects Fail
              </h3>
              <p className="opacity-70">
                I've seen this at scale. Here's what companies get wrong about AI adoption.
              </p>
            </a>

            <a 
              href="/blog" 
              className="card card-interactive card-hover-lift flex items-center justify-center min-h-300"
            >
              <div className="text-xl font-semibold">View all posts →</div>
            </a>
          </div>

          {/* Live Products */}
          <h2 className="text-4xl font-bold mb-md">Live Products</h2>
          <p className="text-lg opacity-70 mb-lg">
            I learn by building. Each product taught me something different about what AI can actually do, where it falls short, and what users genuinely need vs. what sounds impressive.
          </p>
          
          <div className="grid grid-3 gap-md">
            <div className="card">
              <div className="media-container media-container-16-9 mb-md">
                <Image 
                  src="/cosmicmash-screenshot.png" 
                  alt="Cosmic MASH screenshot"
                  fill
                  className="object-cover"
                />
              </div>
              <a 
                href="https://playcosmicmash.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-bold mb-sm block hover:text-cyan"
              >
                Cosmic MASH →
              </a>
              <p className="text-base opacity-70">
                AI-powered fortune-telling game. The challenge: making AI feel magical without feeling robotic. Discovered that users want transparency AND mysticism—they know it's AI, but they want to believe in the vibe.
              </p>
            </div>

            <div className="card">
              <div className="media-container media-container-16-9 mb-md">
                <Image 
                  src="/bigscream-screenshot.png" 
                  alt="Big Scream Energy screenshot"
                  fill
                  className="object-cover"
                />
              </div>
              <a 
                href="https://bigscreamenergy.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-bold mb-sm block hover:text-cyan"
              >
                Big Scream Energy →
              </a>
              <p className="text-base opacity-70">
                Cathartic screaming app with Lisa Frank chaos. The surprise: AI is genuinely good at empathy when you design for it. The trick is making encouragement feel real, not performative—harder than it sounds.
              </p>
            </div>

            <div className="card">
              <div className="media-container media-container-16-9 mb-md">
                <Image 
                  src="/Softwitch.png" 
                  alt="SoftWitch screenshot"
                  fill
                  className="object-cover"
                />
              </div>
              <a 
                href="https://softwitch.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-bold mb-sm block hover:text-cyan"
              >
                SoftWitch →
              </a>
              <p className="text-base opacity-70">
                Millennial witchcraft platform—"magic for people who want the vibes, not the rules." Building this taught me: sophisticated personalization doesn't have to feel complicated to users. Make the AI invisible where it matters, magical where it counts.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
