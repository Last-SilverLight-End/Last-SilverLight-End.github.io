import Link from 'next/link';
import { FC } from 'react';
import style from '@styles/header.module.css'
import { useRouter } from 'next/router';

/*FC -> functional component */
const Header: FC = () => {
  const router = useRouter();
  
  return (
    <div className = {style.header}> 
      <ul>
        <Link href="/">
          <li className={router.asPath === "/" ? style.current : undefined}> 
                메인
          </li>
        </Link>
        <Link href="/introduce">
          <li className={router.asPath === "/introduce" ? style.current : undefined}> 
              자기소개
          </li>
        </Link>
        <Link href="/portfolio">
          <li className={router.asPath === "/portfolio" ? style.current : undefined}> 
              포트폴리오
          </li>
        </Link>
        <Link href="/privateChat">
          <li className={router.asPath === "/privateChat" ? style.current : undefined}> 
              개인 잡담
          </li> 
        </Link>
        <Link href="/jjoripingBabo">
          <li className={router.asPath === "/jjoripingBabo" ? style.current : undefined}> 
            놀이 공간
          </li> 
        </Link>
      </ul>
    </div>
  )
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

