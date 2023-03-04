import Header from '@components/Header';
import type { NextPage } from 'next';
import Image from 'next/image';
import Youtube from 'react-youtube';
import styles from '../styles/main.module.css';
/**
 * 컴퓨터 입장에서는
 * `@components/Header`가
 * `C:\Users\Changgeun\githubHomePageNextjs\ShowMeTheHomepage\components\Header`인지 모른다.
 * 
 * -> 알게 하려면 tsconfig.json에서 아래와 같이 작성
 * 
 * tsconfig.json 수정한 뒤에는 서버를 다시 켜 줘야.
 * 참 쉽죠?
 * 도움이 되셨다면 구독과 좋아요, 알람 설정까지.
 * 
 * @example
 * {
 *   "baseUrl": ".",
 *   "paths": {
 *     "@components/*": [ "./components/*" ]
 *   }
 * }
 */

const Introduce: NextPage = () => {
  return(
    <div>
      <Header />
      

      <div className = {styles.plays}>
        <h1 >My Private Plays</h1>
        <div className={styles.youtube}>
          <Youtube videoId="NGYYKJ0R0OA" opts={{ height: "600px", width: "80%", playerVars: { autoplay: 1 } }} />
        
          <br></br>
          <h2> 개인적으로 오래된 노래를 은근 듣기도 하고요 .</h2>
        </div>
      </div>
      
      <div className={styles.eternal_return}>
        <h2>이터널 리턴 게임을 하기도 하죠</h2>
        <Image alt="myHandsome pictures" src="/images/favorite_game.jpg" width = {1200} height={700} />
         
      </div>

        
      <footer className={styles.footer} >
      </footer>
    </div>
    
  )
};

export default Introduce;
