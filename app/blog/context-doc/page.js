import Navigation from '../../../components/Navigation'
import Footer from '../../../components/Footer'
import Link from 'next/link'

export default function ContextDoc() {
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
          I Accidentally Built Enterprise AI Architecture<br/>(And You Can Too)
        </h1>
        <p style={{fontSize: '1.1rem', opacity: '0.9'}}>
          Turns out my "context document" system is actually RAG. Here's what I learned.
        </p>
      </div>

      {/* Article Content */}
      <article style={{padding: '4rem 2rem'}}>
        <div style={{maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem', lineHeight: '1.8', color: '#2d3748'}}>
          
          <p style={{marginBottom: '2rem', fontSize: '1.2rem'}}>
            I've been a heavy AI user for six months. Hundreds of sessions across ChatGPT, Claude, and Gemini. Built multiple product concepts. Broke every tool at least once (sorry, AI overlords).
          </p>

          <p style={{marginBottom: '3rem', fontSize: '1.2rem', fontWeight: '600'}}>
            And somewhere along the way, I accidentally reinvented RAG.
          </p>

          {/* What is RAG */}
          <section style={{marginBottom: '3rem'}}>
            <h2 style={{fontSize: '2rem', marginBottom: '1rem', color: '#2d3748'}}>
              What the Hell is RAG?
            </h2>
            <p style={{marginBottom: '1rem'}}>
              RAG stands for Retrieval-Augmented Generation.
            </p>
            <p style={{marginBottom: '1rem'}}>
              It's when you give an AI system access to specific information or documents to reference, so it pulls relevant context and gives you better, more accurate answers instead of just relying on its training data.
            </p>
            <p style={{marginBottom: '1rem', fontWeight: '600', color: '#667eea'}}>
              It's what enterprises do.
            </p>
            <p style={{marginBottom: '1rem'}}>
              Companies feed AI their internal documents, product specs, customer data, whatever — so the AI can answer questions specific to their business without hallucinating or making stuff up.
            </p>
            <p>
              I didn't know any of this when I started. I just knew AI kept forgetting who I was.
            </p>
          </section>

          <hr style={{margin: '3rem 0', border: 'none', borderTop: '1px solid #e2e8f0'}} />

          {/* The Problem */}
          <section style={{marginBottom: '3rem'}}>
            <h2 style={{fontSize: '2rem', marginBottom: '1rem', color: '#2d3748'}}>
              The Problem: AI Has Amnesia
            </h2>
            <p style={{marginBottom: '1rem'}}>
              Here's what kept happening:
            </p>
            <ul style={{marginBottom: '1rem', paddingLeft: '2rem'}}>
              <li>I'd start a new chat and have to re-explain my background</li>
              <li>AI would suggest ideas that didn't fit my work style</li>
              <li>It would forget key details mid-conversation</li>
              <li>Long sessions would degrade — answers got worse over time</li>
            </ul>
            <p style={{marginBottom: '1rem'}}>
              This was especially bad with Claude, which doesn't have persistent memory like ChatGPT. Every conversation started from scratch.
            </p>
            <p>
              So I got annoyed and built a workaround.
            </p>
          </section>

          <hr style={{margin: '3rem 0', border: 'none', borderTop: '1px solid #e2e8f0'}} />

          {/* The Solution */}
          <section style={{marginBottom: '3rem'}}>
            <h2 style={{fontSize: '2rem', marginBottom: '1rem', color: '#2d3748'}}>
              The Solution: Feed It Context
            </h2>
            <p style={{marginBottom: '1rem'}}>
              I created a document that lives in Google Docs. It has:
            </p>
            <ul style={{marginBottom: '1rem', paddingLeft: '2rem'}}>
              <li><strong>Who I am:</strong> Background, work history, skills</li>
              <li><strong>What I'm working on:</strong> Current projects, goals, priorities</li>
              <li><strong>How I work:</strong> Preferences, communication style, decision frameworks</li>
              <li><strong>What I need help with:</strong> Specific use cases, recurring tasks</li>
            </ul>
            <p style={{marginBottom: '1rem'}}>
              Every time I start a new conversation, I paste this document into the chat first.
            </p>
            <p style={{marginBottom: '1rem', fontWeight: '600', color: '#667eea'}}>
              Boom. Instant context.
            </p>
            <p>
              Suddenly AI "remembers" who I am, what I care about, and how to help me.
            </p>
          </section>

          <hr style={{margin: '3rem 0', border: 'none', borderTop: '1px solid #e2e8f0'}} />

          {/* What Changed */}
          <section style={{marginBottom: '3rem'}}>
            <h2 style={{fontSize: '2rem', marginBottom: '1rem', color: '#2d3748'}}>
              What Changed
            </h2>
            <p style={{marginBottom: '1rem'}}>
              Once I started using my context doc, everything got better:
            </p>

            <h3 style={{fontSize: '1.3rem', marginTop: '2rem', marginBottom: '1rem', color: '#667eea'}}>
              1. Better answers, faster
            </h3>
            <p style={{marginBottom: '1rem'}}>
              No more "I'm a product manager at a tech company" background every time. AI already knew my situation and could jump straight to helpful.
            </p>

            <h3 style={{fontSize: '1.3rem', marginTop: '2rem', marginBottom: '1rem', color: '#667eea'}}>
              2. Suggestions actually fit my life
            </h3>
            <p style={{marginBottom: '1rem'}}>
              AI stopped suggesting generic advice and started tailoring to my specific context — my industry, my role, my constraints.
            </p>

            <h3 style={{fontSize: '1.3rem', marginTop: '2rem', marginBottom: '1rem', color: '#667eea'}}>
              3. Continuity across tools
            </h3>
            <p style={{marginBottom: '1rem'}}>
              I use ChatGPT for some things, Claude for others, Gemini occasionally. The context doc means they all have the same baseline understanding of me.
            </p>

            <h3 style={{fontSize: '1.3rem', marginTop: '2rem', marginBottom: '1rem', color: '#667eea'}}>
              4. Less mental overhead
            </h3>
            <p>
              I'm not re-explaining myself constantly. Copy, paste, go. It's like having a team member who actually remembers what you talked about last week.
            </p>
          </section>

          <hr style={{margin: '3rem 0', border: 'none', borderTop: '1px solid #e2e8f0'}} />

          {/* The Realization */}
          <section style={{marginBottom: '3rem'}}>
            <h2 style={{fontSize: '2rem', marginBottom: '1rem', color: '#2d3748'}}>
              Wait, This is RAG?
            </h2>
            <p style={{marginBottom: '1rem'}}>
              I built this system through trial and error. Zero courses. Just obsessive daily use and a lot of "well that didn't work, let's try something else."
            </p>
            <p style={{marginBottom: '1rem'}}>
              Then I learned what RAG actually was.
            </p>
            <p style={{marginBottom: '1rem', fontWeight: '600'}}>
              Turns out I'd been building enterprise AI architecture in my free time.
            </p>
            <p style={{marginBottom: '1rem'}}>
              Enterprises pay big money to implement RAG systems. They feed AI their internal knowledge bases so it can answer company-specific questions accurately.
            </p>
            <p>
              I did the same thing, just for my own personal use. And it works.
            </p>
          </section>

          <hr style={{margin: '3rem 0', border: 'none', borderTop: '1px solid #e2e8f0'}} />

          {/* How to Build Your Own */}
          <section style={{marginBottom: '3rem'}}>
            <h2 style={{fontSize: '2rem', marginBottom: '1rem', color: '#2d3748'}}>
              How to Build Your Own Context Doc
            </h2>
            <p style={{marginBottom: '1rem'}}>
              You don't need to be technical. You just need to answer these questions in a Google Doc:
            </p>

            <h3 style={{fontSize: '1.3rem', marginTop: '2rem', marginBottom: '1rem', color: '#667eea'}}>
              Section 1: Who You Are
            </h3>
            <ul style={{marginBottom: '1rem', paddingLeft: '2rem'}}>
              <li>Your professional background</li>
              <li>Your current role and company</li>
              <li>Your key skills and expertise</li>
            </ul>

            <h3 style={{fontSize: '1.3rem', marginTop: '2rem', marginBottom: '1rem', color: '#667eea'}}>
              Section 2: What You're Working On
            </h3>
            <ul style={{marginBottom: '1rem', paddingLeft: '2rem'}}>
              <li>Current projects and priorities</li>
              <li>Goals for the next 3-6 months</li>
              <li>Challenges you're facing</li>
            </ul>

            <h3 style={{fontSize: '1.3rem', marginTop: '2rem', marginBottom: '1rem', color: '#667eea'}}>
              Section 3: How You Work
            </h3>
            <ul style={{marginBottom: '1rem', paddingLeft: '2rem'}}>
              <li>Your communication style and preferences</li>
              <li>Decision-making frameworks you use</li>
              <li>Tools and workflows you rely on</li>
            </ul>

            <h3 style={{fontSize: '1.3rem', marginTop: '2rem', marginBottom: '1rem', color: '#667eea'}}>
              Section 4: What You Need Help With
            </h3>
            <ul style={{marginBottom: '1rem', paddingLeft: '2rem'}}>
              <li>Recurring tasks AI can assist with</li>
              <li>Types of analysis or brainstorming you need</li>
              <li>Specific formats or outputs you want</li>
            </ul>

            <p style={{marginTop: '2rem'}}>
              Keep it updated. As your projects change, update the doc. As you learn new things about what works, add them.
            </p>
          </section>

          <hr style={{margin: '3rem 0', border: 'none', borderTop: '1px solid #e2e8f0'}} />

          {/* The Bigger Lesson */}
          <section style={{marginBottom: '3rem'}}>
            <h2 style={{fontSize: '2rem', marginBottom: '1rem', color: '#2d3748'}}>
              The Bigger Lesson
            </h2>
            <p style={{marginBottom: '1rem'}}>
              Trial-and-error with AI tools is basically a self-taught MBA in how businesses will actually work with this stuff.
            </p>
            <p style={{marginBottom: '1rem'}}>
              You don't need courses. You don't need certifications.
            </p>
            <p style={{marginBottom: '1rem', fontWeight: '600'}}>
              You need to use AI until it breaks, then figure out how to make it not break.
            </p>
            <p style={{marginBottom: '1rem'}}>
              That's how you learn what actually works. That's how you build intuition. That's how you accidentally reinvent enterprise architecture.
            </p>
            <p>
              And when companies start hiring people who "get" AI? They're not looking for people who took a course. They're looking for people who've been in the trenches, building things, breaking things, and figuring it out.
            </p>
          </section>

          <hr style={{margin: '3rem 0', border: 'none', borderTop: '1px solid #e2e8f0'}} />

          {/* CTA */}
          <div style={{
            marginTop: '4rem',
            padding: '2rem',
            background: '#f7fafc',
            borderRadius: '12px',
            textAlign: 'center'
          }}>
            <h3 style={{fontSize: '1.5rem', marginBottom: '1rem', color: '#2d3748'}}>
              Want to build your own context doc?
            </h3>
            <p style={{marginBottom: '2rem', color: '#4a5568'}}>
              I created a template you can use. It has all the sections pre-built — just fill in your info and start using it.
            </p>
            <Link href="/resources/context-template" style={{
              display: 'inline-block',
              padding: '0.75rem 2rem',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              borderRadius: '6px',
              textDecoration: 'none',
              fontWeight: '600'
            }}>
              Get the Template
            </Link>
          </div>

        </div>
      </article>

      <Footer />
    </>
  )
}
