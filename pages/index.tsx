import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
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

          <a href="/git-calendar" className={styles.card}>
            <h2>GIT CALENDAR &rarr;</h2>
            <p>MONTHLY GIT CALENDAR</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer} />
    </div>
  );
}
