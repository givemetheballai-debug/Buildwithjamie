import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import Link from 'next/link'

export default function Blog() {
  return (
    <>
      <Navigation />
      
      {/* Page Header */}
      <div style={{
        marginTop: '70px',
        padding: '4rem 2rem',
        textAlign: 'center',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white'
      }}>
        <h1 style={{fontSize: '3rem', marginBottom: '0.5rem'}}>Blog</h1>
        <p style={{fontSize: '1.2rem'}}>What I'm learning about AI, product strategy, and building businesses</p>
      </div>

      {/* Article List */}
      <section style={{padding: '4rem 2rem'}}>
        <div style={{maxWidth: '900px', margin: '0 auto'}}>
          
          {/* Featured Article */}
          <article style={{
            background: 'white',
            padding: '2.5rem',
            borderRadius: '12px',
            marginBottom: '2rem',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            border: '2px solid #667eea'
          }}>
            <span style={{
              display: 'inline-block',
              padding: '0.5rem 1rem',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              borderRadius: '6px',
              fontSize: '0.9rem',
              fontWeight: '600',
              marginBottom: '1rem'
            }}>⭐ Featured</span>
            
            <h2 style={{
              fontSize: '2rem',
              marginBottom: '1rem',
              color: '#2d3748'
            }}>
              5 Problems Everyone Has with AI (and How to Actually Fix Them)
            </h2>
            
            <p style={{
              fontSize: '1.1rem',
              lineHeight: '1.8',
              color: '#4a5568',
              marginBottom: '1.5rem'
            }}>
              If you've been using ChatGPT or Claude for more than a week, you've probably hit the same walls everyone else does. Wrong tool, bad prompts, getting stuck, scared of costs, losing your work. Here's what actually trips people up — and what to do about it.
            </p>
            
            <Link href="/blog/5-problems" style={{
              display: 'inline-block',
              padding: '0.75rem 2rem',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              borderRadius: '6px',
              textDecoration: 'none',
              fontWeight: '600',
              transition: 'transform 0.2s'
            }}>
              Read Full Article →
            </Link>
          </article>

          {/* Second Article */}
          <article style={{
            background: 'white',
            padding: '2.5rem',
            borderRadius: '12px',
            marginBottom: '2rem',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
          }}>
            <h2 style={{
              fontSize: '2rem',
              marginBottom: '1rem',
              color: '#2d3748'
            }}>
              3 Things You Should Be Using AI For Right Now
            </h2>
            
            <p style={{
              fontSize: '1.1rem',
              lineHeight: '1.8',
              color: '#4a5568',
              marginBottom: '1.5rem'
            }}>
              Stop overthinking it. Writing & content, research & learning, life planning — here's exactly how to use AI for each one, which tools work best, and the prompts that actually get results.
            </p>
            
            <Link href="/blog/3-things" style={{
              display: 'inline-block',
              padding: '0.75rem 2rem',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              borderRadius: '6px',
              textDecoration: 'none',
              fontWeight: '600',
              transition: 'transform 0.2s'
            }}>
              Read Full Article →
            </Link>
          </article>

          {/* Coming Soon */}
          <div style={{
            textAlign: 'center',
            padding: '3rem 2rem',
            background: '#f7fafc',
            borderRadius: '12px'
          }}>
            <h3 style={{fontSize: '1.5rem', marginBottom: '1rem', color: '#2d3748'}}>
              More Articles Coming Soon
            </h3>
            <p style={{fontSize: '1.1rem', color: '#718096', marginBottom: '1.5rem'}}>
              In the meantime, check out my writing on Medium where I share stories about AI, career pivots, and building things.
            </p>
            <a 
              href="https://jamiewilliamswrites.medium.com" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                padding: '0.75rem 2rem',
                background: 'white',
                color: '#667eea',
                border: '2px solid #667eea',
                borderRadius: '6px',
                textDecoration: 'none',
                fontWeight: '600',
                transition: 'all 0.2s'
              }}
            >
              Read on Medium →
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
