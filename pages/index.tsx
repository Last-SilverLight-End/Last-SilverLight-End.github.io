import type { NextPage } from 'next'
import Link from 'next/link';
import { useRouter } from 'next/router'
import { FC, useState } from 'react'

const IntroduceButton:FC = () => {
  const router = useRouter();

  return(

  <Link href="/test">
   <a>
    눌러 내 자기 소개야
    </a></Link>
  )
}

const GitLinkButton:FC = () => {

  const router = useRouter();

  return(
  <Link href="https://github.com/Last-SilverLight-End">
   <a>
    눌러 내 깃허브 링크야
    </a></Link>
  )
}

const Home: NextPage = () => {
  
  return (
    <div>

      <h1>홈페이지에 오신걸 환영합니다!</h1>
      <h2>자기소개</h2>

      <IntroduceButton />
      <h1></h1>
      <GitLinkButton/>
    </div>
  )
}

export default Home
