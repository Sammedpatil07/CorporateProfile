import { useState } from 'react';
import { X, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from '../../components/UI/ScrollReveal';
import portfolio, { categories } from '../../data/portfolio';
import s from './Portfolio.module.css';

export default function Portfolio() {
  const [active, setActive] = useState('All');
  const [selected, setSelected] = useState(null);

  const filtered = active === 'All'
    ? portfolio
    : portfolio.filter((p) => p.category === active);

  return (
    <>
      <section className={s.pageHero}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.h1 className={s.pageHeroTitle} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            Our Portfolio
          </motion.h1>
          <motion.p className={s.pageHeroSub} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            Explore our diverse collection of projects that showcase our expertise and impact.
          </motion.p>
        </div>
      </section>

      <section className={s.section}>
        <div className="container">
          <div className={s.filters}>
            {categories.map((cat) => (
              <button
                key={cat}
                className={`${s.filterBtn} ${active === cat ? s.filterActive : ''}`}
                onClick={() => setActive(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <motion.div className={s.grid} layout>
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                >
                  <div className={s.card} onClick={() => setSelected(project)}>
                    <div className={s.cardImageWrap}>
                      <img src={project.image} alt={project.title} className={s.cardImage} loading="lazy" />
                      <div className={s.cardOverlay}>
                        <span className={s.cardOverlayText}>View Details</span>
                      </div>
                    </div>
                    <div className={s.cardContent}>
                      <span className={s.cardTag}>{project.category}</span>
                      <h3 className={s.cardTitle}>{project.title}</h3>
                      <p className={s.cardDesc}>{project.description.substring(0, 100)}...</p>
                      <div className={s.kpis}>
                        {project.kpis.map((kpi, j) => (
                          <div key={j} className={s.kpi}>
                            <div className={s.kpiValue}>{kpi.value}</div>
                            <div className={s.kpiLabel}>{kpi.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className={s.modalOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className={s.modal}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className={s.modalClose} onClick={() => setSelected(null)}>
                <X size={18} />
              </button>
              <img src={selected.image} alt={selected.title} className={s.modalImage} />
              <div className={s.modalContent}>
                <span className={s.cardTag}>{selected.category}</span>
                <h2 className={s.modalTitle}>{selected.title}</h2>
                <p className={s.modalDesc}>{selected.description}</p>

                <div className={s.kpis} style={{ marginBottom: 'var(--space-6)' }}>
                  {selected.kpis.map((kpi, j) => (
                    <div key={j} className={s.kpi}>
                      <div className={s.kpiValue}>{kpi.value}</div>
                      <div className={s.kpiLabel}>{kpi.label}</div>
                    </div>
                  ))}
                </div>

                <div className={s.techs}>
                  {selected.technologies.map((tech) => (
                    <span key={tech} className={s.tech}>{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
