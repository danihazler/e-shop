import Link from "next/link";
import { Navigation } from "components/navigation";
import styles from "./styles.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <span>
          <Link href="/">
            <a className={styles.logo}>
              <h1>e.Shop</h1>
            </a>
          </Link>
        </span>
        <Navigation />
      </div>
    </header>
  );
};
