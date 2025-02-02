function changeTextElementFontWeight(value) { 
    textElement.style.fontWeight = value;
}; 

function toggleActiveButton(button) { 
    if ( button.classList.contains('active')) { 
        button.classList.remove('active');
    } else { 
        button.classList.add('active');
    }
}

let buttonBasic = document.getElementById('buttonBasic'); 
let buttonBold = document.getElementById('buttonBold'); 
let buttonItalic = document.getElementById('buttonItalic'); 
let textElement = document.querySelector('p.text'); 
let inputFontSize = document.getElementById('inputFontSize');

inputFontSize.addEventListener('input', (event) => { 
    textElement.style.fontSize = inputFontSize.valueAsNumber + 'px';
}); 

buttonBasic.addEventListener('click', () => {  
    if ( buttonBasic.classList.contains('active')) { 
        buttonBasic.classList.remove('active');
    } else { 
        buttonBasic.classList.add('active');
    } 
    changeTextElementFontWeight(300);
});

buttonBold.addEventListener('click', () => {  
    if ( buttonBold.classList.contains('active')) { 
        buttonBold.classList.remove('active');
    } else { 
        buttonBasic.classList.add('active'); 
    }
    changeTextElementFontWeight(700);
}); 
buttonItalic.addEventListener('click', () => {    
    if ( buttonItalic.classList.contains('active')) { 
        buttonItalic.classList.remove('active');
    } else { 
        buttonBasic.classList.add('active'); 
    }
    buttonItalic.classList.contains('active');

    const italicStyleName = 'Italic';  

    if (textElement.style.FontStyle === italicStyleName) { 
        textElement.style.fontStyle = 'Normal';
    } else{ 
        textElement.style.fontStyle = italicStyleName
    }
});

