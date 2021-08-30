
// スライド
// const back = document.getElementById('h-main');
// const setImg = [
//   './home/img/main_blue.jpg',
//   './home/img/main_red.jpg',
//   './home/img/main_green.jpg',
// ];

// let counter = 0;

// function slidImg() {

//   if(counter >= setImg.length) {
//     counter = 0;
//   }
//   back.style.backgroundImage = 'url('+setImg[counter]+')';
//   counter++;

//   fade();
// }

// setInterval('slidImg()',10000);

// function fade() {

// back.animate([{opacity: '0.2'}, {opacity: '1'}], 2000);
  
// }


// ハンバーガーメニュー
const hideList = document.getElementById('hide-list');
const icon = document.getElementById('icon');

icon.addEventListener('click', function(){
  hideList.classList.toggle('display-none');
  
});


// アコーディオン
const show = document.getElementById('show-topics');
const close = document.getElementById('close-topics');
const more = document.getElementById('more-topics');



show.addEventListener('click',function()  {
  more.style.display = 'block';
  // more.animate([{display:'none'},{display:'block'}],1500);
  // more.classList.add('anime');
  show.style.display = 'none';
  close.style.display = 'block';
});


close.addEventListener('click',function(){
  more.style.display = 'none';
  show.style.display = 'block';
  close.style.display = 'none';
});


// トップ色変え
const logoCC = document.getElementById('logoCC');
const listCC = document.getElementById('listCC');


function changeColor() {
  logoCC.src = './common/img/logo2.png';
  icon.style.color = 'black';
  listCC.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
  
}



setInterval('changeColor()',29000);
// setInterval('changeColor()',3000);