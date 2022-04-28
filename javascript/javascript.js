/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
/* eslint-disable func-names */
/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
// <!-- Menu Toggle Script -->
// $('#menu-toggle').click((e) => {
//   e.preventDefault();
//   $('#wrapper').toggleClass('toggled');
// });

// Change icon when button is press
/* $(() => {
  $('#menu-toggle').click(function () {
    if ($(this).find('.fa-angle-double-left').length > 0) {
      $(this).html("<i class='fas fa-angle-double-right'></i>");
    } else {
      $(this).html("<i class='fas fa-angle-double-left'></i>");
    }
  });
}); */

// $('.skills').hide();

// $(window).scroll(function () {
//   if ($(this).scrollTop() > 100 && $(this).scrollTop() < 1500) {
//     $('.skills').fadeIn(1500);
//   } else {
//     $('.skills').fadeOut(1000);
//   }
// });

//  test function
// $(() => {
//   $('.objects').click(function () {
//     if ($(this).find('#o1, #o4, #o7, #o8')) {
//       $('#o1,#o4, #o7, #o8').toggle(1500);
//     }
//   });
//   $('.allthings').click(function () {
//     if ($(this).find('.all')) {
//       $('.all').show(2000);
//     }
//   });
//   $('.oils').click(function () {
//     if ($(this).find('#o2, #o3, #o5')) {
//       $('#o2, #o3, #o5').toggle(1500);
//     }
//   });
// });

$(document).ready(() => {
  $('.image-frame').hover(
    function () {
      $('.image-caption', this).slideToggle('slow');
    },
    function () {
      $('.image-caption', this).slideToggle('slow');
    },
  );
});

/* changing arrow menu-toggle */
let count = 0;
let a = document.getElementById('menu-toggle');
a.addEventListener('click', () => {
  let b = document.getElementById('wrapper');
  b.classList.toggle('toggled');
  let c = document.getElementById('menu-toggle');
  c.innerHTML = '<i class=\'fas fa-angle-double-right\'></i>';
  count += 1;
  if (count === 2) {
    c.innerHTML = '<i class=\'fas fa-angle-double-left\'></i>';
    count -= 2;
  }
});

let frame = document.querySelectorAll('#firstrow > div');

asd = 1;
for (let i = 0; i < frame.length; i += 1) {
  frame[i].classList.add('col-xs-3', 'col-sm-3', 'col-md-3', 'col-lg-3', 'image-frame', 'p-0', 'all');
  frame[i].setAttribute('id', `id ${asd}`);
  asd += 1;
}

let selectBtn = document.querySelector('.objects').addEventListener('click', () => {
  let bbb = document.querySelectorAll('#firstrow > div');
  let ccc = '';
  for (let i = 4; i < 6; i += 1) {
    // bbb[i].classList.add('fade');
    // bbb[i].style.display = 'none';
    ccc = bbb[i];
    console.log(ccc);
  }
  setTimeout(() => {
    ccc.remove();
  }, 3000);
});
