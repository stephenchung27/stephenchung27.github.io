import $ from 'jquery';
import runSplash from './splash';
import {figure} from './projects';
// import * as Waypoints from 'waypoints';

document.addEventListener("DOMContentLoaded", () => {
  runSplash();
  figure();

  $('.scroll-to').click((e) => {
    const jump = $('.scroll-to').attr('href');
    const new_position = $(jump).offset();
    $('html, body').stop().animate({ scrollTop: new_position.top }, 1000);
    e.preventDefault();
  });
  
});