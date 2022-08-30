import Link from 'next/link';
import { FC } from 'react';
import NextImage from "next/image";

const Image:FC = () => {
    let temp ="/images/HunterKiller.png";

    if(process.env.NODE_ENV === "production"){
        temp = "/ShowMeTheHomepage" + temp;
    } 

  return (
    <NextImage src={temp} alt="HunterKiller" width={150} height={150} />
  );
};
export default Image;