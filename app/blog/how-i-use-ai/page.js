import Navigation from '../../../components/Navigation'
import Footer from '../../../components/Footer'
import Link from 'next/link'

export default function HowIUseAI() {
  return (
    <>
      <Navigation />
      
      {/* Article Header */}
      <div className="article-hero">
        <h1 className="text-4xl font-bold mb-md">
          How I Actually Use AI (Every Day)
        </h1>
        <p className="text-xl">
          Not magic. Just practical ways AI helps me work, think, and build faster.
        </p>
      </div>

      {/* Article Content */}
      <article className="article-content">
        <div className="article-wrapper">
          
          <p style={{fontSize: '1.2rem', marginBottom: '3rem'}}>
            Everyone's talking about AI like it's magic. Here's how I actually use it — every day — across work, writing, and building new things.
          </p>

          {/* Use Case 1 */}
          <section>
            <h2>1. Idea Wrangling</h2>
            <p>
              When my brain's running 12 tabs at once, AI helps organize the chaos — turning random thoughts into frameworks, outlines, or captions that make sense.
            </p>

            <h3>What this looks like:</h3>
            <p>
              I'll dump a brain download into Claude — half-formed ideas, scattered notes, things I'm mulling over. Then I ask it to organize it into something structured.
            </p>

            <div style={{background: '#f7fafc', padding: '1.5rem', borderRadius: '8px', marginBottom: '1rem'}}>
              <p style={{marginBottom: '0.5rem', fontWeight: 600}}>Example prompt:</p>
              <p style={{fontFamily: 'monospace', fontSize: '1rem', marginBottom: 0, color: '#4a5568'}}>
                "Here are my random thoughts about [topic]. Turn this into a clear outline with main points and supporting details. Flag anything that feels off or contradicts."
              </p>
            </div>

            <h3>Why it works:</h3>
            <p>
              My brain generates ideas faster than I can organize them. AI is the filing cabinet that turns chaos into something I can actually use.
            </p>
          </section>

          <hr />

          {/* Use Case 2 */}
          <section>
            <h2>2. Daily Intel</h2>
            <p>
              I use it to stay current — pulling quick news summaries, media trends, market signals, and ideas that help me see patterns faster.
            </p>

            <h3>What this looks like:</h3>
            <p>
              Instead of scrolling through 10 newsletters and 20 tabs, I ask Perplexity or ChatGPT to synthesize what's happening in my areas of interest.
            </p>

            <div style={{background: '#f7fafc', padding: '1.5rem', borderRadius: '8px', marginBottom: '1rem'}}>
              <p style={{marginBottom: '0.5rem', fontWeight: 600}}>Example prompt:</p>
              <p style={{fontFamily: 'monospace', fontSize: '1rem', marginBottom: 0, color: '#4a5568'}}>
                "What are the biggest AI product launches in the last week? Give me 3 key things and why they matter."
              </p>
            </div>

            <div style={{background: '#f7fafc', padding: '1.5rem', borderRadius: '8px', marginBottom: '1rem'}}>
              <p style={{marginBottom: '0.5rem', fontWeight: 600}}>Or:</p>
              <p style={{fontFamily: 'monospace', fontSize: '1rem', marginBottom: 0, color: '#4a5568'}}>
                "Summarize the latest news on [company/industry]. What's the signal vs noise?"
              </p>
            </div>

            <h3>Why it works:</h3>
            <p>
              I get 80% of what I need in 5 minutes instead of spending an hour scrolling. Then I can dig deeper on what actually matters.
            </p>
          </section>

          <hr />

          {/* Use Case 3 */}
          <section>
            <h2>3. Career Strategy</h2>
            <p>
              AI is basically my prep partner — I use it to refine resumes, practice interview answers, analyze job descriptions, and surface better ways to tell my story.
            </p>
            <p style={{fontWeight: 600}}>
              It's not just editing — it's coaching.
            </p>

            <h3>What this looks like:</h3>
            <p>
              I paste a job description and my resume, then ask AI to identify gaps and suggest how to position my experience better.
            </p>

            <div style={{background: '#f7fafc', padding: '1.5rem', borderRadius: '8px', marginBottom: '1rem'}}>
              <p style={{marginBottom: '0.5rem', fontWeight: 600}}>Example prompt:</p>
              <p style={{fontFamily: 'monospace', fontSize: '1rem', marginBottom: 0, color: '#4a5568'}}>
                "Here's a job description and my resume. What skills are they looking for that I have but haven't emphasized? Rewrite my bullet points to show this experience better."
              </p>
            </div>

            <div style={{background: '#f7fafc', padding: '1.5rem', borderRadius: '8px', marginBottom: '1rem'}}>
              <p style={{marginBottom: '0.5rem', fontWeight: 600}}>Or for interview prep:</p>
              <p style={{fontFamily: 'monospace', fontSize: '1rem', marginBottom: 0, color: '#4a5568'}}>
                "I have an interview for [role]. Ask me 5 behavioral questions they're likely to ask, then give me feedback on my answers."
              </p>
            </div>

            <h3>Why it works:</h3>
            <p>
              AI sees patterns I miss. It catches generic phrasing, spots where I'm underselling myself, and helps me frame experience in ways that land better.
            </p>
          </section>

          <hr />

          {/* Use Case 4 */}
          <section>
            <h2>4. Product Thinking</h2>
            <p>
              I use AI like a product partner — to map requirements, clarify what's MVP vs later phase, and spot dependencies early.
            </p>
            <p>
              It helps me ship faster, think through structure, and turn ideas into something real instead of stuck in a doc.
            </p>

            <h3>What this looks like:</h3>
            <p>
              I describe a product idea and ask AI to break it down into phases, identify what needs to be built first, and flag potential issues.
            </p>

            <div style={{background: '#f7fafc', padding: '1.5rem', borderRadius: '8px', marginBottom: '1rem'}}>
              <p style={{marginBottom: '0.5rem', fontWeight: 600}}>Example prompt:</p>
              <p style={{fontFamily: 'monospace', fontSize: '1rem', marginBottom: 0, color: '#4a5568'}}>
                "I want to build [product idea]. What's the absolute minimum viable version? What are the dependencies? What could go wrong?"
              </p>
            </div>

            <div style={{background: '#f7fafc', padding: '1.5rem', borderRadius: '8px', marginBottom: '1rem'}}>
              <p style={{marginBottom: '0.5rem', fontWeight: 600}}>Or:</p>
              <p style={{fontFamily: 'monospace', fontSize: '1rem', marginBottom: 0, color: '#4a5568'}}>
                "Here's my feature list for [product]. Which of these should be v1, which should be v2, and which should I cut entirely?"
              </p>
            </div>

            <h3>Why it works:</h3>
            <p>
              AI forces me to think structurally. It asks the questions a PM would ask and helps me separate "must have" from "nice to have" before I waste time building the wrong thing.
            </p>
          </section>

          <hr />

          {/* Use Case 5 */}
          <section>
            <h2>5. Startup Building</h2>
            <p>
              I use AI to pressure-test new ideas — naming products, shaping concepts, mapping features, and spotting what might break before it does.
            </p>
            <p>
              It's like having a sounding board that moves fast and helps me think bigger (and cleaner).
            </p>

            <h3>What this looks like:</h3>
            <p>
              I'll run an idea by AI and ask it to poke holes, suggest names, or help me refine the pitch.
            </p>

            <div style={{background: '#f7fafc', padding: '1.5rem', borderRadius: '8px', marginBottom: '1rem'}}>
              <p style={{marginBottom: '0.5rem', fontWeight: 600}}>Example prompt:</p>
              <p style={{fontFamily: 'monospace', fontSize: '1rem', marginBottom: 0, color: '#4a5568'}}>
                "Here's my startup idea: [description]. What are 3 reasons this could fail? What am I not thinking about?"
              </p>
            </div>

            <div style={{background: '#f7fafc', padding: '1.5rem', borderRadius: '8px', marginBottom: '1rem'}}>
              <p style={{marginBottom: '0.5rem', fontWeight: 600}}>Or for naming:</p>
              <p style={{fontFamily: 'monospace', fontSize: '1rem', marginBottom: 0, color: '#4a5568'}}>
                "I'm building [product]. Suggest 20 names that are punchy, memorable, and not taken. Bonus if they work as domains."
              </p>
            </div>

            <h3>Why it works:</h3>
            <p>
              Building alone is hard. AI gives me someone to bounce ideas off who won't get tired, won't judge, and will challenge me to think through things I'm avoiding.
            </p>
          </section>

          <hr />

          {/* Use Case 6 */}
          <section>
            <h2>6. Social Strategy</h2>
            <p>
              I use it to plan and refine social content — tightening copy, shaping narratives, and experimenting with formats.
            </p>
            <p style={{fontStyle: 'italic'}}>
              Let's just say I've been quietly building something social… more on that soon. 👀
            </p>

            <h3>What this looks like:</h3>
            <p>
              I draft something, then ask AI to help me punch it up, cut the fluff, or adapt it for different platforms.
            </p>

            <div style={{background: '#f7fafc', padding: '1.5rem', borderRadius: '8px', marginBottom: '1rem'}}>
              <p style={{marginBottom: '0.5rem', fontWeight: 600}}>Example prompt:</p>
              <p style={{fontFamily: 'monospace', fontSize: '1rem', marginBottom: 0, color: '#4a5568'}}>
                "Here's my LinkedIn post. Make it punchier without losing my voice. Cut it to 150 words."
              </p>
            </div>

            <h3>Why it works:</h3>
            <p>
              I can create faster and test more. Instead of laboring over one caption for 30 minutes, I draft it in 5 and let AI help me refine.
            </p>
          </section>

          <hr />

          {/* The Real Point */}
          <section>
            <h2>AI Doesn't Replace Creativity — It Amplifies It</h2>
            <p>
              Notice a pattern in all of this? AI isn't doing the thinking for me. It's helping me think better.
            </p>
            <p>I still:</p>
            <ul>
              <li>Generate the ideas</li>
              <li>Make the decisions</li>
              <li>Decide what feels right</li>
              <li>Add the weird, emotional, human stuff</li>
            </ul>
            <p>
              AI just speeds up the grunt work — organizing, drafting, researching, refining.
            </p>
            <p style={{fontWeight: 600, fontSize: '1.2rem'}}>
              And the people who know how to combine instinct, curiosity, and good taste?
            </p>
            <p style={{fontWeight: 600, fontSize: '1.2rem'}}>
              They're going to define what smart looks like next.
            </p>
          </section>

          {/* CTA */}
          <div className="article-cta">
            <h3>Want to use AI like this?</h3>
            <p>
              Check out my prompt library for copy-paste templates you can use for all of these scenarios.
            </p>
            <div className="article-cta-buttons">
              <Link href="/resources/prompts" className="btn btn-lg bg-gradient no-underline">
                Get the Prompts
              </Link>
              <Link href="/resources/context-template" className="btn btn-lg btn-outline no-underline">
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
