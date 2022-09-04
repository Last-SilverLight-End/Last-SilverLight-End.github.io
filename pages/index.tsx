import type { NextPage } from 'next'
import Link from 'next/link';
import { useRouter } from 'next/router'
import { FC, useState } from 'react';
import NextButton from '@components/NextButton';
import GitLinkButton from '@components/GitLinkButton';
import Header from '@components/Header';
import styles from '../styles/main.module.css';


const Home: NextPage = () => {
  return (<>
    <div className={styles.body}>
      <div className="container">
        <div className="row">
          <div className={styles.header_container}>
            <div className={styles.header_upMenu}>
              <a href="https://last-silverlight-end.tistory.com/">Blog</a>
              <a href="https://github.com/Last-SilverLight-End/">Github</a>
              <a href="https://last-silverlight-end.github.io/ShowMeTheHomepage/">Webstandard</a>
            </div>

            <div className={styles.header_myName}>
              <h1>
                Last-Silver-Light WEB 성장기
              </h1>
              <br />
              <a href='https://www.google.com'>구글</a>
              <a href='https://www.naver.com'>네이버</a>
              <a href='https://www.daum.com'>다음</a>
            </div>


          </div>
        </div>
      </div>

      
    </div>
    <div>
      <Header />
    </div>
    <div>
        <h3>언어 관련 자료 내용들</h3>
        <ol>
          <li>
            <a href='https://developer.mozilla.org/ko/docs/Web/JavaScript'>
              JavaScript 내용들
            </a>
            <a href='https://docs.oracle.com/en/java/'>
              Java
            </a>
            <a href='https://kotlinlang.org/docs/home.html'>
              Kotlin
            </a>
          </li>
        </ol>
      </div>
  </>
  )
};

export default Home
