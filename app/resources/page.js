import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'

export default function Resources() {
  return (
    <>
      <Navigation />
      <div style={{marginTop: '70px', padding: '4rem 2rem', textAlign: 'center', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white'}}>
        <h1 style={{fontSize: '3rem', marginBottom: '0.5rem'}}>Resources</h1>
        <p style={{fontSize: '1.2rem'}}>Tools and templates to help you work better with AI</p>
      </div>
      
      <section style={{padding: '4rem 2rem', background: '#f8f9fa'}}>
        <div style={{maxWidth: '900px', margin: '0 auto'}}>
          
          {/* AI Context Template */}
          <div style={{background: 'white', padding: '2.5rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', marginBottom: '2rem'}}>
            <h2 style={{color: '#2c3e50', marginBottom: '1.5rem', fontSize: '1.8rem'}}>AI Context Template</h2>
            <p style={{color: '#555', marginBottom: '1rem'}}>Most people start fresh with AI every time. They explain themselves repeatedly, get inconsistent results, and wonder why it doesn't work better.</p>
            <p style={{color: '#555', marginBottom: '1.5rem'}}>This template changes that. Fill it out once, upload it to start conversations, and watch AI responses improve dramatically.</p>
            
            <div style={{background: '#e8f4f8', padding: '1rem', borderRadius: '6px', marginBottom: '1.5rem'}}>
              <strong style={{color: '#2c3e50'}}>🤖 How to Use:</strong> Fill in the sections below, save the document, and upload it to Claude, ChatGPT, or other AI tools at the start of new conversations.
            </div>

            <div style={{background: '#f8f9fa', padding: '1.5rem', borderRadius: '6px', margin: '1.5rem 0', borderLeft: '4px solid #3498db'}}>
              <h3 style={{color: '#2c3e50', marginBottom: '1rem', fontSize: '1.2rem'}}>About Me</h3>
              <p style={{color: '#555', marginBottom: '1rem'}}><strong>Quick way:</strong> Copy-paste from your LinkedIn profile or resume</p>
              <ul style={{color: '#555', paddingLeft: '1.5rem'}}>
                <li>Name:</li>
                <li>Location:</li>
                <li>LinkedIn: linkedin.com/in/</li>
              </ul>
            </div>

            <div style={{background: '#f8f9fa', padding: '1.5rem', borderRadius: '6px', margin: '1.5rem 0', borderLeft: '4px solid #3498db'}}>
              <h3 style={{color: '#2c3e50', marginBottom: '1rem', fontSize: '1.2rem'}}>My AI Experience</h3>
              <div style={{fontFamily: 'monospace', color: '#555', padding: '0.3rem 0'}}>[ ] New to AI</div>
              <div style={{fontFamily: 'monospace', color: '#555', padding: '0.3rem 0'}}>[ ] Regular user</div>
              <div style={{fontFamily: 'monospace', color: '#555', padding: '0.3rem 0'}}>[ ] Power user</div>
              <p style={{color: '#555', marginTop: '1rem'}}>Or describe your comfort level:</p>
            </div>

            <div style={{background: '#f8f9fa', padding: '1.5rem', borderRadius: '6px', margin: '1.5rem 0', borderLeft: '4px solid #3498db'}}>
              <h3 style={{color: '#2c3e50', marginBottom: '1rem', fontSize: '1.2rem'}}>How I Like to Work</h3>
              <p style={{color: '#555', marginBottom: '0.5rem'}}><strong>Response length (pick one):</strong></p>
              <div style={{fontFamily: 'monospace', color: '#555', padding: '0.3rem 0'}}>[ ] Keep it short & concise</div>
              <div style={{fontFamily: 'monospace', color: '#555', padding: '0.3rem 0'}}>[ ] Detailed explanations</div>
              <div style={{fontFamily: 'monospace', color: '#555', padding: '0.3rem 0'}}>[ ] Varies by task</div>
              
              <p style={{color: '#555', marginTop: '1rem', marginBottom: '0.5rem'}}><strong>Question style (pick one):</strong></p>
              <div style={{fontFamily: 'monospace', color: '#555', padding: '0.3rem 0'}}>[ ] Ask me ONE question at a time (don't overwhelm me)</div>
              <div style={{fontFamily: 'monospace', color: '#555', padding: '0.3rem 0'}}>[ ] Ask multiple questions when needed</div>
              <div style={{fontFamily: 'monospace', color: '#555', padding: '0.3rem 0'}}>[ ] Just do the work, don't ask unless necessary</div>
            </div>

            <div style={{background: '#f8f9fa', padding: '1.5rem', borderRadius: '6px', margin: '1.5rem 0', borderLeft: '4px solid #3498db'}}>
              <h3 style={{color: '#2c3e50', marginBottom: '1rem', fontSize: '1.2rem'}}>Goals & Focus Areas</h3>
              <p style={{color: '#555', marginBottom: '0.5rem'}}><strong>My current goals:</strong></p>
              <ul style={{color: '#555', paddingLeft: '1.5rem', marginBottom: '1rem'}}>
                <li>(e.g., land new product role, launch my venture, build better daily systems)</li>
                <li></li>
                <li></li>
              </ul>
              <p style={{color: '#555', marginTop: '1rem', marginBottom: '0.5rem'}}><strong>Focus topics:</strong></p>
              <ul style={{color: '#555', paddingLeft: '1.5rem'}}>
                <li>(e.g., product strategy, AI tools, creative writing, market trends)</li>
                <li></li>
                <li></li>
              </ul>
            </div>

            <a href="/Jamies_AI_Context_Template.docx" download style={{display: 'inline-block', background: '#3498db', color: 'white', padding: '1rem 2rem', borderRadius: '6px', textDecoration: 'none', fontWeight: '600', marginTop: '1rem'}}>
              Download Template
            </a>
          </div>

          {/* Prompt Library */}
          <div style={{background: 'white', padding: '2.5rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', marginBottom: '2rem'}}>
            <h2 style={{color: '#2c3e50', marginBottom: '1.5rem', fontSize: '1.8rem'}}>Prompt Library</h2>
            <p style={{color: '#555', marginBottom: '1.5rem'}}>Copy these prompts and customize them for your needs. The more specific you make them, the better your results.</p>

            <div style={{background: '#f8f9fa', padding: '1.5rem', borderRadius: '6px', margin: '1.5rem 0', borderLeft: '4px solid #3498db'}}>
              <h3 style={{color: '#2c3e50', marginBottom: '1rem', fontSize: '1.2rem'}}>For Writing & Editing</h3>
              <p style={{color: '#555', marginBottom: '0.5rem'}}><strong>Professional Email:</strong></p>
              <div style={{background: '#f8f9fa', padding: '1rem', borderRadius: '6px', margin: '1rem 0', fontFamily: 'monospace', color: '#555'}}>
                "Write a professional email to [recipient] about [topic]. Tone should be [friendly/formal/direct]. Key points to cover: [list points]. Keep it under 150 words."
              </div>
              
              <p style={{color: '#555', marginTop: '1rem', marginBottom: '0.5rem'}}><strong>LinkedIn Post:</strong></p>
              <div style={{background: '#f8f9fa', padding: '1rem', borderRadius: '6px', margin: '1rem 0', fontFamily: 'monospace', color: '#555'}}>
                "Write a LinkedIn post about [topic] for [audience]. Include a hook in the first line, 3-4 key insights, and end with a question to drive engagement. Aim for 200-250 words."
              </div>
            </div>

            <div style={{background: '#f8f9fa', padding: '1.5rem', borderRadius: '6px', margin: '1.5rem 0', borderLeft: '4px solid #3498db'}}>
              <h3 style={{color: '#2c3e50', marginBottom: '1rem', fontSize: '1.2rem'}}>For Strategy & Analysis</h3>
              <p style={{color: '#555', marginBottom: '0.5rem'}}><strong>Market Research:</strong></p>
              <div style={{background: '#f8f9fa', padding: '1rem', borderRadius: '6px', margin: '1rem 0', fontFamily: 'monospace', color: '#555'}}>
                "Research [topic/market/competitor]. Focus on [specific aspects]. Provide 5-7 key insights with sources. Format as bullet points with brief explanations."
              </div>
              
              <p style={{color: '#555', marginTop: '1rem', marginBottom: '0.5rem'}}><strong>Problem Solving:</strong></p>
              <div style={{background: '#f8f9fa', padding: '1rem', borderRadius: '6px', margin: '1rem 0', fontFamily: 'monospace', color: '#555'}}>
                "I'm facing this challenge: [describe problem]. Context: [relevant details]. Help me brainstorm 5-7 potential solutions. For each, briefly note pros and cons."
              </div>
            </div>

            <div style={{background: '#f8f9fa', padding: '1.5rem', borderRadius: '6px', margin: '1.5rem 0', borderLeft: '4px solid #3498db'}}>
              <h3 style={{color: '#2c3e50', marginBottom: '1rem', fontSize: '1.2rem'}}>For Career & Job Search</h3>
              <p style={{color: '#555', marginBottom: '0.5rem'}}><strong>Resume Tailoring:</strong></p>
              <div style={{background: '#f8f9fa', padding: '1rem', borderRadius: '6px', margin: '1rem 0', fontFamily: 'monospace', color: '#555'}}>
                "Tailor my resume for this [job title] role. Job description: [paste JD]. My resume: [paste resume]. Highlight relevant experience and reframe bullets to match their language."
              </div>
            </div>
          </div>

          {/* Tool Comparison */}
          <div style={{background: 'white', padding: '2.5rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', marginBottom: '2rem'}}>
            <h2 style={{color: '#2c3e50', marginBottom: '1.5rem', fontSize: '1.8rem'}}>AI Tool Comparison</h2>
            <p style={{color: '#555', marginBottom: '1.5rem'}}>Not all AI tools are created equal. Here's how to choose the right one for your task:</p>

            <h3 style={{color: '#2c3e50', marginTop: '2rem', marginBottom: '1rem'}}>Main Conversational AI Tools</h3>
            <div style={{overflowX: 'auto'}}>
              <table style={{width: '100%', borderCollapse: 'collapse', marginTop: '1rem'}}>
                <thead>
                  <tr style={{background: '#2c3e50', color: 'white'}}>
                    <th style={{padding: '1rem', textAlign: 'left', border: '1px solid #ddd'}}>Tool</th>
                    <th style={{padding: '1rem', textAlign: 'left', border: '1px solid #ddd'}}>Best For</th>
                    <th style={{padding: '1rem', textAlign: 'left', border: '1px solid #ddd'}}>Strengths</th>
                    <th style={{padding: '1rem', textAlign: 'left', border: '1px solid #ddd'}}>When to Use</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{padding: '1rem', border: '1px solid #ddd'}}><strong>ChatGPT</strong></td>
                    <td style={{padding: '1rem', border: '1px solid #ddd'}}>Writing, brainstorming, daily casual work</td>
                    <td style={{padding: '1rem', border: '1px solid #ddd'}}>Conversational, memory across chats, great for creative writing and ideation</td>
                    <td style={{padding: '1rem', border: '1px solid #ddd'}}>Social posts, emails, blog content, quick brainstorms, learning new topics</td>
                  </tr>
                  <tr style={{background: '#f8f9fa'}}>
                    <td style={{padding: '1rem', border: '1px solid #ddd'}}><strong>Claude</strong></td>
                    <td style={{padding: '1rem', border: '1px solid #ddd'}}>Building things, coding, complex documents, detailed analysis</td>
                    <td style={{padding: '1rem', border: '1px solid #ddd'}}>Excellent at code, creating files/documents, long-form analysis, technical precision</td>
                    <td style={{padding: '1rem', border: '1px solid #ddd'}}>Website building, data analysis, presentations, spreadsheets, technical writing</td>
                  </tr>
                  <tr>
                    <td style={{padding: '1rem', border: '1px solid #ddd'}}><strong>Gemini</strong></td>
                    <td style={{padding: '1rem', border: '1px solid #ddd'}}>Quick lookups, Google workspace</td>
                    <td style={{padding: '1rem', border: '1px solid #ddd'}}>Fast, integrates with Google apps, good for quick research</td>
                    <td style={{padding: '1rem', border: '1px solid #ddd'}}>Fast facts, Google Docs/Sheets integration, quick reference</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 style={{color: '#2c3e50', marginTop: '2rem', marginBottom: '1rem'}}>Specialized AI Tools</h3>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginTop: '1rem'}}>
              <div style={{background: '#f8f9fa', padding: '1.5rem', borderRadius: '6px', borderLeft: '4px solid #3498db'}}>
                <h4 style={{color: '#2c3e50', marginBottom: '0.5rem'}}>Perplexity</h4>
                <p style={{color: '#555', fontSize: '0.95rem'}}><strong>Best for:</strong> Research with sources. Gets real-time info from the web and cites everything. Great when you need current data with credible attribution.</p>
              </div>
              
              <div style={{background: '#f8f9fa', padding: '1.5rem', borderRadius: '6px', borderLeft: '4px solid #3498db'}}>
                <h4 style={{color: '#2c3e50', marginBottom: '0.5rem'}}>Midjourney / DALL-E</h4>
                <p style={{color: '#555', fontSize: '0.95rem'}}><strong>Best for:</strong> AI image generation. Create custom visuals, mockups, and artwork from text descriptions. Quality varies but constantly improving.</p>
              </div>
              
              <div style={{background: '#f8f9fa', padding: '1.5rem', borderRadius: '6px', borderLeft: '4px solid #3498db'}}>
                <h4 style={{color: '#2c3e50', marginBottom: '0.5rem'}}>GitHub Copilot</h4>
                <p style={{color: '#555', fontSize: '0.95rem'}}><strong>Best for:</strong> Coding assistance in your IDE. Autocompletes code, suggests functions, helps debug. Essential for developers.</p>
              </div>
              
              <div style={{background: '#f8f9fa', padding: '1.5rem', borderRadius: '6px', borderLeft: '4px solid #3498db'}}>
                <h4 style={{color: '#2c3e50', marginBottom: '0.5rem'}}>Notion AI</h4>
                <p style={{color: '#555', fontSize: '0.95rem'}}><strong>Best for:</strong> Workspace integration. Write, edit, and brainstorm directly in Notion. Keeps everything in one place.</p>
              </div>
            </div>

            <div style={{background: '#e8f4f8', padding: '1rem', borderRadius: '6px', marginTop: '1.5rem'}}>
              <strong style={{color: '#2c3e50'}}>💡 Pro Strategy:</strong> Use ChatGPT for writing and daily brainstorms. Use Claude for building websites, analyzing data, creating documents. Use Gemini for quick Google-integrated lookups. Use specialized tools for images (Midjourney), research (Perplexity), or coding (Copilot).
            </div>
          </div>

          {/* Getting Started Checklist */}
          <div style={{background: 'white', padding: '2.5rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', marginBottom: '2rem'}}>
            <h2 style={{color: '#2c3e50', marginBottom: '1.5rem', fontSize: '1.8rem'}}>Getting Started Checklist</h2>
            <p style={{color: '#555', marginBottom: '1.5rem'}}>New to AI? Follow this checklist to set yourself up for success.</p>

            <div style={{background: '#f8f9fa', padding: '1.5rem', borderRadius: '6px', margin: '1.5rem 0', borderLeft: '4px solid #3498db'}}>
              <h3 style={{color: '#2c3e50', marginBottom: '1rem', fontSize: '1.2rem'}}>Week 1: Foundation</h3>
              <div style={{fontFamily: 'monospace', color: '#555', padding: '0.3rem 0'}}>[ ] Create accounts on ChatGPT, Claude, and Gemini</div>
              <div style={{fontFamily: 'monospace', color: '#555', padding: '0.3rem 0'}}>[ ] Try each tool with a simple task (write an email, explain a concept, research a topic)</div>
              <div style={{fontFamily: 'monospace', color: '#555', padding: '0.3rem 0'}}>[ ] Notice which tool feels most natural for different tasks</div>
              <div style={{fontFamily: 'monospace', color: '#555', padding: '0.3rem 0'}}>[ ] Download and fill out the AI Context Template</div>
            </div>

            <div style={{background: '#f8f9fa', padding: '1.5rem', borderRadius: '6px', margin: '1.5rem 0', borderLeft: '4px solid #3498db'}}>
              <h3 style={{color: '#2c3e50', marginBottom: '1rem', fontSize: '1.2rem'}}>Week 2: Build Your System</h3>
              <div style={{fontFamily: 'monospace', color: '#555', padding: '0.3rem 0'}}>[ ] Upload your context doc at the start of new conversations</div>
              <div style={{fontFamily: 'monospace', color: '#555', padding: '0.3rem 0'}}>[ ] Try 3-5 prompts from the Prompt Library above</div>
              <div style={{fontFamily: 'monospace', color: '#555', padding: '0.3rem 0'}}>[ ] Experiment with giving more detailed prompts vs. brief ones</div>
              <div style={{fontFamily: 'monospace', color: '#555', padding: '0.3rem 0'}}>[ ] Save any particularly good prompts you create for reuse</div>
            </div>

            <div style={{background: '#f8f9fa', padding: '1.5rem', borderRadius: '6px', margin: '1.5rem 0', borderLeft: '4px solid #3498db'}}>
              <h3 style={{color: '#2c3e50', marginBottom: '1rem', fontSize: '1.2rem'}}>Week 3: Go Deeper</h3>
              <div style={{fontFamily: 'monospace', color: '#555', padding: '0.3rem 0'}}>[ ] Use AI for a real work project (report, presentation, analysis)</div>
              <div style={{fontFamily: 'monospace', color: '#555', padding: '0.3rem 0'}}>[ ] Practice iterating: ask for revisions, different angles, tone changes</div>
              <div style={{fontFamily: 'monospace', color: '#555', padding: '0.3rem 0'}}>[ ] Try uploading documents and asking AI to analyze them</div>
              <div style={{fontFamily: 'monospace', color: '#555', padding: '0.3rem 0'}}>[ ] Notice when conversations start degrading and start fresh</div>
            </div>

            <div style={{background: '#f8f9fa', padding: '1.5rem', borderRadius: '6px', margin: '1.5rem 0', borderLeft: '4px solid #3498db'}}>
              <h3 style={{color: '#2c3e50', marginBottom: '1rem', fontSize: '1.2rem'}}>Week 4: Mastery Habits</h3>
              <div style={{fontFamily: 'monospace', color: '#555', padding: '0.3rem 0'}}>[ ] Build a personal prompt library of your go-to templates</div>
              <div style={{fontFamily: 'monospace', color: '#555', padding: '0.3rem 0'}}>[ ] Establish which tool you use for which tasks</div>
              <div style={{fontFamily: 'monospace', color: '#555', padding: '0.3rem 0'}}>[ ] Start each session by uploading or pasting relevant context</div>
              <div style={{fontFamily: 'monospace', color: '#555', padding: '0.3rem 0'}}>[ ] Review AI outputs critically - edit, refine, add your voice</div>
            </div>

            <div style={{background: '#e8f4f8', padding: '1rem', borderRadius: '6px', marginTop: '1.5rem'}}>
              <strong style={{color: '#2c3e50'}}>🎯 Remember:</strong> AI is a tool, not magic. The better you get at providing context and writing prompts, the better your results. Start simple, experiment often, and build your system over time.
            </div>
          </div>

        </div>
      </section>
      
      <Footer />
    </>
  )
}
