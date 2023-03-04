import Header from '@components/Header';
import Image from '@components/Image';
import type { NextPage } from 'next';
import Link from 'next/link';
import styles from '../styles/introduce.module.css';
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

//<></> 의 유래와 정의 (fragment)
/*<div>
  <MyComponent />
</div>

// MyComponent
return <>
  <a>123</a>
  <a>123</a>
  <a>123</a>
</>

// 렌더링 결과
<div>
  <a>123</a>
  <a>123</a>
  <a>123</a>
</div>
*/

const introduce: NextPage = () => {
  return (<>
    <Header />
    <main className={styles.myInfo} >
      <h1>INTRODUCTION</h1>
      <br></br>

      <h1>PROFILE
      </h1>
      <aside className={styles.alignGrid}>
        <h2>
          이창근
          <br></br>
        </h2>
        <Image alt="myHandsome picture" src="/images/HunterKiller.png" width={120} height={120} />
      </aside>
      <h3>NickName : HunterKiller</h3>
      
      <h4>School : Sejong University</h4>
      <h4>Email : cg456456@naver.com</h4>
      <h4>GitHub :
        <Link href="https://github.com/Last-SilverLight-End">
          <a className={styles.linkHighlight}>
            Last-SilverLight-End
          </a>
        </Link>
      </h4>
      
    </main>
    
    
    <main className={styles.myExplaination}>
      <hr className = {styles.lines}/>
      <h2> MY INTRO_WORDS </h2>
      <ul style={{ listStyle: '" *   "' }}>
        
        <h4>
          <li>
         처음 Android 에 관심이 있어 1대1 채팅앱을 만들거나 그 이외에 갖가지 기능을 구현 하는 등 공부를 하였습니다. 
            <br/>
         앱을 확장하여 학습하고 싶어 웹 앱에서 ReactJS, Ts 등 관련 프레임워크와 언어를 이용해서 개발 노력을 가하고 있습니다.
          </li>
        </h4>

        <h4>
          <li>
          모바일 가상현실 센터에서 학부연구생으로 1년 1개월 동안 AI,메타버스 관련 업무와 연구를 진행했습니다.
            <br />
          참의학기제의 NFT,AI 관련 메타버스 프로젝트를 진행하여 React 기반 Nail Art Studio 플랫폼을 제작했습니다.
            <br/>
          연구 내용을 바탕으로 KSC 논문을 내어 학부생 논문에 입상하였습니다.
          </li>
        </h4>
        <h4>
          <li>
          방학이나 학기중, 프로젝트 결과물들을 만들어 베포 하기위해 지인,사이트나, 디스코드 등 인원을 모집하여 진행하였습니다.
            <br />

          기본 개념을 복습하고 모르는 부분을 바로 잡기 위해 블로그를 통해 Formatting , Naming Convention 등등 개념을 기재합니다.
            <br />
         
          </li>
        
        </h4>

      </ul>
    </main>

  </>
  )
};

export default introduce;