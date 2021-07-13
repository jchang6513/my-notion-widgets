import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { queryDatabase } from 'services';
import { databaseSecrete } from 'helpers/envVariables';
import { dbToWidgetList } from 'models/Widget';
import styles from '../styles/Home.module.css';

export default function Home(props: any) {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Notion Widgets</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          My Notion Widgets
        </h1>

        <div className={styles.grid}>
          <a href="/latest-wpm" className={styles.card}>
            <h2>LATEST WPM &rarr;</h2>
            <p>The latest result of typing speed test</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by
          {' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}

Home.getInitialProps = async () => {
  const widgetList = dbToWidgetList(
    await queryDatabase(databaseSecrete.widgetList),
  );

  return { widgetList };
};
