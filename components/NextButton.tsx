import Link from 'next/link';
import { FC } from 'react';

const NextButton:FC = () => {
  return (
    <Link href="/test">
      <a>
        test용 버튼 다른 링크로 이동됩니다. 엥 안될줄 알았다고? 나약하군
      </a>
    </Link>
  );
};
export default NextButton;