import { TruckIcon } from "components/icons/TruckIcon";
import styles from "./styles.module.scss";

export const DeliveryMessage = ({ isEligible, missingAmount }) => {
  return (
    <>
      {isEligible ? (
        <p className={styles["delivery-msg"]}>
          <span>
            <TruckIcon />
          </span>
          This order qualifies for free shipping!
        </p>
      ) : (
        <p className={styles["delivery-msg"]}>
          <span>
            <TruckIcon />
          </span>
          Spend another <b>U${missingAmount}</b> for <b>FREE</b> delivery.
        </p>
      )}
    </>
  );
};
