import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'

export const metadata = {
  title: 'Projects | Jamie Williams',
  description: 'AI products I\'ve built and launched',
}

export default function Projects() {
  return (
    <>
      <Navigation />
      
      {/* Hero */}
      <section className="section-hero text-center bg-gradient">
        <div className="container">
          <h1 className="text-5xl font-bold mb-sm">Projects</h1>
          <p className="text-xl">AI products I've built and launched</p>
        </div>
      </section>

      {/* Live Projects */}
      <section className="section bg-secondary">
        <div className="container">
          
          <div className="grid grid-3 gap-md">
            
            {/* Cosmic MASH */}
            <div className="card">
              <div className="media-container media-container-16-9 mb-md">
                <img src="/cosmicmash-screenshot.png" alt="Cosmic MASH screenshot" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
              </div>
              <h3 className="text-2xl font-bold mb-sm text-cyan">Cosmic MASH</h3>
              <p className="text-base opacity-70 mb-md line-height-relaxed">
                AI-powered fortune-telling game. Taught me about making AI feel magical without feeling robotic.
              </p>
              <a href="https://playcosmicmash.com" target="_blank" rel="noopener noreferrer" className="text-cyan font-semibold no-underline">
                Play Now →
              </a>
            </div>

            {/* Big Scream Energy */}
            <div className="card">
              <div className="media-container media-container-16-9 mb-md">
                <img src="/bigscream-screenshot.png" alt="Big Scream Energy screenshot" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
              </div>
              <h3 className="text-2xl font-bold mb-sm text-cyan">Big Scream Energy</h3>
              <p className="text-base opacity-70 mb-md line-height-relaxed">
                Cathartic screaming app with Lisa Frank-style chaos effects. AI is good at empathy when designed for it.
              </p>
              <a href="https://bigscreamenergy.com" target="_blank" rel="noopener noreferrer" className="text-cyan font-semibold no-underline">
                Scream Now →
              </a>
            </div>

            {/* SoftWitch */}
            <div className="card">
              <div className="media-container media-container-16-9 mb-md">
                <img src="/Softwitch.png" alt="SoftWitch screenshot" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
              </div>
              <h3 className="text-2xl font-bold mb-sm text-cyan">SoftWitch</h3>
              <p className="text-base opacity-70 mb-md line-height-relaxed">
                Millennial witchcraft platform. "Magic for people who want the vibes, not the rules." Sophisticated personalization that doesn't feel complicated.
              </p>
              <a href="https://softwitch.com" target="_blank" rel="noopener noreferrer" className="text-cyan font-semibold no-underline">
                Explore →
              </a>
            </div>

          </div>

          {/* Meta Note */}
          <div className="text-center mt-xl">
            <p className="text-base opacity-70 italic">
              (Yes, this Projects page is also a live product. Meta, right?)
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </>
  )
}
