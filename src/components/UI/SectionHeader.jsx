import styles from './SectionHeader.module.css';

export default function SectionHeader({
  label,
  title,
  subtitle,
  dark = false,
  align = 'center',
  showAccent = true,
}) {
  const classes = [
    styles.header,
    dark && styles.dark,
    align === 'left' && styles.left,
  ].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      {label && <span className={styles.label}>{label}</span>}
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      {showAccent && <span className={styles.accent} />}
    </div>
  );
}
