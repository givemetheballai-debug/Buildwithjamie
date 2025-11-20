import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'

export const metadata = {
  title: 'Privacy Policy | Jamie Williams',
  description: 'Privacy Policy for Build With Jamie',
}

export default function Privacy() {
  return (
    <>
      <Navigation />
      
      {/* Hero */}
      <section className="section-hero text-center bg-gradient">
        <div className="container">
          <h1 className="text-6xl font-bold mb-md">Privacy Policy</h1>
          <p className="text-xl opacity-70">Last updated: November 2025</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section bg-secondary">
        <div className="container content-narrow">
          
          <div className="text-lg line-height-relaxed">
            
            <h2 className="text-3xl font-bold text-cyan mb-md">What We Collect</h2>
            <p className="mb-xl opacity-70">
              This site may use basic analytics (like Google Analytics) to understand how people use the site. This includes things like page views, time on site, and general location data. No personally identifiable information is collected unless you choose to contact me.
            </p>

            <h2 className="text-3xl font-bold text-cyan mb-md">What We Don't Do</h2>
            <p className="mb-xl opacity-70">
              I don't sell your data. I don't share your data with third parties (except basic analytics providers). I don't track you across other websites.
            </p>

            <h2 className="text-3xl font-bold text-cyan mb-md">Cookies</h2>
            <p className="mb-xl opacity-70">
              This site may use cookies for analytics purposes. You can disable cookies in your browser settings.
            </p>

            <h2 className="text-3xl font-bold text-cyan mb-md">Changes</h2>
            <p className="mb-xl opacity-70">
              I can update this privacy policy at any time. Check back occasionally.
            </p>

          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
