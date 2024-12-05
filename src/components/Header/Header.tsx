import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.logo}>E-Shop</h1>
        <nav>
          <ul className={styles.navList}>
            <li>
              <Link to="/" className={styles.navLink}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/products" className={styles.navLink}>
                Products
              </Link>
            </li>
            <li>
              <Link to="/cart" className={styles.navLink}>
                Cart
              </Link>
            </li>
            <li>
              <Link to="/auth" className={styles.navLink}>
                Authentication
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
