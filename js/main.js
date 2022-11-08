// 1-box
let elBox = document.querySelector('.coffee__jumper');
let elBtn = document.querySelector('.coffee-right__title');
// 1-box

// 2-box
let elBox2 = document.querySelector('.coffee__jumper2');
let elBtn2 = document.querySelector('.coffee-right__title2');
// 2-box

// 3-box
let elBox3 = document.querySelector('.coffee__jumper3');
let elBtn3 = document.querySelector('.coffee-right__title3');
// 3-box

// 4-box
let elBox4 = document.querySelector('.coffee__jumper4');
let elBtn4 = document.querySelector('.coffee-right__title4');
// 4-box

// 5-box
let elBox5 = document.querySelector('.coffee__jumper5');
let elBtn5 = document.querySelector('.coffee-right__title5');
// 5-box

elBtn.addEventListener('click', function () {
    elBox.classList.toggle('open');
})
// 1-box

elBtn2.addEventListener('click', function () {
    elBox2.classList.toggle('open');
})
// In this case I'm calling elBtn2 elBox2 variable, declared at the top.
// 2-box

elBtn3.addEventListener('click', function () {
    elBox3.classList.toggle('open');
})
// 3-box

elBtn4.addEventListener('click', function () {
    elBox4.classList.toggle('open');
})
// 4-box

elBtn5.addEventListener('click', function () {
    elBox5.classList.toggle('open');
})
// 5-box


// JavaScript select and works for only 1 element, so I decided to create various classes, It worked along the way

