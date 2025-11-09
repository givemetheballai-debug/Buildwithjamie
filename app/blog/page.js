import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import Link from 'next/link'

export default function Blog() {
  return (
    <>
      <Navigation />
      
      {/* Page Header */}
      <section className="section-hero text-center bg-gradient">
        <div className="container">
          <h1 className="text-5xl font-bold mb-sm">Blog</h1>
          <p className="text-xl">What I'm learning about AI, product strategy, and building businesses</p>
        </div>
      </section>

      {/* Article List */}
      <section className="section bg-secondary">
        <div className="container content-narrow">
          
          {/* Featured Article */}
          <article className="card mb-lg border">
            <span className="badge badge-premium mb-md">⭐ Featured</span>
            
            <h2 className="text-3xl font-bold mb-md">
              5 Problems Everyone Has with AI (and How to Actually Fix Them)
            </h2>
            
            <p className="text-lg mb-lg opacity-70 line-height-relaxed">
              If you've been using ChatGPT or Claude for more than a week, you've probably hit the same walls everyone else does. Wrong tool, bad prompts, getting stuck, scared of costs, losing your work. Here's what actually trips people up — and what to do about it.
            </p>
            
            <Link href="/blog/5-problems" className="btn btn-lg bg-gradient no-underline">
              Read Full Article →
            </Link>
          </article>

          {/* Second Article */}
          <article className="card mb-lg">
            <h2 className="text-3xl font-bold mb-md">
              3 Things You Should Be Using AI For Right Now
            </h2>
            
            <p className="text-lg mb-lg opacity-70 line-height-relaxed">
              Stop overthinking it. Writing & content, research & learning, life planning — here's exactly how to use AI for each one, which tools work best, and the prompts that actually get results.
            </p>
            
            <Link href="/blog/3-things" className="btn btn-lg bg-gradient no-underline">
              Read Full Article →
            </Link>
          </article>

          {/* Third Article */}
          <article className="card mb-lg">
            <h2 className="text-3xl font-bold mb-md">
              I Accidentally Built Enterprise AI Architecture (And You Can Too)
            </h2>
            
            <p className="text-lg mb-lg opacity-70 line-height-relaxed">
              Turns out my "context document" system is actually RAG. Here's what I learned building enterprise AI architecture in my free time — and how you can do it too.
            </p>
            
            <Link href="/blog/context-doc" className="btn btn-lg bg-gradient no-underline">
              Read Full Article →
            </Link>
          </article>

          {/* Fourth Article */}
          <article className="card mb-lg">
            <h2 className="text-3xl font-bold mb-md">
              How I Actually Use AI (Every Day)
            </h2>
            
            <p className="text-lg mb-lg opacity-70 line-height-relaxed">
              Not magic. Just practical ways AI helps me work, think, and build faster. From idea wrangling to career strategy to startup building — here's what actually works.
            </p>
            
            <Link href="/blog/how-i-use-ai" className="btn btn-lg bg-gradient no-underline">
              Read Full Article →
            </Link>
          </article>

          {/* Coming Soon */}
          <div className="card text-center bg-tertiary">
            <h3 className="text-2xl font-bold mb-md">More Articles Coming Soon</h3>
            <p className="text-lg opacity-70 mb-lg">
              In the meantime, check out my writing on Medium where I share stories about AI, career pivots, and building things.
            </p>
            <a 
              href="https://jamiewilliamswrites.medium.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-lg btn-outline no-underline"
            >
              Read on Medium →
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
