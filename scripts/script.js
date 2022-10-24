'use string';
const popup = document.querySelector('.popup');
const input = document.getElementById('null');

document.querySelector('.btn__close').addEventListener('click', function (e) {
  e.preventDefault();
  if (input.value == '') {
  } else {
    popup.classList.add('hidden');
  }
});
document.querySelector('.popup__close').addEventListener('click', function (e) {
  e.preventDefault();
  popup.classList.add('hidden');
});

document.querySelector('.btn').addEventListener('click', function (e) {
  e.preventDefault();
  popup.classList.remove('hidden');
});
