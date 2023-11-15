import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector("#vimeo-player")
const player = new Vimeo(iframe);
let time;

player.on('timeupdate', throttle(
    (event) => {
        time = localStorage.setItem( JSON(event.seconds))
        console.log(time);
        // console.log(event.seconds);// виводе час через 1 сек під час перегляду відео
      }, 1100
  ));
// time = localStorage.getItem("videoplayer-current-time");
   console.log("time -" `${time}`);