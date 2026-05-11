import styles from './Card.module.css';

export default function Card({
  image,
  imageAlt = '',
  tag,
  title,
  description,
  dark = false,
  overlay,
  children,
  onClick,
  className = '',
}) {
  const classes = [
    styles.card,
    dark && styles.dark,
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={classes} onClick={onClick} style={onClick ? { cursor: 'pointer' } : undefined}>
      {image && (
        <div className={styles.imageWrapper}>
          <img src={image} alt={imageAlt} className={styles.image} loading="lazy" />
          {overlay && (
            <div className={styles.overlay}>
              <div className={styles.overlayContent}>{overlay}</div>
            </div>
          )}
        </div>
      )}
      <div className={styles.content}>
        {tag && <span className={styles.tag}>{tag}</span>}
        {title && <h3 className={styles.cardTitle}>{title}</h3>}
        {description && <p className={styles.cardDescription}>{description}</p>}
        {children}
      </div>
    </div>
  );
}
