'use client'

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

      {/* Resources Grid */}
      <section style={{padding: '4rem 2rem', background: '#f7fafc'}}>
        <div style={{maxWidth: '1000px', margin: '0 auto'}}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem'
          }}>
            
            {/* Intro to AI */}
            <Link href="/resources/explainers" style={{
              padding: '2.5rem',
              background: 'white',
              borderRadius: '12px',
              textDecoration: 'none',
              boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
              transition: 'transform 0.2s',
              display: 'block',
              border: '2px solid transparent'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.borderColor = '#667eea';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = 'transparent';
            }}>
              <div style={{fontSize: '3rem', marginBottom: '1rem'}}>🎓</div>
              <h3 style={{fontSize: '1.5rem', marginBottom: '1rem', color: '#2d3748'}}>
                Intro to AI
              </h3>
              <p style={{color: '#4a5568', lineHeight: '1.6'}}>
                Never used AI before? Start here. Learn what it is, which tools to use, and how to write better prompts.
              </p>
            </Link>

            {/* Context Template */}
            <Link href="/resources/context-template" style={{
              padding: '2.5rem',
              background: 'white',
              borderRadius: '12px',
              textDecoration: 'none',
              boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
              transition: 'transform 0.2s',
              display: 'block',
              border: '2px solid transparent'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.borderColor = '#667eea';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = 'transparent';
            }}>
              <div style={{fontSize: '3rem', marginBottom: '1rem'}}>📄</div>
              <h3 style={{fontSize: '1.5rem', marginBottom: '1rem', color: '#2d3748'}}>
                Context Template
              </h3>
              <p style={{color: '#4a5568', lineHeight: '1.6'}}>
                Stop losing context between AI sessions. Download the template that keeps your conversations on track.
              </p>
            </Link>

            {/* Tool Comparison */}
            <Link href="/resources/tool-comparison" style={{
              padding: '2.5rem',
              background: 'white',
              borderRadius: '12px',
              textDecoration: 'none',
              boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
              transition: 'transform 0.2s',
              display: 'block',
              border: '2px solid transparent'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.borderColor = '#667eea';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = 'transparent';
            }}>
              <div style={{fontSize: '3rem', marginBottom: '1rem'}}>📊</div>
              <h3 style={{fontSize: '1.5rem', marginBottom: '1rem', color: '#2d3748'}}>
                Tool Comparison
              </h3>
              <p style={{color: '#4a5568', lineHeight: '1.6'}}>
                ChatGPT vs Claude vs Gemini vs Perplexity. Which tool for which task.
              </p>
            </Link>

            {/* Prompt Library */}
            <Link href="/resources/prompts" style={{
              padding: '2.5rem',
              background: 'white',
              borderRadius: '12px',
              textDecoration: 'none',
              boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
              transition: 'transform 0.2s',
              display: 'block',
              border: '2px solid transparent'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.borderColor = '#667eea';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = 'transparent';
            }}>
              <div style={{fontSize: '3rem', marginBottom: '1rem'}}>💬</div>
              <h3 style={{fontSize: '1.5rem', marginBottom: '1rem', color: '#2d3748'}}>
                Prompt Library
              </h3>
              <p style={{color: '#4a5568', lineHeight: '1.6'}}>
                My best prompts for writing, strategy, career planning, and daily productivity.
              </p>
            </Link>

          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
