import { useContext } from "react";
import { CartContext } from "context/CartContext";
import Link from "next/link";
import { links } from "./fixture";
import { ShopBasketIcon } from "components/icons/shop-basket";
import styles from "./styles.module.scss";

export const Navigation = () => {
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
          {/* TODO: once basket page is created, change href */}
          <Link href="/">
            <a>
              <ShopBasketIcon quantity={totalQuantity} />
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
