import './App.css'
import Header  from './components/Headers'
import Hero from './components/Hero'

function App() {
  return (
    <div className="main-page">
      <Header />
      <Hero />
      <div className="services">
        <h2 >
          These are the services we offer
        </h2>
        <div className="service-list">
          <div className="service-card">
            <h3>Wash & Tidy</h3>
            <p>A gentle wash, tidy trim, and a spritz of doggy cologne. Perfect for keeping your pup fresh between full grooms.</p>
          <img src="/dogs_groomed.png" alt="Illustration of freshly groomed dogs" />
          </div>

          <div className="service-card">
            <h3>Full Groom</h3>
            <p>A thorough wash, precise trim, and a spritz of doggy cologne. Ideal for dogs that need a full refresh and style update.</p>
          <img src="/dogs_groomed.png" alt="Illustration of freshly groomed dogs" />
          </div>

          <div className="service-card">
            <h3>Puppy Groom</h3>
            <p>A calm introduction to grooming with a gentle wash, light trim, and a spritz of doggy cologne. Great for puppies or dogs new to grooming.</p>
          <img src="/dogs_groomed.png" alt="Illustration of freshly groomed dogs" />
          </div>
        </div>
      </div>

      <div>
        <h2>
          A Bit About Mysql Section 
        </h2>
      </div>

      <div>
        <h2> I'm not sure what this section is yet</h2>
      </div>

      <div id="footer">
        <p>© 2024 Gwscwm Grooms. All rights reserved.</p>
      </div>

    </div>
  )
}

export default App
