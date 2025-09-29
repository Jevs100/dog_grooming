export default function Header() {
    return <header className="site-header">
        <a className="logo" href="/" aria-label="GWSCWM Grooms home">
          <span className="logo-mark" aria-hidden="true">
            <img src="/dogs_groomed.png" alt="" />
          </span>
          <span className="logo-text">
            <span className="logo-title">Gwscwm Grooms</span>
            <span className="logo-subtitle">Dog Grooming</span>
          </span>
        </a>


        <a className="primary-button" href="#contact">
          Let&apos;s groom
        </a>
      </header>
}