import Navigation from '../../../components/Navigation'
import Footer from '../../../components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'The Skill No One Talks About: Why "Talking to AI" Is Actually a Superpower | Jamie Williams',
  description: 'Being good at "talking to AI" isn\'t a quirk—it\'s a professional advantage. Why the ability to iterate, refine, and guide AI is becoming the most valuable skill in product management.',
}

export default function TalkingToAI() {
  return (
    <>
      <Navigation />
      
      {/* Hero */}
      <section className="section-hero bg-gradient">
        <div className="container content-narrow text-center">
          <h1 className="text-5xl font-bold mb-md">The Skill No One Talks About: Why "Talking to AI" Is Actually a Superpower</h1>
          <div className="mb-md" style={{display: 'flex', gap: '0.5rem', justifyContent: 'center', flexWrap: 'wrap'}}>
            <span className="badge badge-live">Product Management</span>
            <span className="badge badge-live">AI Strategy</span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="section bg-secondary">
        <div className="container content-narrow">
          <article className="text-lg line-height-relaxed">
            
            <p className="mb-md">
              I've realized something about myself this year:
            </p>
            
            <p className="mb-xl font-bold">
              I am really good at talking to AI.
            </p>

            <p className="mb-md opacity-70">
              Not in the sci-fi sense.
            </p>

            <p className="mb-xl opacity-70">
              In the "I can explain what I want, react to what I see, steer the direction, and refine the thing until it matches my brain" sense.
            </p>

            <p className="mb-xl opacity-70">
              And the more I play in this space, the more I think this is an actual professional advantage — not just a quirk.
            </p>

            <h2 className="text-3xl font-bold text-cyan mb-md">I'm Not a Designer — But I'm Great at the Loop</h2>
            
            <p className="mb-md opacity-70">
              I've never been a visual creative. Photoshop? Nope. Canva? Makes me want to scream. Even "easy drag-and-drop tools" somehow feel like assembling IKEA furniture blindfolded.
            </p>

            <p className="mb-xl opacity-70">
              But put me in a conversation with an AI model — text, images, ideas — and suddenly the whole process feels natural. I don't need to be the designer. I just need to know what feels right when I see it, and give clear feedback.
            </p>

            <p className="mb-md opacity-70">
              That's my strength: I'm good at <strong className="text-cyan">vibe coding</strong>.
            </p>

            <p className="mb-md opacity-70">
              I can't always name the aesthetic, but I know exactly what I want once it's on the page.
            </p>

            <p className="mb-xl opacity-70">
              With AI, that skill goes from "nice to have" → actual leverage.
            </p>

            <h2 className="text-3xl font-bold text-cyan mb-md">This Is Why I've Always Been a Good PM</h2>
            
            <p className="mb-md opacity-70">
              Product management is basically:
            </p>

            <ul className="mb-md opacity-70" style={{listStyle: 'disc', paddingLeft: '2rem'}}>
              <li className="mb-sm">Seeing something rough</li>
              <li className="mb-sm">Asking better questions</li>
              <li className="mb-sm">Turning ambiguity into decisions</li>
              <li className="mb-sm">Iterating the version</li>
              <li className="mb-sm">Guiding people toward clarity</li>
              <li className="mb-sm">And having opinions when it matters</li>
            </ul>

            <p className="mb-xl opacity-70">
              AI works the same way.
            </p>

            <p className="mb-md opacity-70">
              The tools are fast, patient, and endlessly tweakable — which means people who are naturally iterative communicators (hi, me) suddenly move 10x faster.
            </p>

            <p className="mb-xl opacity-70">
              I don't need to spend three days wrestling with a slide layout. I can sketch a draft with AI in minutes. Then I do the part I'm actually good at: editing, steering, refining, deciding.
            </p>

            <h2 className="text-3xl font-bold text-cyan mb-md">The Real Shift: The Value Moves From "Creation" to "Direction"</h2>
            
            <p className="mb-md opacity-70">
              Everyone keeps saying AI will replace creative jobs. But what I'm seeing is the opposite.
            </p>

            <p className="mb-md opacity-70">
              AI puts a spotlight on the people who can:
            </p>

            <ul className="mb-xl opacity-70" style={{listStyle: 'disc', paddingLeft: '2rem'}}>
              <li className="mb-sm">articulate taste</li>
              <li className="mb-sm">notice when something is off</li>
              <li className="mb-sm">give useful feedback</li>
              <li className="mb-sm">hold a vision</li>
              <li className="mb-sm">communicate nuance</li>
              <li className="mb-sm">iterate in public</li>
              <li className="mb-sm">and not settle for the first draft</li>
            </ul>

            <p className="mb-xl opacity-70">
              If creativity used to be about mastering the tools, now creativity is about mastering the conversation.
            </p>

            <p className="mb-xl opacity-70">
              And if you've spent your career guiding teams, clarifying ideas, shaping stories, or making judgment calls — AI is gasoline on those strengths.
            </p>

            <h2 className="text-3xl font-bold text-cyan mb-md">So What Does All This Mean?</h2>
            
            <p className="mb-md opacity-70">
              It means this era finally rewards people like me — and probably a lot of people who never identified as "creatives."
            </p>

            <p className="mb-md opacity-70">
              You don't have to push pixels.
            </p>

            <p className="mb-md opacity-70">
              You don't need to master some complicated design app.
            </p>

            <p className="mb-md opacity-70">
              You just need:
            </p>

            <ul className="mb-xl opacity-70" style={{listStyle: 'disc', paddingLeft: '2rem'}}>
              <li className="mb-sm">taste</li>
              <li className="mb-sm">curiosity</li>
              <li className="mb-sm">clarity</li>
              <li className="mb-sm">communication</li>
              <li className="mb-sm">and the willingness to iterate without ego</li>
            </ul>

            <p className="mb-md opacity-70">
              AI handles the tedious part. We handle the human part.
            </p>

            <p className="mb-xl font-bold text-xl">
              And honestly? I kind of love that.
            </p>

          </article>

          {/* Back to Blog */}
          <div className="text-center mt-xl">
            <Link href="/blog" className="btn btn-outline no-underline">
              ← Back to Blog
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
