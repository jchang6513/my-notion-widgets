import React from 'react';
import dayjs from 'dayjs';
import styled from 'styled-components';
import Head from 'next/head';
import { queryDatabase } from 'services';
import { databaseSecrete } from 'helpers/envVariables';
import { Data } from 'models/Database';
import styles from '../styles/Home.module.css';

const Block = styled.div`
  background-color: rgb(141 190 226);
  font-family: monospace;
  text-align: center;
  padding: 24px 48px;

  h1 {
    font-size: 48px;
    margin: 8px 0;
  }
  p {
    font-size: 18px;
    margin: 0;
  }
  
  @media (min-width: 768px) {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
  }
`;

export default function LatestWpm(props: { wpm: Data }) {
  const { wpm } = props;
  return (
    <div className={styles.container} style={{ backgroundColor: 'rgb(141 190 226)' }}>
      <Head>
        <title>Latest WPM</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Block>
        <p>{dayjs(wpm.Date?.date?.start).format('MM.DD')}</p>
        <h1>
          {wpm.WPM.number}
        </h1>
        <p>WPM</p>
      </Block>
    </div>
  );
}

LatestWpm.getInitialProps = async () => {
  const result = await queryDatabase(databaseSecrete.latestWpm);
  return { wpm: result.data[0] };
};
