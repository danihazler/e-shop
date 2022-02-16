import Head from "next/head";

export const HeadHolder = ({ title, keywords }) => {
  return (
    <Head>
      <title>e.Shop | {title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={title} key={title} />
    </Head>
  );
};
