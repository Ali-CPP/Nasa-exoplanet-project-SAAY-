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

const trigger1 = main.querySelector('.1');

 

const toggleElementVisibility = (element) => {
    element.forEach(element1 => {
        element1.style.visibility = element1.style.visibility === "hidden" ? "visible" : "hidden";
    });
}

const goAway = (nom, x, y) => {
    nom.style.translate = `${x}vw ${y}vw`;
}



s1.addEventListener('mouseover', () => {
    text.style.animation = 'slideOutT 0.5s ease-in-out forwards';
    cont1.style.display = 'block';
    cont1.style.animation = 'slideInH1 0.5s ease-in-out forwards';
    
})

cont1.addEventListener('mouseover', () => {
    cont1.style.display = 'block';
})

s1.addEventListener('mouseout', () => {
    cont1.style.animation = 'slideOutH1 0.5s ease-in-out forwards';
    text.style.animation = 'slideInT 0.5s ease-in-out forwards';
});  cont1.style.display = 'none';



s2.addEventListener('mouseover', () => {
    text.style.animation = 'slideOutT 0.5s ease-in-out forwards';
    cont2.style.display = 'block';
    cont2.style.animation = 'slideInH1 0.5s ease-in-out forwards';
    
})

cont2.addEventListener('mouseover', () => {
    cont2.style.display = 'block';
})

s2.addEventListener('mouseout', () => {
    cont2.style.animation = 'slideOutH1 0.5s ease-in-out forwards';
    
    text.style.animation = 'slideInT 0.5s ease-in-out forwards';
}); cont2.style.display = 'none';



s3.addEventListener('mouseover', () => {
    text.style.animation = 'slideOutT 0.5s ease-in-out forwards';
    cont3.style.display = 'block';
    cont3.style.animation = 'slideInH1 0.5s ease-in-out forwards';
    
})

cont3.addEventListener('mouseover', () => {
    cont3.style.display = 'block';
})

s3.addEventListener('mouseout', () => {
    cont3.style.animation = 'slideOutH1 0.5s ease-in-out forwards';
    text.style.animation = 'slideInT 0.5s ease-in-out forwards';
});  cont3.style.display = 'none';



s4.addEventListener('mouseover', () => {
    text.style.animation = 'slideOutT 0.5s ease-in-out forwards';
    cont4.style.display = 'block';
    cont4.style.animation = 'slideInH1 0.5s ease-in-out forwards';
})

cont4.addEventListener('mouseover', () => {
    cont4.style.display = 'block';
})

s4.addEventListener('mouseout', () => {
    cont4.style.animation = 'slideOutH1 0.5s ease-in-out forwards';
    
    text.style.animation = 'slideInT 0.5s ease-in-out forwards';
});  cont4.style.display = 'none';



setInterval(() => {
    toggleElementVisibility(p);
}, 225)


trigger1.addEventListener('click',() => {
    goAway(trigger1);
})