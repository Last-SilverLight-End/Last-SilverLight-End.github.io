import Link from 'next/link';
import { FC } from 'react';

const linkButton:FC<JSX.IntrinsicElements['link']> = (props) => {

  let temp =props.href;

  return (
    <link {...props} href={temp}>
    </link>

  );
};
export default linkButton;