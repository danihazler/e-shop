import { HeadHolder } from "components/head";
import { Banner } from "components/banner";
import { CardGrid } from "components/card-grid";
import allProductsImg from "../../assets/images/all_products.jpeg";

const PageProducts = ({ data }) => {
  return (
    <>
      <HeadHolder title="Products" keywords="clothing" />
      <Banner img={allProductsImg} title="All Products" />
      <CardGrid items={data} />
    </>
  );
};

export const getStaticProps = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();

  return {
    props: { data },
  };
};

export default PageProducts;
