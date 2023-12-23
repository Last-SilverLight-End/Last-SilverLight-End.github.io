

import YouTube, { YouTubeProps } from 'react-youtube';


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

};*/

(() => {


  const props: any = 0;
  
  (<YouTube {...props} onReady={onPlayerReady} />);
  // 이거를 객체로 대충 비유하면
  const _ = {
    ...props,
    onReady: onPlayerReady,
    // props를 YouTube에다 그대로 흘려보내고 부가적으로 onPlayerReady를 onReady에 넣기
  };

})

const YoutubePlayer = (props: YouTubeProps) =>{

  return (
    // props의 모든 속성을 YouTube에다 그대로 때려박아라
    <YouTube {...props} onReady={onPlayerReady} />
  );
}

export default YoutubePlayer;
