import style from '@styles/footer.module.css';

const fillZero = (n: number, maxLength: number = 2) =>
  n.toString().padStart(maxLength, '0')

const Footer: React.FC = () => {
  const getToday = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = fillZero(now.getMonth() + 1);
    // 자스가 자바의 **한api를 무지성으로 따라해서
    // getMonth의 **한점도 그대로 녹아들어있는데요
    // 1월이면 0을 뱉습니다
    const date = fillZero(now.getDate());

    return [ year, month, date ].join('.');
  }

  return (
    <footer className={style.footer}>
      <div className={style.container}>
        {/*<ul>
          <li><a href="#">사이트 안내</a></li>
          {/*<li><a href="#">사이트 이용약관</a></li>
          <li><a href="#">사이트 운영원칙</a></li>
          <li>
            <a href="#">개인정보 안내</a>
          </li>
          <li><a href="#"> 사이트 운영정보 </a></li>
          <li><a href="#">게시중단요청서비스</a></li>
          <li><a href="#">고객센터</a></li>*
        </ul>
        <div className ={style.linebar}></div>*/}
        <div className={style.address} >

          Copyright © { getToday() } CHANGGEUN All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer;