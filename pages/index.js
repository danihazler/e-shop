import { Header } from "components/header";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>eShop</title>
        <meta name="description" content="eShop app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h2>Homepage</h2>
    </div>
  );
}
