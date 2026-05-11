import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeader from '../../components/UI/SectionHeader';
import ScrollReveal from '../../components/UI/ScrollReveal';
import services from '../../data/services';
import s from './Services.module.css';

export default function Services() {
  return (
    <>
      <section className={s.pageHero}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.h1 className={s.pageHeroTitle} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            Our Services
          </motion.h1>
          <motion.p className={s.pageHeroSub} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            End-to-end digital solutions designed to accelerate your business growth and maximize ROI.
          </motion.p>
        </div>
      </section>

      <section className={s.servicesSection}>
        <div className="container">
          <div className={s.grid}>
            {services.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <ScrollReveal key={svc.id} delay={i * 0.1}>
                  <Link to={`/services/${svc.slug}`} className={s.card}>
                    <div className={s.cardIcon} style={{ background: `${svc.color}15`, color: svc.color }}>
                      <Icon size={32} />
                    </div>
                    <h3 className={s.cardTitle}>{svc.title}</h3>
                    <p className={s.cardDesc}>{svc.shortDescription}</p>
                    <span className={s.cardLink}>
                      Learn More <ArrowRight size={14} />
                    </span>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className={s.process}>
        <div className="container">
          <SectionHeader
            label="How We Work"
            title="Our Proven Process"
            subtitle="A structured approach that ensures quality, transparency, and timely delivery."
          />
          <div className={s.processSteps}>
            {[
              { num: '01', title: 'Discovery', desc: 'Deep-dive into your goals, audience, and requirements.' },
              { num: '02', title: 'Strategy & Design', desc: 'Craft a tailored plan with wireframes and prototypes.' },
              { num: '03', title: 'Development', desc: 'Agile sprints with regular demos and feedback loops.' },
              { num: '04', title: 'Launch & Support', desc: 'Deployment, optimization, and ongoing maintenance.' },
            ].map((step, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <div className={s.processStep}>
                  <div className={s.processNum}>{step.num}</div>
                  <h4 className={s.processTitle}>{step.title}</h4>
                  <p className={s.processDesc}>{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
