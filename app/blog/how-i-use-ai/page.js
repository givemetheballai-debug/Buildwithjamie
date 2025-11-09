import Navigation from '../../../components/Navigation'
import Footer from '../../../components/Footer'
import Link from 'next/link'

export default function HowIUseAI() {
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
          How I Actually Use AI (Every Day)
        </h1>
        <p style={{fontSize: '1.1rem', opacity: '0.9'}}>
          Not magic. Just practical ways AI helps me work, think, and build faster.
        </p>
      </div>

      {/* Article Content */}
      <article style={{padding: '4rem 2rem'}}>
        <div style={{maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem', lineHeight: '1.8', color: '#2d3748'}}>
          
          <p style={{marginBottom: '3rem', fontSize: '1.2rem'}}>
            Everyone's talking about AI like it's magic. Here's how I actually use it — every day — across work, writing, and building new things.
          </p>

          {/* Use Case 1 */}
          <section style={{marginBottom: '3rem'}}>
            <h2 style={{fontSize: '2rem', marginBottom: '1rem', color: '#2d3748'}}>
              1. Idea Wrangling
            </h2>
            <p style={{marginBottom: '1rem'}}>
              When my brain's running 12 tabs at once, AI helps organize the chaos — turning random thoughts into frameworks, outlines, or captions that make sense.
            </p>

            <h3 style={{fontSize: '1.3rem', marginTop: '2rem', marginBottom: '1rem', color: '#667eea'}}>
              What this looks like:
            </h3>
            <p style={{marginBottom: '1rem'}}>
              I'll dump a brain download into Claude — half-formed ideas, scattered notes, things I'm mulling over. Then I ask it to organize it into something structured.
            </p>

            <div style={{background: '#f7fafc', padding: '1.5rem', borderRadius: '8px', marginBottom: '1rem'}}>
              <p style={{marginBottom: '0.5rem', fontWeight: '600'}}>Example prompt:</p>
              <p style={{fontFamily: 'monospace', fontSize: '1rem'}}>
                "Here are my random thoughts about [topic]. Turn this into a clear outline with main points and supporting details. Flag anything that feels off or contradicts."
              </p>
            </div>

            <h3 style={{fontSize: '1.3rem', marginTop: '2rem', marginBottom: '1rem', color: '#667eea'}}>
              Why it works:
            </h3>
            <p>
              My brain generates ideas faster than I can organize them. AI is the filing cabinet that turns chaos into something I can actually use.
            </p>
          </section>

          <hr style={{margin: '3rem 0', border: 'none', borderTop: '1px solid #e2e8f0'}} />

          {/* Use Case 2 */}
          <section style={{marginBottom: '3rem'}}>
            <h2 style={{fontSize: '2rem', marginBottom: '1rem', color: '#2d3748'}}>
              2. Daily Intel
            </h2>
            <p style={{marginBottom: '1rem'}}>
              I use it to stay current — pulling quick news summaries, media trends, market signals, and ideas that help me see patterns faster.
            </p>

            <h3 style={{fontSize: '1.3rem', marginTop: '2rem', marginBottom: '1rem', color: '#667eea'}}>
              What this looks like:
            </h3>
            <p style={{marginBottom: '1rem'}}>
              Instead of scrolling through 10 newsletters and 20 tabs, I ask Perplexity or ChatGPT to synthesize what's happening in my areas of interest.
            </p>

            <div style={{background: '#f7fafc', padding: '1.5rem', borderRadius: '8px', marginBottom: '1rem'}}>
              <p style={{marginBottom: '0.5rem', fontWeight: '600'}}>Example prompt:</p>
              <p style={{fontFamily: 'monospace', fontSize: '1rem'}}>
                "What are the biggest AI product launches in the last week? Give me 3 key things and why they matter."
              </p>
            </div>

            <div style={{background: '#f7fafc', padding: '1.5rem', borderRadius: '8px', marginBottom: '1rem'}}>
              <p style={{marginBottom: '0.5rem', fontWeight: '600'}}>Or:</p>
              <p style={{fontFamily: 'monospace', fontSize: '1rem'}}>
                "Summarize the latest news on [company/industry]. What's the signal vs noise?"
              </p>
            </div>

            <h3 style={{fontSize: '1.3rem', marginTop: '2rem', marginBottom: '1rem', color: '#667eea'}}>
              Why it works:
            </h3>
            <p>
              I get 80% of what I need in 5 minutes instead of spending an hour scrolling. Then I can dig deeper on what actually matters.
            </p>
          </section>

          <hr style={{margin: '3rem 0', border: 'none', borderTop: '1px solid #e2e8f0'}} />

          {/* Use Case 3 */}
          <section style={{marginBottom: '3rem'}}>
            <h2 style={{fontSize: '2rem', marginBottom: '1rem', color: '#2d3748'}}>
              3. Career Strategy
            </h2>
            <p style={{marginBottom: '1rem'}}>
              AI is basically my prep partner — I use it to refine resumes, practice interview answers, analyze job descriptions, and surface better ways to tell my story.
            </p>
            <p style={{marginBottom: '1rem', fontWeight: '600'}}>
              It's not just editing — it's coaching.
            </p>

            <h3 style={{fontSize: '1.3rem', marginTop: '2rem', marginBottom: '1rem', color: '#667eea'}}>
              What this looks like:
            </h3>
            <p style={{marginBottom: '1rem'}}>
              I paste a job description and my resume, then ask AI to identify gaps and suggest how to position my experience better.
            </p>

            <div style={{background: '#f7fafc', padding: '1.5rem', borderRadius: '8px', marginBottom: '1rem'}}>
              <p style={{marginBottom: '0.5rem', fontWeight: '600'}}>Example prompt:</p>
              <p style={{fontFamily: 'monospace', fontSize: '1rem'}}>
                "Here's a job description and my resume. What skills are they looking for that I have but haven't emphasized? Rewrite my bullet points to show this experience better."
              </p>
            </div>

            <div style={{background: '#f7fafc', padding: '1.5rem', borderRadius: '8px', marginBottom: '1rem'}}>
              <p style={{marginBottom: '0.5rem', fontWeight: '600'}}>Or for interview prep:</p>
              <p style={{fontFamily: 'monospace', fontSize: '1rem'}}>
                "I have an interview for [role]. Ask me 5 behavioral questions they're likely to ask, then give me feedback on my answers."
              </p>
            </div>

            <h3 style={{fontSize: '1.3rem', marginTop: '2rem', marginBottom: '1rem', color: '#667eea'}}>
              Why it works:
            </h3>
            <p>
              AI sees patterns I miss. It catches generic phrasing, spots where I'm underselling myself, and helps me frame experience in ways that land better.
            </p>
          </section>

          <hr style={{margin: '3rem 0', border: 'none', borderTop: '1px solid #e2e8f0'}} />

          {/* Use Case 4 */}
          <section style={{marginBottom: '3rem'}}>
            <h2 style={{fontSize: '2rem', marginBottom: '1rem', color: '#2d3748'}}>
              4. Product Thinking
            </h2>
            <p style={{marginBottom: '1rem'}}>
              I use AI like a product partner — to map requirements, clarify what's MVP vs later phase, and spot dependencies early.
            </p>
            <p style={{marginBottom: '1rem'}}>
              It helps me ship faster, think through structure, and turn ideas into something real instead of stuck in a doc.
            </p>

            <h3 style={{fontSize: '1.3rem', marginTop: '2rem', marginBottom: '1rem', color: '#667eea'}}>
              What this looks like:
            </h3>
            <p style={{marginBottom: '1rem'}}>
              I describe a product idea and ask AI to break it down into phases, identify what needs to be built first, and flag potential issues.
            </p>

            <div style={{background: '#f7fafc', padding: '1.5rem', borderRadius: '8px', marginBottom: '1rem'}}>
              <p style={{marginBottom: '0.5rem', fontWeight: '600'}}>Example prompt:</p>
              <p style={{fontFamily: 'monospace', fontSize: '1rem'}}>
                "I want to build [product idea]. What's the absolute minimum viable version? What are the dependencies? What could go wrong?"
              </p>
            </div>

            <div style={{background: '#f7fafc', padding: '1.5rem', borderRadius: '8px', marginBottom: '1rem'}}>
              <p style={{marginBottom: '0.5rem', fontWeight: '600'}}>Or:</p>
              <p style={{fontFamily: 'monospace', fontSize: '1rem'}}>
                "Here's my feature list for [product]. Which of these should be v1, which should be v2, and which should I cut entirely?"
              </p>
            </div>

            <h3 style={{fontSize: '1.3rem', marginTop: '2rem', marginBottom: '1rem', color: '#667eea'}}>
              Why it works:
            </h3>
            <p>
              AI forces me to think structurally. It asks the questions a PM would ask and helps me separate "must have" from "nice to have" before I waste time building the wrong thing.
            </p>
          </section>

          <hr style={{margin: '3rem 0', border: 'none', borderTop: '1px solid #e2e8f0'}} />

          {/* Use Case 5 */}
          <section style={{marginBottom: '3rem'}}>
            <h2 style={{fontSize: '2rem', marginBottom: '1rem', color: '#2d3748'}}>
              5. Startup Building
            </h2>
            <p style={{marginBottom: '1rem'}}>
              I use AI to pressure-test new ideas — naming products, shaping concepts, mapping features, and spotting what might break before it does.
            </p>
            <p style={{marginBottom: '1rem'}}>
              It's like having a sounding board that moves fast and helps me think bigger (and cleaner).
            </p>

            <h3 style={{fontSize: '1.3rem', marginTop: '2rem', marginBottom: '1rem', color: '#667eea'}}>
              What this looks like:
            </h3>
            <p style={{marginBottom: '1rem'}}>
              I'll run an idea by AI and ask it to poke holes, suggest names, or help me refine the pitch.
            </p>

            <div style={{background: '#f7fafc', padding: '1.5rem', borderRadius: '8px', marginBottom: '1rem'}}>
              <p style={{marginBottom: '0.5rem', fontWeight: '600'}}>Example prompt:</p>
              <p style={{fontFamily: 'monospace', fontSize: '1rem'}}>
                "Here's my startup idea: [description]. What are 3 reasons this could fail? What am I not thinking about?"
              </p>
            </div>

            <div style={{background: '#f7fafc', padding: '1.5rem', borderRadius: '8px', marginBottom: '1rem'}}>
              <p style={{marginBottom: '0.5rem', fontWeight: '600'}}>Or for naming:</p>
              <p style={{fontFamily: 'monospace', fontSize: '1rem'}}>
                "I'm building [product]. Suggest 20 names that are punchy, memorable, and not taken. Bonus if they work as domains."
              </p>
            </div>

            <h3 style={{fontSize: '1.3rem', marginTop: '2rem', marginBottom: '1rem', color: '#667eea'}}>
              Why it works:
            </h3>
            <p>
              Building alone is hard. AI gives me someone to bounce ideas off who won't get tired, won't judge, and will challenge me to think through things I'm avoiding.
            </p>
          </section>

          <hr style={{margin: '3rem 0', border: 'none', borderTop: '1px solid #e2e8f0'}} />

          {/* Use Case 6 */}
          <section style={{marginBottom: '3rem'}}>
            <h2 style={{fontSize: '2rem', marginBottom: '1rem', color: '#2d3748'}}>
              6. Social Strategy
            </h2>
            <p style={{marginBottom: '1rem'}}>
              I use it to plan and refine social content — tightening copy, shaping narratives, and experimenting with formats.
            </p>
            <p style={{marginBottom: '1rem', fontStyle: 'italic'}}>
              Let's just say I've been quietly building something social… more on that soon. 👀
            </p>

            <h3 style={{fontSize: '1.3rem', marginTop: '2rem', marginBottom: '1rem', color: '#667eea'}}>
              What this looks like:
            </h3>
            <p style={{marginBottom: '1rem'}}>
              I draft posts in my voice, then ask AI to punch them up, reformat them, or adapt them for different platforms.
            </p>

            <div style={{background: '#f7fafc', padding: '1.5rem', borderRadius: '8px', marginBottom: '1rem'}}>
              <p style={{marginBottom: '0.5rem', fontWeight: '600'}}>Example prompt:</p>
              <p style={{fontFamily: 'monospace', fontSize: '1rem'}}>
                "Here's my LinkedIn post. Make it punchier. Keep my voice but cut the fluff."
              </p>
            </div>

            <div style={{background: '#f7fafc', padding: '1.5rem', borderRadius: '8px', marginBottom: '1rem'}}>
              <p style={{marginBottom: '0.5rem', fontWeight: '600'}}>Or:</p>
              <p style={{fontFamily: 'monospace', fontSize: '1rem'}}>
                "Turn this idea into 3 versions: one for LinkedIn, one for Twitter, one for Instagram. Adapt tone and format for each."
              </p>
            </div>

            <h3 style={{fontSize: '1.3rem', marginTop: '2rem', marginBottom: '1rem', color: '#667eea'}}>
              Why it works:
            </h3>
            <p>
              I know what I want to say. AI helps me say it better, faster, and across more channels without starting from scratch every time.
            </p>
          </section>

          <hr style={{margin: '3rem 0', border: 'none', borderTop: '1px solid #e2e8f0'}} />

          {/* The Real Point */}
          <section style={{marginBottom: '3rem'}}>
            <h2 style={{fontSize: '2rem', marginBottom: '1rem', color: '#2d3748'}}>
              AI Doesn't Replace Creativity — It Amplifies It
            </h2>
            <p style={{marginBottom: '1rem'}}>
              Notice a pattern in all of this? AI isn't doing the thinking for me. It's helping me think better.
            </p>
            <p style={{marginBottom: '1rem'}}>
              I still:
            </p>
            <ul style={{marginBottom: '1rem', paddingLeft: '2rem'}}>
              <li>Generate the ideas</li>
              <li>Make the decisions</li>
              <li>Decide what feels right</li>
              <li>Add the weird, emotional, human stuff</li>
            </ul>
            <p style={{marginBottom: '1rem'}}>
              AI just speeds up the grunt work — organizing, drafting, researching, refining.
            </p>
            <p style={{marginBottom: '1rem', fontWeight: '600', fontSize: '1.2rem'}}>
              And the people who know how to combine instinct, curiosity, and good taste?
            </p>
            <p style={{fontWeight: '600', fontSize: '1.2rem'}}>
              They're going to define what smart looks like next.
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
              Want to use AI like this?
            </h3>
            <p style={{marginBottom: '2rem', color: '#4a5568'}}>
              Check out my prompt library for copy-paste templates you can use for all of these scenarios.
            </p>
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
              <Link href="/resources/context-template" style={{
                display: 'inline-block',
                padding: '0.75rem 2rem',
                background: 'white',
                color: '#667eea',
                border: '2px solid #667eea',
                borderRadius: '6px',
                textDecoration: 'none',
                fontWeight: '600'
              }}>
                Download Context Template
              </Link>
            </div>
          </div>

        </div>
      </article>

      <Footer />
    </>
  )
}
