const teens = document.querySelector('body');

const text = teens.querySelector('.text');

const s1 = teens.querySelector('.s1');
const s2 = teens.querySelector('.s2');
const s3 = teens.querySelector('.s3');
const s4 = teens.querySelector('.s4');

const cont1 = teens.querySelector('.ho1');
const cont2 = teens.querySelector('.ho2');
const cont3 = teens.querySelector('.ho3');
const cont4 = teens.querySelector('.ho4');

const main = teens.querySelector('.main');
const p = main.querySelectorAll('p');

const trigger1 = document.querySelector('.trigger1');
const trigger2 = document.querySelector('.trigger2');
const trigger3 = document.querySelector('.trigger3');
const trigger4 = document.querySelector('.trigger4');

const all1 = document.querySelector('.all.one');
const all2 = document.querySelector('.all.two');
const all3 = document.querySelector('.all.three');
const all4 = document.querySelector('.all.four');



function easier(nom, cont) {
    nom.addEventListener('mouseover', () => {
        text.style.animation = 'slideOutT 0.5s ease-in-out forwards';
        cont.style.display = 'block';
        cont.style.animation = 'slideInH1 0.5s ease-in-out forwards';
        
    })
    
    cont.addEventListener('mouseover', () => {
        cont.style.display = 'block';
    })
    
    nom.addEventListener('mouseout', () => {
        cont.style.animation = 'slideOutH1 0.5s ease-in-out forwards';
        text.style.animation = 'slideInT 0.5s ease-in-out forwards';
    });  cont.style.display = 'none';
}

const toggleElementVisibility = (element) => {
    element.forEach(element1 => {
        element1.style.visibility = element1.style.visibility === "hidden" ? "visible" : "hidden";
    });
}

const goAway = (nom, nom2) => {
    nom.addEventListener('click', () => {
        nom.style.animation = 'goAway 0.5s ease-in forwards';
        setTimeout(() => {
            nom.style.display = 'none';
            nom2.style.display = 'block';
          }, 500);

        nom2.style.animation = 'goIn 0.5s ease-in forwards';
    })

    nom2.addEventListener('click', () => {
        nom2.style.animation = 'goAway 0.5s ease-in forwards';
        setTimeout(() => {
            nom2.style.display = 'none';
            nom.style.display = 'block';
          }, 500);

        nom.style.animation = 'goIn 0.5s ease-in forwards';
    })
}



easier(s1, cont1);
easier(s2, cont2);
easier(s3, cont3);
easier(s4, cont4);

setInterval(() => {
    toggleElementVisibility(p);
}, 225);

goAway(trigger1, all1);
goAway(trigger2, all2);
goAway(trigger3, all3);
goAway(trigger4, all4);