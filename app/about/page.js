import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import styles from './about.module.css'

export const metadata = {
  title: 'About | Jamie Williams',
  description: 'From Enterprise to Entrepreneurial - The story of how dog photos led to AI products',
}

export default function About() {
  return (
    <>
      <Navigation />
      
      <div className={styles.pageHeader}>
        <h1>From Enterprise to Entrepreneurial</h1>
        <p>The story of how dog photos led to AI products</p>
      </div>

      <section>
        <div className="container">
          <div className={styles.story}>
            <p>I spent <strong>15 years building audience targeting products at Nielsen and Kantar</strong>, working with Fortune 500 brands and managing portfolios worth <strong>$100M+</strong>.</p>
            
            <p>Then I got curious about AI.</p>
            
            <p>Started with silly dog photos in ChatGPT. I wasn't trying to build anything. I was just bored and wanted funny pictures of my dog Max. Max as a wizard! Max as a CEO! Max as a gladiator!</p>
            
            <p>Somewhere between the memes and the midnight rabbit holes, something shifted. I stopped just using AI and started building with it.</p>
            
            <p><strong>Six months later, I'm building products, writing code, and shipping faster than ever.</strong></p>
            
            <p>I'm not a traditional developer. I'm a product person who learned to build with AI. And that's exactly the skill set companies need right now.</p>
          </div>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <div className={styles.statNumber}>15+</div>
              <div className={styles.statLabel}>Years in Product</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>$100M+</div>
              <div className={styles.statLabel}>Portfolio Managed</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>7+</div>
              <div className={styles.statLabel}>AI Products Built</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>4+</div>
              <div className={styles.statLabel}>Sites Launched</div>
            </div>
          </div>

          <div className={styles.story}>
            <p><strong>What I'm doing now:</strong></p>
            <p>Currently exploring roles at AI-first companies and building my own things. I'm based in Cincinnati, first in my family to attend college, and I build products that mix serious enterprise experience with actual personality.</p>
            
            <p><strong>What makes me different:</strong></p>
            <p>I'm not trying to fit in with tech bros. I'm a queer woman in middle America building AI products about sports, travel, and astrology alongside serious market research tools. My portfolio has both givemetheball.com and protocol specifications. That range is the point.</p>
            
            <p style={{marginTop: '2rem', fontSize: '1.3rem', textAlign: 'center'}}><strong>I convince Fortune 500 companies to spend millions. Now I convince AI to make dog photos. Both skills transfer surprisingly well.</strong></p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
