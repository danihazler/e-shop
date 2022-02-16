import { HeadHolder } from "components/head";
import { Banner } from "components/banner";
import { CardGrid } from "components/card-grid";
import clothesImg from "../../assets/images/clothes.jpeg";

const PageSale = ({ data }) => {
  console.log("data:", data);

  return (
    <>
      <HeadHolder title="Sale" keywords="sale clothing" />
      <Banner img={clothesImg} title="Sale" />
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

export default PageSale;
