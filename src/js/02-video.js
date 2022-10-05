import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(playback, 1000));

function playback(data) {
    localStorage.setItem('videoplayer-current-time', data.seconds);
  }

  player.setCurrentTime(localStorage.getItem('videoplayer-current-time') || 0);

