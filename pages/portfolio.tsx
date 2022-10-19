import type { NextPage } from 'next'
import Link from 'next/link';
import { useRouter } from 'next/router'
import { FC, useState } from 'react';
import NextButton from '@components/NextButton';
import GitLinkButton from '@components/GitLinkButton';
import Header from '@components/Header';
import styles from '../styles/portfolio.module.css';
import Image from '@components/Image';
import Footer from '@components/footer';
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

const portfolio: NextPage = () => {
  return (<>
    <Header />
    <div>
      <main id="p" >
        <div className={styles.header}>
          <h1 >포트폴리오 페이지에 오신걸 환영합니다!!!</h1>
          <br></br>
          <h2>현재 포트폴리오 내역들입니다!</h2>
        </div>
        <div className={styles.portfolio_FAS}>
          <h3>FAS (Face Accessary Studio)</h3>
          <h4>진행 기간 2022.03 ~ 2022.06</h4>


          <h4></h4>
        </div>
        <div className={styles.portfolio_nailArt}>
          <h3>*Nail Art 제작 플랫폼</h3>
          <h4>진행 기간</h4>
          <p>2022.03 ~ 2022.06</p>

          <h4>사용 언어 및 기타사항</h4>
          <p>ReactJs와 Flask 를 이용한 네일 아트 제작 플랫폼 서비스 사용자 UI 개발</p>
          <h4>세부 과정 </h4>
          <p>
            사용자가 네일 하트 한 그림이나 작품을 도면화 하여
          </p>
          <p>
            NFT, Zepeto , SnapShot 에 올릴 수 있도록 도면화 및 자동 올리기 서비스 제공
          </p>
          <p>
            Teachable Machine 과 YOLO를 활용한 자동화 파일을 적용하여 Nail을 인식 및 추출하는
          </p>
          <p>
            용도로 사용할 수 있도록 제작, 저장된 사진을 자동화 파일과 주고 받을 수 있게 하는
          </p>
          <p>
            Flask 로 서버 구축 , 직접적으로 배포 하기 위한 Ngnix와 ngrok를 이용하여 연결 및 구현
          </p>
          <h4>프로젝트 결과 , GitHub URL or 동영상</h4>

          <p>
            <Link href="https://github.com/MyAndroidAppstudy/MyAndroidAppstudy.github.io">
              Nail Art 제작 플랫폼 링크
            </Link>
          </p>
        </div>
        <div className={styles.portfolio_baristaSimulation}>
          <h3>*Barista Simulation</h3>
          <h4>진행 기간</h4>
          <p>2021.10 ~ 2021.12</p>
          <div>

            <h4>사용 언어 및 기타사항</h4>
            <p>C# 기반 unity 와 Oculus 2 를 이용하여 구현</p>
            <h4>세부 과정</h4>
            <section className={styles.twoColumnSection}>
              <div>
                <Image alt="Barista Simulation Picture" src="/images/portfolio_baristaSimulation.png" width={400} height={300} />
              </div>
              <div>
                <ul style={{ listStyle: '" *   "' }} >
                  <li>
                    XR Tool Kit 를 이용하여 OVRPlayer 움직일수 있도록 설정.
                  </li>
                  <li>
                    HandController부분 Grab설정하여 집을 수 있도록 만듬.
                  </li>
                  <li>
                    Particle System을 통해 커피와 물이 나오도록 구현.
                  </li>
                  <li>
                    시뮬레이션 UI를 만들어 커피를 제공 하였을 시
                    <br />
                    클리어 문구와 함께 main Menu로 되돌아가게 구성.
                  </li>
                  <h4>프로젝트 결과 , GitHub URL or 동영상</h4>
                  <h4>
                    <Link href="https://youtu.be/uN2SQNCIDV4">
                      ## 바리스타 시뮬레이션 시연 영상 링크 ##
                    </Link>
                  </h4>
                </ul>
              </div>
            </section>
          </div>
        </div>
        <div className={styles.portfolio_liveChattingApp}>
          <h3> 실시간 채팅 앱 </h3>
          <h4>진행 기간</h4>
          <p>2021.05 ~ 2021.07</p>
          <div>

            <h4>사용 언어 및 기타사항</h4>
            <p> JAVA를 활용한 Android Studio 내 채팅 앱 개발 </p>
            <h4>세부 과정</h4>
            <section className={styles.twoColumnSection2}>
              <div >

                <Image alt="Chatting App Picture 1" src="/images/portfolio_LiveChattingApp1.png" width={250} height={350} />

                <Image alt="Chatting App Picture 2" src="/images/portfolio_LiveChattingApp2.png" width={250} height={350} />
              </div>

              <div >
                <ul style={{ listStyle: '" *   "' }} >
                  <li>
                    로그인 화면 등 Android UI 부분들을 XML로 Layout, Fragment로 사용하여 구성.
                  </li>
                  <li>
                    FireBase auth를 통해 회원가입 및 로그인 구성 과정 구현.
                  </li>
                  <li>
                    채팅창의 실시간 로그를 기록 및 저장, 화면 나갔다 와도 유지될 수 있도록 구현.
                  </li>
                  <li>
                    추후 프로필 추가등 업데이트 및 수정 예정.
                  </li>
                  <h4>프로젝트 결과 , GitHub URL or 동영상</h4>
                  <h4>
                    <Link href="https://github.com/Last-SilverLight-End/android_page">
                      ## 채팅앱 깃허브 링크 ##
                    </Link>
                  </h4>
                </ul>
              </div>
            </section>
          </div>
        </div>

        <div className={styles.portfolio_timeMatters}>
          <h3> Time Matters / 당신의 선택으로 인해 엔딩이 결정되는 게임 </h3>
          <h4>진행 기간</h4>
          <p>2020.12 ~ 2021.02</p>
          <div>

            <h4>사용 언어 및 기타사항</h4>
            <p> Unity C#을 활용한 어플리케이션 앱 게임 개발</p>
            <p> Google Docs로 토의 정리 및 진행방향 결정</p>
            <h4>세부 과정</h4>
            <section className={styles.twoColumnSection2}>
              <div >

                <Image alt="Chatting App Picture 2" src="/images/portfolio_timeMatters1.png" width={160} height={350} />

                <Image alt="Chatting App Picture 2" src="/images/portfolio_timeMatters2.png" width={160} height={350} />

                <Image alt="Chatting App Picture 2" src="/images/portfolio_timeMatters3.png" width={160} height={350} />
              </div>

              <div >
                <ul style={{ listStyle: '" *   "' }} >
                  <li>
                    게임 전체 디자인 및 제작
                  </li>
                  <li>
                    FireBase auth를 통해 회원가입 및 로그인 구성 과정 구현.
                  </li>
                  <li>
                    선택지 간 UI system 연결
                  </li>
                  <li>
                    로그라이크 특성을 잘 나타내어 구현
                  </li>
                  <h4>프로젝트 결과 , GitHub URL or 동영상</h4>
                  <h4>
                    <Link href="https://github.com/riroan/Time-Matters-Game">
                      ## Time Matters 깃허브 링크 ##
                    </Link>
                  </h4>
                </ul>
              </div>
            </section>
          </div>
        </div>

        <div className={styles.portfolio_loveOfLanguage}>
          <h3> Love of Language / 컴퓨터 지식이 필요한 미연시 게임 </h3>
          <h4>진행 기간</h4>
          <p>2020.07 ~ 2020.09</p>
          <div>

            <h4>사용 언어 및 기타사항</h4>
            <p> Android 환경에 대응하는 Renpy Tool 사용, Python을 사용하여 제작</p>
            <h4>세부 과정</h4>
            <section className={styles.twoColumnSection2}>
              <div >
                <Image alt="Chatting App Picture 2" src="/images/portfolio_loveOfLanguage1.png" width={350} height={250} />

                <Image alt="Chatting App Picture 2" src="/images/portfolio_loveOfLanguage2.png" width={350} height={250} />
              </div>

              <div>
                <ul style={{ listStyle: '" *   "' }} >
                  <li>
                    프로그래밍 문제 출제 및 컴퓨터 구조 공부
                  </li>
                  <li>
                    미연시 게임의 특성에 따라 스토리 제작.
                  </li>
                  <li>
                    Menu에 따른 선택지 코딩 및 mp3 파일을 가져와 music을 삽입.
                  </li>
                  <li>
                    Style 과 add를 이용해 메인화면 일부 수정.
                  </li>
                  <h4>프로젝트 결과 , GitHub URL or 동영상</h4>
                  <h4>
                    <Link href="https://github.com/SoleRowCoding/Love-of-Language">
                      ## 언어의 사랑 깃허브 링크 ##
                    </Link>
                  </h4>
                </ul>
              </div>
            </section>
          </div>
        </div>
        <div className={styles.copyright}>
          <h2 className={styles.linkHighlight}> 더더욱 추가될 수 있으니 그때마다 업데이트 하겠습니다</h2>

          <Link href="https://github.com/Last-SilverLight-End">
            ## 깃허브 홈페이지는 여기로 ## 
          </Link>
        </div>
      </main>
    </div>
    <div>

    </div>
    <Footer/>
  </>
  )
};

export default portfolio
