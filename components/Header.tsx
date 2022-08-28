import Link from 'next/link';
import { FC } from 'react';
import "./global.css"

/*FC -> functional component */
const Header: FC = () => {

  return (
    <div> 
      <ul>
        <li>
        <Link href="/">
              <li className='header_menu'> 
                메인
              </li>
          </Link>
          <Link href="/introduce">
            <li className='header_menu'> 
              자기소개
            </li>
          </Link>
          <Link href="/portfolio">
            <li className='header_menu'> 
              포트폴리오
            </li>
          </Link>
          <Link href="/privateChat">
          <li className='header_menu'> 
              개인 잡담

              </li> 
          </Link>
          <Link href="/jjoripingBabo">
          <li className='header_menu'> 
            쪼리핑 바보
            <ul></ul> 
            </li> 
          </Link>
        </li>
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
        ))}
*/ 
export default Header;