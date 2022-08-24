import Link from 'next/link';
import { FC } from 'react';

const NextButton:FC = () => {
  return (
    <Link href="/test">
      <a>
        눌러 내 자기 소개야22
      </a>
    </Link>
  );
};
export default NextButton;