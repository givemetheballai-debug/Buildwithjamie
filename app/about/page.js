import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'

export const metadata = {
  title: 'About | Jamie Williams',
  description: 'Product Leader Turned AI Builder',
}

export default function About() {
  return (
    <>
      <Navigation />
      
      {/* Hero */}
      <section className="section-hero text-center bg-gradient">
        <div className="container">
          <h1 className="text-6xl font-bold mb-md">Product Leader Turned AI Builder</h1>
          <p className="text-xl opacity-70">15 years at enterprise. Now building AI products.</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section bg-secondary">
        <div className="container" style={{maxWidth: '900px'}}>
          
          {/* Story Intro */}
          <div className="text-lg mb-xl" style={{lineHeight: '1.8'}}>
            <p className="mb-md">
              I spent 15+ years at market research companies working with Fortune 500 brands on advertising and consumer insights. Built products that helped companies understand their audiences.
            </p>
            
            <p className="mb-md">
              But I've always been entrepreneurial. I built <strong className="text-cyan">Fancy Lazy Travel</strong>, a travel Instagram account where I experiment with design and storytelling. I've launched businesses in real estate and started my own ventures. I'm a tech early adopter who loves figuring out how new things work.
            </p>
            
            <p className="mb-md">
              Then I got curious about AI. Started experimenting, building, shipping. <strong className="text-cyan">Six months later, I'm creating products faster than ever.</strong>
            </p>
            
            <p className="mb-md">
              I'm not a traditional developer. I'm a product person who learned to build with AI. That's the skill set companies need right now.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-4 gap-md my-lg">
            <div className="card text-center">
              <div className="text-gradient text-5xl font-bold mb-sm">15+</div>
              <div className="text-base opacity-70">Years in Product</div>
            </div>
            <div className="card text-center">
              <div className="text-gradient text-5xl font-bold mb-sm">$100M+</div>
              <div className="text-base opacity-70">Portfolio Managed</div>
            </div>
            <div className="card text-center">
              <div className="text-gradient text-5xl font-bold mb-sm">7+</div>
              <div className="text-base opacity-70">AI Products Built</div>
            </div>
            <div className="card text-center">
              <div className="text-gradient text-5xl font-bold mb-sm">4+</div>
              <div className="text-base opacity-70">Sites Launched</div>
            </div>
          </div>

          {/* What I'm Doing */}
          <div className="text-lg mb-xl" style={{lineHeight: '1.8'}}>
            <p className="mb-md">
              <strong className="text-cyan">What I'm doing now:</strong>
            </p>
            <p className="mb-md">
              Exploring roles at AI-first companies and building my own things. Based in Cincinnati, first in my family to attend college. I build products that mix serious enterprise experience with personality.
            </p>
            
            <p className="mb-md">
              <strong className="text-cyan">What makes me different:</strong>
            </p>
            <p className="mb-md">
              I'm a woman from middle America building AI products about sports, travel, and astrology alongside serious market research tools. That range is the point.
            </p>
          </div>

          {/* Credentials */}
          <div className="mt-xl">
            <h2 className="text-gradient text-4xl font-bold text-center mb-lg">The Background</h2>
            
            <div className="card mb-md">
              <h3 className="text-2xl font-bold text-cyan mb-md">Kantar</h3>
              <p className="text-base opacity-70" style={{lineHeight: '1.8'}}>
                Led Global Media and Innovation Product teams managing brand lift research across 60+ markets. Learned the full funnel of advertising - from awareness to conversion - and consulted Fortune 500 companies on ad strategy and creative effectiveness. Launched innovation research products and wrote thought leadership on branding, pricing strategy, and innovation. Named to The Media Leader's #Future100Club.
              </p>
            </div>
            
            <div className="card mb-md">
              <h3 className="text-2xl font-bold text-cyan mb-md">Nielsen</h3>
              <p className="text-base opacity-70" style={{lineHeight: '1.8'}}>
                Spent over a decade growing from traditional market research into product leadership. Worked on e-commerce tracking in the early days of Amazon. Launched audience targeting products as programmatic advertising was taking off. Built API integrations across major platforms. Won Nielsen's Global Emerging Product Idea Award.
              </p>
            </div>
          </div>

          {/* Closing Statement */}
          <div className="text-center mt-xl">
            <p className="text-xl font-bold">
              I convinced Fortune 500 companies to invest millions. Now I build AI tools. Both skills transfer well.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
