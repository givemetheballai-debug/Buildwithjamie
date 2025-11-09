import Navigation from '../../../components/Navigation'
import Footer from '../../../components/Footer'

export default function ToolComparison() {
  return (
    <>
      <Navigation />
      
      {/* Hero */}
      <div className="resource-hero">
        <h1 className="text-5xl font-bold mb-md">Tool Comparison</h1>
        <p className="text-xl">Which AI tool for what task</p>
      </div>

      {/* Comparison Table */}
      <section className="section bg-secondary">
        <div style={{maxWidth: '1000px', margin: '0 auto'}}>
          
          <div style={{background: 'white', padding: '2rem', borderRadius: '12px', marginBottom: '3rem'}}>
            <div style={{overflowX: 'auto'}}>
              <table style={{
                width: '100%',
                borderCollapse: 'collapse'
              }}>
                <thead>
                  <tr style={{background: 'var(--accent-gradient)', color: 'white'}}>
                    <th style={{padding: '1.5rem', textAlign: 'left', fontSize: '1.1rem'}}>Tool</th>
                    <th style={{padding: '1.5rem', textAlign: 'left', fontSize: '1.1rem'}}>Best For</th>
                    <th style={{padding: '1.5rem', textAlign: 'left', fontSize: '1.1rem'}}>Cost</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{borderBottom: '1px solid #e2e8f0'}}>
                    <td style={{padding: '1.5rem', fontWeight: '600', color: '#2d3748'}}>ChatGPT</td>
                    <td style={{padding: '1.5rem', color: '#4a5568'}}>Quick questions, brainstorming, writing drafts, general use</td>
                    <td style={{padding: '1.5rem', color: '#4a5568'}}>Free / $20/mo</td>
                  </tr>
                  <tr style={{borderBottom: '1px solid #e2e8f0'}}>
                    <td style={{padding: '1.5rem', fontWeight: '600', color: '#2d3748'}}>Claude</td>
                    <td style={{padding: '1.5rem', color: '#4a5568'}}>Long documents, coding, detailed analysis, building projects</td>
                    <td style={{padding: '1.5rem', color: '#4a5568'}}>Free / $20/mo</td>
                  </tr>
                  <tr style={{borderBottom: '1px solid #e2e8f0'}}>
                    <td style={{padding: '1.5rem', fontWeight: '600', color: '#2d3748'}}>Gemini</td>
                    <td style={{padding: '1.5rem', color: '#4a5568'}}>Quick lookups, Google integration</td>
                    <td style={{padding: '1.5rem', color: '#4a5568'}}>Free / $20/mo</td>
                  </tr>
                  <tr style={{borderBottom: '1px solid #e2e8f0'}}>
                    <td style={{padding: '1.5rem', fontWeight: '600', color: '#2d3748'}}>Perplexity</td>
                    <td style={{padding: '1.5rem', color: '#4a5568'}}>Research with sources, fact-checking, current events</td>
                    <td style={{padding: '1.5rem', color: '#4a5568'}}>Free / $20/mo</td>
                  </tr>
                  <tr>
                    <td style={{padding: '1.5rem', fontWeight: '600', color: '#2d3748'}}>Cursor</td>
                    <td style={{padding: '1.5rem', color: '#4a5568'}}>Coding with AI assistance, building apps</td>
                    <td style={{padding: '1.5rem', color: '#4a5568'}}>$20/mo</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Quick Guide */}
          <div className="resource-card">
            <h2 className="text-4xl font-bold mb-lg" style={{color: '#2d3748'}}>Quick Decision Guide</h2>
            
            <div className="tool-grid">
              <div className="tool-item">
                <h3 className="text-xl mb-xs" style={{color: '#2d3748'}}>For Writing</h3>
                <p>ChatGPT or Claude</p>
              </div>
              
              <div className="tool-item">
                <h3 className="text-xl mb-xs" style={{color: '#2d3748'}}>For Coding</h3>
                <p>Claude or Cursor</p>
              </div>
              
              <div className="tool-item">
                <h3 className="text-xl mb-xs" style={{color: '#2d3748'}}>For Research</h3>
                <p>Perplexity</p>
              </div>
              
              <div className="tool-item">
                <h3 className="text-xl mb-xs" style={{color: '#2d3748'}}>For Quick Questions</h3>
                <p>Free ChatGPT or Gemini</p>
              </div>
              
              <div className="tool-item">
                <h3 className="text-xl mb-xs" style={{color: '#2d3748'}}>For Long Projects</h3>
                <p>Claude with context doc</p>
              </div>
              
              <div className="tool-item">
                <h3 className="text-xl mb-xs" style={{color: '#2d3748'}}>For Brainstorming</h3>
                <p>Any of them work</p>
              </div>
            </div>
          </div>

          {/* Using Multiple Tools Together */}
          <div className="resource-card">
            <h2 className="text-4xl font-bold mb-md" style={{color: '#2d3748'}}>Using Multiple Tools Together</h2>
            <p className="text-lg mb-lg" style={{color: '#4a5568', lineHeight: '1.8'}}>
              Don't just stick to one tool. The best results come from using the right tool for each part of your workflow.
            </p>
            
            <div className="tool-grid">
              <div className="tool-item">
                <h3 className="text-xl mb-md" style={{color: '#2d3748'}}>
                  Research → Writing
                </h3>
                <p style={{marginBottom: '0.5rem'}}>
                  <strong>1. Perplexity:</strong> Research topic, gather sources
                </p>
                <p>
                  <strong>2. Claude:</strong> Synthesize findings into article/report
                </p>
              </div>

              <div className="tool-item">
                <h3 className="text-xl mb-md" style={{color: '#2d3748'}}>
                  Strategy → Execution
                </h3>
                <p style={{marginBottom: '0.5rem'}}>
                  <strong>1. Claude:</strong> Plan project, create strategy
                </p>
                <p>
                  <strong>2. ChatGPT:</strong> Quick iterations on tasks
                </p>
              </div>

              <div className="tool-item">
                <h3 className="text-xl mb-md" style={{color: '#2d3748'}}>
                  Build → Deploy
                </h3>
                <p style={{marginBottom: '0.5rem'}}>
                  <strong>1. Claude:</strong> Write and test code
                </p>
                <p>
                  <strong>2. Cursor:</strong> Refine in your IDE with AI help
                </p>
              </div>

              <div className="tool-item">
                <h3 className="text-xl mb-md" style={{color: '#2d3748'}}>
                  Content Creation
                </h3>
                <p style={{marginBottom: '0.5rem'}}>
                  <strong>1. ChatGPT:</strong> Brainstorm ideas, first drafts
                </p>
                <p style={{marginBottom: '0.5rem'}}>
                  <strong>2. Perplexity:</strong> Fact-check key claims
                </p>
                <p>
                  <strong>3. Claude:</strong> Polish and format final version
                </p>
              </div>
            </div>
          </div>

          {/* My Daily Workflow */}
          <div className="resource-card">
            <h2 className="text-4xl font-bold mb-md" style={{color: '#2d3748'}}>How I Actually Use These Daily</h2>
            
            <div className="mb-lg">
              <h3 className="text-xl mb-sm" style={{color: '#2d3748'}}>Morning: Strategy & Planning</h3>
              <p style={{color: '#4a5568', lineHeight: '1.8'}}>
                <strong>Tool:</strong> Claude<br/>
                <strong>What I do:</strong> Project planning, problem-solving, technical decisions. I upload my context doc and work through complex stuff that needs deep thinking.<br/>
                <strong>Why Claude:</strong> Best for multi-step reasoning and doesn't rush to answers.
              </p>
            </div>

            <div className="mb-lg">
              <h3 className="text-xl mb-sm" style={{color: '#2d3748'}}>Midday: Execution</h3>
              <p style={{color: '#4a5568', lineHeight: '1.8'}}>
                <strong>Tools:</strong> ChatGPT + Claude<br/>
                <strong>What I do:</strong> Writing content, coding, rapid iterations on tasks. ChatGPT for speed, Claude when I need files or deeper work.<br/>
                <strong>Why both:</strong> ChatGPT is faster for quick stuff. Claude when I'm building something substantial.
              </p>
            </div>

            <div>
              <h3 className="text-xl mb-sm" style={{color: '#2d3748'}}>Evening: Research & Learning</h3>
              <p style={{color: '#4a5568', lineHeight: '1.8'}}>
                <strong>Tools:</strong> Perplexity + Claude<br/>
                <strong>What I do:</strong> Market research, competitive analysis, learning new topics. Perplexity to gather info with sources, Claude to synthesize.<br/>
                <strong>Why this combo:</strong> Perplexity gets current data. Claude makes sense of it all.
              </p>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </>
  )
}
