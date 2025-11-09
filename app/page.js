'use client'

import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      {/* SEO Meta Tags - Update in layout.js or head.js */}
      {/* 
      <title>Jamie Williams | AI, Business & Culture Intelligence</title>
      <meta name="description" content="I spot patterns across AI, business, and culture—then I experiment. Get practical AI resources, daily intelligence, and strategic insights." />
      <meta property="og:title" content="Jamie Williams | AI, Business & Culture Intelligence" />
      <meta property="og:description" content="I spot patterns across AI, business, and culture—then I experiment." />
      <meta property="og:type" content="website" />
      */}
      
      <Navigation />
      
      {/* Stats Hero Section */}
      <section className="hero-stats" style={{
        marginTop: '70px',
        padding: '3rem 2rem',
        background: 'var(--bg-primary)',
        color: 'var(--text-primary)',
        textAlign: 'center'
      }}>
        <div className="container">
          <div className="stats-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem',
            marginBottom: '2rem',
            maxWidth: '1000px',
            margin: '0 auto 2rem'
          }}>
            <div className="stat-item">
              <h2 className="text-gradient" style={{
                fontSize: '3.5rem', 
                fontWeight: '700', 
                marginBottom: '0.5rem', 
                lineHeight: '1'
              }}>48%</h2>
              <p style={{fontSize: '1.1rem', opacity: '0.8'}}>
                Don't know how to use AI effectively
              </p>
            </div>
            <div className="stat-item">
              <h2 className="text-gradient" style={{
                fontSize: '3.5rem', 
                fontWeight: '700', 
                marginBottom: '0.5rem', 
                lineHeight: '1'
              }}>63%</h2>
              <p style={{fontSize: '1.1rem', opacity: '0.8'}}>
                Don't see AI as relevant to their work
              </p>
            </div>
            <div className="stat-item">
              <h2 className="text-gradient" style={{
                fontSize: '3.5rem', 
                fontWeight: '700', 
                marginBottom: '0.5rem', 
                lineHeight: '1'
              }}>25%</h2>
              <p style={{fontSize: '1.1rem', opacity: '0.8'}}>
                Of AI projects actually deliver ROI
              </p>
            </div>
          </div>
          
          <h1 style={{
            fontSize: '2.5rem', 
            fontWeight: '700', 
            marginBottom: '1rem', 
            lineHeight: '1.2'
          }}>
            I spot patterns across AI, business, and culture—then I experiment.
          </h1>
          <p style={{fontSize: '1.3rem', opacity: '0.85', lineHeight: '1.6'}}>
            Here's what I'm learning.
          </p>
        </div>
      </section>

      {/* Credibility Strip */}
      <section className="credibility-strip" style={{
        padding: '2rem', 
        background: 'var(--bg-tertiary)', 
        color: 'var(--text-primary)', 
        textAlign: 'center',
        borderTop: '1px solid var(--border-color)'
      }}>
        <div className="container">
          <p style={{
            fontSize: '1.2rem', 
            lineHeight: '1.6', 
            marginBottom: '0.5rem'
          }}>
            15+ years in marketing and advertising. Early adopter who connects AI, business, and culture.
          </p>
          <p style={{
            fontSize: '1rem', 
            fontStyle: 'italic', 
            opacity: '0.7'
          }}>
            Award-winning marketer (Future Media 100, Global Innovation winner).
          </p>
        </div>
      </section>

      {/* Start Here - Featured Resources */}
      <section className="resources-featured" style={{
        padding: '2.5rem 2rem', 
        background: 'var(--bg-secondary)'
      }}>
        <div className="container">
          <h2 style={{
            fontSize: '2.5rem', 
            fontWeight: '700', 
            marginBottom: '2rem', 
            color: 'var(--text-primary)'
          }}>
            Start Here
          </h2>
          
          <div className="content-grid-3" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.5rem',
            marginBottom: '3rem'
          }}>
            {/* Intro to AI - Featured Card */}
            <a 
              href="/resources/explainers" 
              className="card-featured"
              aria-label="Learn AI fundamentals"
              style={{
                padding: '3rem',
                borderRadius: '12px',
                textDecoration: 'none',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '350px',
                transition: 'transform 0.2s, box-shadow 0.2s',
                background: 'var(--accent-gradient)',
                color: 'white',
                boxShadow: 'var(--shadow-neon-cyan)'
              }}
            >
              <div>
                {/* Image placeholder - replace emoji with actual icon later */}
                <div className="media-placeholder" style={{
                  fontSize: '3rem', 
                  marginBottom: '1.5rem'
                }} aria-hidden="true">
                  🎓
                </div>
                <h3 style={{fontSize: '2rem', fontWeight: '700', marginBottom: '1.5rem'}}>
                  Intro to AI
                </h3>
                <p style={{fontSize: '1.2rem', opacity: '0.95', lineHeight: '1.6', marginBottom: '0'}}>
                  For the 48% who don't know where to start. Clear, practical guidance.
                </p>
              </div>
              <div style={{fontSize: '1.1rem', fontWeight: '600', marginTop: '2rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.2)'}}>
                Start learning →
              </div>
            </a>

            {/* Prompt Library */}
            <a 
              href="/resources/prompts" 
              className="card"
              aria-label="Get AI prompts"
              style={{
                padding: '2rem',
                background: 'var(--bg-tertiary)',
                color: 'var(--text-primary)',
                borderRadius: '12px',
                textDecoration: 'none',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'transform 0.2s, box-shadow 0.2s, border-color 0.2s',
                boxShadow: 'var(--shadow-sm)',
                border: '1px solid var(--border-color)'
              }}
            >
              <div>
                <div className="media-placeholder" style={{
                  fontSize: '2.5rem', 
                  marginBottom: '0.75rem'
                }} aria-hidden="true">
                  💬
                </div>
                <h3 style={{fontSize: '1.5rem', fontWeight: '700', marginBottom: '0.75rem'}}>
                  Prompt Library
                </h3>
                <p style={{fontSize: '1rem', opacity: '0.7', lineHeight: '1.6'}}>
                  Copy-paste prompts that actually work. No fluff.
                </p>
              </div>
              <div style={{
                fontSize: '1rem', 
                fontWeight: '600', 
                color: 'var(--accent-cyan)', 
                marginTop: '1rem'
              }}>
                Get prompts →
              </div>
            </a>

            {/* Context Template */}
            <a 
              href="/resources/context-template" 
              className="card"
              aria-label="Download context template"
              style={{
                padding: '2rem',
                background: 'var(--bg-tertiary)',
                color: 'var(--text-primary)',
                borderRadius: '12px',
                textDecoration: 'none',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'transform 0.2s, box-shadow 0.2s, border-color 0.2s',
                boxShadow: 'var(--shadow-sm)',
                border: '1px solid var(--border-color)'
              }}
            >
              <div>
                <div className="media-placeholder" style={{
                  fontSize: '2.5rem', 
                  marginBottom: '0.75rem'
                }} aria-hidden="true">
                  📄
                </div>
                <h3 style={{fontSize: '1.5rem', fontWeight: '700', marginBottom: '0.75rem'}}>
                  Context Template
                </h3>
                <p style={{fontSize: '1rem', opacity: '0.7', lineHeight: '1.6'}}>
                  Stop repeating yourself. Make AI remember.
                </p>
              </div>
              <div style={{
                fontSize: '1rem', 
                fontWeight: '600', 
                color: 'var(--accent-cyan)', 
                marginTop: '1rem'
              }}>
                Download →
              </div>
            </a>
          </div>

          {/* Latest Thinking - Blog Preview */}
          <h2 style={{
            fontSize: '2.5rem', 
            fontWeight: '700', 
            marginBottom: '2rem', 
            color: 'var(--text-primary)'
          }}>
            Latest Thinking
          </h2>
          
          <div className="content-grid-3" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.5rem',
            marginBottom: '3rem'
          }}>
            <a 
              href="/blog/5-problems" 
              className="card blog-card"
              data-analytics="blog-5-problems-click"
              style={{
                padding: '2rem',
                background: 'var(--bg-tertiary)',
                borderRadius: '12px',
                textDecoration: 'none',
                color: 'var(--text-primary)',
                boxShadow: 'var(--shadow-sm)',
                transition: 'transform 0.2s, border-color 0.2s',
                border: '1px solid var(--border-color)'
              }}
            >
              {/* Image placeholder for featured image */}
              <div className="media-container media-container-16-9" style={{
                marginBottom: '1rem',
                background: 'var(--bg-secondary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '160px'
              }}>
                <span style={{opacity: '0.3', fontSize: '0.875rem'}}>Featured image</span>
              </div>
              
              <div style={{
                fontSize: '0.875rem',
                color: 'var(--accent-cyan)',
                fontWeight: '600',
                marginBottom: '0.75rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                BLOG
              </div>
              <h3 style={{
                fontSize: '1.5rem', 
                fontWeight: '700', 
                marginBottom: '0.75rem', 
                lineHeight: '1.3'
              }}>
                5 Problems Everyone Has With AI (And How to Fix Them)
              </h3>
              <p style={{opacity: '0.7', lineHeight: '1.6'}}>
                The real barriers to AI adoption—and the practical solutions that actually work.
              </p>
            </a>

            <a 
              href="/blog/enterprise-ai" 
              className="card blog-card"
              style={{
                padding: '2rem',
                background: 'var(--bg-tertiary)',
                borderRadius: '12px',
                textDecoration: 'none',
                color: 'var(--text-primary)',
                boxShadow: 'var(--shadow-sm)',
                transition: 'transform 0.2s, border-color 0.2s',
                border: '1px solid var(--border-color)'
              }}
            >
              <div className="media-container media-container-16-9" style={{
                marginBottom: '1rem',
                background: 'var(--bg-secondary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '160px'
              }}>
                <span style={{opacity: '0.3', fontSize: '0.875rem'}}>Featured image</span>
              </div>
              
              <div style={{
                fontSize: '0.875rem',
                color: 'var(--accent-pink)',
                fontWeight: '600',
                marginBottom: '0.75rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                COMING SOON
              </div>
              <h3 style={{
                fontSize: '1.5rem', 
                fontWeight: '700', 
                marginBottom: '0.75rem', 
                lineHeight: '1.3'
              }}>
                Why 75% of AI Projects Fail
              </h3>
              <p style={{opacity: '0.7', lineHeight: '1.6'}}>
                I've seen this at scale. Here's what companies get wrong about AI adoption.
              </p>
            </a>

            <a 
              href="/blog" 
              className="card"
              style={{
                padding: '2rem',
                background: 'var(--bg-tertiary)',
                borderRadius: '12px',
                textDecoration: 'none',
                color: 'var(--text-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.2rem',
                fontWeight: '600',
                transition: 'transform 0.2s, border-color 0.2s',
                border: '1px solid var(--border-color)'
              }}
            >
              View all posts →
            </a>
          </div>

          {/* Current Experiments */}
          <h2 style={{
            fontSize: '2.5rem', 
            fontWeight: '700', 
            marginBottom: '1rem', 
            color: 'var(--text-primary)'
          }}>
            Current Experiments
          </h2>
          <p style={{
            fontSize: '1.1rem', 
            opacity: '0.7', 
            marginBottom: '2rem', 
            color: 'var(--text-primary)'
          }}>
            I learn by building. Here are some things I'm testing.
          </p>
          
          <div className="content-grid-3" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1rem'
          }}>
            <div className="card" style={{
              padding: '1.5rem',
              background: 'var(--bg-tertiary)',
              borderRadius: '12px',
              border: '1px solid var(--border-color)'
            }}>
              {/* Screenshot placeholder */}
              <div className="media-container media-container-16-9" style={{
                marginBottom: '1rem',
                background: 'var(--bg-secondary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <span style={{opacity: '0.3', fontSize: '0.875rem'}}>Screenshot</span>
              </div>
              <h3 style={{
                fontSize: '1.3rem', 
                fontWeight: '700', 
                marginBottom: '0.5rem', 
                color: 'var(--text-primary)'
              }}>
                givemetheball.com
              </h3>
              <p style={{
                fontSize: '0.95rem', 
                opacity: '0.7', 
                lineHeight: '1.6', 
                color: 'var(--text-primary)'
              }}>
                Women's sports + leadership platform. Live scores, newsletters, built with AI.
              </p>
            </div>

            <div className="card" style={{
              padding: '1.5rem',
              background: 'var(--bg-tertiary)',
              borderRadius: '12px',
              border: '1px solid var(--border-color)'
            }}>
              <div className="media-container media-container-16-9" style={{
                marginBottom: '1rem',
                background: 'var(--bg-secondary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <span style={{opacity: '0.3', fontSize: '0.875rem'}}>Screenshot</span>
              </div>
              <h3 style={{
                fontSize: '1.3rem', 
                fontWeight: '700', 
                marginBottom: '0.5rem', 
                color: 'var(--text-primary)'
              }}>
                Fancy Lazy Travel
              </h3>
              <p style={{
                fontSize: '0.95rem', 
                opacity: '0.7', 
                lineHeight: '1.6', 
                color: 'var(--text-primary)'
              }}>
                3K+ Instagram followers. Testing ad strategies in real-time.
              </p>
            </div>

            <div className="card" style={{
              padding: '1.5rem',
              background: 'var(--bg-tertiary)',
              borderRadius: '12px',
              border: '1px solid var(--border-color)'
            }}>
              <div className="media-container media-container-16-9" style={{
                marginBottom: '1rem',
                background: 'var(--bg-secondary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <span style={{opacity: '0.3', fontSize: '0.875rem'}}>Newsletter preview</span>
              </div>
              <h3 style={{
                fontSize: '1.3rem', 
                fontWeight: '700', 
                marginBottom: '0.5rem', 
                color: 'var(--text-primary)'
              }}>
                The Daily AI
              </h3>
              <p style={{
                fontSize: '0.95rem', 
                opacity: '0.7', 
                lineHeight: '1.6', 
                color: 'var(--text-primary)'
              }}>
                Intelligence on AI, business, markets, and culture. Coming soon.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="newsletter-cta" style={{
        padding: '3rem 2rem',
        background: 'var(--accent-gradient)',
        color: 'white'
      }}>
        <div className="container" style={{maxWidth: '700px', textAlign: 'center'}}>
          <h2 style={{fontSize: '2.5rem', fontWeight: '700', marginBottom: '1rem'}}>
            📰 The Daily AI
          </h2>
          <p style={{
            fontSize: '1.2rem', 
            marginBottom: '2rem', 
            opacity: '0.95', 
            lineHeight: '1.6'
          }}>
            Intelligence on AI, business, markets, and culture. The patterns that matter.
          </p>
          
          {/* Newsletter Form - Update action with your email service */}
          <form 
            action="#" 
            method="POST"
            aria-label="Subscribe to newsletter"
            style={{
              display: 'flex',
              gap: '1rem',
              maxWidth: '500px',
              margin: '0 auto',
              flexWrap: 'wrap',
              justifyContent: 'center'
            }}
          >
            <input 
              type="email" 
              name="email"
              placeholder="Your email"
              required
              aria-label="Email address"
              style={{
                flex: '1 1 300px',
                padding: '1rem 1.5rem',
                borderRadius: '8px',
                border: 'none',
                fontSize: '1rem',
                minWidth: '250px'
              }}
            />
            <button 
              type="submit"
              className="btn-primary"
              data-analytics="newsletter-signup"
              style={{
                padding: '1rem 2rem',
                background: '#000000',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '1rem',
                fontWeight: '700',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'transform 0.2s, box-shadow 0.2s'
              }}
            >
              Join the Waitlist
            </button>
          </form>
          
          <p style={{fontSize: '0.9rem', marginTop: '1rem', opacity: '0.85'}}>
            Coming soon. Be first in line.
          </p>
        </div>
      </section>

      <Footer />
    </>
  )
}
