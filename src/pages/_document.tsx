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
