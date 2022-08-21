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
    <NextButton />
  )
}

export default Home
