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
    setCurrentTask(taskKey)
    setFormData({})
    setShowOutput(false)
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

    const prompt = task.template(formData)
    setGeneratedPrompt(prompt)
    setShowOutput(true)
  }

  const copyPrompt = () => {
    navigator.clipboard.writeText(generatedPrompt)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const newPrompt = () => {
    setCurrentTask(null)
    setFormData({})
    setShowOutput(false)
    setCopied(false)
  }

  return (
    <div className="prompt-builder">
      {/* Tips Section */}
      <div className="card mb-lg" style={{ 
        background: 'rgba(0, 255, 255, 0.05)', 
        border: '1px solid rgba(0, 255, 255, 0.2)' 
      }}>
        <h3 className="text-xl font-bold mb-sm" style={{ color: '#00ffff' }}>💡 Pro Tip</h3>
        <p className="opacity-70">{currentTip}</p>
      </div>

      {/* Task Selection */}
      <h3 className="text-2xl font-bold mb-md">Choose Your Task Type</h3>
      <div className="grid grid-5 gap-md mb-lg">
        {Object.keys(taskTypes).map(key => (
          <button
            key={key}
            onClick={() => selectTask(key)}
            className={`card card-interactive text-center ${currentTask === key ? 'card-active' : ''}`}
            style={{
              padding: '1.5rem',
              background: currentTask === key ? 'linear-gradient(135deg, rgba(0, 255, 255, 0.2), rgba(255, 0, 255, 0.2))' : undefined,
              borderColor: currentTask === key ? '#00ffff' : undefined
            }}
          >
            <div className="font-bold">{taskTypes[key].name}</div>
          </button>
        ))}
      </div>

      {/* Form */}
      {currentTask && !showOutput && (
        <div className="card mb-lg">
          {taskTypes[currentTask].fields.map(field => (
            <div key={field.id} className="mb-md">
              <label className="block mb-sm font-semibold" style={{ color: '#00ffff' }}>
                {field.label}
              </label>
              {field.type === 'select' ? (
                <select
                  value={formData[field.id] || ''}
                  onChange={(e) => handleInputChange(field.id, e.target.value)}
                  className="form-input w-full"
                  style={{
                    background: 'rgba(0, 0, 0, 0.5)',
                    border: '2px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '8px',
                    padding: '12px',
                    color: '#fff'
                  }}
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
                  className="form-input w-full"
                  style={{
                    background: 'rgba(0, 0, 0, 0.5)',
                    border: '2px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '8px',
                    padding: '12px',
                    color: '#fff'
                  }}
                />
              )}
            </div>
          ))}
          
          <button 
            onClick={generatePrompt}
            className="btn btn-lg w-full"
            style={{
              background: 'linear-gradient(135deg, #00ffff, #ff00ff)',
              color: '#000',
              fontWeight: 700
            }}
          >
            Generate Prompt
          </button>
        </div>
      )}

      {/* Output */}
      {showOutput && (
        <div className="card mb-lg" style={{
          background: 'rgba(0, 0, 0, 0.8)',
          border: '2px solid #00ffff'
        }}>
          <div className="flex justify-between items-center mb-md">
            <h3 className="text-2xl font-bold" style={{ color: '#00ffff' }}>Your Generated Prompt</h3>
            <div className="flex gap-sm">
              <button 
                onClick={copyPrompt}
                className="btn btn-sm"
                style={{
                  background: copied ? 'rgba(0, 255, 0, 0.2)' : 'rgba(255, 255, 255, 0.1)',
                  borderColor: copied ? '#00ff00' : 'rgba(255, 255, 255, 0.3)'
                }}
              >
                {copied ? '✓ Copied!' : '📋 Copy'}
              </button>
              <button 
                onClick={newPrompt}
                className="btn btn-sm"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderColor: 'rgba(255, 255, 255, 0.3)'
                }}
              >
                ✨ New Prompt
              </button>
            </div>
          </div>
          
          <pre style={{
            background: 'rgba(0, 0, 0, 0.5)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '8px',
            padding: '1.5rem',
            whiteSpace: 'pre-wrap',
            fontFamily: 'monospace',
            color: '#ccc',
            lineHeight: 1.8
          }}>
            {generatedPrompt}
          </pre>
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
          <h1 className="text-5xl font-bold mb-md">⚡ Prompt Builder</h1>
          <p className="text-xl opacity-70">Build better prompts, get better results</p>
        </div>
      </section>

      {/* Prompt Builder Tool */}
      <section className="section bg-secondary">
        <div className="container container-lg">
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
