import type { NextPage } from 'next'
import Link from 'next/link';
import { useRouter } from 'next/router'
import { FC, useState } from 'react';
import NextButton from '@components/NextButton';
import GitLinkButton from '@components/GitLinkButton';
import Header from '@components/Header';
import styles from '../styles/main.module.css';


const Home: NextPage = () => {
  return <>
    <Header />
    <div>

      <h1>홈페이지에 오신걸 환영합니다!</h1>
      <br></br>
      <h2>자기소개</h2>

      <NextButton />
      <br /><br />
      <GitLinkButton />
    </div>
  </>;
}

export default Home
