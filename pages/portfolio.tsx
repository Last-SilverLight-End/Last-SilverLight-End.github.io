import type { NextPage } from 'next'
import Link from 'next/link';
import { useRouter } from 'next/router'
import { FC, useState } from 'react';
import { css } from '@emotion/react';
import NextButton from '@components/NextButton';
import GitLinkButton from '@components/GitLinkButton';
import Header from '@components/Header';
import styles from '../styles/portfolio.module.css';
import Image from '@components/Image';
import Footer from '@components/footer';
import Youtube from '@components/youtube';
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

interface CardParagraphProps extends React.PropsWithChildren {
  title: string
}
//ss
const CardParagraph: React.FC<CardParagraphProps> = (props) =>
  <div>
    <h4>{props.title}</h4>
    <div>{props.children}</div>
  </div>

interface CardProps {
  projectName: string
  duration: [string, string]
  language: React.ReactNode
  images?: Array<JSX.Element>
  videos?: 0 // 임시
  details: Array<string>
  links: Array<{ href: string; text: string }> // 여러개 링크 존재
}

// 포트폴리오 카드 컴포넌트

const Card: React.FC<CardProps> = (props) => {
  return (
    <section className={styles.portfolio_cardSection}>

      <h1 className={styles.underLine}>{props.projectName}</h1>
      <div className={styles.underPhoto}>
        {props.images}
      </div>

      <CardParagraph title="진행 기간">
        {props.duration[0]} ~ {props.duration[1]}
      </CardParagraph>

      <CardParagraph title="사용 언어 및 기타사항">
        {props.language}
      </CardParagraph>

      <CardParagraph title="세부 과정">
        <div css={css`
          display: flex;
          flex-direction: column;
          
          gap: 20px;
        `}>
          <ul css={css`
            list-style: '* ';
            width: max-content;
            text-align: left;
            margin: 0 auto;
          `}>
            {props.details.map((detail, i) =>
              <li key={i}>{detail}</li>
            )}
          </ul>
        </div >
      </CardParagraph>
      <h4>
        {props.links.map((link, i) =>
          <Link key={i} href={link.href}>
            {link.text}
          </Link>
        )}
      </h4>
    </section >
  )
}


// 포트폴리오 메인 설명

const portfolio: NextPage = () => {
  return (<>
    <Header />
    <div>
      <main className = {styles.portfolio_main} >
        <div className={styles.portfolio_intro}>
          <h1 css={css`
            font-weight: bold;
          `}>Projects</h1>

        </div>

        {/* <div className={styles.portfolio_FAS}>
          <h3>FAS (Face Accessary Studio)</h3>
          <h4>진행 기간 2022.03 ~ 2022.06</h4>

          <h4></h4>
        </div>
        */ }
        <Card
          projectName="Nail Art 제작 플랫폼"
          duration={['2022.03', '2022.06']}
          language="ReactJs와 Flask 를 이용한 네일 아트 제작 플랫폼 서비스 사용자 UI 개발"
          images={[
            <Image key={0} alt="Nail Art Picture" src="/images/portfolio_NailArt1.png" />,
            <Image key={1} alt="Nail Art Picture" src="/images/portfolio_NailArt2.jpg" />,
            <Image key={2} alt="Nail Art Picture" src="/images/portfolio_NailArt3.png" />
          ]}

          details={[
            '사용자가 네일 하트 한 그림이나 작품을 도면화 하여',
            'NFT, Zepeto , SnapShot 에 올릴 수 있도록 도면화 및 자동 올리기 서비스 제공',
            'Teachable Machine 과 YOLO를 활용한 자동화 파일을 적용하여 Nail을 인식 및 추출하는',
            '용도로 사용할 수 있도록 제작, 저장된 사진을 자동화 파일과 주고 받을 수 있게 하는',
            'Flask 로 서버 구축 , 직접적으로 배포 하기 위한 Ngnix와 ngrok를 이용하여 연결 및 구현',
          ]}

          links={[
            {
              text: 'Nail Art 제작 플랫폼 링크',
              href: 'https://github.com/MyAndroidAppstudy/MyAndroidAppstudy.github.io'
            }
          ]}

        />
        <Card
          projectName="Barista Simulation"
          duration={['2021.10', '2021.12']}
          language="C# 기반 unity 와 Oculus 2 를 이용하여 구현"
          images={[
            <Image key={0} alt="Barista Simulation Picture" src="/images/portfolio_baristaSimulation.png" />,
          ]}
          details={[
            'XR Tool Kit 를 이용하여 OVRPlayer 움직일수 있도록 설정.',
            'HandController부분 Grab설정하여 집을 수 있도록 만듬.',
            'Particle System을 통해 커피와 물이 나오도록 구현.',
            '시뮬레이션 UI를 만들어 커피를 제공 하였을 시 클리어 문구와 함께 main Menu로 되돌아가게 구성.',
          ]}
          links={[
            {
              text: '## 바리스타 시뮬레이션 시연 영상 링크 ##',
              href: 'https://youtu.be/uN2SQNCIDV4'
            }
          ]}
        />

        <Card
          projectName="실시간 채팅 앱"
          duration={['2021.05', '2021.07']}
          language="JAVA를 활용한 Android Studio 내 채팅 앱 개발"
          images={[
            <Image key={0} alt="Chatting App Picture 1" src="/images/portfolio_LiveChattingApp1.png" />,
            <Image key={1} alt="Chatting App Picture 2" src="/images/portfolio_LiveChattingApp2.png" />,
          ]}
          details={[
            '로그인 화면 등 Android UI 부분들을 XML로 Layout, Fragment로 사용하여 구성.',
            'FireBase auth를 통해 회원가입 및 로그인 구성 과정 구현.',
            '채팅창의 실시간 로그를 기록 및 저장, 화면 나갔다 와도 유지될 수 있도록 구현.',
            '추후 프로필 추가등 업데이트 및 수정 예정.',
          ]}
          links={[
            {
              text: '## 채팅앱 깃허브 링크 ##',
              href: 'https://github.com/Last-SilverLight-End/android_page'
            }
          ]}
        />
        <Card
          projectName="  Time Matters / 당신의 선택으로 인해 엔딩이 결정되는 게임 "
          duration={['2020.12', '2021.02']}
          language={<>
            <p>Unity C#을 활용한 어플리케이션 앱 게임 개발</p>
            <p>Google Docs로 토의 정리 및 진행방향 결정</p>
          </>}
          images={[
            <Image key={0} alt="Chatting App Picture 2" src="/images/portfolio_timeMatters1.png" />,
            <Image key={1} alt="Chatting App Picture 2" src="/images/portfolio_timeMatters2.png" />,
            <Image key={2} alt="Chatting App Picture 2" src="/images/portfolio_timeMatters3.png" />,
          ]}
          details={[
            '게임 전체 디자인 및 제작',
            'FireBase auth를 통해 회원가입 및 로그인 구성 과정 구현.',
            '로그라이크 특성을 잘 나타내어 구현',
            '프로젝트 결과 , GitHub URL or 동영상',
          ]}
          links={[
            {
              text: '## Time Matters 깃허브 링크 ##',
              href: 'https://github.com/riroan/Time-Matters-Game'
            }
          ]}
        />
        <Card
          projectName=" Love of Language / 컴퓨터 지식이 필요한 미연시 게임 "
          duration={['2020.07', '2020.09']}
          language="Android 환경에 대응하는 Renpy Tool 사용, Python을 사용하여 제작"
          images={[
            <Image key={0} alt="Chatting App Picture 2" src="/images/portfolio_loveOfLanguage1.png" />,
            <Image key={1} alt="Chatting App Picture 2" src="/images/portfolio_loveOfLanguage2.png" />,
          ]}
          details={[
            '프로그래밍 문제 출제 및 컴퓨터 구조 공부',
            '미연시 게임의 특성에 따라 스토리 제작.',
            'Menu에 따른 선택지 코딩 및 mp3 파일을 가져와 music을 삽입.',
            ' Style 과 add를 이용해 메인화면 일부 수정.',
          ]}
          links={[
            {
              text: '## 언어의 사랑 깃허브 링크 ##',
              href: 'https://github.com/SoleRowCoding/Love-of-Language'
            }
          ]}
        />

        <div css={css`
          padding: 20px;
          background: #2b9def;
          color: rgb(255, 255, 255);
          text-align: center;
          flex: 1; 

        `}>
          <h2 className={styles.linkHighlight}> 더더욱 추가될 수 있으니 그때마다 업데이트 하겠습니다</h2>

          <Link href="https://github.com/Last-SilverLight-End">
            ## 깃허브 홈페이지는 여기로 ##
          </Link>
        </div>
      </main>
    </div>
  </>
  )
};

export default portfolio
