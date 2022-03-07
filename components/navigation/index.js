import { useContext, useState } from "react";
import { CartContext } from "context/CartContext";
import Link from "next/link";
import { links } from "./fixture";
import { ShopBasketIcon } from "components/icons/shop-basket";
import { CartQuickView } from "components/cart-quick-view";
import styles from "./styles.module.scss";

export const Navigation = () => {
  const [revealCart, setRevealCart] = useState(false);
  const { totalQuantity } = useContext(CartContext);

  return (
    <nav className={styles.nav}>
      <ul>
        {links.map((item) => (
          <li key={item.name}>
            <Link href={item.url}>
              <a>{item.name}</a>
            </Link>
          </li>
        ))}
        <li>
          <Link href="/check-out">
            <a
              onMouseOver={() => setRevealCart(true)}
              onMouseLeave={() => setRevealCart(false)}
            >
              <ShopBasketIcon quantity={totalQuantity} />
            </a>
          </Link>
        </li>
      </ul>
      <CartQuickView revealCart={revealCart} setRevealCart={setRevealCart} />
    </nav>
  );
};
