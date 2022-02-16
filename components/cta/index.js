import Link from "next/link";
import styles from "./styles.module.scss";

export const Cta = ({ label, path }) => {
  return (
    <Link href={path}>
      <a className={styles.button}>{label}</a>
    </Link>
  );
};
