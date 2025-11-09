import Navigation from '../../../components/Navigation'
import Footer from '../../../components/Footer'
import Link from 'next/link'

export default function ThreeThings() {
  return (
    <>
      <Navigation />
      
      {/* Article Header */}
      <div style={{
        marginTop: '70px',
        padding: '4rem 2rem',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        textAlign: 'center'
      }}>
        <h1 style={{fontSize: '2.5rem', marginBottom: '1rem', fontWeight: '700'}}>
          3 Things You Should Be Using AI For Right Now
        </h1>
        <p style={{fontSize: '1.1rem', opacity: '0.9'}}>
          Stop overthinking it. Start here.
        </p>
      </div>

      {/* Article Content */}
      <article style={{padding: '4rem 2rem'}}>
        <div style={{maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem', lineHeight: '1.8', color: '#2d3748'}}>
          
          <p style={{marginBottom: '3rem', fontSize: '1.2rem'}}>
            Everyone asks "what should I use AI for?" Here are three things that actually make your life easier—not gimmicks, not demos, just stuff that saves you time and mental energy.
          </p>

          {/* Thing 1 */}
          <section style={{marginBottom: '3rem'}}>
            <h2 style={{fontSize: '2rem', marginBottom: '1rem', color: '#2d3748'}}>
              1. Writing & Content
            </h2>
            <p style={{marginBottom: '1rem'}}>
              Write it yourself first. Then let AI punch it up. Change the tone. Adapt it for LinkedIn, a blog, Instagram. Same idea, different audiences. Stop starting from scratch every time.
            </p>
            
            <h3 style={{fontSize: '1.3rem', marginTop: '2rem', marginBottom: '1rem', color: '#667eea'}}>
              Why this actually works:
            </h3>
            <p style={{marginBottom: '1rem'}}>
              You know your idea better than AI does. But AI is better at translating your idea across formats, tones, and platforms. You write the rough draft with your actual thoughts, then AI helps you turn one piece of content into five without starting over.
            </p>

            <h3 style={{fontSize: '1.3rem', marginTop: '2rem', marginBottom: '1rem', color: '#667eea'}}>
              Best tools for this:
            </h3>
            <ul style={{marginBottom: '1rem', paddingLeft: '2rem'}}>
              <li><strong>ChatGPT-4:</strong> Great for punchy, conversational rewrites</li>
              <li><strong>Claude:</strong> Better for longer pieces that need to maintain your voice</li>
              <li><strong>Gemini:</strong> Good for quick tone shifts</li>
            </ul>

            <h3 style={{fontSize: '1.3rem', marginTop: '2rem', marginBottom: '1rem', color: '#667eea'}}>
              Example prompts:
            </h3>
            <div style={{background: '#f7fafc', padding: '1.5rem', borderRadius: '8px', marginBottom: '1rem'}}>
              <p style={{marginBottom: '0.5rem', fontFamily: 'monospace'}}>
                "Here's my rough draft about [topic]. Rewrite it for LinkedIn—keep my main points but make it more professional and add a hook at the start."
              </p>
            </div>
            <div style={{background: '#f7fafc', padding: '1.5rem', borderRadius: '8px', marginBottom: '1rem'}}>
              <p style={{marginBottom: '0.5rem', fontFamily: 'monospace'}}>
                "Take this email and make it more direct. Cut the fluff but keep it friendly."
              </p>
            </div>

            <p>
              → <Link href="/resources/prompts" style={{color: '#667eea', textDecoration: 'underline'}}>Grab more writing prompts here</Link>
            </p>
          </section>

          <hr style={{margin: '3rem 0', border: 'none', borderTop: '1px solid #e2e8f0'}} />

          {/* Thing 2 */}
          <section style={{marginBottom: '3rem'}}>
            <h2 style={{fontSize: '2rem', marginBottom: '1rem', color: '#2d3748'}}>
              2. Research & Learning
            </h2>
            <p style={{marginBottom: '1rem'}}>
              Need to understand a new topic fast? AI synthesizes information way faster than you scrolling through 10 articles. Get the basics in 5 minutes, then decide where to dig deeper.
            </p>

            <h3 style={{fontSize: '1.3rem', marginTop: '2rem', marginBottom: '1rem', color: '#667eea'}}>
              Why this actually works:
            </h3>
            <p style={{marginBottom: '1rem'}}>
              You don't need to become an expert in everything. Sometimes you just need to know enough to have an informed conversation, ask better questions, or decide if something's worth your time. AI gets you to "conversational fluency" in minutes instead of hours.
            </p>

            <h3 style={{fontSize: '1.3rem', marginTop: '2rem', marginBottom: '1rem', color: '#667eea'}}>
              Best tools for this:
            </h3>
            <ul style={{marginBottom: '1rem', paddingLeft: '2rem'}}>
              <li><strong>Perplexity:</strong> Best for research with sources—it shows you where info came from</li>
              <li><strong>ChatGPT:</strong> Good for ELI5 explanations of complex topics</li>
              <li><strong>Claude:</strong> Great for comparing multiple viewpoints or perspectives</li>
            </ul>

            <h3 style={{fontSize: '1.3rem', marginTop: '2rem', marginBottom: '1rem', color: '#667eea'}}>
              Example prompts:
            </h3>
            <div style={{background: '#f7fafc', padding: '1.5rem', borderRadius: '8px', marginBottom: '1rem'}}>
              <p style={{marginBottom: '0.5rem', fontFamily: 'monospace'}}>
                "Explain [complex topic] like I'm smart but don't work in this field. Give me the 5 key concepts I need to understand to have an informed conversation about it."
              </p>
            </div>
            <div style={{background: '#f7fafc', padding: '1.5rem', borderRadius: '8px', marginBottom: '1rem'}}>
              <p style={{marginBottom: '0.5rem', fontFamily: 'monospace'}}>
                "What are the main debates around [topic]? Give me the strongest argument from each side."
              </p>
            </div>

            <p>
              → <Link href="/resources/prompts" style={{color: '#667eea', textDecoration: 'underline'}}>See learning & research prompts</Link>
            </p>
          </section>

          <hr style={{margin: '3rem 0', border: 'none', borderTop: '1px solid #e2e8f0'}} />

          {/* Thing 3 */}
          <section style={{marginBottom: '3rem'}}>
            <h2 style={{fontSize: '2rem', marginBottom: '1rem', color: '#2d3748'}}>
              3. Life Planning
            </h2>
            <p style={{marginBottom: '1rem'}}>
              Stuck on a career move? Big decision? AI can map out scenarios, play devil's advocate, ask you the hard questions. It's like having a thinking partner who never gets tired of your bullshit.
            </p>

            <h3 style={{fontSize: '1.3rem', marginTop: '2rem', marginBottom: '1rem', color: '#667eea'}}>
              Why this actually works:
            </h3>
            <p style={{marginBottom: '1rem'}}>
              Sometimes you don't need advice—you need to think out loud. AI is great at asking follow-up questions, challenging your assumptions, and helping you see blind spots. It's not replacing your friends or therapist, but it's always available when you need to work through something at 2am.
            </p>

            <h3 style={{fontSize: '1.3rem', marginTop: '2rem', marginBottom: '1rem', color: '#667eea'}}>
              Best tools for this:
            </h3>
            <ul style={{marginBottom: '1rem', paddingLeft: '2rem'}}>
              <li><strong>ChatGPT-4:</strong> Good at structured decision frameworks</li>
              <li><strong>Claude:</strong> Better at nuanced conversations, maintains context well</li>
              <li><strong>Either one works—</strong> pick whichever you're already using</li>
            </ul>

            <h3 style={{fontSize: '1.3rem', marginTop: '2rem', marginBottom: '1rem', color: '#667eea'}}>
              Example prompts:
            </h3>
            <div style={{background: '#f7fafc', padding: '1.5rem', borderRadius: '8px', marginBottom: '1rem'}}>
              <p style={{marginBottom: '0.5rem', fontFamily: 'monospace'}}>
                "I'm deciding between [Option A] and [Option B]. Ask me 5 questions that will help me figure out which one actually fits my life better."
              </p>
            </div>
            <div style={{background: '#f7fafc', padding: '1.5rem', borderRadius: '8px', marginBottom: '1rem'}}>
              <p style={{marginBottom: '0.5rem', fontFamily: 'monospace'}}>
                "Play devil's advocate on my plan to [do thing]. What am I not thinking about?"
              </p>
            </div>
            <div style={{background: '#f7fafc', padding: '1.5rem', borderRadius: '8px', marginBottom: '1rem'}}>
              <p style={{marginBottom: '0.5rem', fontFamily: 'monospace'}}>
                "Help me map out 3 different scenarios for [decision] and what each one might look like in 6 months, 1 year, and 3 years."
              </p>
            </div>

            <p>
              → <Link href="/resources/prompts" style={{color: '#667eea', textDecoration: 'underline'}}>Browse career & strategy prompts</Link>
            </p>
          </section>

          <hr style={{margin: '3rem 0', border: 'none', borderTop: '1px solid #e2e8f0'}} />

          {/* More Uses */}
          <section style={{marginBottom: '3rem'}}>
            <h2 style={{fontSize: '2rem', marginBottom: '1rem', color: '#2d3748'}}>
              More Ways to Use AI
            </h2>
            <p style={{marginBottom: '1rem'}}>
              Once you've got the big three down, here's what else people use AI for:
            </p>
            <ul style={{marginBottom: '1rem', paddingLeft: '2rem'}}>
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

          <hr style={{margin: '3rem 0', border: 'none', borderTop: '1px solid #e2e8f0'}} />

          {/* Conclusion */}
          <section style={{marginBottom: '3rem'}}>
            <h2 style={{fontSize: '2rem', marginBottom: '1rem', color: '#2d3748'}}>
              The Bottom Line
            </h2>
            <p style={{marginBottom: '1rem'}}>
              Don't overcomplicate it. Pick one thing from this list that would actually help you this week. Try it. See if it saves you time.
            </p>
            <p style={{marginBottom: '1rem'}}>
              AI works best when you use it for stuff you're already doing—just faster and with less friction.
            </p>
            <p style={{fontWeight: '600', fontSize: '1.2rem'}}>
              Start small. Build from there.
            </p>
          </section>

          {/* CTA */}
          <div style={{
            marginTop: '4rem',
            padding: '2rem',
            background: '#f7fafc',
            borderRadius: '12px',
            textAlign: 'center'
          }}>
            <h3 style={{fontSize: '1.5rem', marginBottom: '1rem', color: '#2d3748'}}>
              Ready to actually use these?
            </h3>
            <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap'}}>
              <Link href="/resources/prompts" style={{
                display: 'inline-block',
                padding: '0.75rem 2rem',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                borderRadius: '6px',
                textDecoration: 'none',
                fontWeight: '600'
              }}>
                Get the Prompts
              </Link>
              <Link href="/resources/tool-comparison" style={{
                display: 'inline-block',
                padding: '0.75rem 2rem',
                background: 'white',
                color: '#667eea',
                border: '2px solid #667eea',
                borderRadius: '6px',
                textDecoration: 'none',
                fontWeight: '600'
              }}>
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
