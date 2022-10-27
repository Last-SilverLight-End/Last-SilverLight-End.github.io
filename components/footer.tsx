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
          Copyright © { getToday() } LEE CHANG_GEUN All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer;