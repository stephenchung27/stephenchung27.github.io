import $ from 'jquery';
import { loadOut } from './utils';

const about = () => {
  if ($(window).scrollTop() > $(window).height() / 4) {

    loadOut([
      ["#about-me .title-underline", "visible"],
      [".tech-name", "visible"],
      [".technologies", "visible"],
      ["#aboutme-title", "visible", 100],
      [".info", "visible", 200],
      [".picture", "visible", 100],
      [".brain", "visible", 500]
    ])

    $(".technologies").hover(() => {
      $(".tech-name").addClass("dropdown");
      $(".tech-name").html("");
    }, () => {
      $(".tech-name").removeClass("dropdown");
    });

    $('*[class^="devicon"]').hover(function() {
      const techName = $(this).attr("id");
      $(".tech-name").html(techName);
    });
  }
}

export default about;