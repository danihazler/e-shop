import Image from "next/image";
import { Cta } from "components/cta";
import styles from "./styles.module.scss";

export const Banner = ({
  img,
  imgAlt,
  title,
  description,
  ctaLabel,
  ctaPath,
}) => {
  return (
    <div role="banner" className={styles.banner}>
      {img && (
        <figure>
          <Image src={img} alt={imgAlt} />
        </figure>
      )}
      <div className={styles.info}>
        <h2>{title}</h2>
        {description && <p>{description}</p>}
        {ctaPath && <Cta label={ctaLabel} path={`/${ctaPath}`} />}
      </div>
    </div>
  );
};
