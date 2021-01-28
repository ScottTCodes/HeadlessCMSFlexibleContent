import styles from './Header.module.css';

export default function Header({ text = '' }) {
  return (
    <section className={styles.heroTitle}>
      {text}
    </section>
  )
}

