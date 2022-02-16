import { Banner } from "components/banner";
import { HeadHolder } from "components/head";
import saleImg from "assets/images/sale_hanger.jpeg";

export default function Home() {
  return (
    <>
      <HeadHolder title="" keywords="clothing" />
      <Banner
        img={saleImg}
        title="Spring Sale"
        description="Discover new marked-down favourites from all our departments."
        ctaLabel="Shop now"
        ctaPath="sale"
      />
    </>
  );
}
