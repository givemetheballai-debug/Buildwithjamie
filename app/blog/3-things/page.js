import Navigation from '../../../components/Navigation'
import Footer from '../../../components/Footer'
import Link from 'next/link'

export default function ThreeThings() {
  return (
    <>
      <Navigation />
      
      {/* Article Header */}
      <div className="article-hero">
        <h1 className="text-4xl font-bold mb-md">
          3 Things You Should Be Using AI For Right Now
        </h1>
        <p className="text-xl">
          Stop overthinking it. Start here.
        </p>
      </div>

      {/* Article Content */}
      <article className="article-content">
        <div className="article-wrapper">
          
          <p style={{fontSize: '1.2rem', marginBottom: '3rem'}}>
            Everyone asks "what should I use AI for?" Here are three things that actually make your life easier—not gimmicks, not demos, just stuff that saves you time and mental energy.
          </p>

          {/* Thing 1 */}
          <section>
            <h2>1. Writing & Content</h2>
            <p>
              Write it yourself first. Then let AI punch it up. Change the tone. Adapt it for LinkedIn, a blog, Instagram. Same idea, different audiences. Stop starting from scratch every time.
            </p>
            
            <h3>Why this actually works:</h3>
            <p>
              You know your idea better than AI does. But AI is better at translating your idea across formats, tones, and platforms. You write the rough draft with your actual thoughts, then AI helps you turn one piece of content into five without starting over.
            </p>

            <h3>Best tools for this:</h3>
            <ul>
              <li><strong>ChatGPT-4:</strong> Great for punchy, conversational rewrites</li>
              <li><strong>Claude:</strong> Better for longer pieces that need to maintain your voice</li>
              <li><strong>Gemini:</strong> Good for quick tone shifts</li>
            </ul>

            <h3>Example prompts:</h3>
            <div style={{background: '#f7fafc', padding: '1.5rem', borderRadius: '8px', marginBottom: '1rem'}}>
              <p style={{marginBottom: 0, fontFamily: 'monospace', color: '#4a5568'}}>
                "Here's my rough draft about [topic]. Rewrite it for LinkedIn—keep my main points but make it more professional and add a hook at the start."
              </p>
            </div>
            <div style={{background: '#f7fafc', padding: '1.5rem', borderRadius: '8px', marginBottom: '1rem'}}>
              <p style={{marginBottom: 0, fontFamily: 'monospace', color: '#4a5568'}}>
                "Take this email and make it more direct. Cut the fluff but keep it friendly."
              </p>
            </div>

            <p>
              → <Link href="/resources/prompts">Grab more writing prompts here</Link>
            </p>
          </section>

          <hr />

          {/* Thing 2 */}
          <section>
            <h2>2. Research & Learning</h2>
            <p>
              Need to understand a new topic fast? AI synthesizes information way faster than you scrolling through 10 articles. Get the basics in 5 minutes, then decide where to dig deeper.
            </p>

            <h3>Why this actually works:</h3>
            <p>
              You don't need to become an expert in everything. Sometimes you just need to know enough to have an informed conversation, ask better questions, or decide if something's worth your time. AI gets you to "conversational fluency" in minutes instead of hours.
            </p>

            <h3>Best tools for this:</h3>
            <ul>
              <li><strong>Perplexity:</strong> Best for research with sources—it shows you where info came from</li>
              <li><strong>ChatGPT:</strong> Good for ELI5 explanations of complex topics</li>
              <li><strong>Claude:</strong> Great for comparing multiple viewpoints or perspectives</li>
            </ul>

            <h3>Example prompts:</h3>
            <div style={{background: '#f7fafc', padding: '1.5rem', borderRadius: '8px', marginBottom: '1rem'}}>
              <p style={{marginBottom: 0, fontFamily: 'monospace', color: '#4a5568'}}>
                "Explain [complex topic] like I'm smart but don't work in this field. Give me the 5 key concepts I need to understand to have an informed conversation about it."
              </p>
            </div>
            <div style={{background: '#f7fafc', padding: '1.5rem', borderRadius: '8px', marginBottom: '1rem'}}>
              <p style={{marginBottom: 0, fontFamily: 'monospace', color: '#4a5568'}}>
                "What are the main debates around [topic]? Give me the strongest argument from each side."
              </p>
            </div>

            <p>
              → <Link href="/resources/prompts">See learning & research prompts</Link>
            </p>
          </section>

          <hr />

          {/* Thing 3 */}
          <section>
            <h2>3. Life Planning</h2>
            <p>
              Stuck on a career move? Big decision? AI can map out scenarios, play devil's advocate, ask you the hard questions. It's like having a thinking partner who never gets tired of your bullshit.
            </p>

            <h3>Why this actually works:</h3>
            <p>
              Sometimes you don't need advice—you need to think out loud. AI is great at asking follow-up questions, challenging your assumptions, and helping you see blind spots. It's not replacing your friends or therapist, but it's always available when you need to work through something at 2am.
            </p>

            <h3>Best tools for this:</h3>
            <ul>
              <li><strong>ChatGPT-4:</strong> Good at structured decision frameworks</li>
              <li><strong>Claude:</strong> Better at nuanced conversations, maintains context well</li>
              <li><strong>Either one works—</strong> pick whichever you're already using</li>
            </ul>

            <h3>Example prompts:</h3>
            <div style={{background: '#f7fafc', padding: '1.5rem', borderRadius: '8px', marginBottom: '1rem'}}>
              <p style={{marginBottom: 0, fontFamily: 'monospace', color: '#4a5568'}}>
                "I'm deciding between [Option A] and [Option B]. Ask me 5 questions that will help me figure out which one actually fits my life better."
              </p>
            </div>
            <div style={{background: '#f7fafc', padding: '1.5rem', borderRadius: '8px', marginBottom: '1rem'}}>
              <p style={{marginBottom: 0, fontFamily: 'monospace', color: '#4a5568'}}>
                "Play devil's advocate on my plan to [do thing]. What am I not thinking about?"
              </p>
            </div>
            <div style={{background: '#f7fafc', padding: '1.5rem', borderRadius: '8px', marginBottom: '1rem'}}>
              <p style={{marginBottom: 0, fontFamily: 'monospace', color: '#4a5568'}}>
                "Help me map out 3 different scenarios for [decision] and what each one might look like in 6 months, 1 year, and 3 years."
              </p>
            </div>

            <p>
              → <Link href="/resources/prompts">Browse career & strategy prompts</Link>
            </p>
          </section>

          <hr />

          {/* More Uses */}
          <section>
            <h2>More Ways to Use AI</h2>
            <p>
              Once you've got the big three down, here's what else people use AI for:
            </p>
            <ul>
              <li><strong>Resume & cover letter help:</strong> AI catches generic phrases and suggests metrics-driven improvements</li>
              <li><strong>Job search strategy:</strong> Get company research, interview prep, salary negotiation scripts</li>
              <li><strong>Data analysis:</strong> Upload a spreadsheet, ask questions about patterns</li>
              <li><strong>Brainstorming:</strong> Stuck on a problem? AI generates 20 ideas in 30 seconds</li>
              <li><strong>Email drafts:</strong> The hard part is knowing what to say. AI helps you say it faster.</li>
              <li><strong>Learning to code:</strong> AI explains errors, suggests fixes, teaches as you build</li>
            </ul>
            <p>
              Basically anything that makes you go "ugh I don't want to think about this alone."
            </p>
          </section>

          <hr />

          {/* Conclusion */}
          <section>
            <h2>The Bottom Line</h2>
            <p>
              Don't overcomplicate it. Pick one thing from this list that would actually help you this week. Try it. See if it saves you time.
            </p>
            <p>
              AI works best when you use it for stuff you're already doing—just faster and with less friction.
            </p>
            <p style={{fontWeight: 600, fontSize: '1.2rem'}}>
              Start small. Build from there.
            </p>
          </section>

          {/* CTA */}
          <div className="article-cta">
            <h3>Ready to actually use these?</h3>
            <div className="article-cta-buttons">
              <Link href="/resources/prompts" className="btn btn-lg bg-gradient no-underline">
                Get the Prompts
              </Link>
              <Link href="/resources/tool-comparison" className="btn btn-lg btn-outline no-underline">
                Compare Tools
              </Link>
            </div>
          </div>

        </div>
      </article>

      <Footer />
    </>
  )
}
