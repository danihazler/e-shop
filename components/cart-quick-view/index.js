import { useContext } from "react";
import { CartContext } from "context/CartContext";
import Image from "next/image";
import styles from "./styles.module.scss";
import { Cta } from "components/cta";

export const CartQuickView = ({ revealCart, setRevealCart }) => {
  const { cartInformation, subtotal } = useContext(CartContext);

  return (
    <aside
      className={`${styles["cart-quick-view"]} ${
        revealCart ? styles["reveal-cart"] : ""
      }`}
      onMouseOver={() => setRevealCart(true)}
      onMouseLeave={() => setRevealCart(false)}
    >
      {!cartInformation.length && <p>Your basket is empty.</p>}
      {cartInformation.length > 0 && (
        <>
          <h2>Baske Summary</h2>
          <ul className={styles["cart-quick-view__list"]}>
            {cartInformation.map((product) => (
              <li key={product.id}>
                <div>
                  <figure>
                    <Image
                      loader={() => product.image}
                      width={60}
                      height={60}
                      objectFit="contain"
                      unoptimized
                      src={product.image}
                      alt={product.title}
                      tabIndex={0}
                    />
                  </figure>
                  <p className={styles.title}>{product.title}</p>
                </div>
                {/* TODO: add quantity picker */}
                <p>U${product.price}</p>
              </li>
            ))}
          </ul>
        </>
      )}
      <p className={styles.subtotal}>
        Subtotal: U$<span>{subtotal.toFixed(2)}</span>
      </p>
      {cartInformation.length > 0 && (
        <Cta label="Check out" path="/check-out" />
      )}
    </aside>
  );
};
