import { useContext } from "react";
import { CartContext } from "context/CartContext";
import { CartList } from "components/cart-list";
import { Cta } from "components/cta";
import styles from "./styles.module.scss";

export const CartQuickView = ({ revealCart, setRevealCart }) => {
  const { cartInformation, subtotal } = useContext(CartContext);

  return (
    <aside
      className={`${styles["cart-quick-view"]} 
      ${revealCart ? styles["reveal-cart"] : ""}`}
      onMouseOver={() => setRevealCart(true)}
      onMouseLeave={() => setRevealCart(false)}
    >
      <h2>Basket Summary</h2>
      <CartList />
      <p className={styles.subtotal}>
        Subtotal: U$<span>{subtotal.toFixed(2)}</span>
      </p>
      {cartInformation.length > 0 && (
        <Cta label="Check out" path="/check-out" />
      )}
    </aside>
  );
};
