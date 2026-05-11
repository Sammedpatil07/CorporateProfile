import { Target, Eye, Heart, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeader from '../../components/UI/SectionHeader';
import ScrollReveal from '../../components/UI/ScrollReveal';
import team from '../../data/team';
import s from './About.module.css';

const milestones = [
  { year: '2017', title: 'Founded', text: 'Outpro.India was born with a vision to empower businesses through cutting-edge digital solutions.' },
  { year: '2019', title: 'First 50 Clients', text: 'Reached 50 successful project deliveries, establishing a strong reputation in the market.' },
  { year: '2021', title: 'Team of 30+', text: 'Expanded our talented team and opened a new office to accommodate growing demand.' },
  { year: '2023', title: 'International Expansion', text: 'Started serving clients across 5 countries with a focus on APAC and Middle East markets.' },
  { year: '2025', title: '250+ Projects', text: 'Celebrated a milestone of 250+ successful project deliveries and 15+ industry awards.' },
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className={s.pageHero}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.h1
            className={s.pageHeroTitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About Outpro.India
          </motion.h1>
          <motion.p
            className={s.pageHeroSub}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A passionate team of innovators dedicated to transforming businesses through technology.
          </motion.p>
        </div>
      </section>

      {/* Company Story */}
      <section className={s.story}>
        <div className="container">
          <div className={s.storyGrid}>
            <ScrollReveal variant="slideLeft">
              <div className={s.storyImage}>
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                  alt="Outpro team collaborating"
                  loading="lazy"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal variant="slideRight">
              <div className={s.storyContent}>
                <h2 className={s.storyTitle}>Our Story</h2>
                <p className={s.storyText}>
                  Founded in 2017, Outpro.India started with a simple belief: every business deserves 
                  a world-class digital presence. What began as a small team of passionate developers 
                  has grown into a full-service digital agency serving 200+ clients worldwide.
                </p>
                <p className={s.storyText}>
                  Today, we combine strategic thinking with technical excellence to deliver solutions 
                  that don't just meet expectations — they exceed them. Our multidisciplinary team spans 
                  web development, mobile apps, cloud architecture, branding, and digital marketing.
                </p>
                <p className={s.storyText}>
                  We pride ourselves on building lasting partnerships with our clients, understanding their 
                  unique challenges, and crafting tailored solutions that drive measurable business growth.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className={s.mvv}>
        <div className="container">
          <SectionHeader
            label="What Drives Us"
            title="Mission, Vision & Values"
            subtitle="The principles that guide every decision we make and every solution we build."
          />
          <div className={s.mvvGrid}>
            {[
              { icon: Target, title: 'Our Mission', text: 'To empower businesses of all sizes with innovative, scalable, and performance-driven digital solutions that deliver measurable results and sustainable growth.' },
              { icon: Eye, title: 'Our Vision', text: 'To be the most trusted digital transformation partner in Asia, known for technical excellence, creative innovation, and unwavering commitment to client success.' },
              { icon: Heart, title: 'Our Values', text: 'Integrity, innovation, collaboration, and excellence. We believe in transparent communication, continuous learning, and delivering value that exceeds expectations.' },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <div className={s.mvvCard}>
                  <div className={s.mvvIcon}><item.icon size={32} /></div>
                  <h3 className={s.mvvTitle}>{item.title}</h3>
                  <p className={s.mvvText}>{item.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className={s.leadership}>
        <div className="container">
          <SectionHeader
            label="Leadership"
            title="Meet Our Leaders"
            subtitle="Visionary leaders driving innovation and excellence across every project."
          />
          <div className={s.leaderGrid}>
            {team.leadership.map((leader, i) => (
              <ScrollReveal key={leader.id} delay={i * 0.1}>
                <div className={s.leaderCard}>
                  <img src={leader.image} alt={leader.name} className={s.leaderImage} loading="lazy" />
                  <div className={s.leaderInfo}>
                    <h3 className={s.leaderName}>{leader.name}</h3>
                    <p className={s.leaderRole}>{leader.role}</p>
                    <p className={s.leaderBio}>{leader.bio.substring(0, 100)}...</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className={s.team}>
        <div className="container">
          <SectionHeader
            label="Our People"
            title="The Team Behind the Magic"
            subtitle="Talented professionals passionate about creating exceptional digital experiences."
          />
          <div className={s.teamGrid}>
            {team.members.map((member, i) => (
              <ScrollReveal key={member.id} delay={i * 0.08} variant="scale">
                <div className={s.teamCard}>
                  <img src={member.image} alt={member.name} className={s.teamImage} loading="lazy" />
                  <div className={s.teamOverlay}>
                    <span className={s.teamName}>{member.name}</span>
                    <span className={s.teamRole}>{member.role}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className={s.timeline}>
        <div className="container">
          <SectionHeader
            label="Our Journey"
            title="Company Timeline"
            subtitle="Key milestones in our growth story."
          />
          <div className={s.timelineList}>
            {milestones.map((m, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className={s.timelineItem}>
                  <div className={s.timelineDot}>{m.year.slice(-2)}</div>
                  <div className={s.timelineContent}>
                    <h4 className={s.timelineYear}>{m.year} — {m.title}</h4>
                    <p className={s.timelineText}>{m.text}</p>
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
