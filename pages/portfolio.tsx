import type { NextPage } from 'next'
import Link from 'next/link';
import { useRouter } from 'next/router'
import { FC, useState } from 'react';
import NextButton from '@components/NextButton';
import GitLinkButton from '@components/GitLinkButton';
import Header from '@components/Header';
import styles from '../styles/portfolio.module.css';
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
              <Image alt="Barista Simulation Picture" src="images/portfolio_baristaSimulation.png" width={300} height={200} />
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
        <h2 className={styles.linkHighlight}> 포트폴리오 링크는 여기로!(공사중)</h2>
      </main>
    </div>
    <div>

    </div>
  </>
  )
};

export default portfolio
