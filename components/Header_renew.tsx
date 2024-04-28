import style from '@styles/header_renew.module.css';
import Link from 'next/link';
import { useRouter, type NextRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';
interface HeaderButtonProps {
  router: NextRouter
  path: string
  text: string
}

// 만약 라우터와 현재 페이지가 같으면 강조, 아니면 원래 색 그대로
const HeaderButton: React.FC<HeaderButtonProps> = (props) =>
  <Link href={props.path}>
    <div className={style.header_renew}>
      <li className={props.router.asPath === props.path ? style.highlighted : style.not_highlighted}>
        <strong>{props.text}</strong>
      </li>
    </div>
  </Link>


/*
    <li className={props.router.asPath === props.path ? style.fuck : undefined}>
      <strong>{props.text}</strong>
    </li>
*/
// router={router}가 반복되니까 이걸 없애고
// router가 제외된 HeaderButtonProps를 가져온 뒤에
// router={router}를 알아서 넣어주는 컴포넌트를 제작

type _= Omit<HeaderButtonProps, 'router'> // router라는 키를 제외한 객체

const createRouterProvidedHeaderButton = (router: NextRouter) => {
  const RouterProvidedHeaderButton = (props: Omit<HeaderButtonProps, 'router'>) =>
    <HeaderButton  {...props} router={router} />
  return RouterProvidedHeaderButton
}

/*FC -> functional component */
const Header_renew: FC = () => {
  const router = useRouter();
  const [isActive,setIsActive] = useState(false);

  function handleMenuClick(){
    setIsActive(!isActive);
  }

  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    document.getElementById('__next')?.scrollTo(0,0);

    const handleResize = () => { 
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize); 
  }, []);
  console.log(windowSize.width, windowSize.height);
  const RouterProvidedHeaderButton = createRouterProvidedHeaderButton(router);

  return (
    windowSize.width >= 1020 ? (
      <div className={style.header_renew}>
        <h1 className={style.header_renew}>HunKill Portfolio</h1>
        <ul>
          <RouterProvidedHeaderButton  path="/" text="메인" />
          <RouterProvidedHeaderButton  path="/introduce" text="자기소개" />
          <RouterProvidedHeaderButton  path="/portfolio" text="포트폴리오" />
          <RouterProvidedHeaderButton  path="/renew" text="리뉴얼" />
        </ul>
      </div>
    ) : (
      <div className={style.header_renew}>
        <h1>HunKill Portfolio</h1>
        <ul>
          <RouterProvidedHeaderButton path="/" text="메인" />
          <RouterProvidedHeaderButton path="/introduce" text="자기소개" />
          <RouterProvidedHeaderButton path="/portfolio" text="포트폴리오" />
          <RouterProvidedHeaderButton path="/renew" text="리뉴얼" />
        </ul>
      </div>
    )
  );
};

export default Header_renew;