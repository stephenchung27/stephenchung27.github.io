import $ from 'jquery';

const about = () => {
  if ($(window).scrollTop() > $(window).height() / 4) {

    $("#projects-title").addClass("visible");
    $("#about-me .title-underline").addClass("visible");
  }
}

export default about;