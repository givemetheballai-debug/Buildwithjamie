'use client'

import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Navigation />
      
      {/* Stats Hero Section */}
      <section className="section-hero text-center bg-primary">
        <div className="container">
          <div className="grid grid-3 mb-xl mx-auto" style={{maxWidth: '1000px'}}>
            <div>
              <h2 className="text-gradient text-6xl font-bold mb-sm" style={{lineHeight: '1'}}>48%</h2>
              <p className="text-lg opacity-70">Don't know how to use AI effectively</p>
            </div>
            <div>
              <h2 className="text-gradient text-6xl font-bold mb-sm" style={{lineHeight: '1'}}>63%</h2>
              <p className="text-lg opacity-70">Don't see AI as relevant to their work</p>
            </div>
            <div>
              <h2 className="text-gradient text-6xl font-bold mb-sm" style={{lineHeight: '1'}}>25%</h2>
              <p className="text-lg opacity-70">Of AI projects actually deliver ROI</p>
            </div>
          </div>
          
          <h1 className="text-4xl font-bold mb-md" style={{lineHeight: '1.2'}}>
            I spot patterns across AI, business, and culture—then I experiment.
          </h1>
          <p className="text-xl opacity-70">Here's what I'm learning.</p>
        </div>
      </section>

      {/* Credibility Strip */}
      <section className="section-sm text-center bg-tertiary border-top">
        <div className="container">
          <p className="text-xl mb-sm">
            15+ years in marketing and advertising. Early adopter who connects AI, business, and culture.
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
              className="card-featured card-interactive"
              aria-label="Learn AI fundamentals"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '350px'
              }}
            >
              <div>
                <div className="text-5xl mb-md" aria-hidden="true">🎓</div>
                <h3 className="text-3xl font-bold mb-md">Intro to AI</h3>
                <p className="text-xl opacity-70" style={{lineHeight: '1.6'}}>
                  For the 48% who don't know where to start. Clear, practical guidance.
                </p>
              </div>
              <div className="text-lg font-semibold mt-lg pt-md border-top" style={{borderColor: 'rgba(255,255,255,0.2)'}}>
                Start learning →
              </div>
            </a>

            {/* Prompt Library */}
            <a 
              href="/resources/prompts" 
              className="card card-interactive"
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
              className="card card-interactive"
              aria-label="Download context template"
            >
              <div className="text-4xl mb-sm" aria-hidden="true">📄</div>
              <h3 className="text-2xl font-bold mb-sm">Context Template</h3>
              <p className="text-base opacity-70">Stop repeating yourself. Make AI remember.</p>
              <div className="text-base font-semibold text-cyan mt-md">Download →</div>
            </a>
          </div>

          {/* Latest Thinking - Blog Preview */}
          <h2 className="text-4xl font-bold mb-lg">Latest Thinking</h2>
          
          <div className="grid grid-3 gap-md mb-xl">
            <a 
              href="/blog/5-problems" 
              className="card card-interactive"
              data-analytics="blog-5-problems-click"
            >
              <div className="media-container media-container-16-9 mb-md">
                <div className="media-placeholder">Featured image</div>
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
              className="card card-interactive"
            >
              <div className="media-container media-container-16-9 mb-md">
                <div className="media-placeholder">Featured image</div>
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
              className="card card-interactive flex items-center justify-center"
              style={{minHeight: '300px'}}
            >
              <div className="text-xl font-semibold">View all posts →</div>
            </a>
          </div>

          {/* Current Experiments */}
          <h2 className="text-4xl font-bold mb-md">Current Experiments</h2>
          <p className="text-lg opacity-70 mb-lg">
            I learn by building. Here are some things I'm testing.
          </p>
          
          <div className="grid grid-3 gap-md">
            <div className="card">
              <div className="media-container media-container-16-9 mb-md">
                <div className="media-placeholder">Screenshot</div>
              </div>
              <h3 className="text-xl font-bold mb-sm">givemetheball.com</h3>
              <p className="text-base opacity-70">
                Women's sports + leadership platform. Live scores, newsletters, built with AI.
              </p>
            </div>

            <div className="card">
              <div className="media-container media-container-16-9 mb-md">
                <div className="media-placeholder">Screenshot</div>
              </div>
              <h3 className="text-xl font-bold mb-sm">Fancy Lazy Travel</h3>
              <p className="text-base opacity-70">
                3K+ Instagram followers. Testing ad strategies in real-time.
              </p>
            </div>

            <div className="card">
              <div className="media-container media-container-16-9 mb-md">
                <div className="media-placeholder">Newsletter preview</div>
              </div>
              <h3 className="text-xl font-bold mb-sm">The Daily AI</h3>
              <p className="text-base opacity-70">
                Intelligence on AI, business, markets, and culture. Coming soon.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section bg-gradient text-center">
        <div className="container container-md">
          <h2 className="text-4xl font-bold mb-md">📰 The Daily AI</h2>
          <p className="text-xl mb-lg opacity-70">
            Intelligence on AI, business, markets, and culture. The patterns that matter.
          </p>
          
          <form 
            action="#" 
            method="POST"
            className="form mx-auto"
            style={{maxWidth: '500px'}}
            aria-label="Subscribe to newsletter"
          >
            <input 
              type="email" 
              name="email"
              placeholder="Your email"
              required
              className="form-input"
              aria-label="Email address"
            />
            <button 
              type="submit"
              className="btn btn-lg"
              data-analytics="newsletter-signup"
              style={{
                background: '#000000',
                color: 'white',
                border: 'none'
              }}
            >
              Join the Waitlist
            </button>
          </form>
          
          <p className="text-sm mt-md opacity-70">
            Coming soon. Be first in line.
          </p>
        </div>
      </section>

      <Footer />
    </>
  )
}
