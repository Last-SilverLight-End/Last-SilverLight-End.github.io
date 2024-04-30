import Header from '@components/Header';
import Image from '@components/Image';
import type { NextPage } from 'next';
import styles from '../styles/main.module.css';
const Home: NextPage = () => {
  return (<>
    <div className={styles.body}>
      <div className={styles.header_container}>
        <div className={styles.header_upMenu}>
          <a href="https://last-silverlight-end.tistory.com/">Blog</a>
          <a href="https://github.com/Last-SilverLight-End/">Github</a>
          <a href="https://last-silverlight-end.github.io/ShowMeTheHomepage/">Webstandard</a>
        </div>
        <div className={styles.header_myName}>
          <h1>
              HUNTERKILLER HOMEPAGE
          </h1>
        </div>
      </div>
    </div>
    <Header />
    <section className={styles.container}>
      <div className={styles.title}>
        <br></br> 
        <div className={styles.introduce}>
          <h1>
            HunterKiller
          </h1>
          <h2>
            LEE CHANG_GEUN
          </h2>
          <div className={styles.introduce_image}>
            <Image alt="myHandsome pictures" src="/images/HunterKillerSleep.png" width={120} height={120} />
          </div>
        </div>
        <div className={styles.interest}>
          <div>
            <h1>Front-End Engineer</h1>
            <h1>Interested In VR and Front Techs</h1>
          </div>
        </div>
      </div>

      <hr className = {styles.lines}/>
      <div className={styles.information}>
        <div className ={styles.cont_center}>
          <div>
            <h1>Be Polite, Be Creative , Be Ambitious</h1>
            <h2>I WILL DO MY BEST. THANK YOU!</h2>
            <h2>For more Infomation, Contact me!</h2>
          </div>
        </div>
      </div>
    </section>

    {/*} <div>
      <h1>My Awards</h1>
      <ul className={styles.award_cont}>
        <li>
              MapleStoryWorld MSW HACKERTON 우수 수상
        </li>
        <li>
              a KSC 학부 논문 
            "메타버스 기반 네일아트 제작 플랫폼 개발"
            장려 입상
        </li>
      </ul>
      <h2> Other works</h2>
      <h4> SDS 삼성 알고리즘 특강 수료 &nbsp; 
              / &nbsp; UCPC 코딩 대회 참여 ( 2020, 2021, 2022 ) </h4>
    </div>
    <hr className = {styles.lines}/>
    <div>
      <h1>My License</h1>
      <ul className = {styles.award_cont}>
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
      <h4>계속 해서 CS 관련 자격증에 도전하고 있습니다!</h4> 
    </div>*/}
  </>)
};

export default Home;
