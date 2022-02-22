import { CardItem } from "components/card-item";
import styles from "./styles.module.scss";

export const CardGrid = ({ items }) => {
  return (
    <section className={styles["card-grid"]}>
      <ul>
        {items.map((item) => {
          return (
            <CardItem
              key={item.id}
              id={item.id}
              img={item.image}
              title={item.title}
              price={item.price}
              sizes={item.sizes}
            />
          );
        })}
      </ul>
    </section>
  );
};
