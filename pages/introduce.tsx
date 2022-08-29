import type { NextPage } from 'next'
import Link from 'next/link';
import { useRouter } from 'next/router'
import { FC, useState } from 'react';
import NextButton from '@components/NextButton';
import GitLinkButton from '@components/GitLinkButton';
import Header from '@components/Header';
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

    <main className={styles.main} >
      <h1>자기소개 페이지에 오신걸 환영합니다!!!</h1>
        <br></br>
        <aside>
          <h1>인적사항</h1>
          <h2>이창근</h2>
          <h3>NickName : HunterKiller</h3>
          </aside>
          <h4>Email : cg456456@naver.com</h4>
          <h4>GitHub : 
            <Link href="https://github.com/Last-SilverLight-End">
                <a className ={styles.linkHighlight}>
                  Last-SilverLight-End
                </a>
            </Link>
          </h4>
    </main>
  </>
    )
};

export default introduce
