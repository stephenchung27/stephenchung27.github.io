import $ from 'jquery';

const hoverVideo = function (e) {
  $('video', this).addClass('play');
  $('video', this).trigger('play');
}

const hideVideo = function (e) {
  setTimeout(() => {
    $('video', this).trigger('pause');
  }, 300);
}

export const figure = () => {
  $("#hexagon").hover(hoverVideo, hideVideo);
};