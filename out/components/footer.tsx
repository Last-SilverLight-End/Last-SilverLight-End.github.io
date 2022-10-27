
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
    <footer className={style.footer}>
      <div className={style.container}>
        <ul>
          <li><a href="#">사이트 도움말</a></li>
          <li><a href="#">사이트 이용약관</a></li>
          <li><a href="#">사이트 운영원칙</a></li>
          <li>
            <a href="#"><strong>개인정보취급방침</strong></a>
          </li>
          <li><a href="#">책임의 한계와 법적고지</a></li>
          <li><a href="#">게시중단요청서비스</a></li>
          <li><a href="#">고객센터</a></li>
        </ul>
        <div className={style.address} >
          Copyright © { whatisToday() } LEE CHANG_GEUN All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer;