import Image from '@components/Image';
import style from '@styles/mainname_renew.module.css';
const mainName: React.FC = () => {
  return(
    <div className={style.mainName} suppressHydrationWarning>
      <div className={style.showName}>
        <div className={style.nickName}>HunterKiller</div>
        <div className={style.realName}>ChangGeun_Lee</div>
      </div>
      <div className={style.images}>
        <Image alt="myHandsome picture" src="/images/HunterKiller.png" width={120} height={120} />
      </div>
    </div>
  );
};
export default mainName;
