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
        <div className="tool-comparison-container">
          
          <div className="comparison-table-wrapper">
            <div className="table-scroll">
              <table className="comparison-table">
                <thead>
                  <tr className="table-header">
                    <th className="table-cell-header">Tool</th>
                    <th className="table-cell-header">Best For</th>
                    <th className="table-cell-header">Cost</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="table-row">
                    <td className="table-cell table-cell-bold">ChatGPT</td>
                    <td className="table-cell">Quick questions, brainstorming, writing drafts, general use</td>
                    <td className="table-cell">Free / $20/mo</td>
                  </tr>
                  <tr className="table-row">
                    <td className="table-cell table-cell-bold">Claude</td>
                    <td className="table-cell">Long documents, coding, detailed analysis, building projects</td>
                    <td className="table-cell">Free / $20/mo</td>
                  </tr>
                  <tr className="table-row">
                    <td className="table-cell table-cell-bold">Gemini</td>
                    <td className="table-cell">Quick lookups, Google integration</td>
                    <td className="table-cell">Free / $20/mo</td>
                  </tr>
                  <tr className="table-row">
                    <td className="table-cell table-cell-bold">Perplexity</td>
                    <td className="table-cell">Research with sources, fact-checking, current events</td>
                    <td className="table-cell">Free / $20/mo</td>
                  </tr>
                  <tr className="table-row-last">
                    <td className="table-cell table-cell-bold">Cursor</td>
                    <td className="table-cell">Coding with AI assistance, building apps</td>
                    <td className="table-cell">$20/mo</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Quick Guide */}
          <div className="resource-card">
            <h2 className="text-4xl font-bold mb-lg text-primary">Quick Decision Guide</h2>
            
            <div className="tool-grid">
              <div className="tool-item">
                <h3 className="text-xl mb-xs text-primary">For Writing</h3>
                <p>ChatGPT or Claude</p>
              </div>
              
              <div className="tool-item">
                <h3 className="text-xl mb-xs text-primary">For Coding</h3>
                <p>Claude or Cursor</p>
              </div>
              
              <div className="tool-item">
                <h3 className="text-xl mb-xs text-primary">For Research</h3>
                <p>Perplexity</p>
              </div>
              
              <div className="tool-item">
                <h3 className="text-xl mb-xs text-primary">For Quick Questions</h3>
                <p>Free ChatGPT or Gemini</p>
              </div>
              
              <div className="tool-item">
                <h3 className="text-xl mb-xs text-primary">For Long Projects</h3>
                <p>Claude with context doc</p>
              </div>
              
              <div className="tool-item">
                <h3 className="text-xl mb-xs text-primary">For Brainstorming</h3>
                <p>Any of them work</p>
              </div>
            </div>
          </div>

          {/* Using Multiple Tools Together */}
          <div className="resource-card">
            <h2 className="text-4xl font-bold mb-md text-primary">Using Multiple Tools Together</h2>
            <p className="text-lg mb-lg text-secondary line-height-relaxed">
              Don't just stick to one tool. The best results come from using the right tool for each part of your workflow.
            </p>
            
            <div className="tool-grid">
              <div className="tool-item">
                <h3 className="text-xl mb-md text-primary">
                  Research → Writing
                </h3>
                <p className="mb-xs">
                  <strong>1. Perplexity:</strong> Research topic, gather sources
                </p>
                <p>
                  <strong>2. Claude:</strong> Synthesize findings into article/report
                </p>
              </div>

              <div className="tool-item">
                <h3 className="text-xl mb-md text-primary">
                  Strategy → Execution
                </h3>
                <p className="mb-xs">
                  <strong>1. Claude:</strong> Plan project, create strategy
                </p>
                <p>
                  <strong>2. ChatGPT:</strong> Quick iterations on tasks
                </p>
              </div>

              <div className="tool-item">
                <h3 className="text-xl mb-md text-primary">
                  Build → Deploy
                </h3>
                <p className="mb-xs">
                  <strong>1. Claude:</strong> Write and test code
                </p>
                <p>
                  <strong>2. Cursor:</strong> Refine in your IDE with AI help
                </p>
              </div>

              <div className="tool-item">
                <h3 className="text-xl mb-md text-primary">
                  Content Creation
                </h3>
                <p className="mb-xs">
                  <strong>1. ChatGPT:</strong> Brainstorm ideas, first drafts
                </p>
                <p className="mb-xs">
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
            <h2 className="text-4xl font-bold mb-md text-primary">How I Actually Use These Daily</h2>
            
            <div className="mb-lg">
              <h3 className="text-xl mb-sm text-primary">Morning: Strategy & Planning</h3>
              <p className="text-secondary line-height-relaxed">
                <strong>Tool:</strong> Claude<br/>
                <strong>What I do:</strong> Project planning, problem-solving, technical decisions. I upload my context doc and work through complex stuff that needs deep thinking.<br/>
                <strong>Why Claude:</strong> Best for multi-step reasoning and doesn't rush to answers.
              </p>
            </div>

            <div className="mb-lg">
              <h3 className="text-xl mb-sm text-primary">Midday: Execution</h3>
              <p className="text-secondary line-height-relaxed">
                <strong>Tools:</strong> ChatGPT + Claude<br/>
                <strong>What I do:</strong> Writing content, coding, rapid iterations on tasks. ChatGPT for speed, Claude when I need files or deeper work.<br/>
                <strong>Why both:</strong> ChatGPT is faster for quick stuff. Claude when I'm building something substantial.
              </p>
            </div>

            <div>
              <h3 className="text-xl mb-sm text-primary">Evening: Research & Learning</h3>
              <p className="text-secondary line-height-relaxed">
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
