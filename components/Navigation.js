'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  return (
    <nav style={{
      background: 'rgba(0, 0, 0, 0.98)',
      backdropFilter: 'blur(10px)',
      padding: '1rem 2rem',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.8)',
      borderBottom: '1px solid #333333'
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
          background: 'linear-gradient(135deg, #00f2ea 0%, #ff0050 100%)',
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
            color: '#00f2ea'
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
            color: 'rgba(255, 255, 255, 0.7)',
            textDecoration: 'none',
            fontWeight: '500',
            transition: 'color 0.2s'
          }}
          onMouseOver={(e) => e.currentTarget.style.color = '#00f2ea'}
          onMouseOut={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)'}>
            Home
          </Link>

          <Link href="/resources" onClick={closeMenu} style={{
            color: 'rgba(255, 255, 255, 0.7)',
            textDecoration: 'none',
            fontWeight: '500',
            transition: 'color 0.2s'
          }}
          onMouseOver={(e) => e.currentTarget.style.color = '#00f2ea'}
          onMouseOut={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)'}>
            Resources
          </Link>

          <Link href="/blog" onClick={closeMenu} style={{
            color: 'rgba(255, 255, 255, 0.7)',
            textDecoration: 'none',
            fontWeight: '500',
            transition: 'color 0.2s'
          }}
          onMouseOver={(e) => e.currentTarget.style.color = '#00f2ea'}
          onMouseOut={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)'}>
            Blog
          </Link>

          <Link href="/tools" onClick={closeMenu} style={{
            color: 'rgba(255, 255, 255, 0.7)',
            textDecoration: 'none',
            fontWeight: '500',
            transition: 'color 0.2s'
          }}
          onMouseOver={(e) => e.currentTarget.style.color = '#00f2ea'}
          onMouseOut={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)'}>
            Tools
          </Link>

          <Link href="/projects" onClick={closeMenu} style={{
            color: 'rgba(255, 255, 255, 0.7)',
            textDecoration: 'none',
            fontWeight: '500',
            transition: 'color 0.2s'
          }}
          onMouseOver={(e) => e.currentTarget.style.color = '#00f2ea'}
          onMouseOut={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)'}>
            Projects
          </Link>

          <Link href="/about" onClick={closeMenu} style={{
            color: 'rgba(255, 255, 255, 0.7)',
            textDecoration: 'none',
            fontWeight: '500',
            transition: 'color 0.2s'
          }}
          onMouseOver={(e) => e.currentTarget.style.color = '#00f2ea'}
          onMouseOut={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)'}>
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
            background: #000000;
            flex-direction: column;
            padding: 1rem;
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.8);
            border-top: 1px solid #333333;
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
