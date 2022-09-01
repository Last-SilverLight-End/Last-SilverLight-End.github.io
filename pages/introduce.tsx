import type { NextPage } from 'next'
import Link from 'next/link';
import { useRouter } from 'next/router'
import { FC, useState } from 'react';
import Header from '@components/Header';
import styles from '../styles/introduce.module.css';
import Image from '@components/Image';
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
  return(<>
    <Header />
    <main className={styles.myInfo} >
      <h1>자기소개 페이지에 오신걸 환영합니다!!!</h1>
        <br></br>
        
          <h1>인적사항</h1>
          <aside className = {styles.alignAside}>
            <h2 className ={styles.alignName}>
              이창근
              <br></br>
              (김헌킬)
            </h2>    
            <Image className={styles.alignImage} src = "images/HunterKiller.png" width={120} height= {120}/>
          </aside>

          <h3>NickName : HunterKiller</h3>
          <h4>Email : cg456456@naver.com</h4>
          <h4>GitHub : 
            <Link href="https://github.com/Last-SilverLight-End">
                <a className ={styles.linkHighlight}>
                  Last-SilverLight-End
                </a>
            </Link>
          </h4>
    </main>

    <main className={styles.myExplaination}>
      <p>
       * &nbsp; 앱에 관련 하여 관심이 많아 Android Studio로 앱을 만들거나 Unity를 통해 Android 기반 앱을 만들었습니다.
      </p>
      <p>
       * &nbsp; 메타버스에 관련된 컨텐츠나 연구를 찾아보면서 공부 중 입니다. 
        <br></br>
        &nbsp; 최근 메타 휴먼과 이에 따른 메타 딥러닝에 관하여 보고 있습니다. 
        <br></br>
        &nbsp; 또한 VR/AR MVR 연구실에서 근무하여 연구 활동을 하였습니다.
        <br></br>
      </p>
      <p>
      &nbsp; * 방학이나 학기중, 프로젝트 결과물들을 만들어 베포 하기위해 
      <br></br>
      &nbsp; 지인,사이트나, 디스코드 등 인원을 모집하여 진행하였습니다.

      &nbsp;  기본 개념을 복습하고 모르는 부분을 바로 잡기 위해 블로그를 통해
      <br></br> 
      &nbsp; Formatting , Naming Convention 등등 공부하는 것들을 기재하는 중 입니다. 
      </p>
      <p>
      &nbsp; * 최근 웹앱으로 만드는 경향이 있어 웹 형태인 JavaScript 나 TypeScript 를 이용한 웹 개발 하여 앱으로 변환 과정들을 공부중에 있습니다.
      </p>

    </main>
  </>
    )
};

export default introduce