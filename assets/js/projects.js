import $ from 'jquery';
import { loadOut } from './utils';

const projects = () => {
  console.log($(window).scrollTop());
  console.log($(window).height())
  if ($(window).scrollTop() > $(window).height()) {
    loadOut([
      ["#projects-title", "visible"]
    ]);
  }
  if ($(window).scrollTop() > $(window).height() + $(window).height() / 5) {
    loadOut([
      [".project-list li", "visible"]
    ]);
  }
}

const playVideo = function (e) {
  $('video').addClass('play');
  $('video').trigger('play');
}

const pauseVideo = function (e) {
  $('video').trigger('pause');
}

export const figure = () => {
  $("#hexagon-demo").hover(playVideo, pauseVideo);
};

export default projects;