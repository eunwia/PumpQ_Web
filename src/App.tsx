import { useState, useEffect, useRef } from 'react';
import { 
  Smartphone, 
  TrendingDown, 
  Fuel,
  MapPin,
  Zap,
  Wallet,
  ChevronLeft,
  ChevronRight,
  ScanLine,
  X,
  ArrowRight,
  User,
  ShieldCheck,
  Star,
  Activity,
  Menu,
  Award,
  Sparkles,
  Search
} from 'lucide-react';
import './App.css';

// Screenshot showcase data
const screenshots = [
  {
    src: '/1.png',
    tag: 'Dashboard',
    title: '#1 Fuel Buddy',
    desc: 'Your all-in-one fuel companion with digital wallet, flash sales, and 1-tap quick refill orders.',
  },
  {
    src: '/2.png',
    tag: 'Discounts',
    title: 'Amazing Deals',
    desc: 'Catch flash sales, redeem partner promos, and save on every liter at partner stations.',
  },
  {
    src: '/3.png',
    tag: 'Live Map',
    title: 'Find Stations',
    desc: 'Compare live fuel prices, distance, and real-time tank stock across nearby stations.',
  },
  {
    src: '/4.png',
    tag: 'Loyalty',
    title: 'Earn Rewards',
    desc: 'Collect points on every fill-up, climb membership tiers, and unlock exclusive driver cashback.',
  },
  {
    src: '/5.png',
    tag: 'Analytics',
    title: 'Smart Insights',
    desc: 'Track your weekly fuel spending, mileage budget, and overall savings in one unified dashboard.',
  },
];

function App() {
  const [headerScrolled, setHeaderScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [lightbox, setLightbox] = useState<{ src: string; title: string } | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Scroll header styling
  useEffect(() => {
    const handleScroll = () => {
      setHeaderScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection observer for smooth reveals
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    const revealElements = document.querySelectorAll('.scroll-reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToSlide = (idx: number) => {
    setActiveSlideIndex(idx);
    const carousel = carouselRef.current;
    if (!carousel) return;
    const slides = carousel.querySelectorAll('.screenshot-slide');
    if (slides[idx]) {
      slides[idx].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  };

  const scrollCarousel = (direction: 'left' | 'right') => {
    const nextIdx = direction === 'left' 
      ? Math.max(0, activeSlideIndex - 1)
      : Math.min(screenshots.length - 1, activeSlideIndex + 1);
    scrollToSlide(nextIdx);
  };

  const handleDownloadAlert = (platform: string) => {
    alert(`Demo Mode: Starting download for ${platform}.`);
  };

  return (
    <div className="app-wrapper">
      {/* =========================================
          FLOATING PILL NAVBAR (basis.png style)
          ========================================= */}
      <div className={`nav-outer-container ${headerScrolled ? 'scrolled' : ''}`}>
        <nav className="floating-navbar">
          {/* Brand Logo */}
          <a href="#" className="nav-brand" aria-label="PumpQ Home">
            <img src="/pumpq_logo.png" alt="PumpQ" className="nav-logo-img" />
          </a>

          {/* Desktop Nav Links */}
          <div className="nav-center-menu">
            <a href="#hero" className="nav-menu-link active">Home</a>
            <a href="#showcase" className="nav-menu-link">Features</a>
            <a href="#overview" className="nav-menu-link">Overview</a>
            <a href="#download" className="nav-menu-link">Download</a>
          </div>

          {/* Nav Actions */}
          <div className="nav-actions">
            <a 
              href="#overview" 
              className="nav-btn-secondary"
              onClick={(e) => {
                e.preventDefault();
                alert('PumpQ Driver Web Portal is coming soon!');
              }}
            >
              <User size={15} />
              <span>Web Portal</span>
            </a>

            <a href="#download" className="nav-btn-primary">
              <span>Get PumpQ</span>
              <ArrowRight size={15} />
            </a>

            {/* Mobile Menu Toggle */}
            <button 
              className="mobile-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="mobile-dropdown-menu">
            <a href="#hero" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>Home</a>
            <a href="#showcase" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>Features</a>
            <a href="#overview" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>App Overview</a>
            <a href="#download" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>Download App</a>
            <div className="mobile-menu-divider" />
            <a 
              href="#download" 
              className="nav-btn-primary mobile-full-btn"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>Download App Free</span>
              <ArrowRight size={15} />
            </a>
          </div>
        )}
      </div>

      {/* =========================================
          HERO SECTION (Replication of basis.png)
          ========================================= */}
      <section id="hero" className="hero-landing">
        {/* Soft Background Concentric Rings & Radial Glow */}
        <div className="hero-bg-backdrop">
          <div className="hero-radial-glow" />
          <svg className="hero-concentric-svg" viewBox="0 0 1200 900" fill="none">
            <circle cx="600" cy="540" r="180" stroke="rgba(232, 111, 56, 0.12)" strokeWidth="1.2" />
            <circle cx="600" cy="540" r="320" stroke="rgba(232, 111, 56, 0.08)" strokeWidth="1.2" strokeDasharray="4 4" />
            <circle cx="600" cy="540" r="480" stroke="rgba(232, 111, 56, 0.06)" strokeWidth="1.2" />
            <circle cx="600" cy="540" r="660" stroke="rgba(232, 111, 56, 0.04)" strokeWidth="1.2" />
          </svg>
        </div>

        <div className="container hero-content-wrapper">
          {/* Top Pill Tag */}
          <div className="hero-pill-badge scroll-reveal">
            <ShieldCheck size={16} className="pill-badge-icon" />
            <span>Created for Filipino drivers</span>
          </div>

          {/* Hero Main Heading */}
          <h1 className="hero-headline scroll-reveal delay-1">
            PumpQ makes your fuel stop effortless
          </h1>

          {/* Subtitle */}
          <p className="hero-subheading scroll-reveal delay-2">
            Streamlining station discovery, live price comparisons, and digital payments —
            trusted by over 50,000 drivers across the Philippines on Android and iOS.
          </p>

          {/* Download Badges (Side by Side Badges from basis.png) */}
          <div className="hero-store-badges scroll-reveal delay-3">
            {/* Google Play */}
            <button 
              className="store-pill-btn"
              onClick={() => handleDownloadAlert('Google Play Store')}
              aria-label="Get it on Google Play"
            >
              <div className="store-pill-icon">
                <svg viewBox="0 0 512 512" fill="currentColor">
                  <path fill="#4285F4" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1z" />
                  <path fill="#34A853" d="M47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0z" />
                  <path fill="#FBBC05" d="M472.2 225.6l-58 33.3 60.1-60.1c11.9 6.8 18.2 16.2 18.2 26.8 0 10.6-6.3 20-18.2 26.8c.2.1.2 0 0 0z" />
                  <path fill="#EA4335" d="M104.6 499l220.7-221.3 60.1 60.1L104.6 499z" />
                </svg>
              </div>
              <div className="store-pill-text">
                <span className="store-pill-sub">GET IT ON</span>
                <span className="store-pill-main">Google Play</span>
              </div>
            </button>

            {/* Apple App Store / Direct APK */}
            <button 
              className="store-pill-btn"
              onClick={() => handleDownloadAlert('Android Direct APK')}
              aria-label="Download on the App Store or Direct APK"
            >
              <div className="store-pill-icon">
                <Smartphone size={22} />
              </div>
              <div className="store-pill-text">
                <span className="store-pill-sub">DOWNLOAD THE</span>
                <span className="store-pill-main">Direct APK (v1.2)</span>
              </div>
            </button>
          </div>

          {/* =========================================
              TRIPLE PHONE MOCKUP STAGE WITH FLOATING CARDS
              (Matching basis.png centerpiece layout)
              ========================================= */}
          <div className="hero-mockup-stage scroll-reveal delay-3">
            {/* FLOATING ITEM: Top Left Pill Badge */}
            <div className="floating-chip top-left-chip">
              <Star size={15} className="chip-icon" />
              <span>Set Priority</span>
            </div>

            {/* FLOATING ITEM: Left Stat Card with Pointer */}
            <div className="floating-card left-stat-card">
              <div className="stat-card-label">Total Downloads</div>
              <div className="stat-card-number">50,000+</div>
              <div className="stat-card-avatars">
                <div className="stat-avatar-circle" style={{ background: '#FF9E67' }}>🚗</div>
                <div className="stat-avatar-circle" style={{ background: '#59B1FF' }}>🛵</div>
                <div className="stat-avatar-circle" style={{ background: '#74D99F' }}>🚚</div>
                <div className="stat-avatar-circle" style={{ background: '#E86F38' }}>+4k</div>
              </div>
              {/* Pointer indicator node */}
              <div className="card-pointer pointer-right">
                <div className="pointer-dot" />
              </div>
            </div>

            {/* FLOATING ITEM: Top Right Pill Badge */}
            <div className="floating-chip top-right-chip">
              <Activity size={15} className="chip-icon" />
              <span>Set Progress</span>
            </div>

            {/* FLOATING ITEM: Right Feature Card with Pointer */}
            <div className="floating-card right-feature-card">
              <div className="feature-card-header">
                <div className="feature-icon-badge">
                  <Fuel size={14} />
                </div>
                <div>
                  <div className="feature-card-title">Nearby Station</div>
                  <div className="feature-card-sub">Caltex Mandaue · 2.1km</div>
                </div>
              </div>
              <div className="feature-pill-row">
                <div className="fuel-mini-tag">
                  <span className="fuel-dot" />
                  <span>Diesel ₱63.80</span>
                </div>
                <div className="fuel-stock-badge">In Stock</div>
              </div>
              {/* Pointer indicator node */}
              <div className="card-pointer pointer-left">
                <div className="pointer-dot" />
              </div>
            </div>

            {/* THE THREE PHONES (Angled Left, Center Hero, Angled Right) */}
            <div className="phones-triple-container">
              {/* Left Phone (Find Stations screen - 3.png) */}
              <div className="phone-wrapper phone-left">
                <div className="phone-frame">
                  <div className="phone-island">
                    <span className="island-lens" />
                  </div>
                  <img src="/3.png" alt="Find Stations" className="phone-screen-img" />
                </div>
              </div>

              {/* Center Phone (Hero Dashboard - 1.png) */}
              <div className="phone-wrapper phone-center">
                <div className="phone-frame center-frame">
                  <div className="phone-status-bar">
                    <span className="status-time">9:41</span>
                    <div className="phone-island">
                      <span className="island-lens" />
                    </div>
                    <div className="status-icons">
                      <span className="icon-bar" />
                      <span className="icon-wifi" />
                      <span className="icon-battery" />
                    </div>
                  </div>
                  <img src="/1.png" alt="PumpQ App Dashboard" className="phone-screen-img" />
                </div>
              </div>

              {/* Right Phone (Flash Deals screen - 2.png) */}
              <div className="phone-wrapper phone-right">
                <div className="phone-frame">
                  <div className="phone-island">
                    <span className="island-lens" />
                  </div>
                  <img src="/2.png" alt="Amazing Deals" className="phone-screen-img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 2: FEATURE SHOWCASE (Screenshots Carousel)
          ========================================= */}
      <section id="showcase" className="showcase-section">
        <div className="container">
          <div className="section-head-center scroll-reveal">
            <div className="section-micro-badge">
              <Sparkles size={14} />
              <span>App Showcase</span>
            </div>
            <h2 className="section-main-heading">See What PumpQ Can Do</h2>
            <p className="section-sub-desc">
              Explore the features that make PumpQ the smartest way to fuel up. 
              From finding the cheapest station to earning rewards — it's all in your hands.
            </p>

            {/* Quick Filter Tabs */}
            <div className="showcase-tabs">
              {screenshots.map((s, idx) => (
                <button
                  key={idx}
                  className={`showcase-tab-btn ${activeSlideIndex === idx ? 'active' : ''}`}
                  onClick={() => scrollToSlide(idx)}
                >
                  <span className="tab-tag">{s.tag}</span>
                  <span className="tab-title">{s.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Carousel */}
          <div className="carousel-track-wrapper">
            <div className="carousel-track" ref={carouselRef}>
              {screenshots.map((shot, idx) => (
                <div 
                  className={`screenshot-slide scroll-reveal ${activeSlideIndex === idx ? 'current' : ''}`} 
                  key={idx}
                  onClick={() => scrollToSlide(idx)}
                >
                  <div 
                    className="slide-phone-shell" 
                    onClick={(e) => {
                      e.stopPropagation();
                      setLightbox({ src: shot.src, title: shot.title });
                    }}
                    title="Click to expand"
                  >
                    <div className="slide-phone-notch" />
                    <img src={shot.src} alt={shot.title} className="slide-screen-img" />
                    <div className="slide-zoom-hint">
                      <Search size={16} />
                      <span>Zoom</span>
                    </div>
                  </div>
                  <div className="slide-meta">
                    <span className="slide-tag">{shot.tag}</span>
                    <h3 className="slide-title">{shot.title}</h3>
                    <p className="slide-desc">{shot.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Carousel Navigation Arrows */}
            <div className="carousel-nav-row">
              <button 
                className="carousel-btn-arrow" 
                onClick={() => scrollCarousel('left')} 
                aria-label="Previous slide"
              >
                <ChevronLeft size={22} />
              </button>
              <div className="carousel-dots-indicator">
                {screenshots.map((_, idx) => (
                  <button
                    key={idx}
                    className={`dot-pill ${activeSlideIndex === idx ? 'active' : ''}`}
                    onClick={() => scrollToSlide(idx)}
                    aria-label={`Slide ${idx + 1}`}
                  />
                ))}
              </div>
              <button 
                className="carousel-btn-arrow" 
                onClick={() => scrollCarousel('right')} 
                aria-label="Next slide"
              >
                <ChevronRight size={22} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 3: APP OVERVIEW (Refined Bento Grid)
          ========================================= */}
      <section id="overview" className="overview-section">
        <div className="container">
          <div className="section-head-center scroll-reveal">
            <div className="section-micro-badge">
              <Activity size={14} />
              <span>Complete Overview</span>
            </div>
            <h2 className="section-main-heading">Manage Your Fuel in One Place</h2>
            <p className="section-sub-desc">
              PumpQ combines everything you need — from comparing live gas rates to budget tracking — 
              in a single, beautifully organized system.
            </p>
          </div>

          <div className="bento-container">
            {/* Card 1: Compare Prices (Wide 7-column) */}
            <div className="bento-tile tile-wide scroll-reveal delay-1">
              <div className="tile-icon-box">
                <TrendingDown size={22} />
              </div>
              <h3 className="tile-title">Compare Live Fuel Prices</h3>
              <p className="tile-desc">
                Station fuel rates update dynamically. Instantly find who has the cheapest rates 
                for Gasoline, Diesel, or Premium near you. Never overpay again.
              </p>
              
              {/* Interactive Price Comparison Demo Widget */}
              <div className="bento-rates-widget">
                <div className="rate-card-item highlight">
                  <div className="rate-item-header">
                    <span className="station-name">Caltex Mandaue</span>
                    <span className="rate-badge-cheap">Cheapest</span>
                  </div>
                  <div className="rate-prices-row">
                    <div className="fuel-price-badge">
                      <span className="fuel-label">Diesel</span>
                      <span className="fuel-cost">₱63.80/L</span>
                    </div>
                    <div className="fuel-price-badge">
                      <span className="fuel-label">Unleaded</span>
                      <span className="fuel-cost">₱60.10/L</span>
                    </div>
                  </div>
                  <div className="rate-item-footer">
                    <span>2.1 km away · In Stock</span>
                    <span className="status-live">● Live Rates</span>
                  </div>
                </div>

                <div className="rate-card-item">
                  <div className="rate-item-header">
                    <span className="station-name">Shell Reclamation</span>
                    <span className="rate-distance">3.4 km</span>
                  </div>
                  <div className="rate-prices-row">
                    <div className="fuel-price-badge">
                      <span className="fuel-label">Diesel</span>
                      <span className="fuel-cost">₱65.20/L</span>
                    </div>
                    <div className="fuel-price-badge">
                      <span className="fuel-label">Unleaded</span>
                      <span className="fuel-cost">₱62.40/L</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Stock Checks (Medium 5-column) */}
            <div className="bento-tile tile-medium tile-dark scroll-reveal delay-2">
              <div className="tile-icon-box box-accent">
                <Fuel size={22} />
              </div>
              <h3 className="tile-title text-white">Stock Availability</h3>
              <p className="tile-desc text-white-muted">
                Avoid arriving to find empty tanks. PumpQ monitors station supply levels in real-time, 
                so you always know what's in stock before you drive.
              </p>

              {/* Tank meter visuals */}
              <div className="tank-status-list">
                <div className="tank-row">
                  <div className="tank-info">
                    <span>Unleaded 91</span>
                    <span className="tank-pct">94% Full</span>
                  </div>
                  <div className="tank-bar">
                    <div className="tank-fill fill-green" style={{ width: '94%' }} />
                  </div>
                </div>
                <div className="tank-row">
                  <div className="tank-info">
                    <span>Diesel Extra</span>
                    <span className="tank-pct">82% Full</span>
                  </div>
                  <div className="tank-bar">
                    <div className="tank-fill fill-orange" style={{ width: '82%' }} />
                  </div>
                </div>
                <div className="tank-row">
                  <div className="tank-info">
                    <span>Premium 95</span>
                    <span className="tank-pct">Low Stock</span>
                  </div>
                  <div className="tank-bar">
                    <div className="tank-fill fill-amber" style={{ width: '28%' }} />
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3: Scan QR & Pay (One Third) */}
            <div className="bento-tile tile-third scroll-reveal delay-1">
              <div className="tile-icon-box">
                <ScanLine size={22} />
              </div>
              <h3 className="tile-title">Scan QR & Pay</h3>
              <p className="tile-desc">
                Scan the pump's QR code, confirm your refill amount, and pay instantly with your PumpQ wallet. 
                No bills, no change, no hassle.
              </p>
              <div className="qr-badge-demo">
                <div className="qr-scan-box">
                  <div className="qr-scan-line" />
                  <span className="qr-mini-icon">⚡</span>
                </div>
                <div className="qr-demo-text">
                  <strong>1-Tap Checkout</strong>
                  <span>Instant digital receipt</span>
                </div>
              </div>
            </div>

            {/* Card 4: Find Stations (One Third) */}
            <div className="bento-tile tile-third scroll-reveal delay-2">
              <div className="tile-icon-box">
                <MapPin size={22} />
              </div>
              <h3 className="tile-title">Nearby Station Radar</h3>
              <p className="tile-desc">
                Browse partner stations on an interactive map. Filter by fuel type, price, or distance. 
                Navigate directly with GPS integration.
              </p>
              <div className="radar-station-pill">
                <div className="radar-dot" />
                <span>12 stations within 5km</span>
              </div>
            </div>

            {/* Card 5: Wallet & Spend (One Third) */}
            <div className="bento-tile tile-third scroll-reveal delay-3">
              <div className="tile-icon-box">
                <Wallet size={22} />
              </div>
              <h3 className="tile-title">PumpQ Wallet</h3>
              <p className="tile-desc">
                Top up your wallet, track transaction history, and budget your fuel spending in one place. 
                Earn rewards on every transaction.
              </p>
              <div className="wallet-mini-balance">
                <span className="balance-label">Current Balance</span>
                <span className="balance-amount">₱2,450.00</span>
              </div>
            </div>

            {/* Card 6: Flash Sales & Rewards (Full Width 12-col) */}
            <div className="bento-tile tile-full tile-orange-banner scroll-reveal delay-2">
              <div className="banner-content-left">
                <div className="banner-pill">
                  <Zap size={14} />
                  <span>Flash Sales & Loyalty Perks</span>
                </div>
                <h3 className="tile-title text-white">Earn More Every Time You Fuel Up</h3>
                <p className="tile-desc text-white-muted">
                  Catch time-limited discounts from partner gas stations. Climb membership tiers — 
                  Regular, Silver, and Gold VIP — and unlock weekly bonuses and cashback.
                </p>
              </div>

              <div className="tier-cards-row">
                <div className="tier-pill-card">
                  <Award size={18} className="tier-icon tier-reg" />
                  <div>
                    <div className="tier-name">Regular</div>
                    <div className="tier-perk">1x Fuel Points</div>
                  </div>
                </div>
                <div className="tier-pill-card">
                  <Award size={18} className="tier-icon tier-silver" />
                  <div>
                    <div className="tier-name">Silver</div>
                    <div className="tier-perk">2x Points + Perks</div>
                  </div>
                </div>
                <div className="tier-pill-card highlight-gold">
                  <Award size={18} className="tier-icon tier-gold" />
                  <div>
                    <div className="tier-name">Gold VIP</div>
                    <div className="tier-perk">₱2/L Rebate + Deals</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 4: FINAL CALL TO ACTION (CTA)
          ========================================= */}
      <section id="download" className="cta-section">
        <div className="container">
          <div className="cta-card-shell scroll-reveal">
            {/* Backdrop Glow & Rings inside CTA */}
            <div className="cta-backdrop-glow" />
            <svg className="cta-backdrop-rings" viewBox="0 0 800 500" fill="none">
              <circle cx="400" cy="250" r="160" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="1" />
              <circle cx="400" cy="250" r="280" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1" strokeDasharray="6 6" />
            </svg>

            <div className="cta-inner-content">
              <div className="cta-community-pill">
                <Sparkles size={14} />
                <span>Join the PumpQ Community</span>
              </div>

              <h2 className="cta-main-title">
                Your Fuel, <br className="cta-br" />
                Finally Under Control.
              </h2>

              <p className="cta-description">
                Download PumpQ today. Join smart Filipino drivers who are saving time, 
                earning rewards, and getting the best fuel prices — every single fill-up.
              </p>

              {/* Action buttons */}
              <div className="cta-buttons-row">
                <button 
                  className="cta-store-button primary-light"
                  onClick={() => handleDownloadAlert('Android Direct APK')}
                >
                  <Smartphone size={20} />
                  <div className="cta-btn-text">
                    <span className="btn-label-small">DIRECT APK</span>
                    <span className="btn-label-large">Download v1.2.4</span>
                  </div>
                </button>

                <button 
                  className="cta-store-button"
                  onClick={() => handleDownloadAlert('Google Play Store')}
                >
                  <svg className="google-play-svg" viewBox="0 0 512 512" fill="currentColor">
                    <path fill="#4285F4" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1z" />
                    <path fill="#34A853" d="M47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0z" />
                    <path fill="#FBBC05" d="M472.2 225.6l-58 33.3 60.1-60.1c11.9 6.8 18.2 16.2 18.2 26.8 0 10.6-6.3 20-18.2 26.8c.2.1.2 0 0 0z" />
                    <path fill="#EA4335" d="M104.6 499l220.7-221.3 60.1 60.1L104.6 499z" />
                  </svg>
                  <div className="cta-btn-text">
                    <span className="btn-label-small">GET IT ON</span>
                    <span className="btn-label-large">Google Play</span>
                  </div>
                </button>
              </div>

              {/* Micro terms */}
              <div className="cta-policy-links">
                <a href="#terms" onClick={(e) => { e.preventDefault(); alert('PumpQ Terms of Service'); }}>Terms of Service</a>
                <span className="sep">•</span>
                <a href="#privacy" onClick={(e) => { e.preventDefault(); alert('PumpQ Privacy Policy'); }}>Privacy Policy</a>
                <span className="sep">•</span>
                <span>Free to use</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          FOOTER SECTION
          ========================================= */}
      <footer className="footer-container">
        <div className="container">
          <div className="footer-grid-row">
            <div className="footer-col-brand">
              <a href="#" className="footer-brand-link">
                <img src="/pumpq_logo.png" alt="PumpQ Logo" className="footer-logo-img" />
              </a>
              <p className="footer-tagline">
                The modern fuel management platform engineered for Filipino motorists. 
                Find nearby stations, verify stock, and save on every tank.
              </p>
            </div>

            <div className="footer-col-nav">
              <h4 className="footer-col-title">Navigation</h4>
              <ul className="footer-list">
                <li><a href="#hero">Home</a></li>
                <li><a href="#showcase">App Showcase</a></li>
                <li><a href="#overview">Features</a></li>
                <li><a href="#download">Download</a></li>
              </ul>
            </div>

            <div className="footer-col-nav">
              <h4 className="footer-col-title">Fuel Network</h4>
              <ul className="footer-list">
                <li><a href="#overview">Station Radar</a></li>
                <li><a href="#overview">Live Price Ticker</a></li>
                <li><a href="#overview">Tank Stock Meter</a></li>
                <li><a href="#overview">Cashless QR Pay</a></li>
              </ul>
            </div>

            <div className="footer-col-nav">
              <h4 className="footer-col-title">Driver Resources</h4>
              <ul className="footer-list">
                <li><a href="#terms" onClick={(e) => { e.preventDefault(); alert('Terms of Service'); }}>Terms of Service</a></li>
                <li><a href="#privacy" onClick={(e) => { e.preventDefault(); alert('Privacy Policy'); }}>Privacy Policy</a></li>
                <li><a href="#support" onClick={(e) => { e.preventDefault(); alert('Contact: support@pumpq.ph'); }}>Help & Support</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom-bar">
            <p className="footer-copy">© {new Date().getFullYear()} PumpQ Inc. All rights reserved.</p>
            <div className="footer-badge-ph">
              <span>🇵🇭 Proudly built for the Philippines</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Lightbox Modal */}
      {lightbox && (
        <div className="lightbox-overlay" onClick={() => setLightbox(null)}>
          <button className="lightbox-close-btn" onClick={() => setLightbox(null)} aria-label="Close modal">
            <X size={24} />
          </button>
          <div className="lightbox-shell" onClick={(e) => e.stopPropagation()}>
            <img src={lightbox.src} alt={lightbox.title} className="lightbox-screen" />
            <div className="lightbox-info">
              <h4>{lightbox.title}</h4>
              <span>Tap anywhere outside to close</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
