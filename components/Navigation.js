'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  return (
    <nav className="nav-wrapper">
      <div className="nav-container">
        {/* Logo */}
        <Link href="/" onClick={closeMenu} className="nav-logo">
          Build with Jamie
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="mobile-menu-btn"
        >
          ☰
        </button>

        {/* Desktop Navigation */}
        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <Link href="/" onClick={closeMenu} className="nav-link">
            Home
          </Link>

          <Link href="/resources" onClick={closeMenu} className="nav-link">
            Learn AI
          </Link>

          <Link href="/blog" onClick={closeMenu} className="nav-link">
            Blog
          </Link>

          <Link href="/tools" onClick={closeMenu} className="nav-link">
            Advanced Tools
          </Link>

          <Link href="/projects" onClick={closeMenu} className="nav-link">
            Projects
          </Link>

          <Link href="/about" onClick={closeMenu} className="nav-link">
            About
          </Link>
        </div>
      </div>
    </nav>
  )
}
