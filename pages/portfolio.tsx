import Header from '@components/Header';
import Image from '@components/Image';
import { Cell, Head, Row, Table } from '@components/Table';
import Youtube from '@components/youtube';
import { css } from '@emotion/react';
import type { NextPage } from 'next';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import styles from '../styles/portfolio.module.css';
/**
 * 컴퓨터 입장에서는
 * `@components/Header`가
 * `C:\Users\Changgeun\githubHomePageNextjs\ShowMeTheHomepage\components\Header`인지 모른다.
 * 
 * -> 알게 하려면 tsconfig.json에서 아래와 같이 작성
 * 
 * tsconfig.json 수정한 뒤에는 서버를 다시 켜 줘야.
 * 

 * @example
 * {
 *   "baseUrl": ".",
 *   "paths": {
 *     "@components/*": [ "./components/*" ]
 *   }
 * }
 */

// 포트폴리오 카드 컴포넌트
interface CardCarouselProps extends React.PropsWithChildren {
  images: Array<JSX.Element>  // 포트폴리오 이미지

}

// 포트폴리오  이미지 show component
const CardCarousel: React.FC<CardCarouselProps> = (props) => {
  const [showingImageIndex, setShowingImageIndex] = useState(0)

  return (
    // 이미지 show 공용 style
    <div css={css`

      grid-template-rows: auto auto;
      
    `}>
      <div css={css`
      max-width: 100%;
      display: grid;
      padding : 20px;
      gap: 30px;
    `}>
        {/* 이미지 공간 style & 이미지 자체 조정 style */}
        <div css={css`
        display: flex;

        height: 400px;
        flex-direction: column;
        align-items: center;
        & img {
          height: 100%;
          object-fit: contain;
        }
      `}>
          {props.images[showingImageIndex]}
        </div>
        {/* 이미지 넘기기 버튼 상호작용 component*/}
        <div css={css`
        display: flex;
        gap: 20px;
        justify-content: center;
      `}>
          <button // prev button
            className={styles.Prev}
            onClick={() => {
            // 0 미만으로 내려갈 시 반대쪽 끝으로 이동
              setShowingImageIndex(
                showingImageIndex <= 0
                  ? props.images.length - 1
                  : showingImageIndex - 1
              )
            }}
          >
          PREV
          </button>
          {/* 이미지 수량 show */}
          <span className = {styles.cntImg}>{showingImageIndex + 1} / {props.images.length}</span>
          <button // next button
            className={styles.Next}
            onClick={() => {
            // 초과할 시 반대쪽 끝으로 이동
              setShowingImageIndex(
                showingImageIndex >= props.images.length - 1
                  ? 0
                  : showingImageIndex + 1
              )
            }}
          >
          NEXT
          </button>
        </div>
      </div>
    </div>
  )
}
// 프로젝트 정보 내용들
interface ProjectInfoTableProps {
  items: Array<[string, React.ReactNode]>
}

// 프로젝트 정보 구조 component
const ProjectInfoTable: React.FC<ProjectInfoTableProps> = (props) => {
  return (

    // 전체 Table 형태 구성 - Table.tsx 참조
    <Table width={2} style={css`
      width: 100%;
      column-gap: 20px;
      row-gap : 20px;
      gap: 20px 30px;
      padding-left:75px;
      padding-right:150px;
      grid-template-columns: 0.25fr 1fr;
    `}>
      {props.items.map(([title, content], i) =>
        <Row key={i}>
          <Head style={css`
            text-align: right;
          `}>{title}</Head>
          <Cell>{content}</Cell>
        </Row>
      )}
    </Table>
  )
}

// 카드 안에 들어갈 전체 정보들
interface CardProps {
  projectName: string
  duration: [string, string]
  language: Array<string>
  role: Array<string>
  images?: Array<JSX.Element>
  videos?: 0 // 임시
  details: Array<string>
  links: Array<{ href: string; text: string }> // 여러개 링크 존재
}

// card props images 
const Card: React.FC<CardProps> = (props) => {
  return (
    <section className={styles.cardSection} >
      <h1 css={css`
        text-align: center;
        padding: 10px;
        margin : 0;
        font-size : 40px;
      `}>
        {props.projectName}
      </h1>
      {/*한꺼번에 로딩 useEffect로 해결.*/}

      {/* 이미지 처리   */}
      <div className={styles.divImg} >

        <div css={css`
        &, & * {
          max-width: 100%;
        }
      `}>
          {
            (props.images?.length ?? 0) <= 1
              ? 
              <div css = {css`
                display : flex;
                padding : 30px;
                justify-content : center;
              `}>
                {props.images?.[0]}
              </div>
              : <CardCarousel images={props.images ?? []} />
          }
        </div>
      </div>

      <ProjectInfoTable
        items={[
          ['진행 기간', <><ul css={css`list-style: ' ◆ ';
          width: 100%;
          text-align: left;
          margin: 0 auto;
          padding-left: 0;`}><li> {props.duration[0]} ~ {props.duration[1]}</li></ul></>],
          ['언어 및 기타사항',<ul key ={"li_key"} css={css`
          list-style: ' ◆ ';
          width: 100%;
          text-align: left;
          margin: 0 auto;
          padding-left: 0;
        `}>
            {props.language.map((lang, i) =>
              <li key={i} css={css`
              list-style-position: outside;
            `}>{lang}</li>
            )}
          </ul>],
          ['역할',<ul key ={"li_key"} css={css`
          list-style: ' ◆ ';
          width: 100%;
          text-align: left;
          margin: 0 auto;
          padding-left: 0;
        `}>
            {props.role.map((role, i) =>
              <li key={i} css={css`
              list-style-position: outside;
            `}>{role}</li>
            )}
          </ul>],
          ['진행과정 및 후기',
            <ul key ={"li_key"} css={css`
              list-style: ' ◆ ';
              width: 100%;
              text-align: left;
              margin: 0 auto;
              padding-left: 0;
            `}>
              {props.details.map((detail, i) =>
                <li key={i} css={css`
                  list-style-position: outside;
                `}>{detail}</li>
              )}
            </ul>
          ],
        ]}
      />

      <h4>
        {props.links.map((link, i) =>
          <button key={i} className={styles.readBtn}>
            <Link  href={link.href}>
              <a target="_blank">
                {link.text}
              </a>
            </Link>
          </button>

        )}
      </h4>
    </section >
  )
}

// 포트폴리오 메인 설명

//포트폴리오 이미지 src 모음

const portfolioImage = [
  [
    "/images/portfolio_maple1.png",
    "/images/portfolio_maple2.png"
  ],
  [
    "/images/portfolio_NailArt1.png",
    "/images/portfolio_NailArt2.jpg",
    "/images/portfolio_NailArt3.png"
  ],
  [
    "/images/portfolio_baristaSimulation.png",
  ],
  [
    "/images/portfolio_LiveChattingApp1.png",
    "/images/portfolio_LiveChattingApp2.png"
  ],
  [
    "/images/portfolio_timeMatters1.png",
    "/images/portfolio_timeMatters2.png",
    "/images/portfolio_timeMatters3.png"
  ],
  [
    "/images/portfolio_loveOfLanguage1.png",
    "/images/portfolio_loveOfLanguage2.png",
  ]
]

const Portfolio: NextPage = () => {
 
  useEffect(() => {
    portfolioImage.forEach((image) => {

      image.forEach((image2 =>{
        const images = new window.Image();
        images.src= image2;
      }))

    });
  },[])

  return (<>
    <Header />
    <div className={styles.portfolio_container}>
      <main className={styles.portfolio_main} >
        <div className={styles.portfolio_intro}>
          <h1 css={css`
            font-weight: bold;
          `}>Projects</h1>

        </div>

        <Card
          projectName="첫 단풍이 진 날"
          duration={['2022.10', '2022.12']}
          language={["바이러스로부터 생존하는 로그라이크 생존 게임",
            "Lua Script 와 MapleStoryWorld 툴을 이용한 개발",
          ]}
          images={[
            <Youtube key = {0} videoId="vlAftbcCFS0" opts={{  playerVars: { autoplay: 1 } }} />,
            <Youtube key = {1} videoId="3pY1MmxGJww" opts={{  playerVars: { autoplay: 1 } }} />,
            <Image key={2} alt="MSW Hackerton_image1" src="/images/portfolio_maple1.png" />,
            <Image key={3} alt="MSW Hackerton_image2" src="/images/portfolio_maple2.png" />,
          ]}
          role ={[
            "Sever Client 간 아이템, 몬스터 상태 실시간 송수신 구현",
            "게임 내 스토리 스크립트 연결 및 분기 알고리즘 제작", 
            "긴급 발생 이벤트 스토리, UI 상호작용 구현",
            "광산 내 광물 캐기 구현, 스토리 진행을 위해 게임 밸런싱 진행"]}
          details={[
            "MAPLESTORY WORLDS  SUPER HACKATHON 2022 당시 진행한 프로젝트 입니다", 
            "제가 개발&팀장을 맡아 직접 기획 1, 개발 1, 디자인 1 팀원을 구성하여 진행했습니다.",
            '처음에 플랫폼 언어 기반이 LuaScript 였지만 JavaScript의 전체적인 형태가 비슷해 개발하는 데 큰 어려움이 없었습니다',
            "개발 당시 API가 수시로 바뀌어 개발 당시 난항이 있었지만 성공리에 완성할 수 있었습니다.",
            'SUPER HACKATHON 2022 <우수> 수상했습니다.',
          ]}
          links={[
            {
              text: 'MSW 해커톤 작품',
              href: 'https://maplestoryworlds.nexon.com/play/a72c4612eba147f587e2613332225348'
            }
          ]}
        />
        <Card
          projectName="FAS (Face Accessory Studio)"
          duration={['2022.09', '2022.11']}
          language={["ReactJS와 Python Flask를 활용한 웹 서비스 플랫폼 개발",
            " Face detection을 활용해 가상으로 액세서리를 착용하여 보여주는 서비스 진행"]}
          role ={["React-Three, FaceFilter 라이브러리를 이용한 얼굴 detection 좌표 및 얼굴 인식에 따른 추가 설정 제작", 
            "Flask를 이용한 이미지 다운로드 및 업로드, 전체적인 플랫폼 플로우 구성"]}
          images={[
            <Image key={0} alt="FAS Picture1" src="/images/portfolio_FAS.png" />,
            <Image key={1} alt="FAS Picture2" src="/images/portfolio_FAS2.png" />,
          ]}
          details={[
            'ReactJS로 웹 서비스 플랫폼과 사진 저장 및 로그인 관련 서버 부분을 전체 담당하여 구현했습니다.',
            '사용자가 개인적으로 사진을 전송하여 주기 위해 카카오톡 로그인 부분이 정상적으로 되지 않는 이슈가 있었으나 토큰 변경과 API 정보를 받는 오류가 발생하던 부분을 수정했습니다.',
            '얼굴 자동 인식을 일일이 데이터를 모으지 않고 라이브러리를 이용했습니다. 추가 수정할 부분은 얼굴 관련 자료들을 모아 수정사항을 거쳤습니다.',
            '서비스 하기 위해 Ngnix와 ngrok를 이용하여 연결했습니다. 또한 보안 관련조치 진행했습니다.',
            '기회가 된다면 라이브러리를 사용하는것이 아닌 직접적으로 제작하고 싶습니다.',
            '현재 ChatBot, chatGPT 등 AI 관련 학습을 진행하고 있습니다.'
            
          ]}
          links={[
            {
              text: ' FAS Studio Github',
              href: 'https://github.com/Last-SilverLight-End/AR_Randering'
            }
          ]}

        />
        <Card
          projectName="Nail Art Studio"
          duration={['2022.03', '2022.06']}
          language={["메타버스 기술 NFT & 네일 아트 플랫폼 서비스",
            "ReactJs와 Flask 를 활용한 웹 플랫폼 서비스 개발",
          ]}
          role ={["Teachable Machine과 YOLO를 활용한 자동화 파일을 적용하여 네일 아트를 인식 및 추할 수 있도록 제작", 
            "사용자가 찍은 사진을 서버로 보내고 자동화 작업을 자동 실행 할 수 있도록 Flask 기반 서버 구현",
            "플랫 폼 내 전체적 UI/UX 제작",
            "nginx와 ngrok를 이용한 외부 포워드 라우팅 연결 및 구현"
          ]}
          images={[
            <Image key={0} alt="Nail Art Picture1" src="/images/portfolio_NailArt1.png" />,
            <Image key={1} alt="Nail Art Picture2" src="/images/portfolio_NailArt2.jpg" />,
            <Image key={2} alt="Nail Art Picture3" src="/images/portfolio_NailArt3.png" />
          ]}
          details={[
            '직접 Front-end UI와 Back-end flask 서버를 개발하여 자동화 파일이 정상적으로 작동 할 수 있도록 연결했습니다.',
            'Ngnix와 ngrok를 이용하여 배포 하여 3만명 이상의 사람들이 이용하는 성과를 냈습니다.',
            '실시간으로 변화하는 NFT 플랫폼 과정과 순서 변경으로 계속 테스트하느라 자동화 파일이 정상적으로 돌아가는지 매일 체크 해야 하는 번거로움이 존재했습니다.',
            '서버와 클라이언트 사이 양방향으로 정보와 파일을 주고받는 방식과 NFT를 활용한 자동화 파일 결과를 사용자에게 보여주는 방식을 확실하게 이해할 수 있는 계기가 되었습니다.',
            '3000개가 넘는 파일을 크롤링을 한 뒤 팀원들이 일일이 cropping, labeling 작업을 진행하여 물심양면으로 노력했습니다.',
            '연구 내용을 기반으로 KSC2022 학부생·주니어논문경진대회에 “메타버스 기반 네일 아트 제작 플랫폼 개발” 학부 논문을 발표하여 장려를 수상했습니다.'
          ]}
          links={[
            {
              text: ' Nail Art Studio Github',
              href: 'https://github.com/MyAndroidAppstudy/MyAndroidAppstudy.github.io'
            }
          ]}

        />
        <Card
          projectName="Barista Simulation"
          duration={['2021.10', '2021.12']}
          language={["Unity를 사용한 플랫폼 게임",
            "C# 기반, 시뮬레이션 시스템 구현",
            "Oculus 2 를 이용하여 구현",
            "VR Oculus를 활용한 커피 바리스타 시뮬레이션 앱 개발"]}
          role ={["Player와 상호작용 구현, 메인 화면 구성", 
            "OVRController를 통한 Grabbable Script 제작",
            "액체의 흐름을 제어하도록 물리 스크립트 제작",
            "Oculus 2를 사용한 물체 간의 상호 작용 이동 구현 "]}
          images={[
            <Image key={0} alt="Barista Simulation Picture" src="/images/portfolio_baristaSimulation.png" />,
          ]}
          details={[
            'OVRController통해 사물을 집기 위해 Grab 범위를 지정하여 조절하였고 또한 Hand Gesture를 자연스럽게 하도록 script를 수정했습니다.',
            'XR Tool Kit 를 이용하여 OVRPlayer 움직일수 있도록 설정했습니다.',
            '액체 Fluid asset이 컵에 흘러 넘쳐서 물리제어 스크립트를 삽입해서 없어지는 경우가 많아 일정 부분 차면 액체가 고정되는 형식으로 변경했습니다.',
            'Particle System을 통해 커피와 물이 나오도록 구현했습니다.',
            '시뮬레이션 UI를 만들어 커피를 제공 하였을 시 클리어 문구와 함께 main Menu로 되돌아가게 구성했습니다.',
          ]}
          links={[
            {
              text: 'Barista Simulation 시연 영상 ',
              href: 'https://youtu.be/uN2SQNCIDV4'
            }
          ]}
        />

        <Card
          projectName="Chatting App"
          duration={['2021.05', '2021.07']}
          language={["JAVA를 활용한 Android Studio 채팅 앱 개발"]}
          role ={["Android UI를 Layout, Fragment 등을 사용하여 구성", 
            "Firebase 로그인, 토큰과 실시간 채팅 내역 저장 진행"]}
          images={[
            <Image key={0} alt="Chatting App Picture 1" src="/images/portfolio_LiveChattingApp1.png" />,
            <Image key={1} alt="Chatting App Picture 2" src="/images/portfolio_LiveChattingApp2.png" />,
          ]}
          details={[
            '로그인 화면 등 Android UI 부분들을 XML로 Layout, Fragment로 사용하여 구성했습니다.',
            'FireBase auth를 통해 회원가입 및 로그인 구성 과정 구현하여 채팅창의 실시간 로그를 기록 및 저장했습니다.',
            '로그인한 기록을 Firebase로 넘겨주는데 띄어쓰기나 기타 문자, 기호로 인하여 오류가 자주 발생하여 언더바로 치환하여 저장했습니다',
            'Adapter 형태로 list를 뽑아내기 위해 Firebase에서 기록을 가져오는데 string 형태로 가져오는 것이 아니여서 일일이 따로 설정해야 하는 아쉬움이 있었습니다.',
            '다중 채팅 형식으로 발전해 나갈 생각입니다.',

          ]}
          links={[
            {
              text: ' Chatting App Github ',
              href: 'https://github.com/Last-SilverLight-End/android_page'
            }
          ]}
        />
        <Card
          projectName="  Time Matters "
          duration={['2020.12', '2021.03']}
          language={["Unity C#을 활용한 어플리케이션 앱 게임 개발",
            "Google Docs로 토의 정리 및 진행방향 결정",
            "선택에 따라 엔딩이 결정되는 로그라이크 게임 "]}
          role ={["외부 디자인 및 그림 제작", 
            "선택지 간 UI system 및 스토리 연결"]}
          images={[
            <Image key={0} alt="timeMatters Picture 1" src="/images/portfolio_timeMatters1.png" />,
            <Image key={1} alt="timeMatters Picture 2" src="/images/portfolio_timeMatters2.png" />,
            <Image key={2} alt="timeMatters Picture 3" src="/images/portfolio_timeMatters3.png" />,
          ]}
          details={[
            '게임 전체 디자인을 제작했습니다',
            "디자인을 하였을 시 핸드폰 기종에 맞춰서 디자인 구성하는 걸 고려했습니다.",
            '로그라이크 게임의 특성을 살리기 위해 일부로 중간저장 기능 없이 구현했습니다.',
            '가능하다면 클라우드 기능을 추가하여 업적이나 계정 저장 부분을 추가하고 싶습니다.',
          ]}
          links={[
            {
              text: ' Time Matters Github ',
              href: 'https://github.com/riroan/Time-Matters-Game'
            }
          ]}
        />
        <Card
          projectName=" Love of Language "
          duration={['2020.07', '2020.09']}
          language={["선택지에 따라 스토리가 진행되는 코딩 CS 연애 시뮬레이션 게임",
            "Android 환경에 대응하는 Renpy Tool 사용",
            "Python을 사용하여 제작"]}
          role ={["게임 내  프로그래밍 문제 출제",
            "스토리 라인 제작",
            "분기점에 따른 선택지 알고리즘 구축, mp3 파일을 이용한 음악 삽입"]}
          images={[
            <Image key={0} alt="loveOfLanguage Picture 2" src="/images/portfolio_loveOfLanguage1.png" />,
            <Image key={1} alt="loveOfLanguage Picture 2" src="/images/portfolio_loveOfLanguage2.png" />,
          ]}
          details={[
            '코딩, CS 관련 문제를 출제하기 위해 기술 스택 공부를 진행했습니다.',
            '연애 시뮬레이션 게임 특성 상 개연성을 부여해 스토리를 기획했습니다.',
            "선택지 뿐만 아니라 상황에 맞는 배경, 노래, 자막 나오는 부분들 등 부가적인 부분들이 많이 존재하여 수정하는데 오래 걸렸습니다.",

          ]}
          links={[
            {
              text: ' 언어의 사랑 Github ',
              href: 'https://github.com/SoleRowCoding/Love-of-Language'
            }
          ]}
        />

        <div css={css`
          padding: 20px;
          background: #0079cf;
          color: rgb(255, 255, 255);
          text-align: center;
          flex: 1; 
        `}>
        </div>
      </main>
    </div>
  </>
  )
};

export default Portfolio
