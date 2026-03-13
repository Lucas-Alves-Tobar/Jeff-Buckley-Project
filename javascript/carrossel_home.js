const carrossel = document.querySelector('.carrossel');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

next.addEventListener('click', () => {
    carrossel.scrollLeft += 710;
});

prev.addEventListener('click', () => {
    carrossel.scrollLeft -= 725;
});