const hamburger = document.querySelector('#ham');
const LinksEle = document.querySelector('#hidden');


hamburger.addEventListener('click', () => {
    LinksEle.style.display = 'block';
});