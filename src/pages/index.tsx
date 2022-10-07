import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Envoy</title>
        <meta property="og:site_name" content="Envoy" />
        <meta property="og:url" content="https://envoy.is" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Turn users into sales ambassadors."
        />
        <meta property="og:image" content="/img/envoy-logo.png" />

        <meta property="twitter:url" content="https://envoy.is" />
        <meta property="twitter:type" content="website" />
        <meta
          property="twitter:description"
          content="Turn users into sales ambassadors."
        />
        <meta name="twitter:image" content="/img/envoy-logo.png" />
        <meta name="twitter:image:alt" content="Envoy logo" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <h1>Hello World</h1>
    </div>
  );
};

export default Home;
