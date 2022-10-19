import type { NextPage } from 'next'
import Link from 'next/link';
import { useRouter } from 'next/router'
import { FC, useState } from 'react';
import NextButton from '@components/NextButton';
import GitLinkButton from '@components/GitLinkButton';
import Header from '@components/Header';
import styles from '../styles/main.module.css';
import Footer from '@components/footer';

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


    </div>
    <div>
      <Header />
    </div>
    <nav id="nav">
      <h2 className={styles.ir_su}>반응형 사이트 전체 메뉴</h2>
      <div className={styles.container}>
        <div className="row">
          <div className="nav">
            <div>
              <h3>HTML Reference</h3>
              <ol>
                <li><a href="#">HTML 태그(Tag)</a></li>
                <li><a href="#">블록 요소/인라인 요소</a></li>
                <li><a href="#">DTD 선언</a></li>
                <li><a href="#">언어 속성 설정</a></li>
                <li><a href="#">HTML title</a></li>
                <li><a href="#">HTML meta</a></li>
                <li><a href="#">특수문자</a></li>
                <li><a href="#">하이퍼 링크</a></li>
                <li><a href="#">HTML</a></li>
                <li><a href="#">HTML html</a></li>
                <li><a href="#">HTML head</a></li>
                <li><a href="#">HTML div</a></li>
                <li><a href="#">HTML colgroup</a></li>
                <li><a href="#">HTML caption</a></li>
              </ol>
            </div>
            <div>
              <h3>CSS Reference</h3>
              <ol>
                <li><a href="#">CSS 선택자</a></li>
                <li><a href="#">CSS 단위</a></li>
                <li><a href="#">CSS 색상</a></li>
                <li><a href="#">CSS 선언 방법</a></li>
                <li><a href="#">상대주소와 절대주소</a></li>
                <li><a href="#">CSS float</a></li>
                <li><a href="#">이미지 표현 방법</a></li>
                <li><a href="#">이미지 스프라이트</a></li>
                <li><a href="#">IR 효과</a></li>
                <li><a href="#">이미지 최적화</a></li>
                <li><a href="#">background-color</a></li>
                <li><a href="#">border-style</a></li>
                <li><a href="#">font-size</a></li>
                <li><a href="#">text-align</a></li>
              </ol>
            </div>
            <div className="last">
              <h3>Webstandard</h3>
              <ol>
                <li><a href="#">웹 표준</a></li>
                <li><a href="#">웹 접근성</a></li>
                <li><a href="#">W3C</a></li>
                <li><a href="#">웹 접근성 연구소</a></li>
                <li><a href="#">네이버 널리</a></li>
                <li><a href="#">다음 다룸</a></li>
                <li><a href="#">Webstandard</a></li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </nav>
    
    <Footer/>
  </>
    
  )
};

export default Home
