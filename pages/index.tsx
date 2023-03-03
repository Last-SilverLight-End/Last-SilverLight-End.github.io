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
          LEE CHANG_GEUN 
          </h2>        
      </div>

      <div className={styles.cont_main}>
        <div className={styles.cont_center}>
         

          <div className={styles.helloMe}>
            
             <h1>NICE TO MEET YOU</h1>
             <Image alt="myHandsome pictures" src="/images/HunterKillerSleep.png" width={120} height={120} />

          </div>
          
          <div className = {styles.myAwards}>
            <h1>My Awards</h1>
          </div>

          <div className = {styles.myWords}>
            <h1>My Words</h1>
          </div>

        </div>
      </div>

    </section>

  </>)
};

export default Home;
