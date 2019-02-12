import $ from 'jquery';
import runSplash from './splash';
import { figure } from './projects';
import drawWaves from './waves';
import about from './about';
// import * as Waypoints from 'waypoints';

document.addEventListener("DOMContentLoaded", () => {
  runSplash();
  figure();
  drawWaves();

  $(document).scroll(() => {
    about();
  });

  $('.scroll-to').click((e) => {
    const jump = $('.scroll-to').attr('href');
    const new_position = $(jump).offset();
    $('html, body').stop().animate({ scrollTop: new_position.top }, 1000);
    e.preventDefault();
  });
});