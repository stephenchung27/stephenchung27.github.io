import $ from 'jquery';

const about = () => {
  if ($(window).scrollTop() > $(window).height() / 4) {

    $("#projects-title").addClass("visible");
    $("#about-me .title-underline").addClass("visible");
    $(".picture").addClass("visible");
    setTimeout(() => {$(".info").addClass("visible")}, 200);
    setTimeout(() => {
      $(".tech-name").addClass("visible");
      $(".technologies").addClass("visible")
    }, 200);
    setTimeout(() => { $(".brain").addClass("visible") }, 500);

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