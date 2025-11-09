import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import Link from 'next/link'

export default function Tools() {
  return (
    <>
      <Navigation />
      
      {/* Hero */}
      <section className="section-hero text-center bg-gradient">
        <div className="container">
          <h1 className="text-5xl font-bold mb-md">Tools</h1>
          <p className="text-xl">Interactive tools to help you build with AI</p>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="section bg-secondary">
        <div className="container container-md text-center">
          
          <div className="card">
            <div className="text-6xl mb-md">🛠️</div>
            <h2 className="text-4xl font-bold mb-md">Coming Soon</h2>
            <p className="text-lg opacity-70 mb-lg">
              Building interactive tools like prompt builders, AI workflows, and more.
            </p>
            <p className="text-base opacity-70">
              In the meantime, check out the <Link href="/resources" className="text-cyan no-underline">Resources page</Link> for templates and guides.
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </>
  )
}
