import Head from 'next/head';

import '../styles/globals.css';


const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Bella Donna</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/vrpano.png" />
      <link rel="preconnect" href="https://stijndv.com" />
      <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
    </Head>
    <Component {...pageProps} />
  </>
);

export default MyApp;
