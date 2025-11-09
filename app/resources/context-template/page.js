import Navigation from '../../../components/Navigation'
import Footer from '../../../components/Footer'
import Link from 'next/link'

export default function ContextTemplate() {
  return (
    <>
      <Navigation />
      
      {/* Hero */}
      <div className="resource-hero">
        <h1 className="text-5xl font-bold mb-md">AI Context Template</h1>
        <p className="text-xl">Stop losing context between AI sessions</p>
      </div>

      <section className="resource-content">
        <div className="resource-wrapper">
          
          {/* The Problem */}
          <div className="resource-card">
            <h2>The Problem</h2>
            <p>
              You're working with AI on a project. Things are going great. Then you hit a token limit, or you close your laptop, or you just need a break. When you come back and start a new chat, you're starting from scratch.
            </p>
            <p>
              AI doesn't remember who you are, what you're working on, or the decisions you made in your last session. You waste 15 minutes re-explaining everything. Quality drops. You get frustrated.
            </p>
            <p>
              Sound familiar?
            </p>
          </div>

          {/* Why Context Matters */}
          <div className="resource-card">
            <h2>Why Context Matters</h2>
            <p>
              AI quality depends entirely on the information you give it. The more context AI has about who you are, what you're building, and how you work, the better its responses.
            </p>
            
            <h3>Without Context:</h3>
            <ul>
              <li>Generic, templated responses</li>
              <li>Misunderstanding your goals</li>
              <li>Suggesting things you've already tried</li>
              <li>Wrong tone, wrong level of detail</li>
            </ul>

            <h3>With Context:</h3>
            <ul>
              <li>Responses tailored to your background and expertise</li>
              <li>Suggestions that fit your actual constraints</li>
              <li>Continuity across multiple sessions</li>
              <li>Less back-and-forth, faster results</li>
            </ul>
          </div>

          {/* How the Template Works */}
          <div className="resource-card">
            <h2>How the Template Works</h2>
            <p>
              This template is a structured document you fill out once and then upload to AI at the start of each new conversation. It includes:
            </p>

            <div className="tool-grid">
              <div className="tool-item">
                <h4>Professional Background</h4>
                <p>Your experience, expertise, current role, and what you're working on</p>
              </div>
              
              <div className="tool-item">
                <h4>Current Projects</h4>
                <p>Active initiatives, goals, constraints, and key decisions made</p>
              </div>
              
              <div className="tool-item">
                <h4>Communication Style</h4>
                <p>How you prefer to work, what formats you need, tone preferences</p>
              </div>
              
              <div className="tool-item">
                <h4>Key Information</h4>
                <p>Company details, product info, target audience, brand voice</p>
              </div>
            </div>

            <div className="pro-tip">
              <strong>Pro Tip:</strong>
              <p>Update your context document as projects evolve. Keep it current, and AI will stay aligned with your latest thinking.</p>
            </div>
          </div>

          {/* What You Get */}
          <div className="resource-card">
            <h2>What You Get</h2>
            <p>
              This isn't just a blank template - it's a structured framework I developed after 6 months of heavy AI use across multiple tools and projects.
            </p>

            <ul>
              <li><strong>Pre-built sections</strong> covering everything AI needs to know about you</li>
              <li><strong>Prompts and examples</strong> to help you fill it out</li>
              <li><strong>Guidance on what to include</strong> for different use cases (writing, coding, strategy)</li>
              <li><strong>Tips on maintaining and updating</strong> your context as work evolves</li>
            </ul>

            <div className="example-box">
              <p style={{fontStyle: 'italic'}}>
                "I accidentally invented RAG (Retrieval-Augmented Generation) by creating my own context management system. This template is the result of that discovery - a practical tool anyone can use to get better AI results."
              </p>
            </div>
          </div>

          {/* Download CTA */}
          <div className="bg-gradient rounded-lg text-center p-xl">
            <div className="text-6xl mb-md">📄</div>
            <h3 className="text-4xl font-bold mb-md">
              Download the Template
            </h3>
            <p className="text-xl mb-lg opacity-70">
              Free. No email required. Start using it today.
            </p>
            <a 
              href="/Jamies_AI_Context_Template.docx" 
              download
              className="btn btn-lg no-underline"
              style={{
                background: 'white',
                color: '#00f2ea',
                fontSize: '1.1rem',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
              }}
            >
              Download Template →
            </a>
          </div>

          {/* Next Steps */}
          <div className="mt-lg text-center">
            <p style={{color: '#4a5568', marginBottom: '1rem'}}>
              Want to learn more about using AI effectively?
            </p>
            <Link href="/resources/explainers" className="text-cyan text-xl" style={{textDecoration: 'underline'}}>
              Read the Intro to AI Guide
            </Link>
          </div>

        </div>
      </section>

      <Footer />
    </>
  )
}
