import VimeoPlayer from '@vimeo/player';
import { throttle } from 'lodash';    

const iframe = document.querySelector('iframe');
const player = new VimeoPlayer(iframe);
  
const updateCurrentTimeOfVideo = (time) => localStorage.setItem("videoplayer-current-time", time);
const currentTimeofVideo = localStorage.getItem("videoplayer-current-time");



player.on('timeupdate', throttle(() => {

    return player.getCurrentTime().then(function (seconds) {

        updateCurrentTimeOfVideo(seconds)
        
    })
}, 1000));



player.setCurrentTime(currentTimeofVideo);