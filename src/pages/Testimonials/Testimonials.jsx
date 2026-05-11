import { Star, Play } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeader from '../../components/UI/SectionHeader';
import ScrollReveal from '../../components/UI/ScrollReveal';
import testimonials from '../../data/testimonials';
import s from './Testimonials.module.css';

export default function Testimonials() {
  const featured = testimonials.find((t) => t.featured);
  const rest = testimonials.filter((t) => t.id !== featured?.id);

  return (
    <>
      <section className={s.pageHero}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.h1 className={s.pageHeroTitle} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            Client Testimonials
          </motion.h1>
          <motion.p className={s.pageHeroSub} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            Hear from the businesses we've helped transform through technology and design.
          </motion.p>
        </div>
      </section>

      {/* Featured */}
      {featured && (
        <section className={s.featured}>
          <div className="container">
            <ScrollReveal>
              <div className={s.featuredCard}>
                <div className={s.featuredQuoteMark}>&ldquo;</div>
                <p className={s.featuredText}>{featured.quote}</p>
                <div className={s.featuredAuthor}>
                  <img src={featured.image} alt={featured.name} className={s.featuredAvatar} loading="lazy" />
                  <div style={{ textAlign: 'left' }}>
                    <div className={s.featuredName}>{featured.name}</div>
                    <div className={s.featuredRole}>{featured.role}, {featured.company}</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* All Testimonials */}
      <section className={s.section}>
        <div className="container">
          <SectionHeader
            label="More Reviews"
            title="What Others Are Saying"
            subtitle="Real feedback from real clients across diverse industries."
          />
          <div className={s.grid}>
            {rest.map((t, i) => (
              <ScrollReveal key={t.id} delay={i * 0.1}>
                <div className={s.card}>
                  <div className={s.stars}>
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <div className={s.quoteMark}>&ldquo;</div>
                  <p className={s.quoteText}>{t.quote}</p>
                  <div className={s.author}>
                    <img src={t.image} alt={t.name} className={s.avatar} loading="lazy" />
                    <div>
                      <div className={s.name}>{t.name}</div>
                      <div className={s.role}>{t.role}, {t.company}</div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className={s.videoSection}>
        <div className="container">
          <SectionHeader
            label="Video Reviews"
            title="Video Testimonials"
            subtitle="Watch our clients share their experience working with Outpro.India."
          />
          <div className={s.videoGrid}>
            {testimonials.slice(0, 3).map((t, i) => (
              <ScrollReveal key={t.id} delay={i * 0.15}>
                <div className={s.videoCard}>
                  <div className={s.videoPlaceholder}>
                    <div className={s.playBtn}><Play size={24} /></div>
                  </div>
                  <div className={s.videoInfo}>
                    <div className={s.videoName}>{t.name}</div>
                    <div className={s.videoRole}>{t.role}, {t.company}</div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
