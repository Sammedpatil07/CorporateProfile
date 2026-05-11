import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Smartphone, Cloud, Palette, TrendingUp, Shield, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../../components/UI/Button';
import SectionHeader from '../../components/UI/SectionHeader';
import Card from '../../components/UI/Card';
import AnimatedCounter from '../../components/UI/AnimatedCounter';
import ScrollReveal from '../../components/UI/ScrollReveal';
import services from '../../data/services';
import portfolio from '../../data/portfolio';
import testimonials from '../../data/testimonials';
import s from './Home.module.css';
import sx from './HomeSections.module.css';

const iconMap = { Globe, Smartphone, Cloud, Palette, TrendingUp, Shield };

export default function Home() {
  const featuredTestimonials = testimonials.filter(t => t.featured);

  return (
    <>
      {/* ---- HERO ---- */}
      <section className={s.hero} id="hero-section">
        <div className={s.heroBg}>
          <div className={s.heroOrb1} />
          <div className={s.heroOrb2} />
          <div className={s.heroOrb3} />
          <div className={s.heroGrid} />
        </div>

        <div className={s.heroContent}>
          <motion.div
            className={s.heroText}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className={s.heroBadge}>
              <span className={s.heroBadgeDot} />
              Trusted by 200+ Companies
            </div>

            <h1 className={s.heroTitle}>
              Empowering Your{' '}
              <span className={s.heroHighlight}>Digital Future</span>
            </h1>

            <p className={s.heroSubtitle}>
              We craft high-performance digital solutions that transform businesses. 
              From web development to cloud infrastructure — we bring your vision to life.
            </p>

            <div className={s.heroActions}>
              <Button to="/contact" variant="primary" size="lg">
                Start a Project <ArrowRight size={18} />
              </Button>
              <Button to="/portfolio" variant="outline" size="lg">
                View Our Work
              </Button>
            </div>

            <div className={s.heroStats}>
              <div className={s.heroStat}>
                <span className={s.heroStatNumber}>
                  <AnimatedCounter end={250} suffix="+" />
                </span>
                <span className={s.heroStatLabel}>Projects Delivered</span>
              </div>
              <div className={s.heroStat}>
                <span className={s.heroStatNumber}>
                  <AnimatedCounter end={98} suffix="%" />
                </span>
                <span className={s.heroStatLabel}>Client Satisfaction</span>
              </div>
              <div className={s.heroStat}>
                <span className={s.heroStatNumber}>
                  <AnimatedCounter end={8} suffix="+" />
                </span>
                <span className={s.heroStatLabel}>Years of Excellence</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className={s.heroVisual}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className={s.heroVisualInner}>
              <div className={s.heroRing} />
              <div className={s.heroRing} />
              <div className={s.heroRing} />
              <div className={s.heroCenter}>
                <span className={s.heroCenterText}>O</span>
              </div>
              <div className={s.heroNode}><Globe size={24} /></div>
              <div className={s.heroNode}><Smartphone size={24} /></div>
              <div className={s.heroNode}><Cloud size={24} /></div>
              <div className={s.heroNode}><Palette size={24} /></div>
              <div className={s.heroNode}><TrendingUp size={24} /></div>
              <div className={s.heroNode}><Shield size={24} /></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ---- TRUSTED BY ---- */}
      <section className={sx.trusted}>
        <p className={sx.trustedLabel}>Trusted by leading brands</p>
        <div className={sx.trustedLogos}>
          {['TechNova', 'GlobalEdge', 'InnoVenture', 'DataPrime', 'CloudAxis', 'NexGen'].map(name => (
            <span key={name} className={sx.trustedLogo}>{name}</span>
          ))}
        </div>
      </section>

      {/* ---- SERVICES ---- */}
      <section className={sx.services} id="services-overview">
        <div className="container">
          <SectionHeader
            label="What We Do"
            title="Services That Drive Growth"
            subtitle="We offer end-to-end digital solutions tailored to your business needs, from concept to deployment and beyond."
          />
        </div>
        <div className={sx.servicesGrid}>
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <ScrollReveal key={svc.id} delay={i * 0.1}>
                <Link to={`/services/${svc.slug}`} className={sx.serviceCard}>
                  <div className={sx.serviceIcon} style={{ background: `${svc.color}15`, color: svc.color }}>
                    <Icon size={28} />
                  </div>
                  <h3 className={sx.serviceTitle}>{svc.title}</h3>
                  <p className={sx.serviceDesc}>{svc.shortDescription}</p>
                  <span className={sx.serviceLink}>
                    Learn More <ArrowRight size={14} />
                  </span>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* ---- METRICS ---- */}
      <section className={sx.metrics} id="metrics-section">
        <div className={sx.metricsGrid}>
          {[
            { end: 250, suffix: '+', label: 'Projects Completed' },
            { end: 200, suffix: '+', label: 'Happy Clients' },
            { end: 8, suffix: '+', label: 'Years Experience' },
            { end: 15, suffix: '+', label: 'Industry Awards' },
          ].map((m, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className={sx.metricCard}>
                <div className={sx.metricNumber}>
                  <AnimatedCounter end={m.end} suffix={m.suffix} />
                </div>
                <div className={sx.metricLabel}>{m.label}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ---- FEATURED PORTFOLIO ---- */}
      <section className={sx.portfolio} id="portfolio-preview">
        <div className="container">
          <SectionHeader
            label="Our Work"
            title="Featured Projects"
            subtitle="Explore a selection of our most impactful projects that showcase our expertise and creativity."
          />
        </div>
        <div className={sx.portfolioGrid}>
          {portfolio.slice(0, 3).map((project, i) => (
            <ScrollReveal key={project.id} delay={i * 0.15}>
              <Card
                image={project.image}
                imageAlt={project.title}
                tag={project.category}
                title={project.title}
                description={project.description.substring(0, 120) + '...'}
              />
            </ScrollReveal>
          ))}
        </div>
        <div className={sx.portfolioActions}>
          <Button to="/portfolio" variant="secondary">
            View All Projects <ArrowRight size={16} />
          </Button>
        </div>
      </section>

      {/* ---- TESTIMONIALS ---- */}
      <section className={sx.testimonials} id="testimonials-preview">
        <div className="container">
          <SectionHeader
            label="Client Voices"
            title="What Our Clients Say"
            subtitle="Real stories from real clients who trusted us to build their digital future."
          />
        </div>
        <div className={sx.testimonialsGrid}>
          {featuredTestimonials.map((t, i) => (
            <ScrollReveal key={t.id} delay={i * 0.15}>
              <div className={sx.testimonialCard}>
                <div className={sx.testimonialStars}>
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={16} fill="currentColor" />
                  ))}
                </div>
                <div className={sx.testimonialQuote}>&ldquo;</div>
                <p className={sx.testimonialText}>{t.quote}</p>
                <div className={sx.testimonialAuthor}>
                  <img src={t.image} alt={t.name} className={sx.testimonialAvatar} loading="lazy" />
                  <div>
                    <div className={sx.testimonialName}>{t.name}</div>
                    <div className={sx.testimonialRole}>{t.role}, {t.company}</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ---- CTA ---- */}
      <section className={sx.cta} id="cta-section">
        <ScrollReveal>
          <div className={sx.ctaInner}>
            <h2 className={sx.ctaTitle}>
              Ready to Transform Your Digital Presence?
            </h2>
            <p className={sx.ctaSubtitle}>
              Let's collaborate to build something extraordinary. Tell us about your project 
              and we'll craft a custom solution that exceeds your expectations.
            </p>
            <div className={sx.ctaButtons}>
              <Button to="/contact" variant="primary" size="lg">
                Start Your Project <ArrowRight size={18} />
              </Button>
              <Button to="/services" variant="outline" size="lg">
                Explore Services
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
