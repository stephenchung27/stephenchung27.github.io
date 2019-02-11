import $ from 'jquery';
import runSplash from './splash';
// import * as Waypoints from 'waypoints';

document.addEventListener("DOMContentLoaded", () => {
  runSplash();

  $('.scroll-to').click((e) => {
    const jump = $('.scroll-to').attr('href');
    const new_position = $(jump).offset();
    $('html, body').stop().animate({ scrollTop: new_position.top }, 500);
    e.preventDefault();
  });
  
});