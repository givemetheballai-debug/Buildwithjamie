import Navigation from '../../../components/Navigation'
import Footer from '../../../components/Footer'
import Link from 'next/link'

export default function Explainers() {
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
        <h1 style={{fontSize: '3rem', marginBottom: '1rem'}}>AI Explainers</h1>
        <p style={{fontSize: '1.2rem'}}>Practical tips from 6 months of heavy AI usage</p>
      </div>

      {/* Content */}
      <section style={{padding: '4rem 2rem'}}>
        <div style={{maxWidth: '900px', margin: '0 auto'}}>
          
          {/* Getting Started */}
          <div style={{marginBottom: '4rem'}}>
            <h2 style={{fontSize: '2rem', marginBottom: '1.5rem', color: '#2d3748'}}>
              Getting Started with AI
            </h2>
            <p style={{fontSize: '1.1rem', lineHeight: '1.8', color: '#4a5568', marginBottom: '1.5rem'}}>
              Start with the free versions of ChatGPT and Claude. Don't overthink it. Just start asking questions and see what happens. You'll learn faster by doing than by reading tutorials.
            </p>
          </div>

          {/* Best Practices */}
          <div style={{marginBottom: '4rem'}}>
            <h2 style={{fontSize: '2rem', marginBottom: '1.5rem', color: '#2d3748'}}>
              How to Get Better Answers
            </h2>
            <div style={{
              background: '#f7fafc',
              padding: '2rem',
              borderRadius: '12px',
              marginBottom: '1rem'
            }}>
              <h3 style={{fontSize: '1.3rem', marginBottom: '1rem', color: '#2d3748'}}>
                1. Be Specific
              </h3>
              <p style={{color: '#4a5568', marginBottom: '0.5rem'}}>
                <strong>Bad:</strong> "Help me write"
              </p>
              <p style={{color: '#4a5568'}}>
                <strong>Good:</strong> "Help me write a LinkedIn post about switching careers. Keep it under 150 words, conversational tone, end with a question."
              </p>
            </div>

            <div style={{
              background: '#f7fafc',
              padding: '2rem',
              borderRadius: '12px',
              marginBottom: '1rem'
            }}>
              <h3 style={{fontSize: '1.3rem', marginBottom: '1rem', color: '#2d3748'}}>
                2. Give Context
              </h3>
              <p style={{color: '#4a5568'}}>
                Tell AI who you are, what you're working on, and what you need. The more context, the better the answer.
              </p>
            </div>

            <div style={{
              background: '#f7fafc',
              padding: '2rem',
              borderRadius: '12px'
            }}>
              <h3 style={{fontSize: '1.3rem', marginBottom: '1rem', color: '#2d3748'}}>
                3. Start Fresh When Things Get Weird
              </h3>
              <p style={{color: '#4a5568'}}>
                Long conversations degrade. If AI starts giving you weird answers, just start a new chat.
              </p>
            </div>
          </div>

          {/* Common Mistakes */}
          <div style={{marginBottom: '4rem'}}>
            <h2 style={{fontSize: '2rem', marginBottom: '1.5rem', color: '#2d3748'}}>
              Common Mistakes to Avoid
            </h2>
            <ul style={{fontSize: '1.1rem', lineHeight: '2', color: '#4a5568', paddingLeft: '2rem'}}>
              <li>Using the wrong tool for the job (read the <Link href="/blog/5-problems" style={{color: '#667eea', textDecoration: 'underline'}}>5 Problems article</Link>)</li>
              <li>Being too vague in your prompts</li>
              <li>Expecting perfection on the first try</li>
              <li>Not saving your best prompts for reuse</li>
              <li>Forgetting to give AI context about who you are</li>
            </ul>
          </div>

          {/* Resources CTA */}
          <div style={{
            padding: '2rem',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            borderRadius: '12px',
            textAlign: 'center',
            color: 'white'
          }}>
            <h3 style={{fontSize: '1.5rem', marginBottom: '1rem'}}>
              Want to go deeper?
            </h3>
            <p style={{marginBottom: '1.5rem', opacity: '0.95'}}>
              Download the context template to maintain continuity across AI sessions.
            </p>
            <Link href="/resources" style={{
              display: 'inline-block',
              padding: '0.75rem 2rem',
              background: 'white',
              color: '#667eea',
              borderRadius: '6px',
              textDecoration: 'none',
              fontWeight: '600'
            }}>
              Get Free Resources
            </Link>
          </div>

        </div>
      </section>

      <Footer />
    </>
  )
}
