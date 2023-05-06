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




// router={router}가 반복되니까 이걸 없애려고
// router가 제외된 HeaderButtonProps를 가져온 뒤에
// router={router}를 알아서 넣어주는 컴포넌트를 만든거죠

type _ = Omit<HeaderButtonProps, 'router'> // 네 router라는 키를 제외한 객체



/*FC -> functional component */
const Header: FC = () => {



  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  const HeaderButton: React.FC<HeaderButtonProps> = (props) =>{
    const HandleClick = (event: React.MouseEvent<HTMLLIElement>) => {
      event.preventDefault();
  
      router.push({
        pathname: props.path,
      }).then(() => {
        if (typeof window !== 'undefined') {
          window.scrollTo(0, 0);
        }
      });
    };
    return(
      <Link href={props.path}>
        <li className={props.router.asPath === props.path ? style.current : undefined} onClick = {HandleClick}>
          <strong>{props.text}</strong>
        </li>
      </Link>
    )
  }

  const createRouterProvidedHeaderButton = (router: NextRouter) => {
    const RouterProvidedHeaderButton = (props: Omit<HeaderButtonProps, 'router'>) =>
      <HeaderButton {...props} router={router} />
    return RouterProvidedHeaderButton
  }


  useEffect(() => {
    window.scrollTo(0, 0);
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
          <RouterProvidedHeaderButton path="/introduce" text="자기소개" />
          <RouterProvidedHeaderButton path="/portfolio" text="포트폴리오" />
        </ul>
      </div>
    ) : (
      <div className={style.header}>
        <Image className={style.headerImg} alt="html5" src="/images/menubar.png" height={60} width={60} onClick={handleMenuClick} />
        <ul >
          <RouterProvidedHeaderButton path="/" text="메인" />
          <RouterProvidedHeaderButton path="/introduce" text="자기소개" />
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

