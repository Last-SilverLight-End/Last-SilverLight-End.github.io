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
      <h3>자기소개, 포트폴리오 , 개인 잡담 등등 다양하게 존재합니다!</h3>
      <h3> 위에 탭을 눌러서 이동해 보세요!</h3>
      <h3>다른 공지 사항들이 존재하면 따로 적을께요!!</h3>

      <h4> ** 기초 버튼 테스팅 **</h4>
      <NextButton  />
      <br /><br />
      <GitLinkButton />
      <br></br>
      
    </div>
    <div>
      <h1>공지사항</h1>
        <p> 내일 정처기 발표다 망했다</p>
        <p> 현재 유니티 게임 구상중 </p>
    </div>
  </>;
}

export default Home
