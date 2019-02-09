var banner = $("#banner");
var sliderDots = $(".slider-dot");
var currentDot = 1;
const counterInit = 4;
var counter = 4;

var sliderImgs = [
  "url(assets/img/bannerImg.png)",
  "url(assets/img/bannerImg.png)",
  "url(assets/img/bannerImg2.png)"
];

var init = () => {
  var slideShow = setInterval(() => {
    if(counter <= 0){
      $(sliderDots[currentDot]).toggleClass("active-slider");

      if(currentDot < sliderDots.length-1) currentDot++;
      else currentDot = 0;

      $(sliderDots[currentDot]).toggleClass("active-slider");
      $("#banner").css("background-image", sliderImgs[currentDot]);

      counter = counterInit;
    } else {
      counter--;
    }
  }, 1000);
}
init();

function changeSlider(element, num){
  // if(currentDot == element) return;
  // $(element).toggleClass("active-slider");
  // $(currentDot).toggleClass("active-slider");
  // currentDot = element;

  if(sliderDots[currentDot] == element) return;
  $(element).toggleClass("active-slider");
  $(sliderDots[currentDot]).toggleClass("active-slider");
  currentDot = num;

  counter = counterInit;

  $("#banner").css("background-image", sliderImgs[num]);
}


$('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 600);
    }
});
