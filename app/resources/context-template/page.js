import Navigation from '../../../components/Navigation'
import Footer from '../../../components/Footer'
import Link from 'next/link'

export default function ContextTemplate() {
  return (
    <>
      <Navigation />
      
      {/* Hero */}
      <div style={{
        marginTop: '70px',
        padding: '4rem 2rem',
        textAlign: 'center',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white'
      }}>
        <h1 style={{fontSize: '3rem', marginBottom: '1rem'}}>AI Context Template</h1>
        <p style={{fontSize: '1.2rem'}}>Stop losing context between AI sessions</p>
      </div>

      <section style={{padding: '4rem 2rem', background: '#f8f9fa'}}>
        <div style={{maxWidth: '900px', margin: '0 auto'}}>
          
          {/* The Problem */}
          <div style={{background: 'white', padding: '2.5rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', marginBottom: '2rem'}}>
            <h2 style={{color: '#2c3e50', marginBottom: '1rem', fontSize: '1.8rem', borderBottom: '3px solid #667eea', paddingBottom: '0.5rem'}}>The Problem</h2>
            <p style={{color: '#555', marginBottom: '1rem'}}>
              You're working with AI on a project. Things are going great. Then you hit a token limit, or you close your laptop, or you just need a break. When you come back and start a new chat, you're starting from scratch.
            </p>
            <p style={{color: '#555', marginBottom: '1rem'}}>
              AI doesn't remember who you are, what you're working on, or the decisions you made in your last session. You waste 15 minutes re-explaining everything. Quality drops. You get frustrated.
            </p>
            <p style={{color: '#555'}}>
              Sound familiar?
            </p>
          </div>

          {/* Why Context Matters */}
          <div style={{background: 'white', padding: '2.5rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', marginBottom: '2rem'}}>
            <h2 style={{color: '#2c3e50', marginBottom: '1rem', fontSize: '1.8rem', borderBottom: '3px solid #667eea', paddingBottom: '0.5rem'}}>Why Context Matters</h2>
            <p style={{color: '#555', marginBottom: '1.5rem'}}>
              AI quality depends entirely on the information you give it. The more context AI has about who you are, what you're building, and how you work, the better its responses.
            </p>
            
            <h3 style={{color: '#2c3e50', marginTop: '1.5rem', marginBottom: '0.8rem', fontSize: '1.3rem'}}>Without Context:</h3>
            <ul style={{color: '#555', margin: '1rem 0 1.5rem 1.5rem'}}>
              <li style={{marginBottom: '0.5rem'}}>Generic, templated responses</li>
              <li style={{marginBottom: '0.5rem'}}>Misunderstanding your goals</li>
              <li style={{marginBottom: '0.5rem'}}>Suggesting things you've already tried</li>
              <li style={{marginBottom: '0.5rem'}}>Wrong tone, wrong level of detail</li>
            </ul>

            <h3 style={{color: '#2c3e50', marginTop: '1.5rem', marginBottom: '0.8rem', fontSize: '1.3rem'}}>With Context:</h3>
            <ul style={{color: '#555', margin: '1rem 0 1rem 1.5rem'}}>
              <li style={{marginBottom: '0.5rem'}}>Responses tailored to your background and expertise</li>
              <li style={{marginBottom: '0.5rem'}}>Suggestions that fit your actual constraints</li>
              <li style={{marginBottom: '0.5rem'}}>Continuity across multiple sessions</li>
              <li style={{marginBottom: '0.5rem'}}>Less back-and-forth, faster results</li>
            </ul>
          </div>

          {/* How the Template Works */}
          <div style={{background: 'white', padding: '2.5rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', marginBottom: '2rem'}}>
            <h2 style={{color: '#2c3e50', marginBottom: '1rem', fontSize: '1.8rem', borderBottom: '3px solid #667eea', paddingBottom: '0.5rem'}}>How the Template Works</h2>
            <p style={{color: '#555', marginBottom: '1.5rem'}}>
              This template is a structured document you fill out once and then upload to AI at the start of each new conversation. It includes:
            </p>

            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', margin: '1.5rem 0'}}>
              <div style={{background: '#f8f9fa', padding: '1.5rem', borderRadius: '6px', borderLeft: '4px solid #667eea'}}>
                <h4 style={{color: '#2c3e50', marginBottom: '0.5rem'}}>Professional Background</h4>
                <p style={{color: '#555', fontSize: '0.95rem'}}>Your experience, expertise, current role, and what you're working on</p>
              </div>
              
              <div style={{background: '#f8f9fa', padding: '1.5rem', borderRadius: '6px', borderLeft: '4px solid #667eea'}}>
                <h4 style={{color: '#2c3e50', marginBottom: '0.5rem'}}>Current Projects</h4>
                <p style={{color: '#555', fontSize: '0.95rem'}}>Active initiatives, goals, constraints, and key decisions made</p>
              </div>
              
              <div style={{background: '#f8f9fa', padding: '1.5rem', borderRadius: '6px', borderLeft: '4px solid #667eea'}}>
                <h4 style={{color: '#2c3e50', marginBottom: '0.5rem'}}>Communication Style</h4>
                <p style={{color: '#555', fontSize: '0.95rem'}}>How you prefer to work, what formats you need, tone preferences</p>
              </div>
              
              <div style={{background: '#f8f9fa', padding: '1.5rem', borderRadius: '6px', borderLeft: '4px solid #667eea'}}>
                <h4 style={{color: '#2c3e50', marginBottom: '0.5rem'}}>Key Information</h4>
                <p style={{color: '#555', fontSize: '0.95rem'}}>Company details, product info, target audience, brand voice</p>
              </div>
            </div>

            <div style={{background: '#e8f4f8', padding: '1.5rem', borderRadius: '6px', marginTop: '1.5rem', borderLeft: '4px solid #667eea'}}>
              <strong style={{color: '#2c3e50', display: 'block', marginBottom: '0.5rem'}}>Pro Tip:</strong>
              <p style={{color: '#555', margin: 0}}>Update your context document as projects evolve. Keep it current, and AI will stay aligned with your latest thinking.</p>
            </div>
          </div>

          {/* What You Get */}
          <div style={{background: 'white', padding: '2.5rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', marginBottom: '2rem'}}>
            <h2 style={{color: '#2c3e50', marginBottom: '1rem', fontSize: '1.8rem', borderBottom: '3px solid #667eea', paddingBottom: '0.5rem'}}>What You Get</h2>
            <p style={{color: '#555', marginBottom: '1.5rem'}}>
              This isn't just a blank template - it's a structured framework I developed after 6 months of heavy AI use across multiple tools and projects.
            </p>

            <ul style={{color: '#555', margin: '1rem 0 1rem 1.5rem', lineHeight: '1.8'}}>
              <li style={{marginBottom: '0.8rem'}}><strong>Pre-built sections</strong> covering everything AI needs to know about you</li>
              <li style={{marginBottom: '0.8rem'}}><strong>Prompts and examples</strong> to help you fill it out</li>
              <li style={{marginBottom: '0.8rem'}}><strong>Guidance on what to include</strong> for different use cases (writing, coding, strategy)</li>
              <li style={{marginBottom: '0.8rem'}}><strong>Tips on maintaining and updating</strong> your context as work evolves</li>
            </ul>

            <div style={{background: '#f8f9fa', padding: '1.5rem', borderRadius: '6px', marginTop: '1.5rem'}}>
              <p style={{color: '#555', margin: 0, fontStyle: 'italic'}}>
                "I accidentally invented RAG (Retrieval-Augmented Generation) by creating my own context management system. This template is the result of that discovery - a practical tool anyone can use to get better AI results."
              </p>
            </div>
          </div>

          {/* Download CTA */}
          <div style={{
            padding: '3rem',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            borderRadius: '12px',
            textAlign: 'center',
            color: 'white'
          }}>
            <div style={{fontSize: '3rem', marginBottom: '1rem'}}>📄</div>
            <h3 style={{fontSize: '2rem', marginBottom: '1rem'}}>
              Download the Template
            </h3>
            <p style={{marginBottom: '2rem', opacity: '0.95', fontSize: '1.1rem'}}>
              Free. No email required. Start using it today.
            </p>
            <a 
              href="/Jamies_AI_Context_Template.docx" 
              download
              style={{
                display: 'inline-block',
                padding: '1rem 2.5rem',
                background: 'white',
                color: '#667eea',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '1.1rem',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
              }}
            >
              Download Template →
            </a>
          </div>

          {/* Next Steps */}
          <div style={{marginTop: '2rem', textAlign: 'center'}}>
            <p style={{color: '#4a5568', marginBottom: '1rem'}}>
              Want to learn more about using AI effectively?
            </p>
            <Link href="/resources/explainers" style={{
              color: '#667eea',
              textDecoration: 'underline',
              fontSize: '1.1rem'
            }}>
              Read the Intro to AI Guide
            </Link>
          </div>

        </div>
      </section>

      <Footer />
    </>
  )
}
