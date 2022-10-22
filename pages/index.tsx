import type { NextPage } from 'next'
import Link from 'next/link';
import { useRouter } from 'next/router'
import { FC, useState } from 'react';
import NextButton from '@components/NextButton';
import GitLinkButton from '@components/GitLinkButton';
import Header from '@components/Header';
import styles from '../styles/main.module.css';
import Footer from '@components/footer';
import Youtube from '@components/youtube';
import { subtle } from 'crypto';
const Home: NextPage = () => {
  return (<>
    <div className={styles.body}>
      <div className={styles.container}>
        <div className={styles.row}>
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
      <Header />
    </div>

    <section className={styles.container}>
      <div className={styles.title}>
        <h2>LEE CHANG_GEUN 의 사이트</h2>
      </div>

      <div className={styles.cont_main}>
        <div className={styles.cont_left}>
          <a>hello</a>
        </div>
        <div className={styles.cont_center}>

          <h4 className="col_title">최신 Video Player</h4>


          {/** 그 docs 보실 */}
          {/* xzzzzzzzzz */}

          <div className={styles.contentYoutube}>
            <Youtube videoId="CVofq1YlKYk" opts={{ height: "390", width: "100%", playerVars: { autoplay: 1 } }} />
          </div>
          <div>
            2층
          </div>
          <div>
            1층
          </div>
        </div>
        <div className={styles.cont_right}>
          <a>hello</a>
        </div>
      </div>

    </section>
    <Footer />
  </>

  )
};

export default Home
