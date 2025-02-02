let skaicius = 1;
let mygtukas = document.querySelector('button'); 
let tekstas = document.querySelector('p span');  
let papildomasTekstas = document.querySelector('.info');

mygtukas.addEventListener('click', () => { 
    skaicius++; 
    tekstas.innerHTML = skaicius; 

    if (skaicius < 10) { 
        papildomasTekstas.computedStyleMap.font = 'black'; 
        papildomasTekstas.innerHTML = 'Dar tik pradzia'; 
        papildomasTekstas.style.cssText = 'color: white; background-color: yellow'; 
    }; 

    if (skaicius > 10 && skaicius < 20) { 
        papildomasTekstas.computedStyleMap.font = 'black'; 
        papildomasTekstas.innerHTML = 'pasiekta 10';  
        papildomasTekstas.style.cssText = 'color: white; background-color: orange'; 
    }; 

    if (skaicius > 20) { 
        papildomasTekstas.computedStyleMap.font = 'black'; 
        papildomasTekstas.innerHTML = 'virsyta 20';  
        papildomasTekstas.style.cssText = 'color: white; background-color: red'; 
    }; 
}); 

    

