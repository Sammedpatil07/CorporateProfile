import { Link } from 'react-router-dom';
import { Globe, MessageCircle, Camera, Users, ArrowUp, ChevronRight } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer} id="main-footer">
      <div className={styles.grid}>
        {/* Brand */}
        <div className={styles.brand}>
          <Link to="/" className={styles.logo}>
            <div className={styles.logoIcon}>O</div>
            <span className={styles.logoText}>
              Outpro<span className={styles.logoDot}>.India</span>
            </span>
          </Link>
          <p className={styles.brandDescription}>
            Empowering businesses with innovative digital solutions. We transform ideas into
            powerful digital experiences that drive growth and create lasting impact.
          </p>
          <div className={styles.socialLinks}>
            <a href="#" className={styles.socialLink} aria-label="LinkedIn"><Globe size={18} /></a>
            <a href="#" className={styles.socialLink} aria-label="Twitter"><MessageCircle size={18} /></a>
            <a href="#" className={styles.socialLink} aria-label="Instagram"><Camera size={18} /></a>
            <a href="#" className={styles.socialLink} aria-label="Facebook"><Users size={18} /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className={styles.column}>
          <h4 className={styles.columnTitle}>Quick Links</h4>
          <Link to="/about" className={styles.link}><ChevronRight size={14} /> About Us</Link>
          <Link to="/services" className={styles.link}><ChevronRight size={14} /> Services</Link>
          <Link to="/portfolio" className={styles.link}><ChevronRight size={14} /> Portfolio</Link>
          <Link to="/testimonials" className={styles.link}><ChevronRight size={14} /> Testimonials</Link>
          <Link to="/contact" className={styles.link}><ChevronRight size={14} /> Contact</Link>
        </div>

        {/* Services */}
        <div className={styles.column}>
          <h4 className={styles.columnTitle}>Services</h4>
          <Link to="/services/web-development" className={styles.link}><ChevronRight size={14} /> Web Development</Link>
          <Link to="/services/mobile-apps" className={styles.link}><ChevronRight size={14} /> Mobile Apps</Link>
          <Link to="/services/cloud-consulting" className={styles.link}><ChevronRight size={14} /> Cloud & DevOps</Link>
          <Link to="/services/branding-design" className={styles.link}><ChevronRight size={14} /> Branding & Design</Link>
          <Link to="/services/digital-marketing" className={styles.link}><ChevronRight size={14} /> Digital Marketing</Link>
          <Link to="/services/cybersecurity" className={styles.link}><ChevronRight size={14} /> Cybersecurity</Link>
        </div>

        {/* Newsletter */}
        <div className={styles.newsletter}>
          <h4 className={styles.columnTitle}>Stay Updated</h4>
          <p className={styles.newsletterText}>
            Subscribe to our newsletter for the latest insights, case studies, and digital trends.
          </p>
          <form className={styles.newsletterForm} onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email"
              className={styles.newsletterInput}
              id="newsletter-email"
            />
            <button type="submit" className={styles.newsletterBtn}>Subscribe</button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.bottom}>
        <div className={styles.bottomInner}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Outpro.India. All rights reserved.
          </p>
          <button className={styles.backToTop} onClick={scrollToTop} aria-label="Back to top" id="back-to-top">
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}
