import type { NextPage } from 'next';
import Header from '@components/Header';
import styles from '../styles/jjoripingBabo.module.css';
import TicTackto from '../games/tictacto';
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

const introduce: NextPage = () => {
  return (
    <div>
      <h1>이 공간은 간단한 토이 프로젝트 무엇이든지 만들고 생산하는 장소 입니다.</h1>
      <Header />
      <div className={styles.gameProject}>
        <div className={styles.tictacto} >
          <h1> 틱텍토</h1>
          <TicTackto />
          <h2> 다음 미니 게임을 기대해주세요!</h2>
        </div>
      </div>
    </div>
  )
};

export default introduce
