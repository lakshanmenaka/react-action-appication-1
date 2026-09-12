import React from "react";
import "./App.css";

export default function App() 
  return (
    <div className="beauty-site">
      {/* Navbar */}
      <header className="navbar">
        <div className="logo">Goopiy</div>

        <nav>
          <a href="#home">Home</a>
          <a href="#products">Products</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <button className="shop-btn">Shop Now</button>
      </header>

      {/* Hero */}
      <section className="hero" id="home">
        <div className="hero-content">
          <p className="eyebrow">BEAUTY • CARE • CONFIDENCE</p>

          <h1>
            Feel beautiful.
            <br />
            <span>Be yourself.</span>
          </h1>

          <p className="hero-text">
            Discover simple beauty products made to bring out your natural
            glow and help you feel confident every day.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">Explore Products</button>
            <button className="secondary-btn">Learn More</button>
          </div>
        </div>

        <div className="hero-image">
          <div className="image-card">
            <div className="product-bottle">GOOPIY</div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features">
        <div>
          <span>🌿</span>
          <h3>Natural Care</h3>
          <p>Gentle products inspired by nature.</p>
        </div>

        <div>
          <span>✨</span>
          <h3>Beautiful Glow</h3>
          <p>Designed to make your natural beauty shine.</p>
        </div>

        <div>
          <span>💗</span>
          <h3>Made With Love</h3>
          <p>Beauty essentials created with care.</p>
        </div>
      </section>

      {/* Products */}
      <section className="products" id="products">
        <p className="eyebrow">OUR COLLECTION</p>
        <h2>Beauty essentials you'll love</h2>

        <div className="product-grid">
          <div className="product-card">
            <div className="product-image pink">Glow</div>
            <h3>Glow Serum</h3>
            <p>For a fresh, radiant look.</p>
            <strong>$24.00</strong>
          </div>

          <div className="product-card">
            <div className="product-image beige">Care</div>
            <h3>Daily Face Cream</h3>
            <p>Soft and nourishing daily care.</p>
            <strong>$28.00</strong>
          </div>

          <div className="product-card">
            <div className="product-image rose">Bloom</div>
            <h3>Rose Beauty Oil</h3>
            <p>A silky touch for glowing skin.</p>
            <strong>$22.00</strong>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="about" id="about">
        <div>
          <p className="eyebrow">WHY GOOPIY?</p>
          <h2>Beauty should feel simple.</h2>
        </div>

        <p>
          At Goopiy, we believe beauty is about feeling comfortable,
          confident and completely yourself. Our goal is to make everyday
          beauty simple, enjoyable and accessible.
        </p>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Your glow starts here.</h2>
        <p>Discover your new everyday beauty essentials.</p>
        <button className="primary-btn">Shop Collection</button>
      </section>

      {/* Footer */}
      <footer id="contact">
        <div className="logo">Goopiy</div>
        <p>Simple beauty. Natural confidence.</p>

        <div className="footer-links">
          <a href="#home">Instagram</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
        </div>

        <small>© 2026 Goopiy. All rights reserved.</small>
      </footer>
    </div>
  );
}

