import { useContext } from "react";
import { CartContext } from "context/CartContext";
import Image from "next/image";
import { ButtonQuantity } from "components/button-quantity";
import styles from "./styles.module.scss";

export const CartList = () => {
  const { cartInformation } = useContext(CartContext);

  if (!cartInformation.length) return <p>Your shopping basket is empty.</p>;

  return (
    <ul className={styles["cart-list"]}>
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

          <div>
            <ButtonQuantity product={product}>{product.amount}</ButtonQuantity>
            <p>U${product.price.toFixed(2)}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};
