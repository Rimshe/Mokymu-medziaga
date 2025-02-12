let mygtSpeti = document.getElementById('speti'); 
let kartai = 0; 
mygtSpeti.addEventListener('click', () => {  
 
    kartai++;

    let answer = 69; 
    let spejimas = document.getElementById('spejimas').value; 
    let resultDiv = document.getElementById('result');  
    

    if (spejimas > answer) {   

        resultDiv.innerHTML = `<p>Spekite <span>Mazesni</span> skaiciu</p>` 
        document.querySelector('.sumazinti').style.fontSize = '27px';  
        document.querySelector('.result-container').style.display = 'flex'; 
    } else if (spejimas < answer) {  
        resultDiv.innerHTML = `<p>Spekite <span>Didesni</span> skaiciu</p>`  
        document.querySelector('.result-container').style.display = 'flex'; 
    }else { 
        document.querySelector('#atspejote').style.display = 'flex'; 
        document.querySelector('#container-wrapper').style.display = 'none'; 

        document.querySelector('.atspetas-rezultatas').innerHTML = `<p><strong>Atspeti jums pavyko is <span>${kartai} karto</span>!</strong></p>`;
    }

});  


let mygtPlayAgain = document.getElementById('play-again'); 
mygtPlayAgain.addEventListener('click', () => {  
    document.getElementById('spejimas').value = 0;
    kartai = 0;
    document.querySelector('.sumazinti').style.fontSize = '50px'; 
    document.querySelector('#atspejote').style.display = 'none'; 
    document.querySelector('#container-wrapper').style.display = 'flex'; 
    document.querySelector('.result-container').style.display = 'none';  
});



