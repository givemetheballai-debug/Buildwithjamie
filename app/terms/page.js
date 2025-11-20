import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'

export const metadata = {
  title: 'Terms of Service | Jamie Williams',
  description: 'Terms of Service for Build With Jamie',
}

export default function Terms() {
  return (
    <>
      <Navigation />
      
      {/* Hero */}
      <section className="section-hero text-center bg-gradient">
        <div className="container">
          <h1 className="text-6xl font-bold mb-md">Terms of Service</h1>
          <p className="text-xl opacity-70">Last updated: November 2025</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section bg-secondary">
        <div className="container content-narrow">
          
          <div className="text-lg line-height-relaxed">
            
            <h2 className="text-3xl font-bold text-cyan mb-md">The Basics</h2>
            <p className="mb-xl opacity-70">
              By using this site, you agree to these terms. If you don't agree, don't use the site.
            </p>

            <h2 className="text-3xl font-bold text-cyan mb-md">Intellectual Property</h2>
            <p className="mb-md opacity-70">
              All content on this site—including text, code, and design—is owned by me (Jamie Williams) and protected by copyright. Images are from Unsplash or are my own work.
            </p>
            <p className="mb-xl opacity-70">
              Don't copy my content. Don't steal my ideas. Don't reproduce my work without permission.
            </p>
            <p className="mb-xl opacity-70">
              If you want to reference or share something, link to it. Don't just copy/paste it.
            </p>

            <h2 className="text-3xl font-bold text-cyan mb-md">Use At Your Own Risk</h2>
            <p className="mb-md opacity-70">
              This site and its content are provided "as is." I make no warranties about accuracy, completeness, or reliability. Use the information here at your own risk.
            </p>
            <p className="mb-xl opacity-70">
              I'm not responsible for any decisions you make based on content from this site.
            </p>

            <h2 className="text-3xl font-bold text-cyan mb-md">AI Tools & Resources</h2>
            <p className="mb-xl opacity-70">
              The AI tools, prompts, and resources on this site are educational. Results may vary. I'm not responsible for how you use them or what outcomes you get.
            </p>

            <h2 className="text-3xl font-bold text-cyan mb-md">Links to Other Sites</h2>
            <p className="mb-xl opacity-70">
              This site links to my other projects and external websites. I'm not responsible for third-party sites, their content, or privacy practices.
            </p>

            <h2 className="text-3xl font-bold text-cyan mb-md">Changes</h2>
            <p className="mb-xl opacity-70">
              I can update these terms at any time. Continued use of the site means you accept any changes.
            </p>

          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
