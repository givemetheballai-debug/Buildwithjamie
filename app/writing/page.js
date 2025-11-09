import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'

export const metadata = {
  title: 'Writing | Jamie Williams',
  description: 'Thoughts on AI, product building, and lessons learned',
}

export default function Writing() {
  return (
    <>
      <Navigation />
      
      {/* Hero */}
      <section className="section-hero text-center bg-gradient">
        <div className="container">
          <h1 className="text-5xl font-bold mb-sm">Writing</h1>
          <p className="text-xl">Thoughts on AI, product building, and lessons learned</p>
        </div>
      </section>
      
      {/* Content */}
      <section className="section bg-secondary">
        <div className="container" style={{maxWidth: '900px'}}>
          <h2 className="text-gradient text-4xl font-bold mb-sm">Latest Articles</h2>
          <p className="text-lg opacity-70 mb-lg">Published on Medium and LinkedIn</p>

          <div className="card mb-lg">
            <h3 className="text-2xl font-bold mb-sm">From Dog Photos to AI Products</h3>
            <p className="text-sm opacity-70 mb-md">Medium • Product Journey</p>
            <p className="text-base opacity-70 mb-md" style={{lineHeight: 1.7}}>
              How six months of messing around with ChatGPT turned into building actual products. The story of going from silly dog photos to shipping AI tools.
            </p>
            <a href="https://jamiewilliamswrites.medium.com/" target="_blank" className="text-cyan font-semibold no-underline">
              Read on Medium →
            </a>
          </div>

          <div className="card text-center">
            <h3 className="text-2xl font-bold mb-md">Find me on LinkedIn</h3>
            <p className="text-base opacity-70 mb-lg">
              I write regularly about AI, product strategy, and building things that matter.
            </p>
            <a href="https://www.linkedin.com/in/jamiwill/" target="_blank" className="btn btn-lg bg-gradient no-underline">
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
