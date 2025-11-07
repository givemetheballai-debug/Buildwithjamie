import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'

export default function Explainers() {
  return (
    <>
      <Navigation />
      <div style={{marginTop: '70px', padding: '4rem 2rem', textAlign: 'center', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white'}}>
        <h1 style={{fontSize: '3rem', marginBottom: '0.5rem'}}>AI Explainers</h1>
        <p style={{fontSize: '1.2rem'}}>A practical guide from someone who's spent hundreds of hours pushing AI to its limits</p>
      </div>
      
      <section style={{padding: '4rem 2rem', background: '#f8f9fa'}}>
        <div style={{maxWidth: '900px', margin: '0 auto'}}>
          
          {/* What is AI */}
          <div style={{background: 'white', padding: '2.5rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', marginBottom: '2rem'}}>
            <h2 style={{color: '#2c3e50', marginBottom: '1rem', fontSize: '1.8rem', borderBottom: '3px solid #3498db', paddingBottom: '0.5rem'}}>What is AI?</h2>
            <p style={{color: '#555', marginBottom: '1rem'}}>AI (Artificial Intelligence) refers to computer systems that can perform tasks that typically require human intelligence. The AI tools most people use today are Large Language Models (LLMs) - systems trained on massive amounts of text to understand and generate human-like responses.</p>
            
            <p style={{color: '#555', marginBottom: '1rem'}}>Think of it like this: AI isn't magic, and it's not sentient. It's pattern recognition at scale. It's seen millions of examples of how humans write, reason, and solve problems, and it uses those patterns to help you with your tasks.</p>
            
            <p style={{color: '#555', marginBottom: '0.5rem'}}><strong>What AI can do well:</strong> Writing, analysis, brainstorming, research synthesis, explaining concepts, coding assistance, and strategic thinking.</p>
            
            <p style={{color: '#555'}}><strong>What AI struggles with:</strong> Visual design (often looks dated), consistent creative prose, understanding brand subtleties, and anything requiring true originality rather than pattern-matching.</p>
          </div>

          {/* Popular AI Tools */}
          <div style={{background: 'white', padding: '2.5rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', marginBottom: '2rem'}}>
            <h2 style={{color: '#2c3e50', marginBottom: '1rem', fontSize: '1.8rem', borderBottom: '3px solid #3498db', paddingBottom: '0.5rem'}}>Popular AI Tools</h2>
            <p style={{color: '#555', marginBottom: '1.5rem'}}>Different AI tools have different strengths. Here's how to think about the major players:</p>
            
            <h3 style={{color: '#2c3e50', marginTop: '1.5rem', marginBottom: '0.8rem', fontSize: '1.3rem'}}>Main Conversational AI Tools</h3>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', margin: '1.5rem 0'}}>
              <div style={{background: '#f8f9fa', padding: '1.5rem', borderRadius: '6px', borderLeft: '4px solid #3498db'}}>
                <h4 style={{color: '#2c3e50', marginBottom: '0.5rem'}}>ChatGPT</h4>
                <p style={{color: '#555', fontSize: '0.95rem'}}><strong>Best for:</strong> Writing, brainstorming, daily casual work. Has memory across conversations. Great for social posts, emails, blog content, and creative ideation. Feels like your everyday coworker.</p>
              </div>
              
              <div style={{background: '#f8f9fa', padding: '1.5rem', borderRadius: '6px', borderLeft: '4px solid #3498db'}}>
                <h4 style={{color: '#2c3e50', marginBottom: '0.5rem'}}>Claude</h4>
                <p style={{color: '#555', fontSize: '0.95rem'}}><strong>Best for:</strong> Building things, coding, complex documents, detailed analysis. Excellent at creating files, websites, spreadsheets, presentations. Your technical specialist for when you need to make something.</p>
              </div>
              
              <div style={{background: '#f8f9fa', padding: '1.5rem', borderRadius: '6px', borderLeft: '4px solid #3498db'}}>
                <h4 style={{color: '#2c3e50', marginBottom: '0.5rem'}}>Google Gemini</h4>
                <p style={{color: '#555', fontSize: '0.95rem'}}><strong>Best for:</strong> Quick lookups, fast reference, Google workspace integration. Good for speed when you need a quick answer or Google Docs/Sheets help.</p>
              </div>
            </div>
            
            <h3 style={{color: '#2c3e50', marginTop: '1.5rem', marginBottom: '0.8rem', fontSize: '1.3rem'}}>Specialized AI Tools</h3>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', margin: '1.5rem 0'}}>
              <div style={{background: '#f8f9fa', padding: '1.5rem', borderRadius: '6px', borderLeft: '4px solid #3498db'}}>
                <h4 style={{color: '#2c3e50', marginBottom: '0.5rem'}}>Perplexity</h4>
                <p style={{color: '#555', fontSize: '0.95rem'}}><strong>Best for:</strong> Research with citations. Gets real-time web info and cites sources. Use when you need current, credible information with attribution.</p>
              </div>
              
              <div style={{background: '#f8f9fa', padding: '1.5rem', borderRadius: '6px', borderLeft: '4px solid #3498db'}}>
                <h4 style={{color: '#2c3e50', marginBottom: '0.5rem'}}>Midjourney / DALL-E</h4>
                <p style={{color: '#555', fontSize: '0.95rem'}}><strong>Best for:</strong> AI image generation. Create custom visuals, mockups, artwork from text prompts. Quality improving constantly.</p>
              </div>
              
              <div style={{background: '#f8f9fa', padding: '1.5rem', borderRadius: '6px', borderLeft: '4px solid #3498db'}}>
                <h4 style={{color: '#2c3e50', marginBottom: '0.5rem'}}>GitHub Copilot</h4>
                <p style={{color: '#555', fontSize: '0.95rem'}}><strong>Best for:</strong> Coding in your IDE. Autocompletes code, suggests functions, helps debug. Essential for developers.</p>
              </div>
              
              <div style={{background: '#f8f9fa', padding: '1.5rem', borderRadius: '6px', borderLeft: '4px solid #3498db'}}>
                <h4 style={{color: '#2c3e50', marginBottom: '0.5rem'}}>Notion AI</h4>
                <p style={{color: '#555', fontSize: '0.95rem'}}><strong>Best for:</strong> Workspace integration. Write and brainstorm directly in Notion without leaving your workspace.</p>
              </div>
            </div>
            
            <div style={{background: '#e8f4f8', padding: '1.5rem', borderRadius: '6px', marginTop: '1.5rem', borderLeft: '4px solid #3498db'}}>
              <strong style={{color: '#2c3e50', display: 'block', marginBottom: '0.5rem'}}>Pro Tip:</strong>
              <p style={{color: '#555', margin: 0}}>Don't just stick to one tool. Use ChatGPT for writing and daily brainstorms, Claude for building websites and complex documents, Gemini for quick Google lookups. Add specialized tools like Perplexity (research), Midjourney (images), or Copilot (coding) as needed.</p>
            </div>
          </div>

          {/* How to Write Good Prompts */}
          <div style={{background: 'white', padding: '2.5rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', marginBottom: '2rem'}}>
            <h2 style={{color: '#2c3e50', marginBottom: '1rem', fontSize: '1.8rem', borderBottom: '3px solid #3498db', paddingBottom: '0.5rem'}}>How to Write Good Prompts</h2>
            <p style={{color: '#555', marginBottom: '1.5rem'}}>The quality of AI output depends heavily on the quality of your input. Here's what actually works:</p>
            
            <h3 style={{color: '#2c3e50', marginTop: '1.5rem', marginBottom: '0.8rem', fontSize: '1.3rem'}}>Be Specific</h3>
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', margin: '1rem 0'}}>
              <div style={{background: '#f8d7da', padding: '1rem', borderRadius: '6px', borderLeft: '4px solid #dc3545'}}>
                <h4 style={{marginBottom: '0.5rem', fontSize: '0.9rem'}}>❌ Vague</h4>
                <p style={{fontSize: '0.9rem', margin: 0}}>"Write something about productivity"</p>
              </div>
              <div style={{background: '#d4edda', padding: '1rem', borderRadius: '6px', borderLeft: '4px solid #28a745'}}>
                <h4 style={{marginBottom: '0.5rem', fontSize: '0.9rem'}}>✅ Specific</h4>
                <p style={{fontSize: '0.9rem', margin: 0}}>"Write a 500-word LinkedIn post about productivity tips for product managers, focusing on stakeholder management"</p>
              </div>
            </div>
            
            <h3 style={{color: '#2c3e50', marginTop: '1.5rem', marginBottom: '0.8rem', fontSize: '1.3rem'}}>Give Examples</h3>
            <p style={{color: '#555', marginBottom: '1rem'}}>Show AI what you want. If you're asking for content in a specific style, paste an example. If you want analysis in a certain format, show the structure.</p>
            
            <h3 style={{color: '#2c3e50', marginTop: '1.5rem', marginBottom: '0.8rem', fontSize: '1.3rem'}}>Provide Context</h3>
            <p style={{color: '#555', marginBottom: '1rem'}}>Don't make AI guess. Tell it who you are, what you're trying to accomplish, and any relevant background. This is why the context template works so well.</p>
            
            <h3 style={{color: '#2c3e50', marginTop: '1.5rem', marginBottom: '0.8rem', fontSize: '1.3rem'}}>Iterate</h3>
            <p style={{color: '#555', marginBottom: '1rem'}}>First drafts from AI are rarely perfect. Ask for revisions: "Make it more concise," "Add more data," "Change the tone to be more casual."</p>
            
            <div style={{background: '#e8f4f8', padding: '1.5rem', borderRadius: '6px', marginTop: '1.5rem', borderLeft: '4px solid #3498db'}}>
              <strong style={{color: '#2c3e50', display: 'block', marginBottom: '0.5rem'}}>Power Move:</strong>
              <p style={{color: '#555', margin: 0}}>Upload a context document at the start of conversations. Include your background, goals, working style, and current projects. AI quality improves dramatically when it has this foundation.</p>
            </div>
          </div>

          {/* Tokens & Memory */}
          <div style={{background: 'white', padding: '2.5rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', marginBottom: '2rem'}}>
            <h2 style={{color: '#2c3e50', marginBottom: '1rem', fontSize: '1.8rem', borderBottom: '3px solid #3498db', paddingBottom: '0.5rem'}}>Tokens & Memory</h2>
            <p style={{color: '#555', marginBottom: '1.5rem'}}>Ever notice AI conversations sometimes hit a wall? That's because of tokens and memory limits.</p>
            
            <h3 style={{color: '#2c3e50', marginTop: '1.5rem', marginBottom: '0.8rem', fontSize: '1.3rem'}}>What are Tokens?</h3>
            <p style={{color: '#555', marginBottom: '1rem'}}>Tokens are how AI processes text. Roughly speaking, 1 token ≈ 0.75 words. Every message you send and every response AI generates uses tokens. Most AI tools have limits on how many tokens can be in a conversation at once.</p>
            
            <h3 style={{color: '#2c3e50', marginTop: '1.5rem', marginBottom: '0.8rem', fontSize: '1.3rem'}}>Why This Matters</h3>
            <p style={{color: '#555', marginBottom: '1rem'}}>Long conversations eventually hit a breaking point. Push too hard in one session and AI starts forgetting context, making mistakes, or degrading in quality.</p>
            
            <h3 style={{color: '#2c3e50', marginTop: '1.5rem', marginBottom: '0.8rem', fontSize: '1.3rem'}}>What to Do About It</h3>
            <ul style={{color: '#555', margin: '1rem 0 1rem 1.5rem'}}>
              <li style={{marginBottom: '0.5rem'}}><strong>Save important context:</strong> Copy key details before starting a new chat</li>
              <li style={{marginBottom: '0.5rem'}}><strong>Start fresh when needed:</strong> If quality drops, begin a new conversation with saved context</li>
              <li style={{marginBottom: '0.5rem'}}><strong>Be strategic:</strong> For complex projects, break work into focused sessions rather than one marathon conversation</li>
            </ul>
            
            <div style={{background: '#e8f4f8', padding: '1.5rem', borderRadius: '6px', marginTop: '1.5rem', borderLeft: '4px solid #3498db'}}>
              <strong style={{color: '#2c3e50', display: 'block', marginBottom: '0.5rem'}}>Real Talk:</strong>
              <p style={{color: '#555', margin: 0}}>AI has a breaking point. If you notice responses getting worse, quality declining, or AI "forgetting" things you discussed, it's time to start fresh. Save your context and begin a new chat.</p>
            </div>
          </div>

          {/* RAG */}
          <div style={{background: 'white', padding: '2.5rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', marginBottom: '2rem'}}>
            <h2 style={{color: '#2c3e50', marginBottom: '1rem', fontSize: '1.8rem', borderBottom: '3px solid #3498db', paddingBottom: '0.5rem'}}>RAG: Retrieval-Augmented Generation</h2>
            <p style={{color: '#555', marginBottom: '1.5rem'}}>RAG sounds technical, but it's simple: it's how AI accesses information beyond what it was trained on.</p>
            
            <h3 style={{color: '#2c3e50', marginTop: '1.5rem', marginBottom: '0.8rem', fontSize: '1.3rem'}}>The Problem</h3>
            <p style={{color: '#555', marginBottom: '1rem'}}>AI models are trained on data up to a certain date (their "knowledge cutoff"). They don't know what happened after that, and they can't access your company's internal docs, your personal files, or current web information - unless you give it to them.</p>
            
            <h3 style={{color: '#2c3e50', marginTop: '1.5rem', marginBottom: '0.8rem', fontSize: '1.3rem'}}>The Solution</h3>
            <p style={{color: '#555', marginBottom: '0.5rem'}}>RAG lets AI pull in additional information when answering questions:</p>
            <ul style={{color: '#555', margin: '1rem 0 1rem 1.5rem'}}>
              <li style={{marginBottom: '0.5rem'}}><strong>Uploaded documents:</strong> When you upload a file, AI can reference that content</li>
              <li style={{marginBottom: '0.5rem'}}><strong>Web search:</strong> Some AI tools can search the web in real-time</li>
              <li style={{marginBottom: '0.5rem'}}><strong>Connected databases:</strong> Enterprise setups can connect AI to company knowledge bases</li>
            </ul>
            
            <h3 style={{color: '#2c3e50', marginTop: '1.5rem', marginBottom: '0.8rem', fontSize: '1.3rem'}}>Why This Matters</h3>
            <p style={{color: '#555', marginBottom: '1rem'}}>Context management isn't just a personal productivity hack - it's essential business infrastructure. Companies that figure out how to systematically provide AI with the right information will win. Those that just buy AI tools without managing context will struggle.</p>
            
            <div style={{background: '#f8f9fa', padding: '1rem', borderRadius: '6px', margin: '1rem 0', fontFamily: 'monospace', color: '#555'}}>
              Example: Instead of asking AI "What are our Q3 sales numbers?" and having it guess, upload your Q3 report first. Now AI can reference actual data.
            </div>
          </div>

          {/* What Actually Works */}
          <div style={{background: 'white', padding: '2.5rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', marginBottom: '2rem'}}>
            <h2 style={{color: '#2c3e50', marginBottom: '1rem', fontSize: '1.8rem', borderBottom: '3px solid #3498db', paddingBottom: '0.5rem'}}>What Actually Works: Lessons from Heavy Use</h2>
            
            <h3 style={{color: '#2c3e50', marginTop: '1.5rem', marginBottom: '0.8rem', fontSize: '1.3rem'}}>AI Excels at Thinking Work</h3>
            <p style={{color: '#555', marginBottom: '1rem'}}>Strategy, analysis, professional writing, learning new concepts - these are AI's sweet spots. Use it for synthesizing information, exploring ideas, and producing first drafts.</p>
            
            <h3 style={{color: '#2c3e50', marginTop: '1.5rem', marginBottom: '0.8rem', fontSize: '1.3rem'}}>AI Struggles with Polish</h3>
            <p style={{color: '#555', marginBottom: '1rem'}}>Visual design often looks stuck in 2005. Creative writing quality is inconsistent - it's great at structure and plotting but can be terrible at actual prose. Instagram-ready content? Not yet.</p>
            
            <h3 style={{color: '#2c3e50', marginTop: '1.5rem', marginBottom: '0.8rem', fontSize: '1.3rem'}}>Different Tools for Different Jobs</h3>
            <p style={{color: '#555', marginBottom: '1rem'}}>Just like you wouldn't ask your designer to write SQL queries, don't expect every AI to excel at everything. Learn which tool is best for which task, and switch between them strategically.</p>
            
            <h3 style={{color: '#2c3e50', marginTop: '1.5rem', marginBottom: '0.8rem', fontSize: '1.3rem'}}>Context is Everything</h3>
            <p style={{color: '#555', marginBottom: '1rem'}}>AI doesn't magically know your company's history, your product details, or your communication style. You have to provide it. Systematically. With structure. The better your context management, the better your results.</p>
            
            <h3 style={{color: '#2c3e50', marginTop: '1.5rem', marginBottom: '0.8rem', fontSize: '1.3rem'}}>The Real Value: 24/7 Collaboration</h3>
            <p style={{color: '#555', marginBottom: '1rem'}}>Having an AI "coworker" available anytime for brainstorming, feedback, and problem-solving changes how you work. You think bigger because you can process ideas faster. You're less stuck because you always have someone to bounce ideas off.</p>
            
            <div style={{background: '#e8f4f8', padding: '1.5rem', borderRadius: '6px', marginTop: '1.5rem', borderLeft: '4px solid #3498db'}}>
              <strong style={{color: '#2c3e50', display: 'block', marginBottom: '0.5rem'}}>Bottom Line:</strong>
              <p style={{color: '#555', margin: 0}}>AI isn't about replacing human work - it's about augmenting it. Use it to think faster, draft better, and explore more options. But know its limits, manage context carefully, and always bring your human judgment to final decisions.</p>
            </div>
          </div>

        </div>
      </section>
      
      <Footer />
    </>
  )
}
