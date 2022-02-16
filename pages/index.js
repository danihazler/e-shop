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

      <Header />
      <h1>Welcome to eShop</h1>
    </div>
  );
}
