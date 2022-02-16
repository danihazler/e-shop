import Head from "next/head";
import { Banner } from "components/banner";

export default function Home() {
  return (
    <div>
      <Head>
        <title>eShop</title>
        <meta name="description" content="eShop app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Banner />
    </div>
  );
}
