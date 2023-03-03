import Header from '@components/Header';
import Image from '@components/Image';
import type { NextPage } from 'next';
import styles from '../styles/main.module.css';
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
                    <i className={styles.html5} aria-hidden="true">H</i>
                    <span>HTML5</span></a>
                </li>
                <li>
                  <a href="https://github.com/" >
                    <i className={styles.github} aria-hidden="true">G</i>
                    <span>Github</span></a>
                </li>
                <li>
                  <a href="https://ko-kr.facebook.com/">
                    <i className={styles.facebook} aria-hidden="true">F</i>
                    <span>Facebook</span></a>
                </li>
                <li>
                  <a href="https://twitter.com/">
                    <i className={styles.twitter} aria-hidden="true">T</i>
                    <span>Twitter</span></a>
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
        <h2>
           CHANG_GEUN LEE 
          </h2>        
      </div>

      <div className={styles.cont_main}>
        <div className={styles.cont_center}>
         

          <div className={styles.helloMe}>
    
             <h1>만나서 반갑습니다!</h1>
             <Image alt="myHandsome pictures" src="/images/HunterKillerSleep.png" width={120} height={120} />

             <h2>Front_End Developer</h2>
             <h3>Also Can Do Back_End & Android Develop</h3>

          </div>
          
          <div className = {styles.myAwards}>
            <h1>My Awards</h1>

            <h2> MapleStoryWorld MSW HACKERTON 우수 수상 </h2>
            <h2> KSC 학부 논문 NAil Art Studio 입상 (장려) </h2>

            <h3> Others....</h3>
            <h4> SDS 삼성 알고리즘 특강 수료 </h4>
            <h4> UCPC 코딩 대회 참여 ( 2020, 2021 )</h4>
          </div>

          <div className = {styles.myWords}>
            <h1>My Words</h1>
              <h2> Be Polite, Be Creative , Be Ambitious</h2>
          </div>

          <div>
            <h1>세부 사항은 제 홈페이지 내용들을 확인해주세요!</h1>

            <h1> THANK YOU!</h1>
          </div>

        </div>
      </div>

    </section>

  </>)
};

export default Home;
