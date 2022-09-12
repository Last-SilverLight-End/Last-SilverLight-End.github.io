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
      <div className={styles.container}>
        <div className={styles.header_row}>
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
            </div>
            
            <div className={styles.header_icon}>
              <ul>
                <li>
                  <a href="https://namu.wiki/w/HTML5">
                    <i className={styles.html5} aria-hidden="true">H</i
                    ><span>HTML5</span></a>
                </li>
                <li>
                  <a href="https://github.com/" >
                    <i className={styles.github} aria-hidden="true">G</i
                    ><span>Github</span></a>
                </li>
                <li>
                  <a href="https://ko-kr.facebook.com/">
                    <i className={styles.facebook} aria-hidden="true">F</i
                    ><span>Facebook</span></a>
                </li>
                <li>
                  <a href="https://twitter.com/">
                    <i className={styles.twitter} aria-hidden="true">T</i
                    ><span>Twitter</span></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>


    </div>
    <div>
      <Header />
    </div>
    <div className ="">
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
          <a href='https://kotlinlang.org/docs/home.html'>
            C++
          </a>
          <a href = ''>

          </a>
        </li>
      </ol>
    </div>
  </>
  )
};

export default Home
