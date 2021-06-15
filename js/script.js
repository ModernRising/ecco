"use strict";

$('.slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 550,
  });

  const toggleActive = function () {
    let btns = document.querySelectorAll(".btn__choice");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function() {
        let current = document.getElementsByClassName("btn__choice_active");
        current[0].className = current[0].className.replace(" btn__choice_active", "");
        this.className += " btn__choice_active";
      });
    }
  };
 toggleActive();

 $('[data-open-block').on('click', function() {
	const activeCls = 'advantages__demo_active';
	$('[data-content]').removeClass(activeCls);
  $(`[data-content="${$(this).data('open-block')}"`).addClass(activeCls);
});

const slide = document.querySelector(".slide");
const slide2 = document.querySelector(".slide_right");
const shoes1 = document.querySelector(".products__shoes-1");
const shoes2 = document.querySelector(".products__shoes-2");

slide.addEventListener("click", () => {
  shoes1.classList.toggle("products__shoes-1_animate");
  shoes2.classList.toggle("products__shoes-2_animate");
});
slide2.addEventListener("click", () => {
  shoes1.classList.toggle("products__shoes-1_animate");
  shoes2.classList.toggle("products__shoes-2_animate");
});