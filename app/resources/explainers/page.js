import Navigation from '../../../components/Navigation'
import Footer from '../../../components/Footer'
import Link from 'next/link'

export default function IntroToAI() {
  return (
    <>
      <Navigation />
      
      {/* Hero */}
      <div className="resource-hero">
        <h1 className="text-5xl font-bold mb-md">Intro to AI</h1>
        <p className="text-xl">A practical guide from someone who's spent hundreds of hours pushing AI to its limits</p>
      </div>
      
      <section className="resource-content">
        <div className="resource-wrapper">
          
          {/* What is AI */}
          <div className="resource-card">
            <h2>What is AI?</h2>
            <p>AI (Artificial Intelligence) refers to computer systems that can perform tasks that typically require human intelligence. The AI tools most people use today are Large Language Models (LLMs) - systems trained on massive amounts of text to understand and generate human-like responses.</p>
            
            <p>Think of it like this: AI isn't magic, and it's not sentient. It's pattern recognition at scale. It's seen millions of examples of how humans write, reason, and solve problems, and it uses those patterns to help you with your tasks.</p>
            
            <p><strong>What AI can do well:</strong> Writing, analysis, brainstorming, research synthesis, explaining concepts, coding assistance, and strategic thinking.</p>
            
            <p><strong>What AI struggles with:</strong> Visual design (often looks dated), consistent creative prose, understanding brand subtleties, and anything requiring true originality rather than pattern-matching.</p>
          </div>

          {/* Popular AI Tools */}
          <div className="resource-card">
            <h2>Popular AI Tools</h2>
            <p>Different AI tools have different strengths. Here's how to think about the major players:</p>
            
            <h3>Main Conversational AI Tools</h3>
            <div className="tool-grid">
              <div className="tool-item">
                <h4>ChatGPT</h4>
                <p><strong>Best for:</strong> Writing, brainstorming, daily casual work. Has memory across conversations. Great for social posts, emails, blog content, and creative ideation. Feels like your everyday coworker.</p>
              </div>
              
              <div className="tool-item">
                <h4>Claude</h4>
                <p><strong>Best for:</strong> Building things, coding, complex documents, detailed analysis. Excellent at creating files, websites, spreadsheets, presentations. Your technical specialist for when you need to make something.</p>
              </div>
              
              <div className="tool-item">
                <h4>Google Gemini</h4>
                <p><strong>Best for:</strong> Quick lookups, fast reference, Google workspace integration. Good for speed when you need a quick answer or Google Docs/Sheets help.</p>
              </div>
            </div>
            
            <h3>Specialized AI Tools</h3>
            <div className="tool-grid">
              <div className="tool-item">
                <h4>Perplexity</h4>
                <p><strong>Best for:</strong> Research with citations. Gets real-time web info and cites sources. Use when you need current, credible information with attribution.</p>
              </div>
              
              <div className="tool-item">
                <h4>Midjourney / DALL-E</h4>
                <p><strong>Best for:</strong> AI image generation. Create custom visuals, mockups, artwork from text prompts. Quality improving constantly.</p>
              </div>
              
              <div className="tool-item">
                <h4>GitHub Copilot</h4>
                <p><strong>Best for:</strong> Coding in your IDE. Autocompletes code, suggests functions, helps debug. Essential for developers.</p>
              </div>
              
              <div className="tool-item">
                <h4>Notion AI</h4>
                <p><strong>Best for:</strong> Workspace integration. Write and brainstorm directly in Notion without leaving your workspace.</p>
              </div>
            </div>
            
            <div className="pro-tip">
              <strong>Pro Tip:</strong>
              <p>Don't just stick to one tool. Use ChatGPT for writing and daily brainstorms, Claude for building websites and complex documents, Gemini for quick Google lookups. Add specialized tools like Perplexity (research), Midjourney (images), or Copilot (coding) as needed.</p>
            </div>
          </div>

          {/* How to Write Good Prompts */}
          <div className="resource-card">
            <h2>How to Write Good Prompts</h2>
            <p>The quality of AI output depends heavily on the quality of your input. Here's what actually works:</p>
            
            <h3>Be Specific</h3>
            <div className="example-grid">
              <div className="example-box bad-example">
                <h4>❌ Vague</h4>
                <p>"Write something about productivity"</p>
              </div>
              <div className="example-box good-example">
                <h4>✅ Specific</h4>
                <p>"Write a 500-word LinkedIn post about productivity tips for product managers, focusing on stakeholder management"</p>
              </div>
            </div>
            
            <h3>Give Examples</h3>
            <p>Show AI what you want. If you're asking for content in a specific style, paste an example. If you want analysis in a certain format, show the structure.</p>
            
            <h3>Provide Context</h3>
            <p>Don't make AI guess. Tell it who you are, what you're trying to accomplish, and any relevant background. This is why the context template works so well.</p>
            
            <h3>Iterate</h3>
            <p>First drafts from AI are rarely perfect. Ask for revisions: "Make it more concise," "Add more data," "Change the tone to be more casual."</p>
            
            <div className="pro-tip">
              <strong>Power Move:</strong>
              <p>Upload a context document at the start of conversations. Include your background, goals, working style, and current projects. AI quality improves dramatically when it has this foundation.</p>
            </div>

            <div className="example-box mt-lg">
              <p className="font-semibold mb-sm">Want more prompt examples?</p>
              <div className="flex gap-sm flex-wrap">
                <Link href="/resources/prompts" className="btn btn-outline no-underline">
                  Browse Prompt Library
                </Link>
                <Link href="/tools" className="btn btn-outline no-underline">
                  Build Custom Prompts
                </Link>
              </div>
            </div>
          </div>

          {/* Tokens & Memory */}
          <div className="resource-card">
            <h2>Tokens & Memory</h2>
            <p>Ever notice AI conversations sometimes hit a wall? That's because of tokens and memory limits.</p>
            
            <h3>What are Tokens?</h3>
            <p>Tokens are how AI processes text. Roughly speaking, 1 token ≈ 0.75 words. Every message you send and every response AI generates uses tokens. Most AI tools have limits on how many tokens can be in a conversation at once.</p>
            
            <h3>Why This Matters</h3>
            <p>Long conversations eventually hit a breaking point. Push too hard in one session and AI starts forgetting context, making mistakes, or degrading in quality.</p>
            
            <h3>What to Do About It</h3>
            <ul>
              <li><strong>Save important context:</strong> Copy key details before starting a new chat</li>
              <li><strong>Start fresh when needed:</strong> If quality drops, begin a new conversation with saved context</li>
              <li><strong>Be strategic:</strong> For complex projects, break work into focused sessions rather than one marathon conversation</li>
            </ul>
            
            <div className="pro-tip">
              <strong>Real Talk:</strong>
              <p>AI has a breaking point. If you notice responses getting worse, quality declining, or AI "forgetting" things you discussed, it's time to start fresh. Save your context and begin a new chat.</p>
            </div>
          </div>

          {/* RAG */}
          <div className="resource-card">
            <h2>RAG: Retrieval-Augmented Generation</h2>
            <p>RAG sounds technical, but it's simple: it's how AI accesses information beyond what it was trained on.</p>
            
            <h3>The Problem</h3>
            <p>AI models are trained on data up to a certain date (their "knowledge cutoff"). They don't know what happened after that, and they can't access your company's internal docs, your personal files, or current web information - unless you give it to them.</p>
            
            <h3>The Solution</h3>
            <p>RAG lets AI pull in additional information when answering questions:</p>
            <ul>
              <li><strong>Uploaded documents:</strong> When you upload a file, AI can reference that content</li>
              <li><strong>Web search:</strong> Some AI tools can search the web in real-time</li>
              <li><strong>Connected databases:</strong> Enterprise setups can connect AI to company knowledge bases</li>
            </ul>
            
            <h3>Why This Matters</h3>
            <p>Context management isn't just a personal productivity hack - it's essential business infrastructure. Companies that figure out how to systematically provide AI with the right information will win. Those that just buy AI tools without managing context will struggle.</p>
            
            <div className="example-box">
              <p>Example: Instead of asking AI "What are our Q3 sales numbers?" and having it guess, upload your Q3 report first. Now AI can reference actual data.</p>
            </div>
          </div>

          {/* What Actually Works */}
          <div className="resource-card">
            <h2>What Actually Works: Lessons from Heavy Use</h2>
            
            <h3>AI Excels at Thinking Work</h3>
            <p>Strategy, analysis, professional writing, learning new concepts - these are AI's sweet spots. Use it for synthesizing information, exploring ideas, and producing first drafts.</p>
            
            <h3>AI Struggles with Polish</h3>
            <p>Visual design often looks stuck in 2005. Creative writing quality is inconsistent - it's great at structure and plotting but can be terrible at actual prose. Instagram-ready content? Not yet.</p>
            
            <h3>Different Tools for Different Jobs</h3>
            <p>Just like you wouldn't ask your designer to write SQL queries, don't expect every AI to excel at everything. Learn which tool is best for which task, and switch between them strategically.</p>
            
            <h3>Context is Everything</h3>
            <p>AI doesn't magically know your company's history, your product details, or your communication style. You have to provide it. Systematically. With structure. The better your context management, the better your results.</p>
            
            <h3>The Real Value: 24/7 Collaboration</h3>
            <p>Having an AI "coworker" available anytime for brainstorming, feedback, and problem-solving changes how you work. You think bigger because you can process ideas faster. You're less stuck because you always have someone to bounce ideas off.</p>
            
            <div className="pro-tip">
              <strong>Bottom Line:</strong>
              <p>AI isn't about replacing human work - it's about augmenting it. Use it to think faster, draft better, and explore more options. But know its limits, manage context carefully, and always bring your human judgment to final decisions.</p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient rounded-lg text-center p-xl">
            <h3 className="text-3xl font-bold mb-md">
              Ready to put this into practice?
            </h3>
            <p className="text-lg mb-lg opacity-70">
              Download the context template to maintain continuity across AI sessions.
            </p>
            <Link href="/resources" className="btn btn-lg btn-inverse no-underline">
              Get Free Resources
            </Link>
          </div>

        </div>
      </section>
      
      <Footer />
    </>
  )
}
