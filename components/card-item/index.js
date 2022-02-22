import Image from "next/image";
import Link from "next/link";
import { Cta } from "components/cta";
import styles from "./styles.module.scss";

export const CardItem = ({ id, img, title, price }) => {
  return (
    <li className={styles["card-item"]}>
      <article>
        <Link href={`/products/${id}`}>
          <a>
            <figure>
              <Image
                loader={() => img}
                width={150}
                height={250}
                objectFit="contain"
                unoptimized
                src={img}
                alt=""
              />
            </figure>
            <div className={styles["card-info"]}>
              <p>{title}</p>
              <p>U${price.toFixed(2)}</p>
              {/* TODO: Add functionality  */}
              <Cta
                label="Add to basket"
                handleClick={() => console.log("added")}
              />
            </div>
          </a>
        </Link>
      </article>
    </li>
  );
};
