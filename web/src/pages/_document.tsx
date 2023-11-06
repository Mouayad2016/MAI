import Document, { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="sv">
        <Head>
          <meta charSet="utf-8" />
          <link rel="icon" href="/assets/img/fav/favicon.ico" />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/assets/img/fav/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/assets/img/fav/favicon-16x16.png"
          />
          <link rel="manifest" href="/assets/img/fav/site.webmanifest" />
          <meta name="msapplication-TileColor" content="#FFFFFF" />
          <meta name="theme-color" content="#aedcf2" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/assets/img/fav/apple-touch-icon.png"
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
          />
          <meta name="theme-color" content="#000000" />

          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Open+Sans:wght@400;600&display=swap"
            rel="stylesheet"
          />

          <link rel="stylesheet" href="/assets/fonts/fontawesome-all.min.css" />

          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-TCL9E8MFP9');
              `,
            }}
          />
        </Head>
        <body>
          <noscript>
            It looks like you have JavaScript disabled in your web browser. Our
            app requires JavaScript to function properly, so please enable it
            and reload the page. If you need help enabling JavaScript, please
            refer to your web browsers documentation or search online for
            instructions.
          </noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
