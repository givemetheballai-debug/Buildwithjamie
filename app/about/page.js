import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import styles from './about.module.css'

export const metadata = {
  title: 'About | Jamie Williams',
  description: 'Product Leader Turned AI Builder',
}

export default function About() {
  return (
    <>
      <Navigation />
      
      <div className={styles.pageHeader}>
        <h1>Product Leader Turned AI Builder</h1>
        <p>15 years at enterprise. Now building AI products.</p>
      </div>

      <section>
        <div className="container">
          <div className={styles.story}>
            <p>I spent 15+ years at market research companies working with Fortune 500 brands on advertising and consumer insights. Built products that helped companies understand their audiences.</p>
            
            <p>But I've always been entrepreneurial. I built <strong>Fancy Lazy Travel</strong>, a travel Instagram account where I experiment with design and storytelling. I've launched businesses in real estate and started my own ventures. I'm a tech early adopter who loves figuring out how new things work.</p>
            
            <p>Then I got curious about AI. Started experimenting, building, shipping. <strong>Six months later, I'm creating products faster than ever.</strong></p>
            
            <p>I'm not a traditional developer. I'm a product person who learned to build with AI. That's the skill set companies need right now.</p>
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
            <p>Exploring roles at AI-first companies and building my own things. Based in Cincinnati, first in my family to attend college. I build products that mix serious enterprise experience with personality.</p>
            
            <p><strong>What makes me different:</strong></p>
            <p>I'm a woman from middle America building AI products about sports, travel, and astrology alongside serious market research tools. That range is the point.</p>
          </div>

          <div className={styles.credentials}>
            <h2>The Background</h2>
            
            <div className={styles.credentialBlock}>
              <h3>Kantar</h3>
              <p>Led Global Media and Innovation Product teams managing brand lift research across 60+ markets. Learned the full funnel of advertising - from awareness to conversion - and consulted Fortune 500 companies on ad strategy and creative effectiveness. Launched innovation research products and wrote thought leadership on branding, pricing strategy, and innovation. Named to The Media Leader's #Future100Club.</p>
            </div>
            
            <div className={styles.credentialBlock}>
              <h3>Nielsen</h3>
              <p>Spent over a decade growing from traditional market research into product leadership. Worked on e-commerce tracking in the early days of Amazon. Launched audience targeting products as programmatic advertising was taking off. Built API integrations across major platforms. Won Nielsen's Global Emerging Product Idea Award.</p>
            </div>
          </div>

          <div className={styles.story} style={{marginTop: '3rem', fontSize: '1.3rem', textAlign: 'center'}}>
            <p><strong>I convinced Fortune 500 companies to invest millions. Now I build AI tools. Both skills transfer well.</strong></p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
