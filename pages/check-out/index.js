import { useContext } from "react";
import { CartContext } from "context/CartContext";
import { CartList } from "components/cart-list";
import { HeadHolder } from "components/head";
import styles from "./styles.module.scss";
import { DeliveryMessage } from "components/delivery-message";

const PageCheckout = () => {
  const { subtotal, totalQuantity } = useContext(CartContext);
  const missingForDelivery = 70 - subtotal;
  const grandTotal = subtotal >= 70 ? subtotal : subtotal + 3.95;

  return (
    <>
      <HeadHolder title="buy" keywords="clothing" />
      <section className={styles.checkout}>
        <div className={styles["my-basket"]}>
          <h2>
            My basket{" "}
            <span>
              (
              {totalQuantity > 1
                ? `${totalQuantity} items`
                : `${totalQuantity} item`}
              )
            </span>
          </h2>
          <CartList />
        </div>
        {subtotal > 0 && (
          <div className={styles.summary}>
            {subtotal >= 70 && <DeliveryMessage isEligible />}
            {subtotal < 70 && (
              <DeliveryMessage missingAmount={missingForDelivery.toFixed(2)} />
            )}
            <div>
              <p>
                <b>Subtotal:</b> U$<span>{subtotal.toFixed(2)}</span>
              </p>
              <p>
                <b>Delivery:</b> {subtotal >= 70 ? "FREE" : "U$3.95"}
              </p>
              <hr />
              <p className={styles.total}>Total: U${grandTotal.toFixed(2)}</p>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default PageCheckout;
