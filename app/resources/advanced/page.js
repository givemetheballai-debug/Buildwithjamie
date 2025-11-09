import Navigation from '../../../components/Navigation'
import Footer from '../../../components/Footer'
import Link from 'next/link'

export default function AdvancedTechniques() {
  return (
    <>
      <Navigation />
      
      {/* Hero */}
      <div className="resource-hero">
        <h1 className="text-5xl font-bold mb-md">Advanced Techniques</h1>
        <p className="text-xl">Once you've mastered the basics, level up your AI game</p>
      </div>

      <section className="resource-content">
        <div className="resource-wrapper">
          
          {/* Intro */}
          <div className="text-center" style={{marginBottom: '4rem'}}>
            <p className="text-lg" style={{color: '#4a5568', lineHeight: '1.8'}}>
              These techniques take you beyond basic prompting. Use them when you need deeper analysis, 
              multiple perspectives, or structured workflows that integrate with other tools.
            </p>
          </div>

          {/* Chain of Thought */}
          <div className="resource-card">
            <div style={{display: 'flex', alignItems: 'center', marginBottom: '1.5rem'}}>
              <div className="text-5xl" style={{marginRight: '1rem'}}>🔄</div>
              <h2 style={{margin: 0}}>Chain of Thought Prompting</h2>
            </div>
            
            <p>
              For complex problems, ask AI to show its reasoning step by step. This dramatically improves accuracy 
              on difficult tasks and helps you understand the logic behind the answer.
            </p>

            <div className="pro-tip">
              <strong>When to use:</strong>
              <p>
                Strategy decisions, technical architecture, debugging complex issues, financial analysis, 
                anything where you need to understand the "why" behind the answer.
              </p>
            </div>

            <h3>How to use it:</h3>
            <p>
              Add phrases like "Think through this step by step," "Walk me through your reasoning," or 
              "Break this down into steps" to your prompts.
            </p>

            <div className="example-box">
              <h4 style={{color: 'var(--accent-cyan)', marginBottom: '1rem'}}>Example Prompt:</h4>
              <p style={{fontFamily: 'monospace', lineHeight: '1.8', margin: 0}}>
                I need to decide whether to build this feature in-house or buy a third-party solution. 
                Walk me through your reasoning step by step. Consider: cost, timeline, maintenance, 
                customization needs, and team capacity. Show your work.
              </p>
            </div>
          </div>

          {/* Role Playing */}
          <div className="resource-card">
            <div style={{display: 'flex', alignItems: 'center', marginBottom: '1.5rem'}}>
              <div className="text-5xl" style={{marginRight: '1rem'}}>🎭</div>
              <h2 style={{margin: 0}}>Role Playing</h2>
            </div>
            
            <p>
              Ask AI to take on a specific role or perspective. This changes how it approaches problems 
              and gives you feedback from angles you might not have considered.
            </p>

            <div className="pro-tip">
              <strong>When to use:</strong>
              <p>
                Getting feedback from different angles, stress-testing ideas, preparing for difficult conversations, 
                understanding stakeholder perspectives, interview prep.
              </p>
            </div>

            <h3>Effective roles:</h3>
            <ul>
              <li><strong>"Act as a skeptical investor"</strong> - tough questions about viability</li>
              <li><strong>"Respond as an experienced product designer"</strong> - UX/design feedback</li>
              <li><strong>"You're a customer who tried this product"</strong> - user perspective</li>
              <li><strong>"Be my debate opponent"</strong> - find holes in arguments</li>
              <li><strong>"Act as a technical architect"</strong> - infrastructure decisions</li>
            </ul>

            <div className="example-box">
              <h4 style={{color: 'var(--accent-cyan)', marginBottom: '1rem'}}>Example Prompt:</h4>
              <p style={{fontFamily: 'monospace', lineHeight: '1.8', margin: 0}}>
                Act as a skeptical board member. I'm presenting this strategy: [paste your plan]. 
                Ask me the hard questions an experienced executive would ask. Push back on weak spots. 
                Make me defend every assumption.
              </p>
            </div>
          </div>

          {/* Multi-Perspective Analysis */}
          <div className="resource-card">
            <div style={{display: 'flex', alignItems: 'center', marginBottom: '1.5rem'}}>
              <div className="text-5xl" style={{marginRight: '1rem'}}>🔍</div>
              <h2 style={{margin: 0}}>Multi-Perspective Analysis</h2>
            </div>
            
            <p>
              Get AI to analyze the same problem from multiple viewpoints in one response. This surfaces 
              blind spots and helps you make more balanced decisions.
            </p>

            <div className="pro-tip">
              <strong>When to use:</strong>
              <p>
                Major decisions, contentious issues, cross-functional projects, product strategy, 
                anything where different stakeholders have different priorities.
              </p>
            </div>

            <h3>How to structure it:</h3>
            <p>
              Ask for analysis from 3-5 specific perspectives. Be explicit about what each perspective 
              should prioritize.
            </p>

            <div className="example-box">
              <h4 style={{color: 'var(--accent-cyan)', marginBottom: '1rem'}}>Example Prompt:</h4>
              <p style={{fontFamily: 'monospace', lineHeight: '1.8', margin: 0}}>
                Analyze this product decision from three perspectives:<br/>
                1. Engineering: technical complexity, maintainability, tech debt<br/>
                2. Business: revenue impact, market position, competitive advantage<br/>
                3. User: UX, friction points, value delivered<br/>
                For each perspective, tell me the biggest concerns and biggest opportunities. 
                Then recommend a path forward that balances all three.
              </p>
            </div>
          </div>

          {/* Structured Outputs */}
          <div className="resource-card">
            <div style={{display: 'flex', alignItems: 'center', marginBottom: '1.5rem'}}>
              <div className="text-5xl" style={{marginRight: '1rem'}}>📊</div>
              <h2 style={{margin: 0}}>Structured Outputs</h2>
            </div>
            
            <p>
              Request specific formats (JSON, tables, bullet lists) so outputs can be easily used in 
              other tools or workflows. Essential for automation and integration.
            </p>

            <div className="pro-tip">
              <strong>When to use:</strong>
              <p>
                Building tools, data analysis, API integrations, spreadsheet work, creating databases, 
                any time you need to move AI output into another system.
              </p>
            </div>

            <h3>Common formats:</h3>
            <ul>
              <li><strong>JSON:</strong> For APIs and programming</li>
              <li><strong>Tables:</strong> For spreadsheets and reports</li>
              <li><strong>Markdown:</strong> For documentation</li>
              <li><strong>CSV:</strong> For data processing</li>
            </ul>

            <div className="example-box">
              <h4 style={{color: 'var(--accent-cyan)', marginBottom: '1rem'}}>Example Prompt:</h4>
              <p style={{fontFamily: 'monospace', lineHeight: '1.8', margin: 0}}>
                Extract key information from this sales call transcript and return as JSON with this structure:<br/>
                {'{'}<br/>
                &nbsp;&nbsp;"customer_name": "",<br/>
                &nbsp;&nbsp;"pain_points": [],<br/>
                &nbsp;&nbsp;"budget": "",<br/>
                &nbsp;&nbsp;"timeline": "",<br/>
                &nbsp;&nbsp;"next_steps": []<br/>
                {'}'}
              </p>
            </div>
          </div>

          {/* Combining Techniques */}
          <div className="resource-card">
            <h2>Combining Techniques</h2>
            <p>
              These techniques are even more powerful when used together. Here's how to layer them:
            </p>

            <div className="tool-grid">
              <div className="tool-item">
                <h4>Chain of Thought + Role Play</h4>
                <p>
                  "Act as a CFO. Walk through your reasoning on this budget allocation step by step."
                </p>
              </div>

              <div className="tool-item">
                <h4>Multi-Perspective + Structured Output</h4>
                <p>
                  "Analyze from 3 perspectives and return as a comparison table with pros/cons for each."
                </p>
              </div>

              <div className="tool-item">
                <h4>All Four Together</h4>
                <p>
                  "Act as three stakeholders. Each should think through this step by step and provide feedback as structured bullet points."
                </p>
              </div>
            </div>
          </div>

          {/* When Not to Use Advanced Techniques */}
          <div className="resource-card" style={{borderLeft: '4px solid #ff6b6b'}}>
            <h2>When NOT to Use These</h2>
            <p>
              Advanced techniques add complexity and use more tokens. Use them strategically:
            </p>

            <ul>
              <li><strong>Simple tasks:</strong> Don't overcomplicate. "Write a professional email" doesn't need chain of thought.</li>
              <li><strong>Creative work:</strong> Too much structure can kill creativity. Let AI flow naturally for brainstorming.</li>
              <li><strong>Quick answers:</strong> If you just need a fast fact, keep it simple.</li>
              <li><strong>When you're experimenting:</strong> Start simple, then add techniques if basic prompts aren't working.</li>
            </ul>

            <div className="pro-tip">
              <strong>Rule of thumb:</strong>
              <p>
                If the task is important, complex, or involves tradeoffs between multiple priorities, use advanced techniques. 
                For everything else, keep it simple.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient rounded-lg text-center p-xl">
            <h3 className="text-3xl font-bold mb-md">
              Ready to put these into practice?
            </h3>
            <p className="text-lg mb-lg opacity-70">
              Check out the prompt library for ready-to-use templates, or download the context template to supercharge your AI sessions.
            </p>
            <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap'}}>
              <Link href="/resources/prompts" className="btn btn-lg no-underline" style={{background: 'white', color: '#00f2ea'}}>
                Browse Prompts
              </Link>
              <Link href="/resources/context-template" className="btn btn-lg btn-outline no-underline" style={{borderColor: 'white', color: 'white'}}>
                Get Template
              </Link>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </>
  )
}
