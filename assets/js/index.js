import $ from 'jquery';
import runSplash from './splash';
import projects, { figure } from './projects';
import drawWaves from './waves';
import about from './about';
// import * as Waypoints from 'waypoints';

document.addEventListener("DOMContentLoaded", () => {
  runSplash();
  figure();
  drawWaves();

  $(document).scroll(() => {
    about();
    projects();
  });

  $('.scroll-to-about-me').click((e) => {
    const jump = $('.scroll-to-about-me').attr('href');
    const new_position = $(jump).offset();
    $('html, body').stop().animate({ scrollTop: new_position.top }, 1000);
    e.preventDefault();
  });
  $('.scroll-to-projects').click((e) => {
    const jump = $('.scroll-to-projects').attr('href');
    const new_position = $(jump).offset();
    $('html, body').stop().animate({ scrollTop: new_position.top }, 1000);
    e.preventDefault();
  });
});