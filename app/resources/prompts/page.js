'use client'

import Navigation from '../../../components/Navigation'
import Footer from '../../../components/Footer'
import { useState } from 'react'

export default function PromptLibrary() {
  const [copiedPrompt, setCopiedPrompt] = useState(null)

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text)
    setCopiedPrompt(id)
    setTimeout(() => setCopiedPrompt(null), 2000)
  }

  const prompts = {
    writing: [
      {
        id: 'w1',
        title: 'Professional Email',
        prompt: 'Write a professional email to [recipient] about [topic]. Keep it under 150 words, friendly but direct tone. End with a clear call-to-action.'
      },
      {
        id: 'w2',
        title: 'LinkedIn Post',
        prompt: 'Write a LinkedIn post about [topic] for [target audience]. Make it conversational, include a personal story or insight, and end with a question to drive engagement. 200 words max.'
      },
      {
        id: 'w3',
        title: 'Make it Concise',
        prompt: 'Make this more clear and concise, use simple language, give me 3 variations: [paste your text]'
      },
      {
        id: 'w4',
        title: 'Write in My Voice',
        prompt: 'I want you to write using my style. Step 1: I\'ll share my content so you can learn my style. Step 2: I\'ll share an excerpt for you to rewrite in my style, give me 5 variations. [Then paste your best writing samples]'
      },
      {
        id: 'w5',
        title: 'Blog Outline',
        prompt: 'Create a detailed outline for a blog post about [topic] for [target audience]. Include: 1) Hook introduction 2) 3-5 main sections with H2 headings 3) Key points under each section 4) Conclusion with CTA. Target keyword: [keyword]'
      }
    ],
    productivity: [
      {
        id: 'p1',
        title: 'Prioritize Tasks',
        prompt: 'Act as my executive assistant. Here are my tasks: [list tasks]. Organize them by urgency and importance using the Eisenhower Matrix. Tell me what to tackle first.'
      },
      {
        id: 'p2',
        title: 'Time-Block Schedule',
        prompt: 'Create a time-blocked schedule for my workday. I have: [list meetings/deadlines]. I need blocks for deep work, admin tasks, and breaks. Work hours are [time range].'
      },
      {
        id: 'p3',
        title: 'Meeting Agenda',
        prompt: 'Create a focused meeting agenda for [meeting topic] with [number] people. Meeting goal: [goal]. Include: topics to cover, time allocations, and desired outcomes. Keep it under 60 minutes.'
      },
      {
        id: 'p4',
        title: 'Project Timeline',
        prompt: 'Create a step-by-step project timeline for [project]. Include key milestones, potential roadblocks, and solutions. Start date: [date], deadline: [date].'
      },
      {
        id: 'p5',
        title: 'Daily Plan',
        prompt: 'Help me plan my day. I have these meetings: [list]. These priorities: [list]. I work best doing deep work in [morning/afternoon]. Create a realistic schedule that includes breaks.'
      }
    ],
    career: [
      {
        id: 'c1',
        title: 'Resume Improvement',
        prompt: 'Review my resume for [job title] role. Focus on: 1) Quantifiable achievements 2) Action verbs 3) Keywords from this job description: [paste JD] 4) Areas that need strengthening. Give specific suggestions.'
      },
      {
        id: 'c2',
        title: 'Interview Prep',
        prompt: 'I have an interview for [role] at [company]. Generate 10 likely interview questions based on this job description: [paste JD]. For each question, give me a framework for answering.'
      },
      {
        id: 'c3',
        title: 'Networking Message',
        prompt: 'Write a LinkedIn connection request to [person\'s role/company] about [mutual interest or reason for connecting]. Keep it under 200 characters, personalized, and not salesy.'
      },
      {
        id: 'c4',
        title: 'Career Pivot Strategy',
        prompt: 'I\'m currently a [current role] and want to transition to [target role]. Based on my skills: [list skills], what gaps do I need to fill? What roles should I target as stepping stones?'
      },
      {
        id: 'c5',
        title: 'Salary Negotiation',
        prompt: 'Help me negotiate salary for [role]. I received an offer of [amount]. Market rate is [range]. My experience includes: [key achievements]. Draft a response that counters professionally.'
      }
    ],
    strategy: [
      {
        id: 's1',
        title: 'SWOT Analysis',
        prompt: 'Act as a business strategist. Create a SWOT analysis for [business/project]. Consider: internal strengths, weaknesses, external opportunities, threats. Provide 4-5 detailed points for each with actionable insights.'
      },
      {
        id: 's2',
        title: 'Competitive Analysis',
        prompt: 'Analyze my top 3 competitors: [list companies]. Compare: product features, pricing, market positioning, strengths/weaknesses. Identify gaps I can exploit. Format as a comparison table.'
      },
      {
        id: 's3',
        title: 'Data Analysis',
        prompt: 'Analyze this data: [paste data or describe dataset]. Focus on [specific metrics]. Identify the top 3 trends and explain their business impact. Provide actionable recommendations.'
      },
      {
        id: 's4',
        title: 'Business Proposal',
        prompt: 'Create a business proposal outline for [project/initiative]. Audience: [who will read this]. Include: problem statement, proposed solution, timeline, budget estimate, expected ROI, next steps.'
      },
      {
        id: 's5',
        title: 'Decision Framework',
        prompt: 'I need to decide between [option A] and [option B] for [context]. Help me create a decision framework. Consider: costs, risks, timeline, impact on [key factors]. Recommend an approach.'
      }
    ],
    learning: [
      {
        id: 'l1',
        title: 'Explain Like I\'m 5',
        prompt: 'Explain [complex topic] in simple terms. Break it into core concepts. After each concept, ask me a question to test my understanding before moving to the next.'
      },
      {
        id: 'l2',
        title: 'Topic Summary',
        prompt: 'Summarize the key concepts of [topic]. Include: 1) Core principles 2) Common misconceptions 3) Practical applications 4) Resources for deeper learning. Keep it under 500 words.'
      },
      {
        id: 'l3',
        title: 'Research Brief',
        prompt: 'I need to research [topic] for [purpose]. Find the most important information about: [specific aspects]. Cite sources and prioritize recent, credible information. Format as a brief.'
      },
      {
        id: 'l4',
        title: 'Industry Trends',
        prompt: 'What are the current and emerging trends in [industry] that could impact [specific aspect]? Focus on: technology changes, consumer behavior, regulatory issues, market dynamics. Provide examples.'
      },
      {
        id: 'l5',
        title: 'Better Questions',
        prompt: 'I\'m researching [topic]. What questions should I be asking to get comprehensive understanding? Generate 10 questions that cover: fundamentals, applications, challenges, and future outlook.'
      }
    ]
  }

  const categories = [
    { id: 'writing', name: 'Writing & Content', icon: '✍️', description: 'Emails, posts, editing, and content creation' },
    { id: 'productivity', name: 'Productivity & Planning', icon: '📋', description: 'Task management, scheduling, and organization' },
    { id: 'career', name: 'Career Development', icon: '💼', description: 'Resumes, interviews, networking, and growth' },
    { id: 'strategy', name: 'Strategy & Analysis', icon: '📊', description: 'Business planning, data analysis, and decisions' },
    { id: 'learning', name: 'Learning & Research', icon: '🎓', description: 'Understanding topics and gathering insights' }
  ]

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
        <h1 style={{fontSize: '3rem', marginBottom: '1rem'}}>Prompt Library</h1>
        <p style={{fontSize: '1.2rem'}}>My best prompts for daily productivity</p>
      </div>

      {/* Intro */}
      <section style={{padding: '3rem 2rem', background: 'white', borderBottom: '2px solid #e2e8f0'}}>
        <div style={{maxWidth: '900px', margin: '0 auto', textAlign: 'center'}}>
          <p style={{fontSize: '1.1rem', color: '#4a5568', lineHeight: '1.8', marginBottom: '1.5rem'}}>
            These are the prompts I use daily after 6 months of heavy AI usage. They're specific, tested, and save me hours each week.
          </p>
          <p style={{fontSize: '1rem', color: '#718096'}}>
            Click any prompt to copy it. Then paste into ChatGPT, Claude, or Gemini and fill in the brackets.
          </p>
        </div>
      </section>

      {/* Prompts by Category */}
      <section style={{padding: '4rem 2rem', background: '#f7fafc'}}>
        <div style={{maxWidth: '1100px', margin: '0 auto'}}>
          {categories.map((category) => (
            <div key={category.id} style={{marginBottom: '4rem'}}>
              {/* Category Header */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '2rem',
                paddingBottom: '1rem',
                borderBottom: '3px solid #667eea'
              }}>
                <div style={{fontSize: '2.5rem', marginRight: '1rem'}}>{category.icon}</div>
                <div>
                  <h2 style={{fontSize: '2rem', color: '#2d3748', marginBottom: '0.25rem'}}>
                    {category.name}
                  </h2>
                  <p style={{color: '#718096', fontSize: '1rem'}}>{category.description}</p>
                </div>
              </div>

              {/* Prompts Grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                gap: '1.5rem'
              }}>
                {prompts[category.id].map((prompt) => (
                  <div key={prompt.id} style={{
                    background: 'white',
                    padding: '1.5rem',
                    borderRadius: '8px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                    border: '1px solid #e2e8f0'
                  }}>
                    <h3 style={{
                      fontSize: '1.1rem',
                      color: '#2d3748',
                      marginBottom: '0.75rem',
                      fontWeight: '600'
                    }}>
                      {prompt.title}
                    </h3>
                    <p style={{
                      fontSize: '0.95rem',
                      color: '#4a5568',
                      lineHeight: '1.6',
                      marginBottom: '1rem',
                      fontFamily: 'monospace',
                      background: '#f7fafc',
                      padding: '0.75rem',
                      borderRadius: '4px',
                      border: '1px solid #e2e8f0'
                    }}>
                      {prompt.prompt}
                    </p>
                    <button
                      onClick={() => copyToClipboard(prompt.prompt, prompt.id)}
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        background: copiedPrompt === prompt.id ? '#48bb78' : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '6px',
                        fontSize: '0.9rem',
                        fontWeight: '600',
                        cursor: 'pointer',
                        transition: 'all 0.2s'
                      }}
                    >
                      {copiedPrompt === prompt.id ? '✓ Copied!' : 'Copy Prompt'}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tips Section */}
      <section style={{padding: '3rem 2rem', background: 'white'}}>
        <div style={{maxWidth: '900px', margin: '0 auto'}}>
          <h2 style={{fontSize: '2rem', marginBottom: '2rem', textAlign: 'center', color: '#2d3748'}}>
            How to Use These Prompts
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem'
          }}>
            <div style={{
              background: '#f7fafc',
              padding: '1.5rem',
              borderRadius: '8px',
              borderLeft: '4px solid #667eea'
            }}>
              <h3 style={{fontSize: '1.2rem', marginBottom: '0.75rem', color: '#2d3748'}}>
                1. Fill in the Brackets
              </h3>
              <p style={{color: '#4a5568', lineHeight: '1.6'}}>
                Replace [topic], [audience], etc. with your specific details. The more specific, the better the output.
              </p>
            </div>

            <div style={{
              background: '#f7fafc',
              padding: '1.5rem',
              borderRadius: '8px',
              borderLeft: '4px solid #667eea'
            }}>
              <h3 style={{fontSize: '1.2rem', marginBottom: '0.75rem', color: '#2d3748'}}>
                2. Iterate
              </h3>
              <p style={{color: '#4a5568', lineHeight: '1.6'}}>
                First response not perfect? Ask AI to revise: "Make it more concise" or "Change the tone to casual."
              </p>
            </div>

            <div style={{
              background: '#f7fafc',
              padding: '1.5rem',
              borderRadius: '8px',
              borderLeft: '4px solid #667eea'
            }}>
              <h3 style={{fontSize: '1.2rem', marginBottom: '0.75rem', color: '#2d3748'}}>
                3. Add Context
              </h3>
              <p style={{color: '#4a5568', lineHeight: '1.6'}}>
                Upload your context template at the start of sessions for even better, more personalized results.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
