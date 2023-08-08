


//2
document.addEventListener('DOMContentLoaded', function () {
  var mySwiper = new Swiper('.swiper', {

    // オプション設定
    loop: true,
    effect: 'cube',


    // スクロールバー表示の設定
    scrollbar: {
      el: ".swiper-scrollbar", //要素の指定
    },



    // スライドが切り替わった際のコールバック
    on: {
      slideChange: function () {
        updateSlideText(); // テキストを更新
      },
    },
  });

  function updateSlideText() {
    var activeSlide = document.querySelector('.swiper-slide-active');
    var slideText = activeSlide.querySelector('.slide-text').textContent;
    document.getElementById('text-display').textContent = slideText;
  }
});

var buttons = document.querySelectorAll('.content-button');
var contents = document.querySelectorAll('.content');

document.getElementById('content1').classList.add('active'); // デフォルト表示

buttons.forEach(function(button, index) {
  button.addEventListener('click', function() {
    contents.forEach(function(content) {
      content.classList.remove('active');
    });

    contents[index].classList.add('active');
  });
});
