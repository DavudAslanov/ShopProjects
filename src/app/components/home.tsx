'use client';

import "@/style/home.css";

export default function HomePage() {
  return (
    <main className="home-page">
      {/* ============ HERO SECTION ============ */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-left">
            <div className="hero-breadcrumb">Crafting Comfort, Shaping Style</div>
            <h1 className="hero-title">Your Home, Our Passion</h1>
            <p className="hero-description">
              Discover curated collections of timeless furniture, thoughtful decor, and artisan pieces designed to elevate your space.
            </p>
            <button className="hero-btn">Discover More</button>
          </div>
          
          <div className="hero-right">
            <div className="hero-main-image">
              <div className="furniture-display">
                <img src="/images/main1.jpg" alt="Furniture" />
              </div>
            </div>
            <div className="hero-secondary-card">
              <h3>60 Home Decor Ideas That Designers Swear By</h3>
              <p>Discover the latest design trends, must-have pieces, and styling tips from top interior designers. Perfect for anyone looking to refresh their home.</p>
              <button className="secondary-btn">Explore</button>
            </div>
          </div>
        </div>
      </section>

      {/* ============ MISSION SECTION ============ */}
      <section className="mission-section">
        <div className="mission-content">
          <div className="mission-left">
            <div className="mission-badge">We design spaces to inspire and delight - we take it from 'I don't know where to start' to 'wow, this feels like home'.</div>
            <h2 className="mission-title">
              We help turn your design dreams into reality with curated, stylish pieces for every space.
            </h2>
            <a href="#projects" className="mission-link">View All Projects</a>
          </div>
          <div className="mission-right">
            
            <div className="mission-image">
              <img src="/images/main2.jpg" alt="Furniture" />
            </div>
          </div>
        </div>
      </section>

      {/* ============ FEATURES SECTION ============ */}
      <section className="features-section">
        <div className="features-container">
          <div className="feature-card">
            <div className="feature-icon">🌍</div>
            <h3>Worldwide Free Shipping</h3>
            <p>Fast, reliable delivery to over 100 countries with no hidden fees.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">✨</div>
            <h3>Unique & Custom Design</h3>
            <p>Personalize your orders with bespoke customization options.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">✓</div>
            <h3>No Questions Refund</h3>
            <p>100% satisfaction guaranteed with hassle-free returns.</p>
          </div>
        </div>
      </section>

      {/* ============ COLLECTION SECTION ============ */}
      <section className="collection-section">
        <div className="collection-container">
          <div className="collection-left">
            <h2 className="collection-title">
              Customize the New Boho Collection
            </h2>
            <div className="collection-image"></div>
          </div>
          
          <div className="collection-right">
            <div className="collection-grid">
              <div className="collection-card bedroom-card">
                <span className="collection-label">BEDROOM</span>
              </div>
              <div className="collection-card kitchen-card">
                <span className="collection-label">KITCHEN</span>
              </div>
              <div className="collection-card living-card">
                <span className="collection-label">LIVING ROOM</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ UPGRADE SECTION ============ */}
      <section className="upgrade-section">
        <div className="upgrade-container">
          <div className="upgrade-left">
            <div className="upgrade-image"></div>
            <div className="upgrade-badge">SHOP COLLECTION</div>
          </div>
          <div className="upgrade-right">
            <h2 className="upgrade-title">
              Synory's New Collection Has Everything for a Chic and Cozy Upgrade
            </h2>
            <p className="upgrade-description">
              Redefine your space with our curated selection of modern and timeless pieces. From statement furniture to subtle accents, we&apos;ve curated everything you need to transform your home into a sanctuary of style and comfort.
            </p>
            <button className="upgrade-btn">Shop Now</button>
          </div>
        </div>
      </section>
    </main>
  );
}
