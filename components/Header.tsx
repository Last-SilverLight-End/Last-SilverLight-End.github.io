import Link from 'next/link';
import { FC } from 'react';



/*FC -> functional component */
const Header: FC = () => {

  return (
    <div>
      <ul>
        <li>
          <Link href="/introduce"> 자기소개 </Link>
          <Link href="/portfolio"> 포트폴리오 </Link>
          <Link href="/privateChat"> 개인 잡담 </Link>
          <Link href="/jjoripingBabo"> 쪼리핑 바보 </Link>
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