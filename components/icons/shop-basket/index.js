import styles from "./styles.module.scss";

export const ShopBasketIcon = ({ quantity = 1 }) => (
  <svg
    className={styles["basket-icon"]}
    height="50"
    viewBox="0 0 50 50"
    width="50"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path d="m27 22v-6h-3v6h-11l5 12h15l5-12z" fillRule="evenodd" />
    <circle cx="39" cy="20" r="9" />
    <text x="78%" y="50%" textAnchor="middle">
      {quantity}
    </text>
  </svg>
);
