const trigger1 = document.querySelector('.3ah');

const goAway = (nom, x, y) => {
    nom.style.translate = `${x}vw ${y}vw`;
}

trigger1.addEventListener('mouseover', () => {
    goAway(trigger1, -100, 100);
})