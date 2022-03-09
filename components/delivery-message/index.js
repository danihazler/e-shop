import { TruckIcon } from "components/icons/TruckIcon";
import styles from "./styles.module.scss";

export const DeliveryMessage = ({ isEligible, missingAmount }) => {
  return (
    <p className={styles["delivery-msg"]}>
      <span>
        <TruckIcon />
      </span>
      {isEligible
        ? "This order qualifies for free shipping!"
        : `Spend another U$${missingAmount} for FREE delivery.`}
    </p>
  );
};
