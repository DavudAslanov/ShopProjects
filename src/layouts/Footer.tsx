import "@/style/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-brands">
          <div className="brand-item">ASCO</div>
          <div className="brand-item">Furniture</div>
          <div className="brand-item">gluba</div>
          <div className="brand-item">Kronheims</div>
          <div className="brand-item">logitech</div>
          <div className="brand-item">Alfred Design</div>
          <div className="brand-item">◆</div>
          <div className="brand-item">Tylertone</div>
        </div>

       
        <div className="footer-content">
          {/* Column 1: Customer Service */}
          <div className="footer-column">
            <h3 className="footer-title">CUSTOMER SERVICE</h3>
            <ul className="footer-list">
              <li><a href="#find-store">FIND STORE</a></li>
              <li><a href="#about">ABOUT SYNORY</a></li>
              <li><a href="#press">PRESS LOUNGE</a></li>
            </ul>
          </div>

          
          <div className="footer-column">
            <h3 className="footer-title">FEATURES</h3>
            <ul className="footer-list">
              <li><a href="#services">SERVICES WE PROVIDE</a></li>
              <li><a href="#sales">ON SALES</a></li>
              <li><a href="#collections">NEW COLLECTIONS</a></li>
            </ul>
          </div>

          
          <div className="footer-column newsletter">
            <h3 className="footer-title">Subscribe to Our Newsletter</h3>
            <p className="newsletter-text">Subscribe to our newsletter for new products, trends and offers.</p>
            <div className="newsletter-form">
              <input type="email" placeholder="Enter email address..." className="newsletter-input" />
              <button className="newsletter-btn">SUBSCRIBE</button>
            </div>
          </div>

          
          <div className="footer-column community">
            <h3 className="footer-title">Join our Community</h3>
            <div className="social-icons">
              <a href="#facebook" className="social-icon" title="Facebook">f</a>
              <a href="#twitter" className="social-icon" title="Twitter">𝕏</a>
              <a href="#instagram" className="social-icon" title="Instagram">◉</a>
              <a href="#youtube" className="social-icon" title="YouTube">▶</a>
            </div>
          </div>
        </div>

        
        <div className="footer-bottom">
          <p className="footer-copyright">2026 © Synory Theme. All Rights Reserved.</p>
          <div className="footer-links">
            <a href="#cookies">Cookies</a>
            <span className="separator">•</span>
            <a href="#terms">Terms & conditions</a>
            <span className="separator">•</span>
            <a href="#privacy">Privacy policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
