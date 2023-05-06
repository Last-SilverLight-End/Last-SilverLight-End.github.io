import Header from '@components/Header';
import Image from '@components/Image';
import type { NextPage } from 'next';
import Link from 'next/link';
import { useEffect } from 'react';
import styles from '../styles/introduce.module.css';
/**
 * 컴퓨터 입장에서는
 * `@components/Header`가
 * `C:\Users\Changgeun\githubHomePageNextjs\ShowMeTheHomepage\components\Header`인지 모른다.
 * 
 * -> 알게 하려면 tsconfig.json에서 아래와 같이 작성
*/

const Introduce: NextPage = () => {

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }, []);

  return (<>

    <Header />
    <main className={styles.myInfo} >

      <br></br>

      <h1>Profile
      </h1>
      <aside className={styles.alignGrid}>
        <h2>
          LEE CHANG_GEUN
          <br></br>
        </h2>
        <Image alt="myHandsome picture" src="/images/HunterKiller.png" width={120} height={120} />
      </aside>
      <h3>NickName : HunterKiller</h3>
      <h3>Email : cg456456@naver.com</h3>
      <h3>GitHub :
        <Link href="https://github.com/Last-SilverLight-End">
          <a className={styles.linkHighlight}>
            Last-SilverLight-End
          </a>
        </Link>
      </h3>
      <br></br>
      
    </main>
    
    
    <main className={styles.myExplaination}>
      <hr className = {styles.lines}/>
      <h2> Words </h2>
      <ul style={{ listStyle: '"  ▷   "' }}>

        <h4>
          <li>
          저는 모바일 앱을 만들어 보는 것으로 개발을 시작했습니다. Android Studio를 활용해 WebView 기반의 앱 Java 및 Kotlin을 활용한 1대1 채팅 앱 등 모바일 앱 개발 관련 프로젝트를 진행했습니다. 
          </li>
        </h4>

        <h4>
          <li>
          하지만 프로젝트를 진행하면서 여러 문제를 마주했는데, 대표적으로 iOS 앱과 Android 앱을 별도로 만들어야 하고 빌드 시간이 오래 걸려 생산성이 떨어지는 문제가 있었습니다. 이외에도 무거운 SDK와 에뮬레이터를 설치해야 한다거나 빌드 후 테스트 과정이 매우 번거로운 문제가 있어서, 이런 문제들로부터 비교적 자유로운 웹 기술에 자연스럽게 관심이 가게 되었습니다. 
          </li>
        </h4>
        <h4>
          <li>
          현재까지 웹 기술을 사용한 능숙한 개발을 위해 JavaScript, TypeScript 및 React를 사용한 다양한 프로젝트를 진행하였습니다. 또한 Back-end 개발자를 포함한 프로젝트 구성원과의 원활한 협업과 이해를 높이기 위해 Java, Kotlin 및 Spring 프레임워크도 직접 활용하고 개발하면서 나아가고 있습니다.
         
          </li>
        
        </h4>

      </ul>
    </main>

  </>
  )
};

export default Introduce;