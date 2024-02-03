import Content from "./card-contents.js";

var enable3d = window.innerWidth > 1200;
var midScreen = [window.innerWidth / 2, window.innerHeight / 2];
var calcX = 0;
var calcY = 0;
var lastMovement = Date.now() + 4000;
var currentCard = null;

$(document).ready(() => {
  var mainContainer = $("#mainContainer");
  var overlay = $("#overlay");
  var clickOverlay = $("#clickOverlay");
  var modalCard = $("#infoModal");
  var modalContent = $("#cardContent");
  var cardArrow = $("#cardArrow");
  var animationContainer = $("#animationContainer");

  var enableOverlay = function () {
    clickOverlay.addClass("click-overlay");
    overlay.addClass("blur-filter");
    currentCard.addClass("rotationTrigger");
    modalCard.addClass("slideTransition");
    animationContainer.addClass("opacityTrigger");
  };

  var disableOverlay = function () {
    clickOverlay.removeClass("click-overlay");
    overlay.removeClass("blur-filter");
    currentCard.removeClass("rotationTrigger");
    modalCard.removeClass("slideTransition");
    animationContainer.removeClass("opacityTrigger");
  };

  var effect3d = (e) => {
    var now = Date.now();
    if (lastMovement + 150 < now) {
      calcX = (e.pageX - midScreen[0]) / midScreen[0];
      calcY = (e.pageY - midScreen[1]) / midScreen[1];
      mainContainer.css({
        "transform": `rotateY(${calcX * 15}deg) rotateX(${-calcY * 15}deg)`,
        "box-shadow": `rgba(0, 0, 0, 0.25) ${-calcX * 50}px ${
          -calcY * 50
        }px 10px`,
      });
      lastMovement = now;
    }
  };

  $(window).on("resize", function () {
    midScreen = [window.innerWidth / 2, window.innerHeight / 2];
  });

  $(document).on("mousemove", (event) => (enable3d ? effect3d(event) : null));

  $(".card-small").on("click", function () {
    currentCard = $(this);
    var content = Content.cardContents[currentCard.index()];

    modalContent.empty();
    $.get(content, null, function (e) {
      modalContent.append(e);
    });

    enableOverlay();
  });

  overlay.on("click", disableOverlay);

  cardArrow.on("click", disableOverlay);
});
