import $ from 'jquery';
import runSplash from './splash';
import {figure} from './projects';
import drawWaves from './waves';
// import * as Waypoints from 'waypoints';

document.addEventListener("DOMContentLoaded", () => {
  runSplash();
  figure();
  drawWaves();
  
  $(document).scroll(() => {
    console.log(Math.floor($(window).scrollTop() / $(window).height()));
  });
  
  $('.scroll-to').click((e) => {
    const jump = $('.scroll-to').attr('href');
    const new_position = $(jump).offset();
    $('html, body').stop().animate({ scrollTop: new_position.top }, 1000);
    e.preventDefault();
  });
});