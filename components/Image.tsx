import Link from 'next/link';
import { FC } from 'react';
import NextImage from "next/image";


const Image : FC<JSX.IntrinsicElements['img']> = (props) => {

    
    let temp =props.src;

    if(process.env.NODE_ENV === "production"){
        temp = "/ShowMeTheHomepage" + temp;
    } 

  return (
    <img {...props} src = {temp} />
  );
};
export default Image;