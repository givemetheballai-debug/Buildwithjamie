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

      {/* Filter Tags */}
      <section className="section-sm bg-secondary">
        <div className="container">
          <div className="flex gap-md mb-lg" style={{flexWrap: 'wrap', justifyContent: 'center'}}>
            <button className="btn btn-outline">All Posts</button>
            <button className="btn btn-outline">AI Strategy</button>
            <button className="btn btn-outline">Product Management</button>
            <button className="btn btn-outline">Practical Tips</button>
            <button className="btn btn-outline">Marketing</button>
            <button className="btn btn-outline">Ethics</button>
          </div>
        </div>
      </section>

      {/* Article List */}
      <section className="section bg-secondary">
        <div className="container" style={{maxWidth: '900px'}}>
          
          {/* Featured Article */}
          <article className="card mb-lg border" style={{padding: '2rem'}}>
            <span className="badge badge-premium mb-md">⭐ Featured</span>
            
            <h2 className="text-3xl font-bold mb-sm">
              5 Problems Everyone Has with AI (and How to Actually Fix Them)
            </h2>
            
            <div className="mb-md" style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap'}}>
              <span className="badge badge-live">AI Strategy</span>
              <span className="badge badge-live">Practical Tips</span>
            </div>
            
            <p className="text-base mb-lg opacity-70 line-height-relaxed">
              If you've been using ChatGPT or Claude for more than a week, you've probably hit the same walls everyone else does. Wrong tool, bad prompts, getting stuck, scared of costs, losing your work. Here's what actually trips people up — and what to do about it.
            </p>
            
            <Link href="/blog/5-problems" className="btn btn-gradient no-underline">
              Read Full Article →
            </Link>
          </article>

          {/* The Other Side of AI */}
          <article className="card mb-md" style={{padding: '1.5rem'}}>
            <h3 className="text-2xl font-bold mb-sm">
              The Other Side of AI: Can We Build the Future Without Losing Ourselves?
            </h3>
            
            <div className="mb-sm" style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap'}}>
              <span className="badge badge-live">Ethics</span>
              <span className="badge badge-live">AI Strategy</span>
            </div>
            
            <p className="text-sm mb-md opacity-70 line-height-relaxed">
              Gen Z's AI skepticism, data-center emissions, and creative ethics are reshaping marketing. Here's how brands can use AI responsibly—amplifying human voices instead of replacing them.
            </p>
            
            <Link href="/blog/other-side-of-ai" className="text-cyan font-semibold no-underline text-sm">
              Read Article →
            </Link>
          </article>

          {/* The Skill No One Talks About */}
          <article className="card mb-md" style={{padding: '1.5rem'}}>
            <h3 className="text-2xl font-bold mb-sm">
              The Skill No One Talks About: Why "Talking to AI" Is Actually a Superpower
            </h3>
            
            <div className="mb-sm" style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap'}}>
              <span className="badge badge-live">Product Management</span>
              <span className="badge badge-live">AI Strategy</span>
            </div>
            
            <p className="text-sm mb-md opacity-70 line-height-relaxed">
              Being good at "talking to AI" isn't a quirk—it's a professional advantage. Why the ability to iterate, refine, and guide AI is becoming the most valuable skill in product management.
            </p>
            
            <Link href="/blog/talking-to-ai" className="text-cyan font-semibold no-underline text-sm">
              Read Article →
            </Link>
          </article>

          {/* The Rebrand of Branding */}
          <article className="card mb-md" style={{padding: '1.5rem'}}>
            <h3 className="text-2xl font-bold mb-sm">
              The Rebrand of Branding: Why the Future Looks a Lot Like the Past
            </h3>
            
            <div className="mb-sm" style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap'}}>
              <span className="badge badge-live">Marketing</span>
              <span className="badge badge-live">AI Strategy</span>
            </div>
            
            <p className="text-sm mb-md opacity-70 line-height-relaxed">
              From bold typefaces and print comebacks to the rise of "no-niche creators," branding is having a nostalgic identity crisis. Here's how AI and analog are colliding in 2025 marketing.
            </p>
            
            <Link href="/blog/rebrand-of-branding" className="text-cyan font-semibold no-underline text-sm">
              Read Article →
            </Link>
          </article>

          {/* 3 Things You Should Be Using AI For */}
          <article className="card mb-md" style={{padding: '1.5rem'}}>
            <h3 className="text-2xl font-bold mb-sm">
              3 Things You Should Be Using AI For Right Now
            </h3>
            
            <div className="mb-sm" style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap'}}>
              <span className="badge badge-live">Practical Tips</span>
              <span className="badge badge-live">AI Strategy</span>
            </div>
            
            <p className="text-sm mb-md opacity-70 line-height-relaxed">
              Stop overthinking it. Writing & content, research & learning, life planning — here's exactly how to use AI for each one, which tools work best, and the prompts that actually get results.
            </p>
            
            <Link href="/blog/3-things" className="text-cyan font-semibold no-underline text-sm">
              Read Article →
            </Link>
          </article>

          {/* Context Doc */}
          <article className="card mb-md" style={{padding: '1.5rem'}}>
            <h3 className="text-2xl font-bold mb-sm">
              I Accidentally Built Enterprise AI Architecture (And You Can Too)
            </h3>
            
            <div className="mb-sm" style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap'}}>
              <span className="badge badge-live">Product Management</span>
              <span className="badge badge-live">Practical Tips</span>
            </div>
            
            <p className="text-sm mb-md opacity-70 line-height-relaxed">
              Turns out my "context document" system is actually RAG. Here's what I learned building enterprise AI architecture in my free time — and how you can do it too.
            </p>
            
            <Link href="/blog/context-doc" className="text-cyan font-semibold no-underline text-sm">
              Read Article →
            </Link>
          </article>

          {/* How I Use AI */}
          <article className="card mb-md" style={{padding: '1.5rem'}}>
            <h3 className="text-2xl font-bold mb-sm">
              How I Actually Use AI (Every Day)
            </h3>
            
            <div className="mb-sm" style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap'}}>
              <span className="badge badge-live">Practical Tips</span>
              <span className="badge badge-live">AI Strategy</span>
            </div>
            
            <p className="text-sm mb-md opacity-70 line-height-relaxed">
              Not magic. Just practical ways AI helps me work, think, and build faster. From idea wrangling to career strategy to startup building — here's what actually works.
            </p>
            
            <Link href="/blog/how-i-use-ai" className="text-cyan font-semibold no-underline text-sm">
              Read Article →
            </Link>
          </article>

          {/* Medium CTA */}
          <div className="card text-center mt-lg" style={{padding: '2rem'}}>
            <h3 className="text-2xl font-bold mb-md">More on Medium</h3>
            <p className="text-base opacity-70 mb-lg">
              Check out my writing on Medium where I share stories about AI, career pivots, and building things.
            </p>
            <a 
              href="https://jamiewilliamswrites.medium.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-outline no-underline"
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
