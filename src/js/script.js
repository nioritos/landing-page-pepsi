const $body = document.querySelector('body');
const $imgHome = document.querySelector('.box-image-home');

const pepsiBlue = document.querySelector('.pepsi-blue');

pepsiBlue.addEventListener('click', () => {
    $body.style.transition = '0.5s';
    $body.style.background = '#0062BE';
    $imgHome.innerHTML = '<img class="image-pepsi"src="./assets/imgs/images/pepsi001.png" alt="Image Pepsi" width="260px" height="493px">'
});

const pepsiWhite = document.querySelector('.pepsi-white');

pepsiWhite.addEventListener('click', () => {
    $body.style.transition = '0.5s';
    $body.style.background = '#E60C2C';
    $imgHome.innerHTML = '<img class="image-pepsi"src="./assets/imgs/images/pepsi002.png" alt="Image Pepsi" width="260px" height="493px">'
});

const pepsiBlack = document.querySelector('.pepsi-black');

pepsiBlack.addEventListener('click', () => {
    $body.style.transition = '0.5s';
    $body.style.background = '#0A0D0E';
    $imgHome.innerHTML = '<img class="image-pepsi"src="./assets/imgs/images/pepsi003.png" alt="Image Pepsi" width="260px" height="493px">'
});