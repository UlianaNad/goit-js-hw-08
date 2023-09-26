
import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

function setTime(e){
    const seconds = e.seconds;
    localStorage.setItem('videoplayer-current-time', seconds)
}
const throttledFunc = throttle(setTime, 1000);
player.on('timeupdate',throttledFunc);

function onLoadWindow(){
    const savedTime = localStorage.getItem('videoplayer-current-time');

    player.setCurrentTime(savedTime).then(function(seconds) {
    }).catch(function(error) {
        switch (error.name) {
            case 'RangeError':
                break;
            default:
                break;
        }
    });
}
onLoadWindow();
