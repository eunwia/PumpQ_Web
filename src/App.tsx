import { useState, useEffect, useRef, useCallback } from 'react';
import { 
  Smartphone, 
  TrendingDown, 
  Fuel,
  MapPin,
  Zap,
  Wallet,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  ScanLine,
  X
} from 'lucide-react';
import './App.css';

interface BlobConfig {
  id: number;
  width: string;
  height: string;
  top: string;
  left: string;
  background: string;
  animationDuration: string;
  animationDelay: string;
}

// Screenshot carousel data
const screenshots = [
  {
    src: '/1.png',
    title: '#1 Fuel Buddy',
    desc: 'Your all-in-one fuel companion with wallet, deals, and quick order.',
  },
  {
    src: '/2.png',
    title: 'Amazing Deals',
    desc: 'Catch flash sales, redeem partner promos, and save more.',
  },
  {
    src: '/3.png',
    title: 'Find Stations',
    desc: 'Compare price, distance, and stock status at nearby stations.',
  },
  {
    src: '/4.png',
    title: 'Earn Rewards',
    desc: 'Collect points, climb membership tiers, and unlock bonuses.',
  },
  {
    src: '/5.png',
    title: 'Smart Insights',
    desc: 'Track your fuel spending, budget, and savings in one view.',
  },
];

function App() {
  const [headerScrolled, setHeaderScrolled] = useState(false);
  const [blobs, setBlobs] = useState<BlobConfig[]>([]);
  const [lightbox, setLightbox] = useState<{ src: string; title: string } | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Generate random orange gradient blobs
  const generateGradients = useCallback(() => {
    const orangeShades = [
      'rgba(232, 111, 56, 0.28)',
      'rgba(255, 122, 0, 0.25)',
      'rgba(255, 159, 67, 0.24)',
      'rgba(244, 162, 97, 0.26)',
      'rgba(231, 111, 81, 0.22)',
      'rgba(255, 107, 107, 0.18)',
      'rgba(255, 183, 77, 0.25)',
      'rgba(230, 92, 23, 0.24)',
      'rgba(255, 229, 180, 0.3)',
    ];

    const generatedBlobs = Array.from({ length: 6 }, (_, i) => {
      const size = Math.floor(Math.random() * 250) + 250;
      const top = Math.floor(Math.random() * 85);
      const left = Math.floor(Math.random() * 85);
      const color1 = orangeShades[Math.floor(Math.random() * orangeShades.length)];
      const color2 = orangeShades[Math.floor(Math.random() * orangeShades.length)];
      const angle = Math.floor(Math.random() * 360);
      const gradient = `linear-gradient(${angle}deg, ${color1} 0%, ${color2} 100%)`;
      const duration = Math.floor(Math.random() * 20) + 20;
      const delay = Math.floor(Math.random() * 10) * -1;

      return {
        id: i,
        width: `${size}px`,
        height: `${size}px`,
        top: `${top}%`,
        left: `${left}%`,
        background: gradient,
        animationDuration: `${duration}s`,
        animationDelay: `${delay}s`,
      };
    });

    setBlobs(generatedBlobs);
  }, []);

  // Scroll-triggered reveal animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );

    const revealElements = document.querySelectorAll('.scroll-reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Header scroll + blob generation
  useEffect(() => {
    const handleScroll = () => {
      setHeaderScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    generateGradients();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [generateGradients]);

  const scrollCarousel = (direction: 'left' | 'right') => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    const slideWidth = 320 + 32;
    const targetScroll = direction === 'left'
      ? carousel.scrollLeft - slideWidth
      : carousel.scrollLeft + slideWidth;
    carousel.scrollTo({ left: targetScroll, behavior: 'smooth' });
  };

  return (
    <>
      {/* Dynamic Background Gradient Blobs */}
      <div className="bg-gradients-container">
        {blobs.map((blob) => (
          <div
            key={blob.id}
            className="bg-gradient-blob"
            style={{
              width: blob.width,
              height: blob.height,
              top: blob.top,
              left: blob.left,
              background: blob.background,
              animationDuration: blob.animationDuration,
              animationDelay: blob.animationDelay,
            }}
          />
        ))}
      </div>

      {/* Header */}
      <header className={`header ${headerScrolled ? 'header-scrolled' : ''}`}>
        <div className="container navbar">
          <a href="#" className="logo">
            <img src="/pumpq_logo.png" alt="PumpQ Logo" className="logo-img" />
          </a>

          <nav>
            <ul className="nav-links">
              <li><a href="#features" className="nav-link">Features</a></li>
              <li><a href="#overview" className="nav-link">Overview</a></li>
              <li><a href="#download" className="nav-link">Download App</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* ============================
          SECTION 1: HERO
          Logo on the left, text on the right (Tarsi-style)
          No stars — prototype mode
          ============================ */}
      <section className="hero-section container">
        <div className="hero-grid">
          {/* Left: Logo image */}
          <div className="hero-logo-side scroll-reveal">
            <div className="hero-logo-wrapper">
              <div className="hero-logo-glow" />
              <img
                src="/pumpy.png"
                alt="PumpQ Logo"
                className="hero-logo-img"
              />
            </div>
          </div>

          {/* Right: Text content */}
          <div className="hero-text-side scroll-reveal delay-2">
            <h1 className="hero-title">
              Your #1 <span>Fuel Buddy</span> App
            </h1>
            <p className="hero-subtitle">
              Find the best fuel prices nearby and manage your fuel budget in one place. 
              Built for Filipino drivers.
            </p>

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

            <div className="hero-links">
              <a href="#" className="hero-link">Terms of Use</a>
              <a href="#" className="hero-link">Privacy Policy</a>
            </div>
          </div>
        </div>
      </section>

      {/* ============================
          SECTION 2: FEATURE DISPLAY
          Horizontal carousel of 5 screenshots
          ============================ */}
      <section id="features" className="features-showcase-section">
        <div className="container">
          <div className="section-header scroll-reveal">
            <p className="section-subtitle">App Showcase</p>
            <h2 className="section-title">See What PumpQ Can Do</h2>
            <p className="section-desc">
              Explore the features that make PumpQ the smartest way to fuel up. 
              From finding the cheapest station to earning rewards — it's all here.
            </p>
          </div>
        </div>

        <div className="container">
          <div className="screenshot-carousel" ref={carouselRef}>
            {screenshots.map((shot, idx) => (
              <div className="screenshot-slide scroll-reveal" key={idx} style={{ transitionDelay: `${0.1 * idx}s` }}>
                <div className="screenshot-phone-frame" onClick={() => setLightbox({ src: shot.src, title: shot.title })}>
                  <img src={shot.src} alt={shot.title} className="screenshot-img" />
                </div>
                <div className="screenshot-caption">
                  <h3>{shot.title}</h3>
                  <p>{shot.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>



        <div className="carousel-nav">
          <button className="carousel-arrow" onClick={() => scrollCarousel('left')} aria-label="Previous">
            <ChevronLeft size={22} />
          </button>
          <button className="carousel-arrow" onClick={() => scrollCarousel('right')} aria-label="Next">
            <ChevronRight size={22} />
          </button>
        </div>
      </section>

      {/* ============================
          SECTION 3: APP OVERVIEW
          Bento grid of features
          ============================ */}
      <section id="overview" className="overview-section">
        <div className="container">
          <div className="section-header scroll-reveal">
            <p className="section-subtitle">App Overview</p>
            <h2 className="section-title">Manage Your Fuel in One Place</h2>
            <p className="section-desc">
              PumpQ combines everything you need — from finding stations to tracking budgets — in a single, beautiful app.
            </p>
          </div>

          <div className="bento-grid">
            {/* Card 1: Compare Prices — Wide */}
            <div className="bento-card bento-wide scroll-reveal delay-1">
              <div className="bento-icon-wrapper">
                <TrendingDown size={24} />
              </div>
              <h3 className="bento-title">Compare Live Fuel Prices</h3>
              <p className="bento-desc">
                Station fuel rates update dynamically. Instantly find who has the cheapest rates 
                for Gasoline, Diesel, or Premium near you. Never overpay again.
              </p>
              <div className="bento-demo">
                <div className="demo-chat-bubble">"Find cheapest diesel near me"</div>
                <div className="demo-response">
                  <CheckCircle2 size={18} />
                  Caltex Mandaue — ₱63.80/L · 2.1 km · In Stock
                </div>
              </div>
            </div>

            {/* Card 2: Stock Checks — Medium */}
            <div className="bento-card bento-medium bento-accent scroll-reveal delay-2">
              <div className="bento-icon-wrapper">
                <Fuel size={24} />
              </div>
              <h3 className="bento-title">Stock Availability</h3>
              <p className="bento-desc">
                Avoid arriving to find empty tanks. PumpQ monitors station supply levels in real-time, 
                so you always know what's in stock before you drive.
              </p>
            </div>

            {/* Card 3: Scan QR — Half */}
            <div className="bento-card bento-half bento-orange scroll-reveal delay-1">
              <div className="bento-icon-wrapper">
                <ScanLine size={24} />
              </div>
              <h3 className="bento-title">Scan QR & Pay</h3>
              <p className="bento-desc">
                Scan the pump's QR code, fill in your amount, and pay instantly with your PumpQ wallet. 
                No cash, no hassle.
              </p>
            </div>

            {/* Card 4: Find Stations — Half */}
            <div className="bento-card bento-half scroll-reveal delay-2">
              <div className="bento-icon-wrapper">
                <MapPin size={24} />
              </div>
              <h3 className="bento-title">Find Nearby Stations</h3>
              <p className="bento-desc">
                Browse partner stations on an interactive map. Filter by fuel type, price, or distance. 
                Navigate directly to your choice.
              </p>
            </div>

            {/* Card 5: Wallet — Medium */}
            <div className="bento-card bento-medium scroll-reveal delay-1">
              <div className="bento-icon-wrapper">
                <Wallet size={24} />
              </div>
              <h3 className="bento-title">PumpQ Wallet</h3>
              <p className="bento-desc">
                Top up your wallet, track transaction history, and manage your fuel budget all in one place. 
                Earn points with every purchase.
              </p>
            </div>

            {/* Card 6: Flash Sales — Wide (accent) */}
            <div className="bento-card bento-wide bento-accent scroll-reveal delay-2">
              <div className="bento-icon-wrapper">
                <Zap size={24} />
              </div>
              <h3 className="bento-title">Flash Sales & Rewards</h3>
              <p className="bento-desc">
                Catch time-limited deals from partner stations. Climb membership tiers — Regular, Silver, Gold — 
                and unlock bonus rewards every week. The more you fuel, the more you save.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================
          SECTION 4: FINAL CTA
          ============================ */}
      <section id="download" className="cta-section container">
        <div className="cta-banner scroll-reveal">
          <div className="cta-content">
            <div className="cta-community-badge">
              Join the PumpQ Community
            </div>
            <h2 className="cta-title">
              Your Fuel, <br />
              Finally Under Control.
            </h2>
            <p className="cta-desc">
              Download PumpQ now. Join smart Filipino drivers who are saving time, 
              earning rewards, and getting the best fuel prices — every single fill-up.
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

            <div className="cta-links">
              <a href="#" className="cta-link">Privacy</a>
              <a href="#" className="cta-link">Terms</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer (retained) */}
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

            </div>
          </div>

          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} PumpQ Inc. All rights reserved.</p>
            <div className="footer-bottom-links">
              <a href="#" className="footer-link">Privacy Policy</a>
              <a href="#" className="footer-link">Terms</a>
            </div>
          </div>
        </div>
      </footer>
      {/* Lightbox Modal */}
      {lightbox && (
        <div className="lightbox-overlay" onClick={() => setLightbox(null)}>
          <button className="lightbox-close" onClick={() => setLightbox(null)} aria-label="Close">
            <X size={24} />
          </button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={lightbox.src} alt={lightbox.title} className="lightbox-img" />
            <p className="lightbox-caption">{lightbox.title}</p>
          </div>
        </div>
      )}

    </>
  );
}

export default App;
