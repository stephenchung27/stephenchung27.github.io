import $ from 'jquery';
import { loadOut } from './utils';

export const setupArrow = () => {
  const canvas = document.getElementById("projects-arrow");
  const ctx = canvas.getContext("2d");

  const W = window.innerWidth;
  canvas.width = W;
  canvas.height = 40;

  ctx.moveTo(0, 0);
  ctx.lineTo(W / 2, 40);
  ctx.lineTo(W, 0);
  ctx.fillStyle = "#FFFFFF";
  ctx.fill();
}

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
      [".project-list li#hexagon", "visible"]
    ]);
  }
  if ($(window).scrollTop() > $(window).height() + $(window).height() / 4) {
    loadOut([
      [".project-list li#discode", "visible", 300]
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