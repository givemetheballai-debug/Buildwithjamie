import Navigation from '../../../components/Navigation'
import Footer from '../../../components/Footer'
import Link from 'next/link'

export default function AdvancedTechniques() {
  return (
    <>
      <Navigation />
      
      {/* Hero */}
      <div style={{
        marginTop: '70px',
        padding: '4rem 2rem',
        textAlign: 'center',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white'
      }}>
        <h1 style={{fontSize: '3rem', marginBottom: '1rem'}}>Advanced Techniques</h1>
        <p style={{fontSize: '1.2rem'}}>Once you've mastered the basics, level up your AI game</p>
      </div>

      <section style={{padding: '4rem 2rem', background: '#f8f9fa'}}>
        <div style={{maxWidth: '900px', margin: '0 auto'}}>
          
          {/* Intro */}
          <div style={{textAlign: 'center', marginBottom: '3rem'}}>
            <p style={{fontSize: '1.1rem', color: '#4a5568', lineHeight: '1.8'}}>
              These techniques take you beyond basic prompting. Use them when you need deeper analysis, 
              multiple perspectives, or structured workflows that integrate with other tools.
            </p>
          </div>

          {/* Chain of Thought */}
          <div style={{background: 'white', padding: '2.5rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', marginBottom: '2rem'}}>
            <div style={{display: 'flex', alignItems: 'center', marginBottom: '1.5rem'}}>
              <div style={{fontSize: '2.5rem', marginRight: '1rem'}}>🔄</div>
              <h2 style={{color: '#2c3e50', fontSize: '1.8rem', margin: 0}}>Chain of Thought Prompting</h2>
            </div>
            
            <p style={{color: '#555', marginBottom: '1.5rem'}}>
              For complex problems, ask AI to show its reasoning step by step. This dramatically improves accuracy 
              on difficult tasks and helps you understand the logic behind the answer.
            </p>

            <div style={{background: '#e8f4f8', padding: '1.5rem', borderRadius: '6px', marginBottom: '1.5rem', borderLeft: '4px solid #667eea'}}>
              <strong style={{color: '#2c3e50', display: 'block', marginBottom: '0.5rem'}}>When to use:</strong>
              <p style={{color: '#555', margin: 0}}>
                Strategy decisions, technical architecture, debugging complex issues, financial analysis, 
                anything where you need to understand the "why" behind the answer.
              </p>
            </div>

            <h3 style={{color: '#2c3e50', marginTop: '1.5rem', marginBottom: '0.8rem', fontSize: '1.3rem'}}>How to use it:</h3>
            <p style={{color: '#555', marginBottom: '1rem'}}>
              Add phrases like "Think through this step by step," "Walk me through your reasoning," or 
              "Break this down into steps" to your prompts.
            </p>

            <div style={{background: '#f8f9fa', padding: '1.5rem', borderRadius: '6px', marginTop: '1.5rem'}}>
              <h4 style={{color: '#667eea', marginBottom: '1rem', fontSize: '1.1rem'}}>Example Prompt:</h4>
              <p style={{color: '#555', fontFamily: 'monospace', lineHeight: '1.8', margin: 0}}>
                I need to decide whether to build this feature in-house or buy a third-party solution. 
                Walk me through your reasoning step by step. Consider: cost, timeline, maintenance, 
                customization needs, and team capacity. Show your work.
              </p>
            </div>
          </div>

          {/* Role Playing */}
          <div style={{background: 'white', padding: '2.5rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', marginBottom: '2rem'}}>
            <div style={{display: 'flex', alignItems: 'center', marginBottom: '1.5rem'}}>
              <div style={{fontSize: '2.5rem', marginRight: '1rem'}}>🎭</div>
              <h2 style={{color: '#2c3e50', fontSize: '1.8rem', margin: 0}}>Role Playing</h2>
            </div>
            
            <p style={{color: '#555', marginBottom: '1.5rem'}}>
              Ask AI to take on a specific role or perspective. This changes how it approaches problems 
              and gives you feedback from angles you might not have considered.
            </p>

            <div style={{background: '#e8f4f8', padding: '1.5rem', borderRadius: '6px', marginBottom: '1.5rem', borderLeft: '4px solid #667eea'}}>
              <strong style={{color: '#2c3e50', display: 'block', marginBottom: '0.5rem'}}>When to use:</strong>
              <p style={{color: '#555', margin: 0}}>
                Getting feedback from different angles, stress-testing ideas, preparing for difficult conversations, 
                understanding stakeholder perspectives, interview prep.
              </p>
            </div>

            <h3 style={{color: '#2c3e50', marginTop: '1.5rem', marginBottom: '0.8rem', fontSize: '1.3rem'}}>Effective roles:</h3>
            <ul style={{color: '#555', margin: '1rem 0 1rem 1.5rem', lineHeight: '1.8'}}>
              <li style={{marginBottom: '0.5rem'}}><strong>"Act as a skeptical investor"</strong> - tough questions about viability</li>
              <li style={{marginBottom: '0.5rem'}}><strong>"Respond as an experienced product designer"</strong> - UX/design feedback</li>
              <li style={{marginBottom: '0.5rem'}}><strong>"You're a customer who tried this product"</strong> - user perspective</li>
              <li style={{marginBottom: '0.5rem'}}><strong>"Be my debate opponent"</strong> - find holes in arguments</li>
              <li style={{marginBottom: '0.5rem'}}><strong>"Act as a technical architect"</strong> - infrastructure decisions</li>
            </ul>

            <div style={{background: '#f8f9fa', padding: '1.5rem', borderRadius: '6px', marginTop: '1.5rem'}}>
              <h4 style={{color: '#667eea', marginBottom: '1rem', fontSize: '1.1rem'}}>Example Prompt:</h4>
              <p style={{color: '#555', fontFamily: 'monospace', lineHeight: '1.8', margin: 0}}>
                Act as a skeptical investor who just heard my pitch for [product]. Ask me the hardest 
                questions you can think of. Challenge my assumptions about market size, competitive moat, 
                and revenue model. Don't hold back.
              </p>
            </div>
          </div>

          {/* Structured Output */}
          <div style={{background: 'white', padding: '2.5rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', marginBottom: '2rem'}}>
            <div style={{display: 'flex', alignItems: 'center', marginBottom: '1.5rem'}}>
              <div style={{fontSize: '2.5rem', marginRight: '1rem'}}>📊</div>
              <h2 style={{color: '#2c3e50', fontSize: '1.8rem', margin: 0}}>Structured Output</h2>
            </div>
            
            <p style={{color: '#555', marginBottom: '1.5rem'}}>
              When you need specific formats for downstream use, tell AI exactly what structure you want. 
              This makes AI output easy to use in other tools, workflows, or systems.
            </p>

            <div style={{background: '#e8f4f8', padding: '1.5rem', borderRadius: '6px', marginBottom: '1.5rem', borderLeft: '4px solid #667eea'}}>
              <strong style={{color: '#2c3e50', display: 'block', marginBottom: '0.5rem'}}>When to use:</strong>
              <p style={{color: '#555', margin: 0}}>
                Data analysis, documentation, API responses, importing to spreadsheets, creating databases, 
                anything you need to use programmatically or in other tools.
              </p>
            </div>

            <h3 style={{color: '#2c3e50', marginTop: '1.5rem', marginBottom: '0.8rem', fontSize: '1.3rem'}}>Common formats:</h3>
            <ul style={{color: '#555', margin: '1rem 0 1rem 1.5rem', lineHeight: '1.8'}}>
              <li style={{marginBottom: '0.5rem'}}><strong>Tables:</strong> "Give me this as a markdown table" or "Format as CSV"</li>
              <li style={{marginBottom: '0.5rem'}}><strong>JSON:</strong> "Return this as valid JSON with these keys: [list]"</li>
              <li style={{marginBottom: '0.5rem'}}><strong>Outlines:</strong> "Create a markdown outline with H2 and H3 headers"</li>
              <li style={{marginBottom: '0.5rem'}}><strong>Code blocks:</strong> "Give me the implementation in Python, properly formatted"</li>
              <li style={{marginBottom: '0.5rem'}}><strong>Lists:</strong> "Return a numbered list, one item per line"</li>
            </ul>

            <div style={{background: '#f8f9fa', padding: '1.5rem', borderRadius: '6px', marginTop: '1.5rem'}}>
              <h4 style={{color: '#667eea', marginBottom: '1rem', fontSize: '1.1rem'}}>Example Prompt:</h4>
              <p style={{color: '#555', fontFamily: 'monospace', lineHeight: '1.8', margin: 0}}>
                Analyze these customer support tickets and give me a summary as a markdown table with columns: 
                Issue Category | Count | Avg Resolution Time | Priority Level. Sort by count descending.
              </p>
            </div>
          </div>

          {/* RAG */}
          <div style={{background: 'white', padding: '2.5rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', marginBottom: '2rem'}}>
            <div style={{display: 'flex', alignItems: 'center', marginBottom: '1.5rem'}}>
              <div style={{fontSize: '2.5rem', marginRight: '1rem'}}>🔍</div>
              <h2 style={{color: '#2c3e50', fontSize: '1.8rem', margin: 0}}>RAG (Retrieval-Augmented Generation)</h2>
            </div>
            
            <p style={{color: '#555', marginBottom: '1.5rem'}}>
              Give AI access to your specific documents and data. Instead of relying on training data, 
              AI retrieves information from sources you provide. This is how you work with proprietary 
              information, company docs, or specialized knowledge.
            </p>

            <div style={{background: '#e8f4f8', padding: '1.5rem', borderRadius: '6px', marginBottom: '1.5rem', borderLeft: '4px solid #667eea'}}>
              <strong style={{color: '#2c3e50', display: 'block', marginBottom: '0.5rem'}}>When to use:</strong>
              <p style={{color: '#555', margin: 0}}>
                Working with proprietary information, company-specific contexts, technical documentation, 
                customer data, financial reports, research papers, any specialized knowledge base.
              </p>
            </div>

            <h3 style={{color: '#2c3e50', marginTop: '1.5rem', marginBottom: '0.8rem', fontSize: '1.3rem'}}>How to implement:</h3>
            <ul style={{color: '#555', margin: '1rem 0 1rem 1.5rem', lineHeight: '1.8'}}>
              <li style={{marginBottom: '0.5rem'}}><strong>Upload files:</strong> Most AI tools let you upload PDFs, docs, spreadsheets</li>
              <li style={{marginBottom: '0.5rem'}}><strong>Paste context:</strong> Copy relevant sections directly into your prompt</li>
              <li style={{marginBottom: '0.5rem'}}><strong>Use context templates:</strong> Maintain a master doc with key information</li>
              <li style={{marginBottom: '0.5rem'}}><strong>Projects/memory:</strong> Tools like Claude Projects maintain persistent context</li>
              <li style={{marginBottom: '0.5rem'}}><strong>Custom GPTs:</strong> ChatGPT lets you create bots with specific knowledge bases</li>
            </ul>

            <div style={{background: '#f8f9fa', padding: '1.5rem', borderRadius: '6px', marginTop: '1.5rem'}}>
              <h4 style={{color: '#667eea', marginBottom: '1rem', fontSize: '1.1rem'}}>Example Prompt:</h4>
              <p style={{color: '#555', fontFamily: 'monospace', lineHeight: '1.8', marginBottom: '1rem'}}>
                I'm uploading our Q3 financial report and competitive analysis. Based on these documents, 
                create a board presentation that answers: 1) How did we perform vs forecast? 2) Where are 
                we losing to competitors? 3) What should we prioritize next quarter?
              </p>
              <p style={{color: '#555', fontStyle: 'italic', margin: 0}}>
                [Then upload the relevant documents]
              </p>
            </div>

            <div style={{background: '#fff4e6', padding: '1.5rem', borderRadius: '6px', marginTop: '1.5rem', borderLeft: '4px solid #f59e0b'}}>
              <strong style={{color: '#92400e', display: 'block', marginBottom: '0.5rem'}}>Why this matters:</strong>
              <p style={{color: '#78350f', margin: 0}}>
                Context management isn't just a productivity hack - it's essential business infrastructure. 
                Companies that systematically provide AI with the right information will win. Those that just 
                buy AI tools without managing context will struggle.
              </p>
            </div>
          </div>

          {/* Combining Techniques */}
          <div style={{background: 'white', padding: '2.5rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', marginBottom: '2rem'}}>
            <h2 style={{color: '#2c3e50', marginBottom: '1rem', fontSize: '1.8rem'}}>Combining Techniques</h2>
            <p style={{color: '#555', marginBottom: '1.5rem'}}>
              The real power comes from combining these techniques. Here's an example that uses all four:
            </p>

            <div style={{background: '#f8f9fa', padding: '1.5rem', borderRadius: '6px'}}>
              <h4 style={{color: '#667eea', marginBottom: '1rem', fontSize: '1.1rem'}}>Power Prompt Example:</h4>
              <p style={{color: '#555', fontFamily: 'monospace', lineHeight: '1.8', margin: 0}}>
                I'm uploading our product roadmap and user research findings. <strong style={{color: '#667eea'}}>[RAG]</strong><br/>
                <br/>
                Act as a product strategist at a successful B2B SaaS company. <strong style={{color: '#667eea'}}>[Role Playing]</strong><br/>
                <br/>
                Walk me through your thinking step by step: <strong style={{color: '#667eea'}}>[Chain of Thought]</strong><br/>
                1) Which features should we prioritize?<br/>
                2) What's the business case for each?<br/>
                3) What dependencies or risks do you see?<br/>
                <br/>
                Format your response as a markdown table with columns: Feature | Priority (1-5) | 
                Expected Impact | Timeline | Risk Level <strong style={{color: '#667eea'}}>[Structured Output]</strong>
              </p>
            </div>
          </div>

          {/* Next Steps CTA */}
          <div style={{
            padding: '2rem',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            borderRadius: '12px',
            textAlign: 'center',
            color: 'white'
          }}>
            <h3 style={{fontSize: '1.5rem', marginBottom: '1rem'}}>
              Ready to put these into practice?
            </h3>
            <p style={{marginBottom: '1.5rem', opacity: '0.95'}}>
              Check out the Prompt Library for ready-to-use examples.
            </p>
            <Link href="/resources/prompts" style={{
              display: 'inline-block',
              padding: '0.75rem 2rem',
              background: 'white',
              color: '#667eea',
              borderRadius: '6px',
              textDecoration: 'none',
              fontWeight: '600'
            }}>
              Browse Prompts
            </Link>
          </div>

        </div>
      </section>

      <Footer />
    </>
  )
}
