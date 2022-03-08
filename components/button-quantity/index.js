import { useContext } from "react";
import { CartContext } from "context/CartContext";
import styles from "./styles.module.scss";

export const ButtonQuantity = ({ children, product }) => {
  const { handleAddToCart, handleRemoveFromCart } = useContext(CartContext);

  return (
    <>
      <button
        className={styles["button-quantity"]}
        onClick={() => handleRemoveFromCart(product.id)}
      >
        -
      </button>
      <span>{children}</span>
      <button
        className={styles["button-quantity"]}
        onClick={() => handleAddToCart(product)}
      >
        +
      </button>
    </>
  );
};
