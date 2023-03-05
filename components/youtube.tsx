
import Link from 'next/link';
import YouTube, { type YouTubeEvent, YouTubeProps } from 'react-youtube';
import style from '@styles/youtube.module.css';

type Opts = YouTubeProps['opts']
// 타입이름은 파스칼케이스여야합니다
const opts: (defaultOpts: Opts) => Opts = (defaultOpts) =>
  ({
    height: defaultOpts.height,
    width: defaultOpts.width,
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: defaultOpts.playerVars.autoplay,
    },
  });

const onPlayerReady: YouTubeProps['onReady'] = (event) => {
  // access to player in all event handlers via event.target
  event.target.pauseVideo();
}

/*const onPlayerReady = (props: YouTubeEvent<YouTubeProps>) => {

  // access to player in all event handlers via event.target
  props.target.pauseVideo();
  let temp = props.target.videoId;

  // 이거 props.data가 잘못될경우도있는건가요
};*/

// ㄹㅇㅋㅋ
// 함수아니고 걍 객첸데요

// 제가 머리 박겠습니다

(() => {
  const a = {
    a: 1,
    b: 2,
  };
  const b = {
    ...a,
  };
  // b = { a: 1, b: 2 }
  const c = {
    ...a,
    c: 3
  };
  // c = { a: 1, b: 2, c: 3 }
  // 쪼님이 말하신거처럼 일일이 지정하는게 너무 귀찮으니까 이렇게 하는거죠
  const props: any = 0;
  
  (<YouTube {...props} onReady={onPlayerReady} />);
  // 이거를 객체로 대충 비유하면
  const _ = {
    ...props,
    onReady: onPlayerReady,
    // props를 YouTube에다 그대로 흘려보내고 부가적으로 onPlayerReady를 onReady에다 넣어주는거죠
  };
  // onReady는 함수죠
  // 네
})

const YoutubePlayer = (props: YouTubeProps) =>{

  return (
    // 한줄요약: props의 모든 속성을 YouTube에다 그대로 때려박아라
    <YouTube {...props} onReady={onPlayerReady} />
  );
}

export default YoutubePlayer;
