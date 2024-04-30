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
// 그혹시
// 이미 그러기에는 너무 멀리 와서 일단 리뉴얼로는 급하게 땜빵하고
// 곧 vue에서 refactoring 할때 진행할거임
// 이참에 nextjs 버리고 vue로 제작해보시는건 어떰
// 아뇨근데 리뉴얼한 페이지엔 별거없잖아요
//
// 자 그러면 하나만 물어보죠
// 언가님이 보기엔 저 스타일이 ㄱㅊ아 보임>? 제 눈으로 보기엔 존내게 촌스러워 보이는데
// 피그마요?
// 아뇨 지금 리뉴얼 전 페이지요
// 자 그러면
// 생각을 해야 하는게 지금 리뉴얼은 안올라 갔잖아요
// 그러면 만약 언가님이라면
// 지금 당장 고쳐야 할 css는 뭐라고 보나요?
// ㄱㅋ 좀 촌스럽긴하죠
// 근데 아래쪽은 ㄱㅊ은듯
// 일단 색 선정만 좀 잘해도 50%는 먹고갈듯 ㄱㅋ
// 그러면 바꿔 보죠 그 다음에 후 평가 어떠실까요
// 색 바꾸고 폰트 지지고 그 다음 평가후 아 진짜 기분 언가 같다 하면 리뉴얼 진행 해보죠
