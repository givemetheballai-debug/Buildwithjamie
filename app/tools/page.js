'use client'

import { useState } from 'react'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'

// Prompt Builder Component
function PromptBuilder() {
  const [currentTask, setCurrentTask] = useState(null)
  const [formData, setFormData] = useState({})
  const [generatedPrompt, setGeneratedPrompt] = useState('')
  const [showOutput, setShowOutput] = useState(false)
  const [copied, setCopied] = useState(false)
  const [promptHistory, setPromptHistory] = useState([])

  const taskTypes = {
    writing: {
      name: 'Writing',
      fields: [
        { id: 'format', label: 'Format', type: 'select', options: ['Blog post', 'Email', 'Social media', 'Article', 'Essay', 'Report'] },
        { id: 'topic', label: 'Topic/Subject', type: 'text', placeholder: 'What are you writing about?' },
        { id: 'audience', label: 'Target Audience', type: 'text', placeholder: 'Who will read this?' },
        { id: 'tone', label: 'Tone', type: 'select', options: ['Professional', 'Casual', 'Persuasive', 'Educational', 'Humorous'] },
        { id: 'length', label: 'Target Length', type: 'text', placeholder: 'e.g., 500 words, 3 paragraphs' }
      ],
      template: (data) => `Write a ${data.tone.toLowerCase()} ${data.format.toLowerCase()} about ${data.topic} for ${data.audience}.

Target length: ${data.length}

Please include:
- Clear introduction
- Well-structured main points
- Strong conclusion`
    },
    research: {
      name: 'Research',
      fields: [
        { id: 'topic', label: 'Research Topic', type: 'text', placeholder: 'What do you want to research?' },
        { id: 'focus', label: 'Specific Focus', type: 'text', placeholder: 'What aspects to emphasize?' },
        { id: 'sources', label: 'Source Preferences', type: 'select', options: ['Academic papers', 'Industry reports', 'News articles', 'Mixed sources', 'Recent only'] },
        { id: 'depth', label: 'Research Depth', type: 'select', options: ['Quick overview', 'Moderate depth', 'Comprehensive deep-dive'] }
      ],
      template: (data) => `Research: ${data.topic}

Focus areas: ${data.focus}

Requirements:
- Depth level: ${data.depth}
- Prioritize: ${data.sources}
- Include key findings, trends, and citations
- Present information clearly and objectively`
    },
    coding: {
      name: 'Coding',
      fields: [
        { id: 'language', label: 'Programming Language', type: 'select', options: ['JavaScript', 'Python', 'React', 'HTML/CSS', 'SQL', 'Other'] },
        { id: 'task', label: 'What to Build/Fix', type: 'text', placeholder: 'Describe the coding task' },
        { id: 'context', label: 'Context/Constraints', type: 'text', placeholder: 'Any specific requirements or limitations?' },
        { id: 'style', label: 'Code Style', type: 'select', options: ['Clean and commented', 'Minimal and efficient', 'Beginner-friendly', 'Production-ready'] }
      ],
      template: (data) => `${data.language} coding task: ${data.task}

Context: ${data.context}

Requirements:
- Style: ${data.style}
- Include comments explaining key logic
- Follow best practices
- Make code maintainable`
    },
    analysis: {
      name: 'Analysis',
      fields: [
        { id: 'subject', label: 'What to Analyze', type: 'text', placeholder: 'Data, document, situation, etc.' },
        { id: 'goal', label: 'Analysis Goal', type: 'text', placeholder: 'What insights do you need?' },
        { id: 'framework', label: 'Framework/Approach', type: 'select', options: ['Data-driven', 'SWOT analysis', 'Comparative', 'Trend identification', 'Problem-solving'] },
        { id: 'output', label: 'Desired Output', type: 'select', options: ['Summary with recommendations', 'Detailed report', 'Key insights only', 'Action items'] }
      ],
      template: (data) => `Analyze: ${data.subject}

Goal: ${data.goal}

Approach: ${data.framework}

Please provide: ${data.output}

Include specific examples and data-backed insights where possible.`
    },
    creative: {
      name: 'Creative',
      fields: [
        { id: 'type', label: 'Creative Type', type: 'select', options: ['Story', 'Product name', 'Tagline', 'Marketing copy', 'Social content', 'Video script'] },
        { id: 'concept', label: 'Core Concept/Theme', type: 'text', placeholder: 'What\'s the main idea?' },
        { id: 'style', label: 'Creative Style', type: 'select', options: ['Bold and edgy', 'Playful and fun', 'Sophisticated', 'Emotional', 'Minimalist'] },
        { id: 'constraints', label: 'Constraints', type: 'text', placeholder: 'Character limits, must-include elements, etc.' }
      ],
      template: (data) => `Create: ${data.type}

Concept: ${data.concept}

Style: ${data.style}

${data.constraints ? `Constraints: ${data.constraints}` : ''}

Make it memorable and impactful. Provide multiple options if appropriate.`
    }
  }

  const tips = [
    'Be specific: "Write a blog post about AI tools" → "Write a 500-word blog post explaining 3 practical AI tools for small business marketing"',
    'Include context: What\'s your audience? What\'s your goal? What style do you want?',
    'Specify format: Want bullet points? A table? A certain structure? Say so!',
    'Give examples: Show what good looks like if you can',
    'Set constraints: Word count, tone, what to avoid - clarity prevents back-and-forth'
  ]

  const [currentTip] = useState(tips[Math.floor(Math.random() * tips.length)])

  const selectTask = (taskKey) => {
    // Save current prompt to history before switching tasks
    if (generatedPrompt && showOutput) {
      const currentTaskType = taskTypes[currentTask]?.name || 'Unknown'
      setPromptHistory(prev => [
        { prompt: generatedPrompt, taskType: currentTaskType, timestamp: Date.now() }, 
        ...prev
      ].slice(0, 5))
    }
    
    setCurrentTask(taskKey)
    setFormData({})
    setShowOutput(false)
    
    // Update active button
    const buttons = document.querySelectorAll('.task-btn')
    buttons.forEach(btn => btn.classList.remove('active'))
  }

  const handleInputChange = (fieldId, value) => {
    setFormData(prev => ({ ...prev, [fieldId]: value }))
  }

  const generatePrompt = () => {
    const task = taskTypes[currentTask]
    const isValid = task.fields.every(field => formData[field.id]?.trim())
    
    if (!isValid) {
      alert('Please fill in all fields')
      return
    }

    // Save current prompt to history if one exists (keep only 5 most recent)
    if (generatedPrompt && showOutput) {
      setPromptHistory(prev => [
        { prompt: generatedPrompt, taskType: taskTypes[currentTask].name, timestamp: Date.now() }, 
        ...prev
      ].slice(0, 5))
    }

    const prompt = task.template(formData)
    setGeneratedPrompt(prompt)
    setShowOutput(true)
  }

  const copyPrompt = () => {
    navigator.clipboard.writeText(generatedPrompt)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const copyHistoryPrompt = (promptText, index) => {
    navigator.clipboard.writeText(promptText)
    // Could add visual feedback here if needed
  }

  const clearHistory = () => {
    if (confirm('Clear all saved prompts?')) {
      setPromptHistory([])
    }
  }

  const newPrompt = () => {
    // Save current prompt to history before starting new one (keep only 5 most recent)
    if (generatedPrompt) {
      const currentTaskType = taskTypes[currentTask]?.name || 'Unknown'
      setPromptHistory(prev => [
        { prompt: generatedPrompt, taskType: currentTaskType, timestamp: Date.now() }, 
        ...prev
      ].slice(0, 5))
    }
    
    setCurrentTask(null)
    setFormData({})
    setShowOutput(false)
    setCopied(false)
  }

  return (
    <div className="prompt-builder">
      {/* Instructions + Tips Combined */}
      <div className="card mb-md instructions-card">
        <div className="grid grid-2 gap-md">
          <div>
            <h3 className="text-xl font-bold mb-sm">How It Works</h3>
            <ol className="instructions-list-compact">
              <li><strong>Choose</strong> your task type</li>
              <li><strong>Fill in</strong> the details</li>
              <li><strong>Generate</strong> your prompt</li>
              <li><strong>Copy</strong> and use it</li>
            </ol>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-sm text-cyan">💡 Pro Tip</h3>
            <p className="text-sm opacity-70">{currentTip}</p>
          </div>
        </div>
        <p className="text-xs opacity-70 mt-md pt-md border-top-translucent">Your last 5 prompts auto-save below 💾</p>
      </div>

      {/* Task Selection */}
      <h3 className="text-xl font-bold mb-sm">Choose Your Task Type</h3>
      <p className="text-sm opacity-70 mb-xs mobile-scroll-hint">← Scroll to see all →</p>
      <div className="task-buttons-row mb-md">
        {Object.keys(taskTypes).map(key => (
          <button
            key={key}
            onClick={() => selectTask(key)}
            className={`card card-interactive text-center task-btn ${currentTask === key ? 'card-active' : ''}`}
          >
            <div className="font-bold">{taskTypes[key].name}</div>
          </button>
        ))}
      </div>

      {/* Form */}
      {currentTask && !showOutput && (
        <div className="card mb-md">
          {taskTypes[currentTask].fields.map(field => (
            <div key={field.id} className="mb-sm">
              <label className="block mb-xs font-semibold text-cyan text-sm">
                {field.label}
              </label>
              {field.type === 'select' ? (
                <select
                  value={formData[field.id] || ''}
                  onChange={(e) => handleInputChange(field.id, e.target.value)}
                  className="form-input w-full prompt-form-input"
                >
                  <option value="">Select...</option>
                  {field.options.map(opt => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              ) : (
                <input
                  type="text"
                  value={formData[field.id] || ''}
                  onChange={(e) => handleInputChange(field.id, e.target.value)}
                  placeholder={field.placeholder}
                  className="form-input w-full prompt-form-input"
                />
              )}
            </div>
          ))}
          
          <button 
            onClick={generatePrompt}
            className="btn btn-lg w-full btn-generate"
          >
            Generate Prompt
          </button>
        </div>
      )}

      {/* Output */}
      {showOutput && (
        <div className="card mb-md output-card">
          <div className="output-header mb-sm">
            <h3 className="text-2xl font-bold text-cyan">Your Generated Prompt</h3>
            <div className="output-actions">
              <button 
                onClick={copyPrompt}
                className={`btn btn-sm ${copied ? 'btn-copied' : 'btn-secondary'}`}
              >
                {copied ? '✓ Copied!' : '📋 Copy'}
              </button>
              <button 
                onClick={newPrompt}
                className="btn btn-sm btn-secondary"
              >
                ✨ New Prompt
              </button>
            </div>
          </div>
          
          <pre className="prompt-output">
            {generatedPrompt}
          </pre>
        </div>
      )}

      {/* Prompt History */}
      {promptHistory.length > 0 && (
        <div className="prompt-history">
          <div className="flex justify-between items-center mb-md">
            <h3 className="text-xl font-bold">Previous Prompts</h3>
            <button 
              onClick={clearHistory}
              className="btn btn-sm btn-secondary"
            >
              🗑️ Clear All
            </button>
          </div>
          <div className="history-grid">
            {promptHistory.map((item, index) => (
              <div key={item.timestamp} className="card history-card">
                <div className="history-card-header mb-sm">
                  <span className="text-sm font-semibold text-cyan">{item.taskType}</span>
                  <button 
                    onClick={() => copyHistoryPrompt(item.prompt, index)}
                    className="btn btn-sm btn-secondary"
                  >
                    📋 Copy
                  </button>
                </div>
                <pre className="history-prompt-text">
                  {item.prompt}
                </pre>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

// Main Tools Page
export default function Tools() {
  return (
    <>
      <Navigation />
      
      {/* Hero */}
      <section className="section-hero text-center bg-gradient">
        <div className="container">
          <h1 className="text-5xl font-bold mb-sm">Tools</h1>
          <p className="text-xl opacity-70">Interactive tools to help you work smarter with AI</p>
        </div>
      </section>

      {/* Prompt Builder Tool */}
      <section className="section bg-secondary">
        <div className="container container-lg">
          <div className="flex items-center gap-sm mb-md">
            <h2 className="text-4xl font-bold">⚡ Prompt Builder</h2>
            <span className="badge badge-live">FEATURED</span>
          </div>
          <PromptBuilder />
        </div>
      </section>

      {/* More Coming Soon */}
      <section className="section bg-tertiary text-center">
        <div className="container container-md">
          <div className="text-5xl mb-md">🛠️</div>
          <h2 className="text-3xl font-bold mb-md">More Tools Coming Soon</h2>
          <p className="text-lg opacity-70">
            Building more interactive tools to help you work smarter with AI.
          </p>
        </div>
      </section>

      <Footer />
    </>
  )
}
