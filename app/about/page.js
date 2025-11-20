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
          <p className="text-xl opacity-70">15 years at enterprise. Now shipping AI products fast.</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section bg-secondary">
        <div className="container content-narrow">
          
          {/* Who I Am */}
          <div className="text-lg mb-xl line-height-relaxed">
            <p className="mb-md">
              I'm Jamie Williams. Based in Cincinnati. First in my family to attend college.
            </p>
            
            <p className="mb-md">
              I've spent 15+ years building products in media, advertising, and market research—working with Fortune 500 brands on everything from audience targeting to creative effectiveness.
            </p>
            
            <p className="mb-md">
              I'm also entrepreneurial as hell. I've launched businesses, built side projects, and always been the person who adopts new tech early to figure out how it actually works.
            </p>
          </div>

          {/* Why AI */}
          <div className="text-lg mb-xl line-height-relaxed">
            <h2 className="text-3xl font-bold text-cyan mb-md">Why AI</h2>
            
            <p className="mb-md">
              I got curious about AI this year.
            </p>
            
            <p className="mb-md">
              So I started experimenting. First making fun pictures. Learning. Going down rabbit holes. Then I naturally started building and shipping—because I'm a product person. That's what we do.
            </p>
            
            <p className="mb-md">
              I've been testing what works and what doesn't. Six months later, I've launched multiple AI products.
            </p>
            
            <p className="mb-md">
              I'm not a traditional developer. I'm a product person who learned to build with AI. That's the skill companies need right now—people who can move fast, think strategically, and ship real products.
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

          {/* What I've Been Doing */}
          <div className="text-lg mb-xl line-height-relaxed">
            <h2 className="text-3xl font-bold text-cyan mb-md">What I've Been Doing</h2>
            
            <p className="mb-md">
              I'm building fun stuff that interests me. I'm showcasing it on this site. I'll keep updating as I add more.
            </p>
            
            <p className="mb-md">A few that I've launched:</p>
            
            <ul className="mb-md opacity-70">
              <li className="mb-sm"><strong className="text-cyan">Cosmic MASH</strong> - AI fortune-telling game (playcosmicmash.com)</li>
              <li className="mb-sm"><strong className="text-cyan">Big Scream Energy</strong> - Cathartic screaming app (bigscreamenergy.com)</li>
              <li className="mb-sm"><strong className="text-cyan">SoftWitch</strong> - Millennial witchcraft platform (softwitch.com)</li>
            </ul>
            
            <p className="mb-md">
              Here's the thing: the process might be my best product. Learning what works and what doesn't with AI. How to adapt AI for product managers and the new ways of working. I'm documenting all of it.
            </p>
          </div>

          {/* What I Think About AI */}
          <div className="text-lg mb-xl line-height-relaxed">
            <h2 className="text-3xl font-bold text-cyan mb-md">What I Think About AI</h2>
            
            <p className="mb-md">
              AI is a tool for amplification, not replacement.
            </p>
            
            <p className="mb-md">
              The goal isn't to automate humans out of the picture. It's to let small teams punch way above their weight. To ship faster. To test ideas that would've taken months in weeks.
            </p>
            
            <p className="mb-md">
              But I'm not naive about the challenges. AI has real problems—environmental costs, bias, questions about creativity and authenticity. I think about this stuff. I've even blogged about it. (Check out "The Other Side of AI" on my blog.)
            </p>
            
            <p className="mb-md">
              We need more voices in this conversation. Especially people who aren't the usual Silicon Valley suspects. I'm happy to lend my voice as a woman, as someone from middle America. Different perspective.
            </p>
            
            <p className="mb-md">
              And I love finding ways to make tech and business and AI useful for more people.
            </p>
          </div>

          {/* The Background */}
          <div className="mt-xl">
            <h2 className="text-gradient text-4xl font-bold text-center mb-lg">The Background</h2>
            
            <div className="card mb-md">
              <p className="text-lg line-height-relaxed mb-md">
                <strong className="text-cyan">15+ years in media, advertising, and market research</strong>
              </p>
              <ul className="text-base opacity-70 line-height-relaxed">
                <li className="mb-sm">Led product teams managing $100M+ portfolios across 60+ global markets</li>
                <li className="mb-sm">Built API integrations across major ad platforms</li>
                <li className="mb-sm">Launched innovation products for Fortune 500 brands</li>
                <li className="mb-sm">Won multiple industry awards (Nielsen Global Innovation Award, Future Media 100)</li>
                <li className="mb-sm">Consulted on ad strategy, creative effectiveness, and consumer insights</li>
              </ul>
            </div>
            
            <p className="text-center text-xl font-bold text-cyan mt-lg">
              Now I'm building AI products and having fun.
            </p>
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
