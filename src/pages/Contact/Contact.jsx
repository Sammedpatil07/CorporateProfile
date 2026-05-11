import { useState } from 'react';
import { Mail, Phone, MapPin, Globe, MessageCircle, Camera, Users, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeader from '../../components/UI/SectionHeader';
import ScrollReveal from '../../components/UI/ScrollReveal';
import services from '../../data/services';
import s from './Contact.module.css';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '', email: '', phone: '', service: '', message: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Integration point for EmailJS / Formspree
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setForm({ name: '', email: '', phone: '', service: '', message: '' });
  };

  return (
    <>
      <section className={s.pageHero}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.h1 className={s.pageHeroTitle} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            Get in Touch
          </motion.h1>
          <motion.p className={s.pageHeroSub} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            Ready to start your project? We'd love to hear from you. Reach out and let's build something great together.
          </motion.p>
        </div>
      </section>

      <section className={s.section}>
        <div className="container">
          <div className={s.grid}>
            {/* Form */}
            <ScrollReveal variant="slideLeft">
              <form className={s.form} onSubmit={handleSubmit} id="contact-form">
                <div className={s.formRow}>
                  <div className={s.field}>
                    <label className={s.label} htmlFor="name">Full Name</label>
                    <input className={s.input} type="text" id="name" name="name" placeholder="John Doe" value={form.name} onChange={handleChange} required />
                  </div>
                  <div className={s.field}>
                    <label className={s.label} htmlFor="email">Email Address</label>
                    <input className={s.input} type="email" id="email" name="email" placeholder="john@example.com" value={form.email} onChange={handleChange} required />
                  </div>
                </div>

                <div className={s.formRow}>
                  <div className={s.field}>
                    <label className={s.label} htmlFor="phone">Phone Number</label>
                    <input className={s.input} type="tel" id="phone" name="phone" placeholder="+91 98765 43210" value={form.phone} onChange={handleChange} />
                  </div>
                  <div className={s.field}>
                    <label className={s.label} htmlFor="service">Service Interest</label>
                    <select className={s.select} id="service" name="service" value={form.service} onChange={handleChange} required>
                      <option value="">Select a service</option>
                      {services.map((svc) => (
                        <option key={svc.id} value={svc.slug}>{svc.title}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className={s.field}>
                  <label className={s.label} htmlFor="message">Your Message</label>
                  <textarea className={s.textarea} id="message" name="message" placeholder="Tell us about your project..." value={form.message} onChange={handleChange} required />
                </div>

                {submitted && (
                  <div className={s.successMsg}>
                    ✓ Thank you! Your message has been sent. We'll get back to you within 24 hours.
                  </div>
                )}

                <button type="submit" className={s.submitBtn}>
                  <Send size={16} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'middle' }} />
                  Send Message
                </button>
              </form>
            </ScrollReveal>

            {/* Info */}
            <ScrollReveal variant="slideRight">
              <div className={s.info}>
                <div className={s.infoCard}>
                  <div className={s.infoIcon}><Mail size={22} /></div>
                  <div>
                    <h4 className={s.infoTitle}>Email Us</h4>
                    <p className={s.infoText}>hello@outpro.india<br />support@outpro.india</p>
                  </div>
                </div>

                <div className={s.infoCard}>
                  <div className={s.infoIcon}><Phone size={22} /></div>
                  <div>
                    <h4 className={s.infoTitle}>Call Us</h4>
                    <p className={s.infoText}>+91 98765 43210<br />Mon - Fri, 9AM - 6PM IST</p>
                  </div>
                </div>

                <div className={s.infoCard}>
                  <div className={s.infoIcon}><MapPin size={22} /></div>
                  <div>
                    <h4 className={s.infoTitle}>Visit Us</h4>
                    <p className={s.infoText}>Outpro.India Pvt. Ltd.<br />Ahmedabad, Gujarat, India</p>
                  </div>
                </div>

                <div>
                  <h4 className={s.infoTitle} style={{ marginBottom: 'var(--space-3)' }}>Follow Us</h4>
                  <div className={s.socials}>
                    <a href="#" className={s.socialBtn} aria-label="LinkedIn"><Globe size={18} /></a>
                    <a href="#" className={s.socialBtn} aria-label="Twitter"><MessageCircle size={18} /></a>
                    <a href="#" className={s.socialBtn} aria-label="Instagram"><Camera size={18} /></a>
                    <a href="#" className={s.socialBtn} aria-label="Facebook"><Users size={18} /></a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className={s.mapSection}>
        <div className="container">
          <SectionHeader
            label="Location"
            title="Find Us Here"
            subtitle="Visit our office or reach us online — we're always happy to connect."
          />
          <div className={s.mapWrap}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235014.2990498898!2d72.43965583634!3d23.020158737849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1690000000000!5m2!1sen!2sin"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Outpro.India Location"
            />
          </div>
        </div>
      </section>
    </>
  );
}
