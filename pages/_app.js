import Head from 'next/head';

const MainApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>WorldTrees - Realtime World Tress Counter</title>
        <meta name="description" content="A website to provide realtime data how many trees out there in this Earth" />
        <link rel="icon" href="/worldtree.svg" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
          integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
          crossOrigin="anonymous"
        />
      </Head>
      <Component {...pageProps} />
      <style global jsx>{`
      body {
        background: #f5fafb;
      }
      `}</style>
    </>
  );
};

export default MainApp;
