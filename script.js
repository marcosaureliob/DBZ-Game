const goku = document.querySelector('.goku');
const vegeta = document.querySelector('.vegeta');

const jump = () => {
    goku.classList.add('jump');
    setTimeout(() =>{
        goku.classList.remove('jump');
    }, 1000)
} 

const loop = setInterval(() =>{
    const vegetaPosition = vegeta.offsetLeft;
    const gokuPosition = +window.getComputedStyle(goku).bottom.replace('px', '');

    if(vegetaPosition <= 100 && vegetaPosition > 0 && gokuPosition < 80) {
     
        vegeta.style.animation = 'none';
        vegeta.style.left = `${vegetaPosition}px`;
   
        goku.style.animation = 'none';
        goku.style.bottom = `${gokuPosition}px`;
    
        goku.src = './imagens/gokuSofrido.jpg';
        goku.style.width = '80px';
        goku.style.marginLeft = '50px';

        clearInterval(loop);
    }

}, 10)

document.addEventListener('keydown', jump);

