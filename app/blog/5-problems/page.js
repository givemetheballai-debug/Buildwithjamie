import Navigation from '../../../components/Navigation'
import Footer from '../../../components/Footer'
import Link from 'next/link'

export default function FiveProblems() {
  return (
    <>
      <Navigation />
      
      {/* Article Header */}
      <div className="article-hero">
        <h1 className="text-4xl font-bold mb-md">
          5 Problems Everyone Has with AI<br/>(and How to Actually Fix Them)
        </h1>
        <p className="text-xl">
          Stop hitting the same walls. Here's what actually works.
        </p>
      </div>

      {/* Article Content */}
      <article className="article-content">
        <div className="article-wrapper">
          
          {/* Problem 1 */}
          <section>
            <h2>Problem 1: You're Using the Wrong Tool</h2>
            <p>
              "I tried ChatGPT and it didn't work." Cool. Which ChatGPT? Free version? Plus? The API? With what settings?
            </p>
            <p><strong>The reality:</strong></p>
            <p>
              Different tools are good at different things. ChatGPT-4 is better at reasoning than 3.5. Claude is better at long documents. Perplexity is better at research with sources.
            </p>
            <p><strong>How to fix it:</strong></p>
            <p>
              Match the tool to the task. Writing? ChatGPT or Claude. Research with citations? Perplexity. Code? Claude or Cursor. Quick questions? Free ChatGPT is fine.
            </p>
            <p>
              → <Link href="/resources/tool-comparison">My tool comparison chart</Link> shows you which tool for what
            </p>
          </section>

          <hr />

          {/* Problem 2 */}
          <section>
            <h2>Problem 2: Your Prompts Are Bad</h2>
            <p>
              "Write me a blog post." What kind? For who? What tone? How long?
            </p>
            <p><strong>The reality:</strong></p>
            <p>
              Vague prompts = vague results. AI can't read your mind.
            </p>
            <p><strong>How to fix it:</strong></p>
            <p>
              Be specific. Give context. Show examples. Say what you DON'T want.
            </p>
            <p>
              Bad: "Help me with my resume"<br/>
              Good: "Review my product manager resume for an AI startup. I have 10 years experience in SaaS. Flag anything that sounds generic or doesn't show impact with metrics."
            </p>
            <p>
              → <Link href="/resources/context-template">Download my context template</Link> to write better prompts
            </p>
          </section>

          <hr />

          {/* Problem 3 */}
          <section>
            <h2>Problem 3: You're Stuck Between "Total Beginner" and "Actually Building"</h2>
            <p>
              You've done the intro tutorials. You can chat with AI. But you don't know how to actually USE this for your work.
            </p>
            <p><strong>The reality:</strong></p>
            <p>
              Most AI content is either "here's how to sign up" or "build an enterprise RAG system." Nothing in between.
            </p>
            <p><strong>How to fix it:</strong></p>
            <p>
              Pick ONE thing you actually need to do (not a demo project) and figure it out with AI as you go. Need a website? Build it. Need to analyze data? Do it. The gap between beginner and builder is just doing one real thing.
            </p>
            <p>
              → <Link href="/resources/context-template">My AI context template</Link> helps you work more effectively on real projects
            </p>
          </section>

          <hr />

          {/* Problem 4 */}
          <section>
            <h2>Problem 4: You're Scared of the Bill</h2>
            <p>
              "What if I rack up $500 in API costs?" (Spoiler: You probably won't.)
            </p>
            <p><strong>The reality:</strong></p>
            <ul>
              <li>Free tiers of ChatGPT and Claude handle 90% of normal use</li>
              <li>Paid plans ($20/month) give you plenty of runway</li>
              <li>API costs only matter if you're building a product</li>
            </ul>
            <p><strong>How to fix it:</strong></p>
            <p>
              Start with free. Upgrade to paid when you hit limits. Don't even think about API costs unless you're building something for other people to use.
            </p>
          </section>

          <hr />

          {/* Problem 5 */}
          <section>
            <h2>Problem 5: You Keep Losing Your Work</h2>
            <p>
              You're mid-conversation, making progress, then... conversation limit. Everything's gone.
            </p>
            <p><strong>The reality:</strong></p>
            <p>
              AI has short-term memory. Long conversations degrade. You need a system.
            </p>
            <p><strong>How to fix it:</strong></p>
            <ul>
              <li>Keep a running doc of important outputs</li>
              <li>Start fresh conversations when things get messy</li>
              <li>Use Projects feature (Claude) or Custom GPTs (ChatGPT) for ongoing work</li>
              <li>Save your best prompts in a doc you can reuse</li>
            </ul>
            <p>
              → <Link href="/resources/context-template">Download my context template</Link> to maintain continuity across sessions
            </p>
          </section>

          <hr />

          {/* Conclusion */}
          <section>
            <h2>The Real Issue</h2>
            <p>
              None of these problems are about AI being too complicated. They're about AI companies not telling you the obvious stuff because they assume you'll figure it out.
            </p>
            <p>
              You don't need a course. You need someone to just tell you what actually works.
            </p>
            <p style={{fontWeight: 600, fontSize: '1.2rem'}}>
              Now you know.
            </p>
          </section>

          {/* CTA */}
          <div className="article-cta">
            <h3>Want more practical AI tips?</h3>
            <div className="article-cta-buttons">
              <Link href="/resources" className="btn btn-lg bg-gradient no-underline">
                Get Free Resources
              </Link>
              <Link href="/resources/explainers" className="btn btn-lg btn-outline no-underline">
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
