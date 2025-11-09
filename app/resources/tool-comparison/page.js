import Navigation from '../../../components/Navigation'
import Footer from '../../../components/Footer'

export default function ToolComparison() {
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
        <h1 style={{fontSize: '3rem', marginBottom: '1rem'}}>Tool Comparison</h1>
        <p style={{fontSize: '1.2rem'}}>Which AI tool for what task</p>
      </div>

      {/* Comparison Table */}
      <section style={{padding: '4rem 2rem'}}>
        <div style={{maxWidth: '1000px', margin: '0 auto'}}>
          
          <div style={{overflowX: 'auto'}}>
            <table style={{
              width: '100%',
              borderCollapse: 'collapse',
              background: 'white',
              boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
              borderRadius: '12px',
              overflow: 'hidden'
            }}>
              <thead>
                <tr style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white'}}>
                  <th style={{padding: '1.5rem', textAlign: 'left', fontSize: '1.1rem'}}>Tool</th>
                  <th style={{padding: '1.5rem', textAlign: 'left', fontSize: '1.1rem'}}>Best For</th>
                  <th style={{padding: '1.5rem', textAlign: 'left', fontSize: '1.1rem'}}>Cost</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{borderBottom: '1px solid #e2e8f0'}}>
                  <td style={{padding: '1.5rem', fontWeight: '600', color: '#2d3748'}}>ChatGPT</td>
                  <td style={{padding: '1.5rem', color: '#4a5568'}}>Quick questions, brainstorming, writing drafts, general use</td>
                  <td style={{padding: '1.5rem', color: '#4a5568'}}>Free / $20/mo</td>
                </tr>
                <tr style={{borderBottom: '1px solid #e2e8f0'}}>
                  <td style={{padding: '1.5rem', fontWeight: '600', color: '#2d3748'}}>Claude</td>
                  <td style={{padding: '1.5rem', color: '#4a5568'}}>Long documents, coding, detailed analysis, building projects</td>
                  <td style={{padding: '1.5rem', color: '#4a5568'}}>Free / $20/mo</td>
                </tr>
                <tr style={{borderBottom: '1px solid #e2e8f0'}}>
                  <td style={{padding: '1.5rem', fontWeight: '600', color: '#2d3748'}}>Gemini</td>
                  <td style={{padding: '1.5rem', color: '#4a5568'}}>Quick lookups, Google integration</td>
                  <td style={{padding: '1.5rem', color: '#4a5568'}}>Free / $20/mo</td>
                </tr>
                <tr style={{borderBottom: '1px solid #e2e8f0'}}>
                  <td style={{padding: '1.5rem', fontWeight: '600', color: '#2d3748'}}>Perplexity</td>
                  <td style={{padding: '1.5rem', color: '#4a5568'}}>Research with sources, fact-checking, current events</td>
                  <td style={{padding: '1.5rem', color: '#4a5568'}}>Free / $20/mo</td>
                </tr>
                <tr>
                  <td style={{padding: '1.5rem', fontWeight: '600', color: '#2d3748'}}>Cursor</td>
                  <td style={{padding: '1.5rem', color: '#4a5568'}}>Coding with AI assistance, building apps</td>
                  <td style={{padding: '1.5rem', color: '#4a5568'}}>$20/mo</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Quick Guide */}
          <div style={{marginTop: '4rem'}}>
            <h2 style={{fontSize: '2rem', marginBottom: '2rem', color: '#2d3748'}}>Quick Decision Guide</h2>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem'
            }}>
              <div style={{padding: '1.5rem', background: '#f7fafc', borderRadius: '8px'}}>
                <h3 style={{fontSize: '1.2rem', marginBottom: '0.5rem', color: '#2d3748'}}>For Writing</h3>
                <p style={{color: '#4a5568'}}>ChatGPT or Claude</p>
              </div>
              
              <div style={{padding: '1.5rem', background: '#f7fafc', borderRadius: '8px'}}>
                <h3 style={{fontSize: '1.2rem', marginBottom: '0.5rem', color: '#2d3748'}}>For Coding</h3>
                <p style={{color: '#4a5568'}}>Claude or Cursor</p>
              </div>
              
              <div style={{padding: '1.5rem', background: '#f7fafc', borderRadius: '8px'}}>
                <h3 style={{fontSize: '1.2rem', marginBottom: '0.5rem', color: '#2d3748'}}>For Research</h3>
                <p style={{color: '#4a5568'}}>Perplexity</p>
              </div>
              
              <div style={{padding: '1.5rem', background: '#f7fafc', borderRadius: '8px'}}>
                <h3 style={{fontSize: '1.2rem', marginBottom: '0.5rem', color: '#2d3748'}}>For Quick Questions</h3>
                <p style={{color: '#4a5568'}}>Free ChatGPT or Gemini</p>
              </div>
              
              <div style={{padding: '1.5rem', background: '#f7fafc', borderRadius: '8px'}}>
                <h3 style={{fontSize: '1.2rem', marginBottom: '0.5rem', color: '#2d3748'}}>For Long Projects</h3>
                <p style={{color: '#4a5568'}}>Claude with context doc</p>
              </div>
              
              <div style={{padding: '1.5rem', background: '#f7fafc', borderRadius: '8px'}}>
                <h3 style={{fontSize: '1.2rem', marginBottom: '0.5rem', color: '#2d3748'}}>For Brainstorming</h3>
                <p style={{color: '#4a5568'}}>Any of them work</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </>
  )
}
