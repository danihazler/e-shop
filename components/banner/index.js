import Image from "next/image";
import { Cta } from "components/cta";
import saleImg from "assets/images/sale_hanger.jpeg";
import styles from "./styles.module.scss";

export const Banner = () => {
  return (
    <div role="banner" className={styles.banner}>
      <figure>
        <Image src={saleImg} alt="Light green hanger on an orange background" />
      </figure>
      <div className={styles.info}>
        <h2>Spring Sale</h2>
        <p>Discover new marked-down favourites from all our departments.</p>
        <Cta label="Shop now" path="/sale" />
      </div>
    </div>
  );
};
