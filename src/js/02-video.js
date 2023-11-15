import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector("#vimeo-player")
const player = new Vimeo(iframe);
let time;

player.on('timeupdate', throttle(
    (event) => {
        localStorage.setItem("videoplayer-current-time", event)
        // console.log(event);
      }, 1000
  ));
time = localStorage.getItem("videoplayer-current-time");
   console.log("time -" `${time}`);