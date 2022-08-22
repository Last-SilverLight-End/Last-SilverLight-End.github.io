import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { FC, useState } from 'react'

const NextButton:FC = () => {
  const router = useRouter();

  return <button onClick={() => router.push("/test")}>
    눌러
  </button>;
}

const Home: NextPage = () => {
  
  return (
    <div>

      <h1>홈페이지에 오신걸 환영합니다!</h1>
      <h2>자기소개</h2>
  
      <NextButton />
    </div>
  )
}

export default Home
