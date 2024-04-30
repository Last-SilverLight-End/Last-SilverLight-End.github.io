import Image from '@components/Image';
import style from '@styles/header.module.css';
import Link from 'next/link';
import { useRouter, type NextRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';
interface HeaderButtonProps {
  router: NextRouter
  path: string
  text: string
}
const HeaderButton: React.FC<HeaderButtonProps> = (props) =>
  <Link href={props.path}>
    <li className={props.router.asPath === props.path ? style.current : undefined}>
      <strong>{props.text}</strong>
    </li>
  </Link>

// router={router}가 반복되니까 이걸 없애고
// router가 제외된 HeaderButtonProps를 가져온 뒤에
// router={router}를 알아서 넣어주는 컴포넌트를 제작

type _ = Omit<HeaderButtonProps, 'router'> // router라는 키를 제외한 객체

const createRouterProvidedHeaderButton = (router: NextRouter) => {
  const RouterProvidedHeaderButton = (props: Omit<HeaderButtonProps, 'router'>) =>
    <HeaderButton {...props} router={router} />
  return RouterProvidedHeaderButton
}

/*FC -> functional component */
const Header: FC = () => {
  const router = useRouter();
  const [isActive,setIsActive] = useState(false);

  function handleMenuClick(){
    setIsActive(!isActive);
  }

  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });
  const [Scroll,setScroll] = useState<number | undefined>(0);
  //const nextScrollRef = useRef<DocumentFragment | null>;

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
      <div className={style.header}>
        <ul>
          <RouterProvidedHeaderButton path="/" text="메인" />
          <RouterProvidedHeaderButton path="/portfolio" text="포트폴리오" />
        </ul>
      </div>
    ) : (
      <div className={style.header}>
        <Image className={style.headerImg} alt="headerBtnImg" src="/images/menubar.png" height={60} width={60} onClick={handleMenuClick} />
        <ul className = {isActive ? style.active : ''} >
          <RouterProvidedHeaderButton path="/" text="메인" />
          <RouterProvidedHeaderButton path="/portfolio" text="포트폴리오" />
        </ul>
      </div>
    )
  );
};

/* list로 나타낼때는 이런 식으로 함

const headerLinks = [
  { label: "자기소개", href: "/introduce" },
  { label: "포트폴리오", href: "/portfolio" },
  { label: "개인 잡담", href: "/privateChat" },
  { label: "쪼리핑 바보", href: "/jjoripingBabo" }
];

        {headerLinks.map(({ label, href }) => (
          <Link href={href}>
            <a>
              {label}
            </a>
          </Link>
          <link
          >
        ))}
*/
export default Header;

