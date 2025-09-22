import './App.css'

function App() {
  return (
    <div className="main-page">
      <header className="site-header">
        <a className="logo" href="/" aria-label="GWSCWM Grooms home">
          <span className="logo-mark" aria-hidden="true">
            <img src="/dogs_groomed.png" alt="" />
          </span>
          <span className="logo-text">
            <span className="logo-title">Gwscwm Grooms</span>
            <span className="logo-subtitle">Dog Grooming</span>
          </span>
        </a>


        <a className="header-cta" href="#contact">
          Let&apos;s groom
        </a>
      </header>

      <main className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Gentle, stylish dog grooming in South Wales</p>
          <h1>Grooms that never let your dog down</h1>
          <p className="hero-text">
            Stress-conscious washes, trims, tidy-ups and full pamper sessions for
            dogs that deserve to look sharp and feel settled.
          </p>

          <div className="hero-actions">
            <a className="primary-button" href="#contact">
              Book a groom
            </a>
            <p className="trust-line">Calm handling, clean finishes, happy tails.</p>
          </div>

          <div className="hero-highlights" aria-label="Service highlights">
            <span>Bath &amp; brush</span>
            <span>Puppy intros</span>
            <span>Full groom sessions</span>
          </div>
        </div>

        <div className="hero-art">
          <div className="art-card">
            <img src="/dogs_groomed.png" alt="Illustration of freshly groomed dogs" />
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
