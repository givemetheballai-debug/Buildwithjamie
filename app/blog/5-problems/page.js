import Navigation from '../../../components/Navigation'
import Footer from '../../../components/Footer'
import Link from 'next/link'

export default function FiveProblems() {
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
          5 Problems Everyone Has with AI<br/>(and How to Actually Fix Them)
        </h1>
        <p style={{fontSize: '1.1rem', opacity: '0.9'}}>
          Stop hitting the same walls. Here's what actually works.
        </p>
      </div>

      {/* Article Content */}
      <article style={{padding: '4rem 2rem'}}>
        <div style={{maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem', lineHeight: '1.8', color: '#2d3748'}}>
          
          {/* Problem 1 */}
          <section style={{marginBottom: '3rem'}}>
            <h2 style={{fontSize: '2rem', marginBottom: '1rem', color: '#2d3748'}}>
              Problem 1: You're Using the Wrong Tool
            </h2>
            <p style={{marginBottom: '1rem'}}>
              "I tried ChatGPT and it didn't work." Cool. Which ChatGPT? Free version? Plus? The API? With what settings?
            </p>
            <p style={{marginBottom: '1rem', fontWeight: '600', color: '#667eea'}}>
              The reality:
            </p>
            <p style={{marginBottom: '1rem'}}>
              Different tools are good at different things. ChatGPT-4 is better at reasoning than 3.5. Claude is better at long documents. Perplexity is better at research with sources.
            </p>
            <p style={{marginBottom: '1rem', fontWeight: '600', color: '#667eea'}}>
              How to fix it:
            </p>
            <p style={{marginBottom: '1rem'}}>
              Match the tool to the task. Writing? ChatGPT or Claude. Research with citations? Perplexity. Code? Claude or Cursor. Quick questions? Free ChatGPT is fine.
            </p>
            <p>
              → <Link href="/resources/tool-comparison" style={{color: '#667eea', textDecoration: 'underline'}}>My tool comparison chart</Link> shows you which tool for what
            </p>
          </section>

          <hr style={{margin: '3rem 0', border: 'none', borderTop: '1px solid #e2e8f0'}} />

          {/* Problem 2 */}
          <section style={{marginBottom: '3rem'}}>
            <h2 style={{fontSize: '2rem', marginBottom: '1rem', color: '#2d3748'}}>
              Problem 2: Your Prompts Are Bad
            </h2>
            <p style={{marginBottom: '1rem'}}>
              "Write me a blog post." What kind? For who? What tone? How long?
            </p>
            <p style={{marginBottom: '1rem', fontWeight: '600', color: '#667eea'}}>
              The reality:
            </p>
            <p style={{marginBottom: '1rem'}}>
              Vague prompts = vague results. AI can't read your mind.
            </p>
            <p style={{marginBottom: '1rem', fontWeight: '600', color: '#667eea'}}>
              How to fix it:
            </p>
            <p style={{marginBottom: '1rem'}}>
              Be specific. Give context. Show examples. Say what you DON'T want.
            </p>
            <p style={{marginBottom: '1rem'}}>
              Bad: "Help me with my resume"<br/>
              Good: "Review my product manager resume for an AI startup. I have 10 years experience in SaaS. Flag anything that sounds generic or doesn't show impact with metrics."
            </p>
            <p>
              → <Link href="/resources/context-template" style={{color: '#667eea', textDecoration: 'underline'}}>Download my context template</Link> to write better prompts
            </p>
          </section>

          <hr style={{margin: '3rem 0', border: 'none', borderTop: '1px solid #e2e8f0'}} />

          {/* Problem 3 */}
          <section style={{marginBottom: '3rem'}}>
            <h2 style={{fontSize: '2rem', marginBottom: '1rem', color: '#2d3748'}}>
              Problem 3: You're Stuck Between "Total Beginner" and "Actually Building"
            </h2>
            <p style={{marginBottom: '1rem'}}>
              You've done the intro tutorials. You can chat with AI. But you don't know how to actually USE this for your work.
            </p>
            <p style={{marginBottom: '1rem', fontWeight: '600', color: '#667eea'}}>
              The reality:
            </p>
            <p style={{marginBottom: '1rem'}}>
              Most AI content is either "here's how to sign up" or "build an enterprise RAG system." Nothing in between.
            </p>
            <p style={{marginBottom: '1rem', fontWeight: '600', color: '#667eea'}}>
              How to fix it:
            </p>
            <p style={{marginBottom: '1rem'}}>
              Pick ONE thing you actually need to do (not a demo project) and figure it out with AI as you go. Need a website? Build it. Need to analyze data? Do it. The gap between beginner and builder is just doing one real thing.
            </p>
            <p>
              → <Link href="/resources/context-template" style={{color: '#667eea', textDecoration: 'underline'}}>My AI context template</Link> helps you work more effectively on real projects
            </p>
          </section>

          <hr style={{margin: '3rem 0', border: 'none', borderTop: '1px solid #e2e8f0'}} />

          {/* Problem 4 */}
          <section style={{marginBottom: '3rem'}}>
            <h2 style={{fontSize: '2rem', marginBottom: '1rem', color: '#2d3748'}}>
              Problem 4: You're Scared of the Bill
            </h2>
            <p style={{marginBottom: '1rem'}}>
              "What if I rack up $500 in API costs?" (Spoiler: You probably won't.)
            </p>
            <p style={{marginBottom: '1rem', fontWeight: '600', color: '#667eea'}}>
              The reality:
            </p>
            <ul style={{marginBottom: '1rem', paddingLeft: '2rem'}}>
              <li>Free tiers of ChatGPT and Claude handle 90% of normal use</li>
              <li>Paid plans ($20/month) give you plenty of runway</li>
              <li>API costs only matter if you're building a product</li>
            </ul>
            <p style={{marginBottom: '1rem', fontWeight: '600', color: '#667eea'}}>
              How to fix it:
            </p>
            <p>
              Start with free. Upgrade to paid when you hit limits. Don't even think about API costs unless you're building something for other people to use.
            </p>
          </section>

          <hr style={{margin: '3rem 0', border: 'none', borderTop: '1px solid #e2e8f0'}} />

          {/* Problem 5 */}
          <section style={{marginBottom: '3rem'}}>
            <h2 style={{fontSize: '2rem', marginBottom: '1rem', color: '#2d3748'}}>
              Problem 5: You Keep Losing Your Work
            </h2>
            <p style={{marginBottom: '1rem'}}>
              You're mid-conversation, making progress, then... conversation limit. Everything's gone.
            </p>
            <p style={{marginBottom: '1rem', fontWeight: '600', color: '#667eea'}}>
              The reality:
            </p>
            <p style={{marginBottom: '1rem'}}>
              AI has short-term memory. Long conversations degrade. You need a system.
            </p>
            <p style={{marginBottom: '1rem', fontWeight: '600', color: '#667eea'}}>
              How to fix it:
            </p>
            <ul style={{marginBottom: '1rem', paddingLeft: '2rem'}}>
              <li>Keep a running doc of important outputs</li>
              <li>Start fresh conversations when things get messy</li>
              <li>Use Projects feature (Claude) or Custom GPTs (ChatGPT) for ongoing work</li>
              <li>Save your best prompts in a doc you can reuse</li>
            </ul>
            <p>
              → <Link href="/resources/context-template" style={{color: '#667eea', textDecoration: 'underline'}}>Download my context template</Link> to maintain continuity across sessions
            </p>
          </section>

          <hr style={{margin: '3rem 0', border: 'none', borderTop: '1px solid #e2e8f0'}} />

          {/* Conclusion */}
          <section style={{marginBottom: '3rem'}}>
            <h2 style={{fontSize: '2rem', marginBottom: '1rem', color: '#2d3748'}}>
              The Real Issue
            </h2>
            <p style={{marginBottom: '1rem'}}>
              None of these problems are about AI being too complicated. They're about AI companies not telling you the obvious stuff because they assume you'll figure it out.
            </p>
            <p style={{marginBottom: '1rem'}}>
              You don't need a course. You need someone to just tell you what actually works.
            </p>
            <p style={{fontWeight: '600', fontSize: '1.2rem'}}>
              Now you know.
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
              Want more practical AI tips?
            </h3>
            <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap'}}>
              <Link href="/resources" style={{
                display: 'inline-block',
                padding: '0.75rem 2rem',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                borderRadius: '6px',
                textDecoration: 'none',
                fontWeight: '600'
              }}>
                Get Free Resources
              </Link>
              <Link href="/resources/explainers" style={{
                display: 'inline-block',
                padding: '0.75rem 2rem',
                background: 'white',
                color: '#667eea',
                border: '2px solid #667eea',
                borderRadius: '6px',
                textDecoration: 'none',
                fontWeight: '600'
              }}>
                Intro to AI
              </Link>
            </div>
          </div>

        </div>
      </article>

      <Footer />
    </>
  )
}
