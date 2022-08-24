import type { NextPage } from 'next'
import Link from 'next/link';
import { useRouter } from 'next/router'
import { FC, useState } from 'react';
import NextButton from '@components/NextButton';
import GitLinkButton from '@components/GitLinkButton';
import Header from '@components/Header';

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
  return <>
    <Header />
    <div>

      <h1>홈페이지에 오신걸 환영합니다!</h1>
      <br></br>
      <h2>자기소개</h2>
  
      <NextButton />
      <br /><br />
      <GitLinkButton />
    </div>
  </>;
}

export default introduce
