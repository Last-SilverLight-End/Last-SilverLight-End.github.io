import Link from 'next/link';
import { FC } from 'react';
import NextImage, { ImageProps } from "next/image";


const Image: FC<ImageProps> = (props) => {


  let temp = props.src;

  if (process.env.NODE_ENV === "production") {
    temp = "/ShowMeTheHomepage" + temp;
  }

  return (
    <NextImage {...props} src={temp} />
  );
};
export default Image;