import $ from 'jquery';

const addClass = (selector, className, delay = 0) => {
  if (delay) {
    setTimeout(() => { $(selector).addClass(className) }, delay);
  } else {
    $(selector).addClass(className);
  }
};

/* 
  [
    [selector, className, delay],
    [selector, className, delay]
  ]
*/

export const loadOut = (animations) => {
  animations.forEach(animation => {
    addClass(...animation);
  });
};

