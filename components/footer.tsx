
import Link from 'next/link';
import { FC } from 'react';
import style from '@styles/footer.module.css';
const Footer: FC = () => {
  const whatisToday = () =>{  
    const year = new Date().getFullYear();
    let month = new Date().getMonth();
    let date = new Date().getDay();
    let years = ""+year;
    let months : string = "";
    let dates: string = "";
    if(date<10){
      dates = "0"+date;
    }

    if(month<10){
      months = "0"+month;
    }

    const total = years+"." + months+"."+dates;
    return total;
  }

  return (
    <footer className="">
      <div className = "">
        (c)  { whatisToday() } LEE CHANG GEUN All rights reserved.
      </div>
    </footer>
  )
}

export default Footer;