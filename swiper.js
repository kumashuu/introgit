// let mySwiper = new Swiper(".swiper", {

//   // オプション設定
//   loop: true,
//   effect: 'cube',

//   // 以下のコードは省略可能
//   //ページネーション表示設定
//   pagination: {
//     el: ".swiper-pagination", //ページネーション要素
//     type: "bullets", //ページネーションの種類
//     clickable: true, //クリックに反応させる
//   },

//   //ナビゲーションボタン（矢印）表示の設定
//   navigation: true,
//   navigation: {
//     nextEl: ".swiper-button-next", //「次へボタン」要素の指定
//     prevEl: ".swiper-button-prev", //「前へボタン」要素の指定
//   },

//   // スクロールバー表示の設定
//   scrollbar: {
//     el: ".swiper-scrollbar", //要素の指定
//   },
//   //ここまで省略可能
// });


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