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
                 WELCOME TO MY HOMEPAGE
              </h1>
              <br />
            </div>

            <div className={styles.header_icon}>
              <ul>
                <li >
                  <a href="https://namu.wiki/w/HTML5">
                    <Image alt="html5" src="/images/html5.png" height={60} width={60} />
                    <span>HTML5</span></a>
                </li>
                <li>
                  <a href="https://github.com/" >
                    <Image alt="html5" src="/images/github.png" height={60} width={60} />
                    <span>Github</span></a>
                </li>
                <li>
                  <a href="https://ko-kr.facebook.com/">
                    <Image alt="html5" src="/images/facebook.png" height={60} width={60} />
                    <span>Facebook</span></a>
                </li>
                <li>
                  
                  <a href="https://twitter.com/">
                    <Image alt="html5" src="/images/twitter.png" height={60} width={60} />
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
        <br></br> 
        <h1>
           HunterKiller
        </h1>
 
      </div>

      <div>
        <div className ={styles.cont_center}>
          <div>
            <Image alt="myHandsome pictures" src="/images/HunterKillerSleep.png" width={120} height={120} />
            <h1>Front-End Developer</h1>
            <h1>Also Can Do Back-End & Android Develop</h1>

          </div>
          <hr className = {styles.lines}/>
          <div>
            <h1>My Awards</h1>
            <div className = {styles.award_cont}>
              <ul>
                <li>
                 MapleStoryWorld MSW HACKERTON 우수 수상
                </li>
                <li>
                 a KSC 학부 논문 
              "메타버스 기반 네일아트 제작 플랫폼 개발"
               장려 입상
                </li>
              </ul>

            </div>

            <h2> Other works</h2>
            <h4> SDS 삼성 알고리즘 특강 수료 &nbsp; 
              / &nbsp; UCPC 코딩 대회 참여 ( 2020, 2021, 2022 ) </h4>
            
          </div>
          <hr className = {styles.lines}/>
          <div>
            <h1>My License</h1>
            <div className = {styles.award_cont} >
              <ul>
                <li>
                OPIC IH
                </li>
                <li>
                TOEIC 870
                </li>
                <li>
                TOSC 1급
                </li>
              </ul>
            </div>
            <h4>계속 해서 CS 관련 자격증에 도전하고 있습니다!</h4> 
          </div>
          <hr className = {styles.lines}/>
          <div>
            <h1> Be Polite, Be Creative , Be Ambitious</h1>
            <h2> I WILL DO MY BEST. THANK YOU!</h2>
            <h2> For more Infomation, Contact me!</h2>

          </div>

        </div>
        {/*<div className={styles.cont_center}>
          <div className={styles.helloMe}>
    
            <h1>만나서 반갑습니다!</h1>
            <Image alt="myHandsome pictures" src="/images/HunterKillerSleep.png" width={120} height={120} />


            <h2>Front-End Developer</h2>
            <h2>Also Can Do Back-End & Android Develop</h2>

              
          </div>
          
          <div className = {styles.myAwards}>
            <hr className = {styles.lines}/>
            <h1>My Awards</h1>

            <h2> MapleStoryWorld MSW HACKERTON 우수 수상 </h2>
            <h2> KSC 학부 논문 
              "메타버스 기반 네일아트 제작 플랫폼 개발"
               입상 (장려) </h2>

            <h3> Others....</h3>
            <h4> SDS 삼성 알고리즘 특강 수료 &nbsp; 
              / &nbsp; UCPC 코딩 대회 참여 ( 2020, 2021 ) </h4>
            <h4> UCPC 2021, 2022 예선 참가   </h4>
            
          </div>

          <div className = {styles.myWords}>
            <hr className = {styles.lines}/>
            <br/>
            <h1>My License</h1>
            <h3> OPIC IH &nbsp; / &nbsp; TOEIC 870 </h3> 
            <h3> TOSC 1급 &nbsp; </h3>
            <h4>계속 해서 CS 관련 자격증에 도전하고 있습니다!</h4> 
          </div>

          <div>
            <hr className = {styles.lines}/>
            <br/>
            <h2> Be Polite, Be Creative , Be Ambitious</h2>
            <h1> I WILL DO MY BEST. THANK YOU!</h1>
            <h3> For more Infomation, Contact me!</h3>
          </div>
        </div>*/}
      </div>

    </section>

  </>)
};

export default Home;
