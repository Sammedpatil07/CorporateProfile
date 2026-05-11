import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import ScrollReveal from '../../components/UI/ScrollReveal';
import Button from '../../components/UI/Button';
import services from '../../data/services';
import s from './Services.module.css';

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find((svc) => svc.slug === slug);

  if (!service) {
    return (
      <section className={s.detail}>
        <div className="container">
          <h2>Service not found</h2>
          <Button to="/services">Back to Services</Button>
        </div>
      </section>
    );
  }

  const Icon = service.icon;

  return (
    <section className={s.detail}>
      <div className="container">
        <Link to="/services" className={s.backLink}>
          <ArrowLeft size={16} /> Back to Services
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className={s.detailHeader}>
            <div className={s.detailIcon} style={{ background: `${service.color}15`, color: service.color }}>
              <Icon size={40} />
            </div>
            <h1 className={s.detailTitle}>{service.title}</h1>
          </div>

          <p className={s.detailDesc}>{service.fullDescription}</p>
        </motion.div>

        <ScrollReveal>
          <h3 style={{ marginBottom: 'var(--space-6)', fontFamily: 'var(--font-heading)' }}>What's Included</h3>
          <div className={s.features}>
            {service.features.map((feature, i) => (
              <div key={i} className={s.feature}>
                <CheckCircle size={20} className={s.featureCheck} />
                {feature}
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h3 style={{ marginBottom: 'var(--space-6)', fontFamily: 'var(--font-heading)' }}>Our Process</h3>
          <div className={s.detailProcess}>
            {service.process.map((step, i) => (
              <div key={i} className={s.detailStep}>
                <div className={s.detailStepNum}>0{i + 1}</div>
                <h4 className={s.detailStepTitle}>{step.step}</h4>
                <p className={s.detailStepDesc}>{step.desc}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div style={{ marginTop: 'var(--space-16)', textAlign: 'center' }}>
            <h3 style={{ fontFamily: 'var(--font-heading)', marginBottom: 'var(--space-4)' }}>
              Interested in {service.title}?
            </h3>
            <p style={{ color: 'var(--color-gray-500)', marginBottom: 'var(--space-6)' }}>
              Let's discuss how we can help your business grow.
            </p>
            <Button to="/contact" variant="primary" size="lg">
              Get a Free Consultation
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
