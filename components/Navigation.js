'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  return (
    <nav style={{
      background: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(10px)',
      padding: '1rem 2rem',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        {/* Logo */}
        <Link href="/" onClick={closeMenu} style={{
          fontSize: '1.5rem',
          fontWeight: '700',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          textDecoration: 'none'
        }}>
          Build with Jamie
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            fontSize: '1.5rem',
            cursor: 'pointer',
            color: '#4a5568'
          }}
          className="mobile-menu-btn"
        >
          ☰
        </button>

        {/* Desktop Navigation */}
        <div style={{
          gap: '2rem',
          alignItems: 'center'
        }} className={`nav-links ${isOpen ? 'active' : ''}`}>
          <Link href="/" onClick={closeMenu} style={{
            color: '#4a5568',
            textDecoration: 'none',
            fontWeight: '500',
            transition: 'color 0.2s'
          }}
          onMouseOver={(e) => e.currentTarget.style.color = '#667eea'}
          onMouseOut={(e) => e.currentTarget.style.color = '#4a5568'}>
            Home
          </Link>

          <Link href="/resources" onClick={closeMenu} style={{
            color: '#4a5568',
            textDecoration: 'none',
            fontWeight: '500',
            transition: 'color 0.2s'
          }}
          onMouseOver={(e) => e.currentTarget.style.color = '#667eea'}
          onMouseOut={(e) => e.currentTarget.style.color = '#4a5568'}>
            Resources
          </Link>

          <Link href="/blog" onClick={closeMenu} style={{
            color: '#4a5568',
            textDecoration: 'none',
            fontWeight: '500',
            transition: 'color 0.2s'
          }}
          onMouseOver={(e) => e.currentTarget.style.color = '#667eea'}
          onMouseOut={(e) => e.currentTarget.style.color = '#4a5568'}>
            Blog
          </Link>

          <Link href="/tools" onClick={closeMenu} style={{
            color: '#4a5568',
            textDecoration: 'none',
            fontWeight: '500',
            transition: 'color 0.2s'
          }}
          onMouseOver={(e) => e.currentTarget.style.color = '#667eea'}
          onMouseOut={(e) => e.currentTarget.style.color = '#4a5568'}>
            Tools
          </Link>

          <Link href="/projects" onClick={closeMenu} style={{
            color: '#4a5568',
            textDecoration: 'none',
            fontWeight: '500',
            transition: 'color 0.2s'
          }}
          onMouseOver={(e) => e.currentTarget.style.color = '#667eea'}
          onMouseOut={(e) => e.currentTarget.style.color = '#4a5568'}>
            Projects
          </Link>

          <Link href="/about" onClick={closeMenu} style={{
            color: '#4a5568',
            textDecoration: 'none',
            fontWeight: '500',
            transition: 'color 0.2s'
          }}
          onMouseOver={(e) => e.currentTarget.style.color = '#667eea'}
          onMouseOut={(e) => e.currentTarget.style.color = '#4a5568'}>
            About
          </Link>
        </div>
      </div>

      <style jsx global>{`
        .nav-links {
          display: flex;
        }
        
        @media (max-width: 768px) {
          .mobile-menu-btn {
            display: block !important;
          }
          
          .nav-links {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: white;
            flex-direction: column;
            padding: 1rem;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            display: none;
          }
          
          .nav-links.active {
            display: flex !important;
          }
        }
      `}</style>
    </nav>
  )
}
