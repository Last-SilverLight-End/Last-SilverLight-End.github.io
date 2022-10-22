import Link from 'next/link';
import { FC } from 'react';

const Image: FC<JSX.IntrinsicElements['img']> = (props) => {


  let temp = props.src;

  if (process.env.NODE_ENV === "production") {
    temp = "/ShowMeTheHomepage" + temp;
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element,jsx-a11y/alt-text
    <img {...props} src={temp} />
  );  
};
export default Image;