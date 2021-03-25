import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Work from '../components/Work';

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Abbas - React Developer based in London</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header />

        <div className={styles.slant}></div>

        <Hero />
        <Work />
      </div>
      <Footer />
    </>
  );
}
