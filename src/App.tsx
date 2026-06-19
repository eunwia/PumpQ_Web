import { useState, useEffect } from 'react';
import { 
  Smartphone, 
  TrendingDown, 
  Fuel, 
  Zap 
} from 'lucide-react';
import './App.css';

function App() {
  // Navigation & Scroll states
  const [headerScrolled, setHeaderScrolled] = useState(false);

  // Handle header background shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setHeaderScrolled(true);
      } else {
        setHeaderScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Header */}
      <header className={`header ${headerScrolled ? 'header-scrolled' : ''}`}>
        <div className="container navbar">
          <a href="#" className="logo">
            <img src="/pumpq_logo.png" alt="PumpQ Logo" className="logo-img" />
          </a>
          
          <nav>
            <ul className="nav-links">
              <li><a href="#features" className="nav-link">Features</a></li>
              <li><a href="#how-it-works" className="nav-link">How it Works</a></li>
              <li><a href="#download" className="nav-link">Download App</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section container">
        <div className="hero-content-centered animate-fade-in-up">
          <h1 className="hero-title" style={{ marginBottom: '32px' }}>
            Check the Pump <span>Before You Pump</span> the Brakes
            <img src="/pumpq_mascot.png" alt="PumpQ Mascot" className="slogan-mascot-img" />
          </h1>

          <div className="hero-actions">
            <a href="#download" className="download-btn">
              <div className="download-btn-icon">
                <Smartphone />
              </div>
              <div className="download-btn-text">
                <span className="download-btn-label">Direct APK</span>
                <span className="download-btn-name">Download</span>
              </div>
            </a>

            <a href="#download" className="download-btn">
              <div className="download-btn-icon">
                {/* SVG Google Play Icon */}
                <svg viewBox="0 0 512 512" fill="currentColor">
                  <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58 33.3 60.1-60.1c11.9 6.8 18.2 16.2 18.2 26.8 0 10.6-6.3 20-18.2 26.8c.2.1.2 0 0 0zM104.6 499l220.7-221.3 60.1 60.1L104.6 499z" />
                </svg>
              </div>
              <div className="download-btn-text">
                <span className="download-btn-label">Get it on</span>
                <span className="download-btn-name">Google Play</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Features Grid Section */}
      <section id="features" className="features-section container">
        <div className="section-header">
          <h2 className="section-title">Built for Smart Drivers</h2>
          <p className="section-desc">
            Stop wasting time and fuel looking for open lanes or lower prices. 
            PumpQ gives you complete transparency at your fingertips.
          </p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <TrendingDown size={24} />
            </div>
            <h3 className="feature-title">Compare Live Prices</h3>
            <p className="feature-desc">
              Station fuel rates update dynamically in our database. 
              Instantly find who has the cheapest rates for Gasoline, Diesel, or Unleaded near you.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <Fuel size={24} />
            </div>
            <h3 className="feature-title">Stock Availability Checks</h3>
            <p className="feature-desc">
              Avoid arriving to find empty tanks. PumpQ monitors and displays station supply levels in real-time, 
              so you always know what is in stock.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <Zap size={24} />
            </div>
            <h3 className="feature-title">Scan QR Code</h3>
            <p className="feature-desc">
              Scan the pump's QR, fill in your payment details, refuel, and drive off. 
            </p>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="how-it-works" className="how-it-works-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Refueling in 3 Simple Steps</h2>
            <p className="section-desc">
              PumpQ matches your smartphone with partner station pump sensors to completely rebuild your station experience.
            </p>
          </div>

          <div className="steps-container">
            <div className="step-card step-card-active">
              <div className="step-number-node">1</div>
              <div className="step-card-line"></div>
              <h3 className="step-title">Find and Navigate</h3>
              <p className="step-desc">
                Browse partner stations, check prices, filter for stock, and route directly to the station of choice.
              </p>
            </div>

            <div className="step-card">
              <div className="step-number-node">2</div>
              <div className="step-card-line"></div>
              <h3 className="step-title">Scan QR at the Pump</h3>
              <p className="step-desc">
                Pull up to the express pump, scan the PumpQ QR Code on your phone, and specify your refueling amount.
              </p>
            </div>

            <div className="step-card">
              <div className="step-number-node">3</div>
              <h3 className="step-title">Refuel and Go</h3>
              <p className="step-desc">
                Pay instantly with our in-app wallet, other e-wallet, or points. Refueling your vehicle smartly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section CTA */}
      <section id="download" className="cta-section container">
        <div className="cta-banner">
          <div className="cta-content">
            <h2 className="cta-title">Para sa Bawat Sakay, Para sa Bawat Biyahe.</h2>
            <p className="cta-desc">
              Download the PumpQ app now. Join thousands of smart drivers in Philippines who are saving time and securing fuel prices in real-time.
            </p>
            
            <div className="cta-actions">
              <a href="#" className="download-btn" onClick={(e) => { e.preventDefault(); alert('Demo Mode: Directly downloading Android APK file (simulated).'); }}>
                <div className="download-btn-icon">
                  <Smartphone />
                </div>
                <div className="download-btn-text">
                  <span className="download-btn-label">Direct APK</span>
                  <span className="download-btn-name">Download V1.2.4</span>
                </div>
              </a>

              <a href="#" className="download-btn" onClick={(e) => { e.preventDefault(); alert('Demo Mode: Opening Google Play Store (simulated).'); }}>
                <div className="download-btn-icon">
                  <svg viewBox="0 0 512 512" fill="currentColor">
                    <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58 33.3 60.1-60.1c11.9 6.8 18.2 16.2 18.2 26.8 0 10.6-6.3 20-18.2 26.8c.2.1.2 0 0 0zM104.6 499l220.7-221.3 60.1 60.1L104.6 499z" />
                  </svg>
                </div>
                <div className="download-btn-text">
                  <span className="download-btn-label">Get it on</span>
                  <span className="download-btn-name">Google Play</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <a href="#" className="logo footer-logo">
                <img src="/pumpq_logo.png" alt="PumpQ Logo" className="logo-img" style={{ filter: 'brightness(0) invert(1)' }} />
              </a>
              <p className="footer-desc">
                Helping Filipino drivers fuel smarter.
              </p>
              <div className="footer-socials">
                <a href="#" className="social-icon-btn">FB</a>
                <a href="#" className="social-icon-btn">X</a>
                <a href="#" className="social-icon-btn">IG</a>
              </div>
            </div>

            <div className="footer-col">
              <h4 className="footer-col-title">Services</h4>
              <ul className="footer-links">
                <li><a href="#features" className="footer-link">QR Pay Express</a></li>
                <li><a href="#features" className="footer-link">Partner Rewards</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4 className="footer-col-title">Company</h4>
              <ul className="footer-links">
                <li><a href="#" className="footer-link">About Us</a></li>
                <li><a href="#" className="footer-link">Partner Registration</a></li>
                <li><a href="#" className="footer-link">Careers</a></li>
                <li><a href="#" className="footer-link">News & Press</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4 className="footer-col-title">Support</h4>
              <ul className="footer-links">
                <li><a href="#" className="footer-link">Help Center</a></li>
                <li><a href="#" className="footer-link">Contact Support</a></li>
                <li><a href="#" className="footer-link">Privacy Policy</a></li>
                <li><a href="#" className="footer-link">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} PumpQ Technologies, Inc. All rights reserved.</p>
            <div className="footer-bottom-links">
              <a href="#" className="footer-link">Privacy Policy</a>
              <a href="#" className="footer-link">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
