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

      {/* Resources List */}
      <section style={{padding: '4rem 2rem', background: '#f7fafc'}}>
        <div style={{maxWidth: '900px', margin: '0 auto'}}>
          
          {/* Intro to AI */}
          <Link href="/resources/explainers" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2rem',
            padding: '2.5rem',
            marginBottom: '1.5rem',
            background: 'white',
            borderRadius: '12px',
            textDecoration: 'none',
            boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
            transition: 'all 0.2s',
            border: '2px solid transparent'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateX(8px)';
            e.currentTarget.style.borderColor = '#667eea';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateX(0)';
            e.currentTarget.style.borderColor = 'transparent';
          }}>
            <div style={{fontSize: '3.5rem', flexShrink: 0}}>🎓</div>
            <div>
              <h3 style={{fontSize: '1.8rem', marginBottom: '0.5rem', color: '#2d3748'}}>
                Intro to AI
              </h3>
              <p style={{color: '#4a5568', lineHeight: '1.6', margin: 0}}>
                Never used AI before? Start here. Learn what it is, which tools to use, and how to write better prompts.
              </p>
            </div>
          </Link>

          {/* Context Template */}
          <Link href="/resources/context-template" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2rem',
            padding: '2.5rem',
            marginBottom: '1.5rem',
            background: 'white',
            borderRadius: '12px',
            textDecoration: 'none',
            boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
            transition: 'all 0.2s',
            border: '2px solid transparent'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateX(8px)';
            e.currentTarget.style.borderColor = '#667eea';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateX(0)';
            e.currentTarget.style.borderColor = 'transparent';
          }}>
            <div style={{fontSize: '3.5rem', flexShrink: 0}}>📄</div>
            <div>
              <h3 style={{fontSize: '1.8rem', marginBottom: '0.5rem', color: '#2d3748'}}>
                Context Template
              </h3>
              <p style={{color: '#4a5568', lineHeight: '1.6', margin: 0}}>
                Stop losing context between AI sessions. Download the template that keeps your conversations on track.
              </p>
            </div>
          </Link>

          {/* Tool Comparison */}
          <Link href="/resources/tool-comparison" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2rem',
            padding: '2.5rem',
            marginBottom: '1.5rem',
            background: 'white',
            borderRadius: '12px',
            textDecoration: 'none',
            boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
            transition: 'all 0.2s',
            border: '2px solid transparent'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateX(8px)';
            e.currentTarget.style.borderColor = '#667eea';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateX(0)';
            e.currentTarget.style.borderColor = 'transparent';
          }}>
            <div style={{fontSize: '3.5rem', flexShrink: 0}}>📊</div>
            <div>
              <h3 style={{fontSize: '1.8rem', marginBottom: '0.5rem', color: '#2d3748'}}>
                Tool Comparison
              </h3>
              <p style={{color: '#4a5568', lineHeight: '1.6', margin: 0}}>
                ChatGPT vs Claude vs Gemini vs Perplexity. Which tool for which task.
              </p>
            </div>
          </Link>

          {/* Prompt Library */}
          <Link href="/resources/prompts" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2rem',
            padding: '2.5rem',
            marginBottom: '1.5rem',
            background: 'white',
            borderRadius: '12px',
            textDecoration: 'none',
            boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
            transition: 'all 0.2s',
            border: '2px solid transparent'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateX(8px)';
            e.currentTarget.style.borderColor = '#667eea';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateX(0)';
            e.currentTarget.style.borderColor = 'transparent';
          }}>
            <div style={{fontSize: '3.5rem', flexShrink: 0}}>💬</div>
            <div>
              <h3 style={{fontSize: '1.8rem', marginBottom: '0.5rem', color: '#2d3748'}}>
                Prompt Library
              </h3>
              <p style={{color: '#4a5568', lineHeight: '1.6', margin: 0}}>
                My best prompts for writing, strategy, career planning, and daily productivity.
              </p>
            </div>
          </Link>

          {/* Advanced Techniques */}
          <Link href="/resources/advanced" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2rem',
            padding: '2.5rem',
            background: 'white',
            borderRadius: '12px',
            textDecoration: 'none',
            boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
            transition: 'all 0.2s',
            border: '2px solid transparent'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateX(8px)';
            e.currentTarget.style.borderColor = '#667eea';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateX(0)';
            e.currentTarget.style.borderColor = 'transparent';
          }}>
            <div style={{fontSize: '3.5rem', flexShrink: 0}}>⚡</div>
            <div>
              <h3 style={{fontSize: '1.8rem', marginBottom: '0.5rem', color: '#2d3748'}}>
                Advanced Techniques
              </h3>
              <p style={{color: '#4a5568', lineHeight: '1.6', margin: 0}}>
                Chain of thought, role playing, structured output, and RAG. Level up your AI game.
              </p>
            </div>
          </Link>

        </div>
      </section>

      <Footer />
    </>
  )
}
