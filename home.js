const hamburger = document.querySelector('#ham');
const LinksEle = document.querySelector('#hidden');
const cutEle = document.getElementById('cross');
const searchEle = document.querySelector('#search');
const hideEle = document.querySelector('#hide-btn');
const searchbtn = document.querySelector('.search-btn');


hamburger.addEventListener('click', () => {
    LinksEle.style.display = 'flex';
    hamburger.style.display = "none";
    searchEle.style.display = 'none';
    searchbtn.style.display = 'block';
});

cutEle.addEventListener('click', () => {
    LinksEle.style.display = "none";
    hamburger.style.display = "block";
    searchEle.style.display = 'flex';
    // hideEle.style.display = 'block';
});

hideEle.addEventListener('click', () => {
    LinksEle.style.display = 'flex';
    // hideEle.style.display = 'none';
    searchbtn.style.display = 'block';
});