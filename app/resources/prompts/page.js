'use client'

import Navigation from '../../../components/Navigation'
import Footer from '../../../components/Footer'
import Link from 'next/link'
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
        title: 'Competitive Analysis',
        prompt: 'Analyze [competitor/product] for me. Focus on: 1) Their positioning and messaging 2) Product features vs ours 3) Pricing strategy 4) What they do better 5) Gaps we can exploit. Be specific and actionable.'
      },
      {
        id: 's2',
        title: 'Data Analysis',
        prompt: 'Analyze this data: [paste data or upload file]. Tell me: 1) Key trends 2) Surprising insights 3) What the data suggests we should do 4) What questions we should investigate next.'
      },
      {
        id: 's3',
        title: 'SWOT Analysis',
        prompt: 'Create a SWOT analysis for [company/product/initiative]. Consider: market position, competitive landscape, resources, trends. Be specific about opportunities and threats we should prioritize.'
      },
      {
        id: 's4',
        title: 'Go-to-Market Plan',
        prompt: 'Create a go-to-market strategy for [product]. Target audience: [who]. Key value prop: [what]. Include: positioning, channels, messaging, metrics, timeline. Budget: [amount or constraint].'
      },
      {
        id: 's5',
        title: 'Problem Breakdown',
        prompt: 'Help me think through this problem: [describe problem]. Break it down into: 1) Root causes 2) Contributing factors 3) Possible solutions 4) Pros/cons of each 5) Recommended approach with reasoning.'
      }
    ],
    learning: [
      {
        id: 'l1',
        title: 'Learn New Topic',
        prompt: 'I need to understand [topic]. Explain it like I\'m [beginner/intermediate/advanced]. Include: 1) Core concepts 2) Why it matters 3) Real-world applications 4) Common misconceptions 5) Where to go deeper.'
      },
      {
        id: 'l2',
        title: 'Compare Options',
        prompt: 'Compare [option A] vs [option B] for [use case]. Create a side-by-side comparison covering: features, pricing, pros/cons, best fit scenarios. Help me decide which is better for my situation: [your context].'
      },
      {
        id: 'l3',
        title: 'Research Summary',
        prompt: 'Summarize the key insights from this: [paste article/document]. Focus on: 1) Main arguments 2) Supporting evidence 3) Practical implications 4) What\'s missing or questionable.'
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
    { id: 'writing', name: 'Writing & Content', icon: '✏️', description: 'Emails, posts, editing, and content creation' },
    { id: 'productivity', name: 'Productivity & Planning', icon: '📋', description: 'Task management, scheduling, and organization' },
    { id: 'career', name: 'Career Development', icon: '💼', description: 'Resumes, interviews, networking, and growth' },
    { id: 'strategy', name: 'Strategy & Analysis', icon: '📊', description: 'Business planning, data analysis, and decisions' },
    { id: 'learning', name: 'Learning & Research', icon: '🎓', description: 'Understanding topics and gathering insights' }
  ]

  return (
    <>
      <Navigation />
      
      {/* Hero */}
      <div className="resource-hero">
        <h1 className="text-5xl font-bold mb-md">Prompt Library</h1>
        <p className="text-xl">My best prompts for daily productivity</p>
      </div>

      {/* Intro */}
      <section className="section-sm bg-primary border-bottom text-center">
        <div className="resource-wrapper">
          <p className="text-lg mb-md text-secondary line-height-relaxed">
            These are the prompts I use daily after 6 months of heavy AI usage. They're specific, tested, and save me hours each week.
          </p>
          <p className="text-base text-tertiary">
            Click any prompt to copy it. Then paste into ChatGPT, Claude, or Gemini and fill in the brackets.
          </p>
        </div>
      </section>

      {/* Tips Section */}
      <section className="section-sm bg-light">
        <div className="resource-wrapper">
          <h2 className="text-3xl font-bold mb-md text-center text-primary">
            How to Use These Prompts
          </h2>
          
          <div className="tool-grid">
            <div className="tool-item">
              <h3 className="text-xl mb-sm text-primary">
                1. Fill in the Brackets
              </h3>
              <p>
                Replace [topic], [audience], etc. with your specific details. The more specific, the better the output.
              </p>
            </div>

            <div className="tool-item">
              <h3 className="text-xl mb-sm text-primary">
                2. Iterate
              </h3>
              <p>
                First response not perfect? Ask AI to revise: "Make it more concise" or "Change the tone to casual."
              </p>
            </div>

            <div className="tool-item">
              <h3 className="text-xl mb-sm text-primary">
                3. Add Context
              </h3>
              <p>
                Upload your context template at the start of sessions for even better, more personalized results.
              </p>
            </div>
          </div>

          <div className="text-center mt-lg">
            <p className="text-base text-secondary mb-sm">
              Need a custom prompt for something specific?
            </p>
            <Link href="/tools" className="btn btn-outline no-underline">
              ⚡ Try the Prompt Builder
            </Link>
          </div>
        </div>
      </section>

      {/* Prompts by Category */}
      <section className="section bg-light">
        <div className="prompt-library-container">
          {categories.map((category) => (
            <div key={category.id} className="mb-lg">
              {/* Category Header */}
              <div className="prompt-category-header">
                <div className="text-4xl mr-md">{category.icon}</div>
                <div>
                  <h2 className="text-3xl font-bold mb-xs text-primary">
                    {category.name}
                  </h2>
                  <p className="text-tertiary text-sm">{category.description}</p>
                </div>
              </div>

              {/* Prompts Grid */}
              <div className="prompt-grid">
                {prompts[category.id].map((prompt) => (
                  <div key={prompt.id} className="prompt-card">
                    <h3 className="prompt-card-title">
                      {prompt.title}
                    </h3>
                    <p className="prompt-card-text">
                      {prompt.prompt}
                    </p>
                    <button
                      onClick={() => copyToClipboard(prompt.prompt, prompt.id)}
                      className={`btn btn-copy ${copiedPrompt === prompt.id ? 'btn-copied' : ''}`}
                    >
                      {copiedPrompt === prompt.id ? '✓ Copied!' : '📋 Copy Prompt'}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  )
}
