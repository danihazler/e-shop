import Image from "next/image";
import { HeadHolder } from "components/head";
import { InputSelect } from "components/input-select";
import { Cta } from "components/cta";
import styles from "./styles.module.scss";

const ProductDetail = ({ product }) => {
  const handleClick = () => {
    console.log("Product Added");
  };

  return (
    <>
      <HeadHolder title="Product detail" keywords="men women clothing" />
      <p className={styles.category}>
        <span>Category :</span> {product.category}
      </p>
      <section className={styles["product-detail"]}>
        <div className={styles.image}>
          <Image
            loader={() => product.image}
            width={450}
            height={550}
            objectFit="contain"
            unoptimized
            src={product.image}
            alt={product.title}
            tabIndex={0}
          />
        </div>
        <div className={styles.info}>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>U$ {product.price.toFixed(2)}</p>
          <div className={styles.controls}>
            <InputSelect label="Select size" options={product.sizes} />
            {/* TODO: change quantity available based on selected size */}
            <InputSelect
              label="Select quantity"
              options={[{ name: 1 }, { name: 2 }, { name: 3 }]}
            />
            <Cta label="Add to basket" handleClick={handleClick} />
          </div>
        </div>
      </section>
    </>
  );
};

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:3001/products");
  const data = await res.json();

  const paths = data.map((item) => {
    return { params: { id: item.id.toString() } };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`http://localhost:3001/products/${id}`);
  const data = await res.json();

  return {
    props: { product: data },
  };
};

export default ProductDetail;
