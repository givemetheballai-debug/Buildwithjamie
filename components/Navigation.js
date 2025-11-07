'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav>
      <div className="container">
        <Link href="/" className="logo">Jamie Williams</Link>
        <button 
          className="mobile-menu-btn" 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/projects">Projects</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/writing">Writing</Link></li>
          <li><Link href="/resources">Resources</Link></li>
          <li><Link href="/explainers">AI Explainers</Link></li>
          <li><Link href="/graveyard">The Graveyard 🪦</Link></li>
        </ul>
      </div>
    </nav>
  )
}
