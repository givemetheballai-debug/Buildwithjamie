import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'Projects | Jamie Williams',
  description: 'All the things I\'ve built, am building, and will build',
}

export default function Projects() {
  return (
    <>
      <Navigation />
      
      {/* Hero */}
      <section className="section-hero text-center bg-gradient">
        <div className="container">
          <h1 className="text-5xl font-bold mb-sm">All Projects</h1>
          <p className="text-xl">The things I've built, am building, and will build</p>
        </div>
      </section>

      {/* Live Projects */}
      <section className="section bg-secondary">
        <div className="container">
          <h2 className="text-gradient text-4xl font-bold mb-sm">Live & Shipping</h2>
          <p className="text-lg opacity-70 mb-lg">Real products you can use right now</p>
          
          <div className="grid grid-3 gap-md">
            <div className="card">
              <div className="text-5xl mb-md">⚽</div>
              <h3 className="text-2xl font-bold mb-sm">Give Me The Ball</h3>
              <span className="badge badge-live">Live</span>
              <p className="text-base opacity-70 mb-md line-height-relaxed">
                A media destination celebrating women leaders in sports and business who demand the ball instead of waiting for permission. Live scores, social features, mobile-responsive design.
              </p>
              <a href="https://givemetheball.com" target="_blank" className="text-cyan font-semibold no-underline">
                Visit Site →
              </a>
            </div>

            <div className="card">
              <div className="text-5xl mb-md">✈️</div>
              <h3 className="text-2xl font-bold mb-sm">Fancy Lazy Travel</h3>
              <span className="badge badge-live">Live</span>
              <p className="text-base opacity-70 mb-md line-height-relaxed">
                Travel Instagram celebrating doing less. Photography and stories from around the world with a philosophy that the best trips have space to breathe. Growing community of slow travelers.
              </p>
              <a href="https://instagram.com/fancylazytravel" target="_blank" className="text-cyan font-semibold no-underline">
                Follow on Instagram →
              </a>
            </div>

            <div className="card">
              <div className="text-5xl mb-md">💬</div>
              <h3 className="text-2xl font-bold mb-sm">Human-AI Communication Protocol</h3>
              <span className="badge badge-live">Live</span>
              <p className="text-base opacity-70 mb-md line-height-relaxed">
                A new emoji system designed specifically for human-AI interaction. Three pillars (Understanding, Certainty, Flow) that signal what emojis can't. Open spec ready to view.
              </p>
              <Link href="/protocol" className="text-cyan font-semibold no-underline">
                View Protocol →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="section bg-tertiary">
        <div className="container">
          <h2 className="text-gradient text-4xl font-bold mb-sm">Coming Soon</h2>
          <p className="text-lg opacity-70 mb-lg">In development</p>
          
          <div className="grid grid-3 gap-md">
            <div className="card">
              <div className="text-5xl mb-md">📰</div>
              <h3 className="text-2xl font-bold mb-sm">Daily AI by Jamie</h3>
              <span className="badge badge-coming-soon">Coming Soon</span>
              <p className="text-base opacity-70 line-height-relaxed">
                Newsletter covering AI, product strategy, and lessons learned. Conversational, smart, witty. My content pillar for building personal brand.
              </p>
            </div>

            <div className="card">
              <div className="text-5xl mb-md">📊</div>
              <h3 className="text-2xl font-bold mb-sm">JAMR</h3>
              <span className="badge badge-coming-soon">Coming Soon</span>
              <p className="text-base opacity-70 line-height-relaxed">
                Market research meets modern content. What Nielsen would look like if it started today. Combining audience insights with TikTok-style content creation.
              </p>
            </div>

            <div className="card">
              <div className="text-5xl mb-md">🎯</div>
              <h3 className="text-2xl font-bold mb-sm">Cooler Ads</h3>
              <span className="badge badge-coming-soon">Coming Soon</span>
              <p className="text-base opacity-70 line-height-relaxed">
                Market research for the modern era. Making ad testing faster, smarter, more accessible. Leveraging AI to democratize insights.
              </p>
            </div>

            <div className="card">
              <div className="text-5xl mb-md">✨</div>
              <h3 className="text-2xl font-bold mb-sm">Cosmic Convenience</h3>
              <span className="badge badge-coming-soon">Coming Soon</span>
              <p className="text-base opacity-70 line-height-relaxed">
                Shopping with magic. Where intuition meets commerce.
              </p>
            </div>

            <div className="card">
              <div className="text-5xl mb-md">😱</div>
              <h3 className="text-2xl font-bold mb-sm">Scream into the Void</h3>
              <span className="badge badge-coming-soon">Coming Soon</span>
              <p className="text-base opacity-70 line-height-relaxed">
                Digital catharsis. Scream when you're mad at AI or work, get emojis and fun graphics. Daily micro-creative project designed for social virality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Past Experience */}
      <section className="section bg-secondary">
        <div className="container">
          <h2 className="text-gradient text-4xl font-bold mb-sm">Past Experience</h2>
          <p className="text-lg opacity-70 mb-lg">Entrepreneurial ventures and learnings</p>
          
          <div className="grid grid-3 gap-md">
            <div className="card">
              <div className="text-5xl mb-md">🏠</div>
              <h3 className="text-2xl font-bold mb-sm">Real Estate Ventures</h3>
              <p className="text-base opacity-70 line-height-relaxed">
                Multiple entrepreneurial projects in real estate. Learned about operations, customer service, and building businesses from scratch. Skills that transfer directly to product building.
              </p>
            </div>

            <div className="card">
              <div className="text-5xl mb-md">🍔</div>
              <h3 className="text-2xl font-bold mb-sm">Mobile Food Service</h3>
              <p className="text-base opacity-70 line-height-relaxed">
                Entrepreneurial experience in mobile food industry. Taught me about logistics, marketing, customer experience, and running lean operations. First-hand lesson in building something people want.
              </p>
            </div>

            <div className="card bg-tertiary text-center border">
              <div className="text-5xl mb-md">🪦</div>
              <h3 className="text-2xl font-bold mb-sm">The Graveyard</h3>
              <p className="text-base opacity-70 mb-md line-height-relaxed">
                Where good ideas go to die (for now). Failed experiments, lessons learned, tombstones collected.
              </p>
              <Link href="/graveyard" className="text-cyan font-semibold no-underline">
                Visit the Graveyard →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
