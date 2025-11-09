import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import Link from 'next/link'

export default function Resources() {
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
        <h1 style={{fontSize: '3rem', marginBottom: '1rem'}}>Resources</h1>
        <p style={{fontSize: '1.2rem'}}>Free tools to help you build with AI</p>
      </div>

      {/* Featured: Intro to AI */}
      <section style={{padding: '4rem 2rem', background: 'white', borderBottom: '2px solid #e2e8f0'}}>
        <div style={{maxWidth: '900px', margin: '0 auto'}}>
          <div style={{textAlign: 'center', marginBottom: '3rem'}}>
            <div style={{fontSize: '3rem', marginBottom: '1rem'}}>🎓</div>
            <h2 style={{fontSize: '2.5rem', marginBottom: '1rem', color: '#2d3748'}}>
              Intro to AI
            </h2>
            <p style={{fontSize: '1.2rem', color: '#4a5568'}}>
              Never used AI before? Start here.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.5rem',
            marginBottom: '2rem'
          }}>
            <div style={{
              padding: '1.5rem',
              background: '#f7fafc',
              borderRadius: '8px',
              borderLeft: '4px solid #667eea'
            }}>
              <h3 style={{fontSize: '1.1rem', marginBottom: '0.5rem', color: '#2d3748'}}>What is AI?</h3>
              <p style={{fontSize: '0.95rem', color: '#4a5568'}}>Plain English explanation of how AI actually works</p>
            </div>
            
            <div style={{
              padding: '1.5rem',
              background: '#f7fafc',
              borderRadius: '8px',
              borderLeft: '4px solid #667eea'
            }}>
              <h3 style={{fontSize: '1.1rem', marginBottom: '0.5rem', color: '#2d3748'}}>Popular Tools</h3>
              <p style={{fontSize: '0.95rem', color: '#4a5568'}}>ChatGPT vs Claude vs Gemini - which for what</p>
            </div>
            
            <div style={{
              padding: '1.5rem',
              background: '#f7fafc',
              borderRadius: '8px',
              borderLeft: '4px solid #667eea'
            }}>
              <h3 style={{fontSize: '1.1rem', marginBottom: '0.5rem', color: '#2d3748'}}>Writing Prompts</h3>
              <p style={{fontSize: '0.95rem', color: '#4a5568'}}>How to get better answers from AI</p>
            </div>
            
            <div style={{
              padding: '1.5rem',
              background: '#f7fafc',
              borderRadius: '8px',
              borderLeft: '4px solid #667eea'
            }}>
              <h3 style={{fontSize: '1.1rem', marginBottom: '0.5rem', color: '#2d3748'}}>Tokens & RAG</h3>
              <p style={{fontSize: '0.95rem', color: '#4a5568'}}>Key concepts that affect AI performance</p>
            </div>
          </div>

          <div style={{textAlign: 'center'}}>
            <Link href="/resources/explainers" style={{
              display: 'inline-block',
              padding: '1rem 2.5rem',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '1.1rem'
            }}>
              Read the Full Guide →
            </Link>
          </div>
        </div>
      </section>

      {/* Downloads Section */}
      <section style={{padding: '4rem 2rem', background: 'white'}}>
        <div style={{maxWidth: '900px', margin: '0 auto'}}>
          <h2 style={{fontSize: '2rem', marginBottom: '2rem', textAlign: 'center', color: '#2d3748'}}>
            Download & Use
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {/* Context Template */}
            <div style={{
              padding: '2rem',
              background: '#f7fafc',
              borderRadius: '12px',
              border: '2px solid #e2e8f0'
            }}>
              <div style={{fontSize: '2.5rem', marginBottom: '1rem'}}>📄</div>
              <h3 style={{fontSize: '1.5rem', marginBottom: '1rem', color: '#2d3748'}}>
                AI Context Template
              </h3>
              <p style={{color: '#4a5568', marginBottom: '1.5rem'}}>
                Stop losing context between sessions. This template keeps AI on track with your projects.
              </p>
              <a 
                href="/AI_Context_Template.docx" 
                download
                style={{
                  display: 'inline-block',
                  padding: '0.75rem 2rem',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: 'white',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  fontWeight: '600'
                }}
              >
                Download Template
              </a>
            </div>

            {/* Tool Comparison */}
            <div style={{
              padding: '2rem',
              background: '#f7fafc',
              borderRadius: '12px',
              border: '2px solid #e2e8f0'
            }}>
              <div style={{fontSize: '2.5rem', marginBottom: '1rem'}}>📊</div>
              <h3 style={{fontSize: '1.5rem', marginBottom: '1rem', color: '#2d3748'}}>
                Tool Comparison Chart
              </h3>
              <p style={{color: '#4a5568', marginBottom: '1.5rem'}}>
                ChatGPT vs Claude vs Gemini vs Perplexity. Which tool for what task.
              </p>
              <Link 
                href="/resources/tool-comparison"
                style={{
                  display: 'inline-block',
                  padding: '0.75rem 2rem',
                  background: 'white',
                  color: '#667eea',
                  border: '2px solid #667eea',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  fontWeight: '600'
                }}
              >
                View Chart
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Learn More Section */}
      <section style={{padding: '4rem 2rem', background: '#f7fafc'}}>
        <div style={{maxWidth: '900px', margin: '0 auto'}}>
          <h2 style={{fontSize: '2rem', marginBottom: '2rem', textAlign: 'center', color: '#2d3748'}}>
            Coming Soon
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {/* Prompt Library - Coming Soon */}
            <div style={{
              padding: '2rem',
              background: 'white',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
              opacity: '0.6'
            }}>
              <div style={{fontSize: '2.5rem', marginBottom: '1rem'}}>💬</div>
              <h3 style={{fontSize: '1.5rem', marginBottom: '1rem', color: '#2d3748'}}>
                Prompt Library
              </h3>
              <p style={{color: '#4a5568', marginBottom: '1rem'}}>
                My best prompts for writing, strategy, career, and more.
              </p>
              <span style={{
                display: 'inline-block',
                padding: '0.5rem 1rem',
                background: '#e2e8f0',
                borderRadius: '6px',
                fontSize: '0.9rem',
                color: '#4a5568'
              }}>
                Coming Soon
              </span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
