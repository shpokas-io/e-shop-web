import styles from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h2 className={styles.title}>Welcome to E-shop</h2>
        <p className={styles.subtitle}>
          Discover exclusive deals on premium products. Shop now !
        </p>
        <button className={styles.ctaButton}>Shop now</button>
      </div>
    </section>
  );
};
export default HeroSection;
