import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
      <Navigation />
      
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>I Build AI Products</h1>
          <p className={styles.subtitle}>Product leader turned AI builder</p>
          <p>15 years scaling products at market research companies like Nielsen. Now shipping AI tools that solve real problems. No hype, just builds.</p>
          <div className={styles.ctaButtons}>
            <Link href="/projects" className={`${styles.btn} ${styles.btnPrimary}`}>See My Work</Link>
            <a href="https://jamiewilliamswrites.medium.com/" target="_blank" className={`${styles.btn} ${styles.btnSecondary}`}>Read My Writing</a>
          </div>
        </div>
      </section>

      <section id="projects">
        <div className="container">
          <h2>What I'm Building</h2>
          <p className={styles.sectionIntro}>From concept to code. Here's what I've shipped recently.</p>
          
          <div className={styles.projectsGrid}>
            <div className={styles.projectCard}>
              <div className={styles.projectIcon}>⚽</div>
              <h3>Give Me The Ball</h3>
              <span className={`${styles.tag} ${styles.tagLive}`}>Live</span>
              <p>A media destination celebrating women leaders in sports and business who demand the ball instead of waiting for permission. Live scores, social features, mobile-responsive design.</p>
              <a href="https://givemetheball.com" target="_blank" className={styles.projectLink}>Visit Site →</a>
            </div>
            
            <div className={styles.projectCard}>
              <div className={styles.projectIcon}>💬</div>
              <h3>Human-AI Communication Protocol</h3>
              <span className={`${styles.tag} ${styles.tagNew}`}>New</span>
              <p>A new communication system for human-AI interaction. Three pillars (Understanding, Certainty, Flow) that signal what emojis can't. Open spec, ready to ship.</p>
              <Link href="/protocol" className={styles.projectLink}>View Protocol →</Link>
            </div>
            
            <div className={styles.projectCard}>
              <div className={styles.projectIcon}>📰</div>
              <h3>Daily Intelligence</h3>
              <span className={`${styles.tag} ${styles.tagLive}`}>Live</span>
              <p>Multi-section newsletter covering Markets, Tech, Culture, Leadership, and Astro. Signature voice: conversational, smart, witty. My content pillar for personal brand.</p>
              <Link href="/projects" className={styles.projectLink}>Learn More →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.skills}>
        <div className="container">
          <h2>How I Work</h2>
          <p className={styles.sectionIntro}>Product thinking + AI building + entrepreneurial execution</p>
          
          <div className={styles.skillsGrid}>
            <div className={styles.skillCard}>
              <div className={styles.skillIcon}>🎯</div>
              <h3>Product Strategy</h3>
              <p>15+ years building products that scale. From $100M+ portfolios to scrappy MVPs.</p>
            </div>
            
            <div className={styles.skillCard}>
              <div className={styles.skillIcon}>🤖</div>
              <h3>AI Development</h3>
              <p>Building with Claude, ChatGPT, and custom AI tools. 6 months deep, shipping daily.</p>
            </div>
            
            <div className={styles.skillCard}>
              <div className={styles.skillIcon}>⚡</div>
              <h3>Rapid Prototyping</h3>
              <p>From idea to working prototype in days, not months. Test fast, learn faster.</p>
            </div>
            
            <div className={styles.skillCard}>
              <div className={styles.skillIcon}>📊</div>
              <h3>Data & Analytics</h3>
              <p>Built audience targeting products with Nielsen. I speak data fluently.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
