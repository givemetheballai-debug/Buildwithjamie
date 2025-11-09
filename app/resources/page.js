'use client'

import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'

export default function Resources() {
  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="section-hero text-center bg-primary border-bottom">
        <div className="container">
          <h1 className="text-5xl font-bold mb-md">AI Resources</h1>
          <p className="text-xl opacity-70 mx-auto" style={{maxWidth: '700px'}}>
            Everything I've learned about using AI effectively. No fluff, no hype—just what actually works.
          </p>
        </div>
      </section>

      {/* Main Resources Grid */}
      <section className="section bg-secondary">
        <div className="container">
          
          {/* Getting Started Section */}
          <div className="mb-xl">
            <h2 className="text-3xl font-bold mb-lg">Getting Started</h2>
            
            <div className="grid grid-2 gap-md">
              
              {/* Intro to AI */}
              <a 
                href="/resources/explainers"
                className="card-featured card-interactive"
                data-analytics="resource-intro-ai"
              >
                <div className="text-5xl mb-md" aria-hidden="true">🎓</div>
                <h3 className="text-3xl font-bold mb-md">Intro to AI</h3>
                <p className="text-lg opacity-70 mb-lg">
                  New to AI? Start here. Clear explanations of what AI is, how it works, and how to actually use it in your work.
                </p>
                <div className="text-base font-semibold">
                  Start learning → <span className="badge badge-free">FREE</span>
                </div>
              </a>

              {/* Context Template */}
              <a 
                href="/resources/context-template"
                className="card card-interactive"
                data-analytics="resource-context-template"
              >
                <div className="text-5xl mb-md" aria-hidden="true">📄</div>
                <h3 className="text-3xl font-bold mb-md">AI Context Template</h3>
                <p className="text-lg opacity-70 mb-lg">
                  Stop repeating yourself. This template helps AI remember who you are, what you do, and how you work.
                </p>
                <div className="text-base font-semibold text-cyan">
                  Download template → <span className="badge badge-free">FREE</span>
                </div>
              </a>
            </div>
          </div>

          {/* Practical Tools Section */}
          <div className="mb-xl">
            <h2 className="text-3xl font-bold mb-lg">Practical Tools</h2>
            
            <div className="grid grid-3 gap-md">
              
              {/* Prompt Library */}
              <a 
                href="/resources/prompts"
                className="card card-interactive"
                data-analytics="resource-prompts"
              >
                <div className="text-4xl mb-sm" aria-hidden="true">💬</div>
                <h3 className="text-2xl font-bold mb-sm">Prompt Library</h3>
                <p className="text-base opacity-70 mb-md">
                  25+ copy-paste prompts for writing, research, analysis, and more. Actually tested, actually work.
                </p>
                <div className="text-base font-semibold text-cyan">
                  Browse prompts → <span className="badge badge-free">FREE</span>
                </div>
              </a>

              {/* Tool Comparison */}
              <a 
                href="/resources/tool-comparison"
                className="card card-interactive"
                data-analytics="resource-tools"
              >
                <div className="text-4xl mb-sm" aria-hidden="true">🔧</div>
                <h3 className="text-2xl font-bold mb-sm">Tool Comparison</h3>
                <p className="text-base opacity-70 mb-md">
                  ChatGPT vs Claude vs Gemini. What each one's actually good at, based on real use.
                </p>
                <div className="text-base font-semibold text-cyan">
                  Compare tools → <span className="badge badge-free">FREE</span>
                </div>
              </a>

              {/* Advanced Techniques */}
              <a 
                href="/resources/advanced"
                className="card card-interactive"
                data-analytics="resource-advanced"
              >
                <div className="text-4xl mb-sm" aria-hidden="true">🚀</div>
                <h3 className="text-2xl font-bold mb-sm">Advanced Techniques</h3>
                <p className="text-base opacity-70 mb-md">
                  Chain of thought, RAG, structured outputs. For when you're ready to level up.
                </p>
                <div className="text-base font-semibold text-cyan">
                  Learn advanced →
                </div>
              </a>
            </div>
          </div>

          {/* Premium Tier Placeholder - Hidden but ready */}
          <div style={{display: 'none'}} className="bg-gradient rounded-lg text-center p-xl mb-xl">
            <h2 className="text-4xl font-bold mb-md">Want More?</h2>
            <p className="text-xl opacity-70 mb-lg">
              Get access to advanced courses, exclusive templates, and monthly workshops.
            </p>
            <button 
              className="btn btn-lg"
              data-analytics="premium-upgrade-cta"
              style={{background: 'white', color: '#000'}}
            >
              Upgrade to Premium
            </button>
          </div>

        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section bg-tertiary border-top">
        <div className="container container-md text-center">
          <h2 className="text-3xl font-bold mb-md">Get New Resources First</h2>
          <p className="text-lg opacity-70 mb-lg">
            New guides, prompts, and insights delivered to your inbox. Plus daily intelligence on AI, business, and culture.
          </p>
          
          <form 
            action="#" 
            method="POST"
            className="form mx-auto"
            style={{maxWidth: '500px', justifyContent: 'center'}}
            aria-label="Subscribe to newsletter"
            data-analytics="resources-newsletter-signup"
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
              className="btn btn-lg bg-gradient"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </>
  )
}
