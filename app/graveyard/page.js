import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'

export const metadata = {
  title: 'The Graveyard | Jamie Williams',
  description: 'Where good ideas go to die (for now)',
}

export default function Graveyard() {
  return (
    <>
      <Navigation />
      
      {/* Hero */}
      <section className="section-hero text-center bg-primary">
        <div className="container">
          <h1 className="text-6xl font-bold mb-md">The Graveyard 🪦</h1>
          <p className="text-2xl italic opacity-70">Where good ideas go to die (for now)</p>
        </div>
      </section>
      
      {/* Tombstones */}
      <section className="section bg-primary">
        <div className="container">
          
          <div className="card mb-lg border">
            <h3 className="text-3xl text-cyan font-bold mb-md">Scene Stealers AI 🪦</h3>
            <p className="text-base mb-sm">
              <strong className="text-pink">Cause of death:</strong> <span className="opacity-70">Copyright nightmare meets AI visual tools that don't work</span>
            </p>
            <p className="text-base mb-sm">
              <strong className="text-cyan">What I learned:</strong> <span className="opacity-70">AI trivia/movie game idea was fun - mock up AI images putting you in scenes from famous movies or locations. But copyright issues are real, and getting visual AI tools to consistently work is harder than it looks.</span>
            </p>
            <p className="text-base italic opacity-70">
              <strong>Status:</strong> Dead dead. Not coming back.
            </p>
          </div>

          <div className="card mb-lg border">
            <h3 className="text-3xl text-cyan font-bold mb-md">Comedy Pilot with ChatGPT 🪦</h3>
            <p className="text-base mb-sm">
              <strong className="text-pink">Cause of death:</strong> <span className="opacity-70">Turns out AI can help write jokes, but it can't make them funny</span>
            </p>
            <p className="text-base mb-sm">
              <strong className="text-cyan">What I learned:</strong> <span className="opacity-70">Collaborative writing with AI is interesting. But comedy needs timing, nuance, and cultural context that AI doesn't quite get yet. The pilot exists. It's not good.</span>
            </p>
            <p className="text-base italic opacity-70">
              <strong>Status:</strong> Filed away as "learning experience."
            </p>
          </div>

          <div className="card mb-lg border">
            <h3 className="text-3xl text-cyan font-bold mb-md">Feed Check (Bubble Score) 🪦</h3>
            <p className="text-base mb-sm">
              <strong className="text-pink">Cause of death:</strong> <span className="opacity-70">Instagram API restrictions + people don't actually want to know how bubble-y they are</span>
            </p>
            <p className="text-base mb-sm">
              <strong className="text-cyan">What I learned:</strong> <span className="opacity-70">Great concept - "Spotify Wrapped for your social bubble." Analyze Instagram following diversity and algorithmic bubbles. MVP would upload followers.json for analysis. But Instagram's API makes it nearly impossible to get that data publicly. And honestly? People like their bubbles.</span>
            </p>
            <p className="text-base italic opacity-70">
              <strong>Status:</strong> Good idea, wrong platform, wrong time.
            </p>
          </div>

          <div className="text-center mt-xl">
            <p className="text-xl italic mb-md">
              "The graveyard is big, but the things that survive are worth it."
            </p>
            <p className="text-base opacity-70">
              More tombstones coming soon as I build and abandon things at speed.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
