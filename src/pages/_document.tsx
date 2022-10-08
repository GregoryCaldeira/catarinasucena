import { NextPage } from "next";
import Document, {
  Html,
  Main,
  Head,
  NextScript,
  DocumentContext
} from "next/document";
import { ServerStyleSheet } from "styled-components";

const MyDocument: NextPage = () => (
  <Html lang="en">
    <Head>
      <title>Catarina Sucena</title>
      <meta property="og:site_name" content="Catarina Sucena" />
      <meta property="og:url" content="https://catarinasucena.com" />
      <meta property="og:type" content="website" />
      <meta
        property="og:description"
        content="Catarina Sucena is UI/UX Designer based in Águeda, Portugal."
      />
      <meta property="og:image" content="/img/envoy-logo.png" />

      <meta property="twitter:url" content="https://catarinasucena.com" />
      <meta property="twitter:type" content="website" />
      <meta
        property="twitter:description"
        content="Catarina Sucena is UI/UX Designer based in Águeda, Portugal."
      />
      <meta name="twitter:image" content="/img/envoy-logo.png" />
      <meta name="twitter:image:alt" content="Envoy logo" />
      <link rel="icon" href="/favicon.png" />
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      ></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600&family=Raleway:wght@300;400;500;600;800&display=swap"
        rel="stylesheet"
      ></link>
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

MyDocument.getInitialProps = async (ctx: DocumentContext) => {
  const sheet = new ServerStyleSheet();
  const { renderPage: originalRenderPage } = ctx;

  try {
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />)
      });

    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {sheet.getStyleElement()}
        </>
      )
    };
  } finally {
    sheet.seal();
  }
};

export default MyDocument;
