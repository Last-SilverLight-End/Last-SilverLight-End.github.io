import Link from 'next/link';
import { FC } from 'react';

const GitLinkButton:FC = () => {
  return(
    <Link href="https://github.com/Last-SilverLight-End">
      <a>
        눌러 내 깃허브 링크야
      </a>
    </Link>
  )
}
export default GitLinkButton;