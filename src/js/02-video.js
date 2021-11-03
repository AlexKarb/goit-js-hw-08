import VimeoPlayer from '@vimeo/player';
import { throttle } from 'lodash';    

const iframe = document.querySelector('iframe');
const player = new VimeoPlayer(iframe);
  
const updateCurrentTimeOfVideo = (time) => localStorage.setItem("videoplayer-current-time", time);
const currentTimeofVideo = localStorage.getItem("videoplayer-current-time");



player.on('timeupdate', throttle(() => {
    return player.getCurrentTime().then(function (seconds) {

        updateCurrentTimeOfVideo(seconds)
        
    }).catch(function (error) {
        // an error occurred
        console.log(error);
        updateCurrentTimeOfVideo(0);
    })
}, 1000));



player.setCurrentTime(currentTimeofVideo).then(function(seconds) {

        updateCurrentTimeOfVideo(seconds);

}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            updateCurrentTimeOfVideo(0);
            break;

        default:
            // some other error occurred
            updateCurrentTimeOfVideo(0);
            break;
    }
});