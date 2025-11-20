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
          <h1 className="text-5xl font-bold mb-md">Learn AI</h1>
          <p className="text-xl opacity-70 mx-auto max-w-700">
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

          {/* Quick Wins & Common Mistakes - NEW SECTION */}
          <div className="mb-xl">
            <h2 className="text-3xl font-bold mb-lg">Quick Wins & Common Mistakes</h2>
            
            <div className="grid grid-3 gap-md">
              
              <div className="card">
                <div className="text-4xl mb-sm" aria-hidden="true">⚡</div>
                <h3 className="text-2xl font-bold mb-sm">Be Specific About Format</h3>
                <p className="text-base opacity-70">
                  "Write a blog post" gets you garbage. "Write 3 LinkedIn post ideas about remote work, each under 100 words, optimistic tone" gets you gold. AI needs constraints to shine.
                </p>
              </div>

              <div className="card">
                <div className="text-4xl mb-sm" aria-hidden="true">🎯</div>
                <h3 className="text-2xl font-bold mb-sm">Ask Follow-Up Questions</h3>
                <p className="text-base opacity-70">
                  The first answer is rarely the best. Try: "What didn't you mention that I should know?" or "Now explain this like I'm explaining it to my boss." The second prompt is where magic happens.
                </p>
              </div>

              <div className="card">
                <div className="text-4xl mb-sm" aria-hidden="true">💡</div>
                <h3 className="text-2xl font-bold mb-sm">Give AI a Personality</h3>
                <p className="text-base opacity-70">
                  "Explain this" is boring. "Explain this like you're a slightly jaded expert who's seen it all" is interesting. Personality = better, more useful outputs.
                </p>
              </div>
            </div>
          </div>

          {/* Practical Resources Section */}
          <div className="mb-xl">
            <h2 className="text-3xl font-bold mb-lg">Practical Resources</h2>
            
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

              {/* Which AI Should You Use */}
              <a 
                href="/resources/tool-comparison"
                className="card card-interactive"
                data-analytics="resource-tools"
              >
                <div className="text-4xl mb-sm" aria-hidden="true">🔧</div>
                <h3 className="text-2xl font-bold mb-sm">Which AI Should You Use?</h3>
                <p className="text-base opacity-70 mb-md">
                  ChatGPT vs Claude vs Gemini. What each one's actually good at, based on real use.
                </p>
                <div className="text-base font-semibold text-cyan">
                  Compare tools → <span className="badge badge-free">FREE</span>
                </div>
              </a>

              {/* Intermediate Techniques */}
              <a 
                href="/resources/advanced"
                className="card card-interactive"
                data-analytics="resource-advanced"
              >
                <div className="text-4xl mb-sm" aria-hidden="true">🚀</div>
                <h3 className="text-2xl font-bold mb-sm">Intermediate Techniques</h3>
                <p className="text-base opacity-70 mb-md">
                  Chain of thought, RAG, structured outputs. After you've mastered the basics.
                </p>
                <div className="text-base font-semibold text-cyan">
                  Learn more →
                </div>
              </a>
            </div>
          </div>

          {/* Try It Right Now - NEW SECTION */}
          <div className="mb-xl">
            <h2 className="text-3xl font-bold mb-md">Pick One. Try It Right Now.</h2>
            <p className="text-lg opacity-70 mb-lg">
              10 challenges that teach you how AI actually works. Each takes 2 minutes.
            </p>
            
            <div className="challenge-list">
              
              <div className="challenge-card challenge-card-1">
                <h3 className="text-xl font-bold mb-sm">The Character Test</h3>
                <p className="text-base opacity-70">
                  Ask AI: "Explain quantum physics like you're a medieval knight who just discovered it." Watch what happens when you give AI a personality.
                </p>
              </div>

              <div className="challenge-card challenge-card-2">
                <h3 className="text-xl font-bold mb-sm">The Comparison Game</h3>
                <p className="text-base opacity-70">
                  Ask: "Compare my morning routine to a tech startup's product launch." AI's weird analogies reveal how it thinks.
                </p>
              </div>

              <div className="challenge-card challenge-card-3">
                <h3 className="text-xl font-bold mb-sm">The Debate Setup</h3>
                <p className="text-base opacity-70">
                  Try: "Argue both sides: Is a hot dog a sandwich?" See how AI handles contradictory instructions.
                </p>
              </div>

              <div className="challenge-card challenge-card-4">
                <h3 className="text-xl font-bold mb-sm">The Specificity Challenge</h3>
                <p className="text-base opacity-70">
                  Ask for "a recipe" vs "a 30-minute vegetarian pasta recipe for 2 people with ingredients I can pronounce." Feel the difference.
                </p>
              </div>

              <div className="challenge-card challenge-card-5">
                <h3 className="text-xl font-bold mb-sm">The Tone Shift</h3>
                <p className="text-base opacity-70">
                  Ask AI to explain your job. Then add: "Now explain it like you're explaining to a 5-year-old." Then: "Now like a conspiracy theorist." Watch the range.
                </p>
              </div>

              <div className="challenge-card challenge-card-6">
                <h3 className="text-xl font-bold mb-sm">The Constraint Test</h3>
                <p className="text-base opacity-70">
                  Ask: "Write a product description without using these words: innovative, unique, cutting-edge, revolutionary." AI gets creative under constraints.
                </p>
              </div>

              <div className="challenge-card challenge-card-7">
                <h3 className="text-xl font-bold mb-sm">The Follow-Up Power</h3>
                <p className="text-base opacity-70">
                  Ask AI anything. Then ask: "What didn't you mention that I should know?" The second question is where magic happens.
                </p>
              </div>

              <div className="challenge-card challenge-card-8">
                <h3 className="text-xl font-bold mb-sm">The Bad Prompt Experiment</h3>
                <p className="text-base opacity-70">
                  Try: "write thing about stuff." Then try: "Write 3 LinkedIn post ideas about remote work productivity, each under 100 words, optimistic tone." Compare results.
                </p>
              </div>

              <div className="challenge-card challenge-card-9">
                <h3 className="text-xl font-bold mb-sm">The Format Flip</h3>
                <p className="text-base opacity-70">
                  Ask AI to explain something, then say: "Now as a haiku. Now as a tweet. Now as a text to a friend." Same info, totally different outputs.
                </p>
              </div>

              <div className="challenge-card challenge-card-10">
                <h3 className="text-xl font-bold mb-sm">The Expert Switch</h3>
                <p className="text-base opacity-70">
                  Ask AI about your industry. Then: "Now respond as someone who's been doing this for 20 years and is slightly jaded." Personality = better outputs.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </>
  )
}
