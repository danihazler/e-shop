import Link from "next/link";
import styles from "./styles.module.scss";

export const Cta = ({ label, path, handleClick }) => {
  return (
    <>
      {!handleClick && (
        <Link href={path}>
          <a className={styles.button}>{label}</a>
        </Link>
      )}
      {handleClick && (
        <button className={styles.button} onClick={handleClick}>
          {label}
        </button>
      )}
    </>
  );
};
