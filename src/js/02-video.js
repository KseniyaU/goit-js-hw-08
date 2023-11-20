import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector("#vimeo-player")
const player = new Vimeo(iframe);
let time;

player.on('timeupdate', throttle(
    (event) => {
    localStorage.setItem("videoplayer-current-time", `"${event.seconds}"`)
    // time = localStorage.getItem("videoplayer-current-time")
        // console.log(time);
        // console.log(event.seconds);// виводе час через 1 сек під час перегляду відео
      }, 1100
  ));

//  console.log("time -" `${time}`);//час на якому закінчився перегляд
time = JSON.parse(localStorage.getItem("videoplayer-current-time"))

player.setCurrentTime(time).then(
  function (seconds) {
    seconds = time;
  }
).catch(
  function (error) {
    switch (error.name) {
      case 'RangeError':
        // seconds > time && seconds < time
        break;
      default:
        break;
    }
  }
);




  
