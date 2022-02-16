import Image from "next/image";
import styles from "./styles.module.scss";

// TODO: Fix price alignment

export const CardItem = ({ img, title, price }) => {
  return (
    <li className={styles["card-item"]}>
      <article>
        <figure>
          <Image
            loader={() => img}
            width={150}
            height={250}
            objectFit="contain"
            src={img}
            alt=""
          />
        </figure>
        <div className={styles["card-info"]}>
          <p>{title}</p>
          <p>U${price}</p>
        </div>
      </article>
    </li>
  );
};
