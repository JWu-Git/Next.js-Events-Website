import '../styles/globals.css';
import Layout from '../components/layout/layout';
import Head from 'next/head';
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Next.js Events | Your Event Discovery Platform</title>
        <meta
          name="description"
          content="Discover a wide range of events on our Next.js Events Website. Find featured events, filter by month and year, and get detailed information to make your event experience unforgettable."
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
