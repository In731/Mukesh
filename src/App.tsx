import { FormEvent, useState } from 'react';
import { portfolioData } from './data/portfolioData';

const base = import.meta.env.BASE_URL;
const image = (name: string) => `${base}images/${name}`;

function Intro({ onSkip }: { onSkip: () => void }) {
  const { personal } = portfolioData;
  return (
    <section className="intro" aria-label="Intro overlay">
      <div className="intro-paper" aria-hidden="true">
        {[1, 2, 3, 4, 5].map((column) => (
          <div key={column}>
            {Array.from({ length: 19 }).map((_, index) => (
              <span key={index} />
            ))}
          </div>
        ))}
      </div>
      <button className="skip-intro" data-testid="button-skip-intro" onClick={onSkip}>
        Skip intro →
      </button>
      <div className="intro-center">
        <div className="intro-kicker">
          The Morning Brief · Notes from the Desk · Field Report · Late Edition · On the Record · Wanted
        </div>
        <div className="intro-lens" aria-hidden="true" />
        <div className="intro-title">
          Take the glass<br />— find the subject
        </div>
        <div className="intro-sub">{personal.fullName} · Identified</div>
      </div>
    </section>
  );
}

function Header() {
  const { personal } = portfolioData;
  return (
    <>
      <div className="topbar">
        <div className="container topbar-inner">
          <span className="topbar-date">Today's Dispatch · 2026</span>
          <span className="topbar-mark">The Software Investigation Edition · Est. {personal.estYear}</span>
          <span className="topbar-weather">{personal.weather}</span>
        </div>
      </div>
      <nav className="nav" aria-label="Primary navigation">
        <div className="container nav-inner">
          <a className="wordmark" href="#top" data-testid="link-wordmark">
            <strong>{personal.shortName}</strong>
            <span>Software Development &amp; AI Systems</span>
          </a>
          <div className="nav-links">
            <a className="nav-link" href="#work" data-testid="link-work">Projects</a>
            <a className="nav-link" href="#achievements" data-testid="link-achievements">Achievements</a>
            <a className="nav-link" href="#certifications" data-testid="link-certifications">Certifications</a>
            <a className="nav-link" href="#stack" data-testid="link-stack">Stack</a>
            <a className="nav-link" href="#career" data-testid="link-career">Ledger</a>
            <a className="nav-link" href="#contact" data-testid="link-contact">Contact</a>
            <a className="hire-link" href="#contact" data-testid="link-hire">Get in touch →</a>
          </div>
        </div>
      </nav>
    </>
  );
}

function FrontPage() {
  const { personal } = portfolioData;
  return (
    <section className="front-page" id="top">
      <div className="container">
        <div className="front-grid">
          <div className="front-meta">
            <span className="front-kicker">Filed under: Open Investigations</span>
            <strong>{personal.caseNumber}</strong>
            <p>
              Subject dossier: <strong>{personal.fullName}</strong> engineers resilient full-stack applications and AI-driven architectures with modern Web technologies.
            </p>
            <div className="front-meta-sub">
              <span>Institution:</span> {personal.university}
            </div>
          </div>
          <div>
            <div className="eyebrow">Front Page — Findings Published</div>
            <h1 className="front-title">
              A software developer passionate about building — <em>AI-driven &amp; modern web solutions.</em>
            </h1>
            <div className="byline">
              <span>By</span> The Investigation Desk{' '}
              <span>· Reporting from Ahmedabad University, SEAS</span>
            </div>
            <div className="front-actions">
              <a className="action primary" href="#work" data-testid="link-read-work">
                Examine Projects →
              </a>
              <a className="action" href="#contact" data-testid="link-get-in-touch">
                File a Message
              </a>
            </div>
          </div>
        </div>
        <div className="front-bottom">
          <div className="front-bottom-item">
            <label>Field of Interest</label>
            <span>{personal.areaOfInterest}</span>
          </div>
          <div className="front-bottom-item">
            <label>Circulation &amp; Work Mode</label>
            <span>Remote-friendly · Global</span>
          </div>
          <div className="front-bottom-item">
            <label>Academic Standing</label>
            <span>BTech CSE · 2.87 / 4.00 CGPA</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Profile() {
  const { personal } = portfolioData;
  return (
    <section className="profile" id="profile">
      <div className="container profile-grid">
        <figure className="portrait-frame">
          <img
            src={image(personal.portrait || 'robert-portrait.png')}
            alt={`Illustration of ${personal.shortName} at his desk`}
            data-testid="img-robert-portrait"
          />
        </figure>
        <div className="profile-copy">
          <div className="eyebrow">Subject profile</div>
          <h2>
            {personal.shortName}
            <br />
            <em>software developer</em>
          </h2>
          <p>{personal.bioPrimary}</p>
          <p>{personal.bioSecondary}</p>
          
          <div className="profile-badge-row">
            <div className="profile-badge">
              <strong>BTech CSE</strong>
              <span>Ahmedabad University (SEAS)</span>
            </div>
            <div className="profile-badge">
              <strong>Core Focus</strong>
              <span>Full-Stack &amp; RAG AI Architectures</span>
            </div>
          </div>

          <span className="signature">{personal.shortName}</span>
        </div>
      </div>
    </section>
  );
}

function Works() {
  const { exhibits } = portfolioData;
  return (
    <section className="works" id="work">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow">The Evidence · Case Files</div>
            <h2>Selected <em>Works</em></h2>
          </div>
          <p className="section-caption">Exhibits A – E · Entered 2025 – 2026</p>
        </div>
        <div className="exhibits-grid">
          {exhibits.map((exhibit) => (
            <article className="exhibit-card" key={exhibit.letter} data-testid={`card-exhibit-${exhibit.letter}`}>
              <div className="exhibit-top">
                <span className="exhibit-number">Exhibit {exhibit.letter}</span>
                {exhibit.award ? (
                  <span className="exhibit-award-badge">★ {exhibit.award}</span>
                ) : (
                  <span className="exhibit-status">Verified Case</span>
                )}
              </div>
              
              <div className="exhibit-media">
                <img
                  src={image(exhibit.image)}
                  alt={`${exhibit.title} project preview`}
                  data-testid={`img-exhibit-${exhibit.letter}`}
                />
              </div>

              <div className="exhibit-content">
                <div className="exhibit-header">
                  <div className="exhibit-category">{exhibit.category}</div>
                  <h3 className="exhibit-title">{exhibit.title}</h3>
                  <div className="exhibit-meta-line">
                    <span>{exhibit.client}</span>
                    <span className="meta-dot">·</span>
                    <span>{exhibit.date}</span>
                    {exhibit.solo && (
                      <>
                        <span className="meta-dot">·</span>
                        <span className="solo-tag">Solo Project</span>
                      </>
                    )}
                  </div>
                </div>

                <p className="exhibit-summary">
                  {exhibit.summary}
                </p>

                {exhibit.outcomes && exhibit.outcomes.length > 0 && (
                  <div className="exhibit-outcomes-box">
                    <div className="outcomes-title">Key Engineering Outcomes</div>
                    <ul className="outcomes-list">
                      {exhibit.outcomes.map((outcome, idx) => (
                        <li key={idx}>{outcome}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="exhibit-tech-stack">
                  <div className="tech-stack-label">Technologies</div>
                  <div className="tags">
                    {exhibit.tags.map((tag) => (
                      <span className="tag" key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>

                <div className="exhibit-footer-action">
                  <a className="file-link" href="#contact" data-testid={`link-case-file-${exhibit.letter}`}>
                    Inquire about this build →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Achievements() {
  const { achievements } = portfolioData;
  return (
    <section className="achievements-section" id="achievements">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow">Distinctions &amp; Competitive Records</div>
            <h2>Achievements <em>&amp;</em> Accomplishments</h2>
          </div>
          <p className="section-caption">Competitive Challenge Winner</p>
        </div>
        <div className="achievements-grid">
          {achievements.map((item, idx) => (
            <div className="achievement-card" key={idx}>
              <div className="achievement-badge-tag">★ {item.badge}</div>
              <div className="achievement-date">{item.date}</div>
              <h3>{item.title}</h3>
              <div className="achievement-issuer">{item.issuer}</div>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Certifications() {
  const { certifications } = portfolioData;
  return (
    <section className="certifications-section" id="certifications">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow">Accredited Credentials</div>
            <h2>Official <em>Certifications</em></h2>
          </div>
          <p className="section-caption">Verified Technical Accreditations</p>
        </div>
        <div className="certifications-grid">
          {certifications.map((item, idx) => (
            <div className="cert-card" key={idx}>
              <div className="cert-badge-tag">{item.badge}</div>
              <div className="cert-date">{item.date}</div>
              <h3>{item.title}</h3>
              <div className="cert-issuer">{item.issuer}</div>
              <p>{item.description}</p>
              {item.certId && (
                <div className="cert-id-box">
                  <span>Certificate ID:</span> <code>{item.certId}</code>
                </div>
              )}
              {item.credentialUrl && (
                <a
                  className="cert-link"
                  href={item.credentialUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  View Credential ↗
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LabReport() {
  const { labRows } = portfolioData;
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('cards');

  const categories = ['All', 'Languages', 'Frameworks', 'Databases & AI', 'Tools & Infra'];

  const filteredRows = activeCategory === 'All'
    ? labRows
    : labRows.filter((r) => r.category === activeCategory);

  const getProficiencyPercentage = (finding: string) => {
    if (finding.includes('Primary')) return '95%';
    if (finding.includes('Comfortable')) return '80%';
    return '65%';
  };

  return (
    <section className="lab" id="stack">
      <div className="container">
        <div className="lab-head">
          <div>
            <div className="eyebrow">Forensics · Technical Stack</div>
            <h2>The <em>Lab</em> Report</h2>
          </div>
          <div className="lab-head-right">
            <p className="lab-sub">14 Specimen substances &amp; technologies analyzed on record</p>
            <div className="lab-view-toggle">
              <button
                className={viewMode === 'cards' ? 'active' : ''}
                onClick={() => setViewMode('cards')}
                type="button"
              >
                Cards View
              </button>
              <button
                className={viewMode === 'table' ? 'active' : ''}
                onClick={() => setViewMode('table')}
                type="button"
              >
                Table View
              </button>
            </div>
          </div>
        </div>

        <div className="lab-filter-bar">
          {categories.map((cat) => {
            const count = cat === 'All' ? labRows.length : labRows.filter((r) => r.category === cat).length;
            return (
              <button
                key={cat}
                type="button"
                className={`lab-filter-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat} <span className="filter-count">({count})</span>
              </button>
            );
          })}
        </div>

        {viewMode === 'cards' ? (
          <div className="lab-specimens-grid">
            {filteredRows.map((row, idx) => (
              <div className="lab-specimen-card" key={idx}>
                <div className="specimen-card-top">
                  <div className="specimen-code-symbol">{row.code}</div>
                  <span className="specimen-cat-badge">{row.category}</span>
                </div>

                <div className="specimen-card-body">
                  <h3 className="specimen-title">{row.substance}</h3>
                  <div className="specimen-meta">
                    <span className="detected-pulse" />
                    <span>Detected: <strong>{row.detected}</strong></span>
                  </div>
                </div>

                <div className="specimen-card-footer">
                  <div className="specimen-meter">
                    <div className="meter-label">
                      <span>Proficiency</span>
                      <strong className="finding-text">{row.finding}</strong>
                    </div>
                    <div className="meter-track">
                      <div
                        className="meter-fill"
                        style={{ width: getProficiencyPercentage(row.finding) }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="lab-table-container">
            <table className="lab-table">
              <thead>
                <tr>
                  <th>Code</th>
                  <th>Substance / Tool</th>
                  <th>Category</th>
                  <th>Detection Frequency</th>
                  <th>Proficiency Finding</th>
                </tr>
              </thead>
              <tbody>
                {filteredRows.map((row, idx) => (
                  <tr key={idx}>
                    <td className="specimen-table-code"><code>{row.code}</code></td>
                    <td><strong>{row.substance}</strong></td>
                    <td><span className="category-pill">{row.category}</span></td>
                    <td>{row.detected}</td>
                    <td className="finding">{row.finding}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <div className="lab-footer-meta">
          <p className="lab-note">
            🔬 Findings are illustrative — technologies, frameworks, and APIs leveraged across production builds and academic systems.
          </p>
          <div className="lab-verified-stamp">
            <span>Verified by Lab Forensics · 2026</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Ledger() {
  const { ledger } = portfolioData;
  return (
    <section className="ledger" id="career">
      <div className="container ledger-grid">
        <div className="ledger-intro">
          <div className="eyebrow">Known Whereabouts · Experience &amp; Leadership</div>
          <h2>The <em>Career</em> &amp; Service Ledger</h2>
          <p>Movements on record since 2023. A verified paper trail of leadership, technical workshops, community service, and academic progress.</p>
        </div>
        <div className="ledger-list">
          {ledger.map((item, index) => (
            <div className="ledger-row" key={index}>
              <div className="ledger-year">{item.period}</div>
              <div>
                <div className="ledger-role">{item.role}</div>
                <div className="ledger-place">{item.organization}</div>
                <span className="ledger-category">{item.category}</span>
                {item.bullets && item.bullets.length > 0 && (
                  <ul className="ledger-bullets">
                    {item.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const DISPOSABLE_EMAIL_DOMAINS = new Set([
  'mailinator.com', 'tempmail.com', '10minutemail.com', 'guerrillamail.com',
  'trashmail.com', 'yopmail.com', 'sharklasers.com', 'getnada.com',
  'dispostable.com', 'fakemailgenerator.com', 'burnermail.io', 'crazymailing.com',
  'throwawaymail.com', 'temp-mail.org', '10mail.org', 'generator.email',
  'inboxbear.com', 'mytemp.email', 'trashmail.net', 'dropmail.me',
  'mohmal.com', 'emailondeck.com', 'fakeinbox.com', 'trashmail.de',
  'tempmail.net', 'maildrop.cc', 'getairmail.com', 'binkmail.com',
  'safetymail.info', 'spam4.me', 'tempmailaddress.com'
]);

function isValidEmailFormat(email: string): boolean {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email.trim())) return false;
  
  const domain = email.split('@')[1]?.toLowerCase().trim();
  if (!domain || !domain.includes('.')) return false;
  
  // Reject single letter domain names like a@b.c or test@test
  const parts = domain.split('.');
  if (parts.some((p) => p.length < 2)) return false;
  
  return true;
}

function isDisposableEmail(email: string): boolean {
  const domain = email.split('@')[1]?.toLowerCase().trim();
  if (!domain) return false;
  return DISPOSABLE_EMAIL_DOMAINS.has(domain);
}

function Contact() {
  const { personal } = portfolioData;
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [emailError, setEmailError] = useState<string>('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    story: '',
    honeypot: '', // anti-bot field
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === 'email') {
      if (!value) {
        setEmailError('');
      } else if (!isValidEmailFormat(value)) {
        setEmailError('Please enter a complete and valid email address (e.g. name@domain.com).');
      } else if (isDisposableEmail(value)) {
        setEmailError('Disposable / temporary emails are not accepted. Please use your real work or personal email.');
      } else {
        setEmailError('');
      }
    }
  };

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // 1. Check anti-bot honeypot
    if (formData.honeypot) {
      // Silently pretend success for bots
      setStatus('success');
      return;
    }

    // 2. Validate email authenticity
    if (!isValidEmailFormat(formData.email)) {
      setEmailError('Please enter a complete, valid email format.');
      return;
    }

    if (isDisposableEmail(formData.email)) {
      setEmailError('Temporary/disposable emails are blocked. Please provide a real email address.');
      return;
    }

    setStatus('submitting');
    setEmailError('');

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${personal.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: `[Portfolio Inquiry] ${formData.subject}`,
          message: formData.story,
          _template: 'table',
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', story: '', honeypot: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="container contact-grid">
        <div className="contact-intro">
          <div className="eyebrow">Submit a Tip / Inquiry</div>
          <h2>Letters <em>&amp;</em><br />Opportunities</h2>
          <p>The desk is open for Software Engineering roles, Full-Stack contracts, and AI development opportunities.</p>
          <div className="direct-line">
            <label>Direct line</label>
            <a href={`mailto:${personal.email}`} data-testid="link-direct-email">
              {personal.email}
            </a>
            <p>For commissions, engineering roles, and discussions about full-stack architecture &amp; AI.</p>
          </div>
        </div>
        <form className="contact-form" onSubmit={submit}>
          {/* Hidden Honeypot for Spam Bots */}
          <input
            type="text"
            name="honeypot"
            value={formData.honeypot}
            onChange={handleChange}
            style={{ display: 'none' }}
            tabIndex={-1}
            autoComplete="off"
          />

          <div className="field">
            <label htmlFor="name">Your name</label>
            <input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={status === 'submitting'}
              data-testid="input-name"
            />
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={status === 'submitting'}
              data-testid="input-email"
            />
            {emailError && <div className="email-warning-note">⚠️ {emailError}</div>}
          </div>
          <div className="field">
            <label htmlFor="subject">Subject</label>
            <input
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              disabled={status === 'submitting'}
              data-testid="input-subject"
            />
          </div>
          <div className="field">
            <label htmlFor="story">The story / opportunity</label>
            <textarea
              id="story"
              name="story"
              rows={4}
              value={formData.story}
              onChange={handleChange}
              required
              disabled={status === 'submitting'}
              data-testid="input-story"
            />
          </div>
          <div className="form-bottom">
            <button
              className="action primary"
              type="submit"
              disabled={status === 'submitting' || Boolean(emailError)}
              data-testid="button-send-letter"
            >
              {status === 'submitting' && 'Dispatching letter...'}
              {status === 'success' && '✓ Letter Dispatched'}
              {status === 'error' && 'Retry Dispatch'}
              {status === 'idle' && 'Send the letter'}
            </button>
            <span
              className={
                status === 'success'
                  ? 'response-note submitted'
                  : status === 'error'
                  ? 'response-note error'
                  : 'response-note'
              }
            >
              {status === 'submitting' && 'Transmitting dispatch over secure wire...'}
              {status === 'success' && 'Your dispatch is filed and routed to Mukesh’s inbox.'}
              {status === 'error' && 'Failed to send. Please write directly to mukesh.c@ahduni.edu.in'}
              {status === 'idle' && 'Verified real-time inbox delivery'}
            </span>
          </div>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  const { personal } = portfolioData;
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <h2>
              {personal.shortName}
              <br />
              <em>Case Closed.</em>
            </h2>
          </div>
          <div>
            <label>Sections</label>
            <a href="#work" data-testid="footer-link-work">Selected Projects</a>
            <a href="#achievements" data-testid="footer-link-achievements">Achievements</a>
            <a href="#certifications" data-testid="footer-link-certifications">Certifications</a>
            <a href="#stack" data-testid="footer-link-stack">The Stack</a>
            <a href="#career" data-testid="footer-link-career">The Ledger</a>
            <a href="#contact" data-testid="footer-link-contact">Contact Desk</a>
          </div>
          <div>
            <label>Wire Services &amp; Presence</label>
            <a href={personal.github} target="_blank" rel="noreferrer" data-testid="footer-link-github">
              GitHub ({personal.githubHandle})
            </a>
            <a href={personal.leetcode} target="_blank" rel="noreferrer" data-testid="footer-link-leetcode">
              LeetCode ({personal.leetcodeHandle})
            </a>
            <a href={personal.linkedin} target="_blank" rel="noreferrer" data-testid="footer-link-linkedin">
              LinkedIn
            </a>
            <a href={`mailto:${personal.email}`} data-testid="footer-link-email">
              Email ({personal.email})
            </a>
            <p style={{ marginTop: 22 }}>
              {personal.location}
              <br />
              {personal.university}
              <br />
              IST · Remote-friendly
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 The {personal.shortName} Gazette · All rights reserved</span>
          <span>Printed in Ahmedabad</span>
        </div>
      </div>
    </footer>
  );
}

function App() {
  const [introOpen, setIntroOpen] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get('intro') === '1';
  });

  return (
    <div className="site-shell">
      {introOpen && <Intro onSkip={() => setIntroOpen(false)} />}
      <Header />
      <main>
        <FrontPage />
        <Profile />
        <Works />
        <Achievements />
        <Certifications />
        <LabReport />
        <Ledger />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;