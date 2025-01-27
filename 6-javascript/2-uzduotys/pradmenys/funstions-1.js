console.log('========== functions-1 ==========' );  
console.log('========== 1 uzduotis ==========' );  

function isvedimas() { 
    console.log('Rimas, pasirinkau programavima nes noriu kilti karjieros laiptais')
} 

isvedimas() 
isvedimas() 
isvedimas() 

console.log('========== 2 uzduotis ==========' ); 

function eilerastis() { 
    console.log('tyngiu galvot eilerasti'); 
    console.log('tyngiu galvot eilerasti'); 
    console.log('tyngiu galvot eilerasti'); 
    console.log('tyngiu galvot eilerasti'); 
    console.log('tyngiu galvot eilerasti');
} 

eilerastis() 
eilerastis() 
eilerastis() 
eilerastis() 
eilerastis() 

console.log('========== 3 uzduotis ==========' );  

function funkcija1() { 
    console.log('labas')
} 
function funkcija2() { 
    console.log('ka tu?')
} 
function funkcija3() { 
    console.log('ate')
} 
funkcija1() 
funkcija2() 
funkcija3() 

console.log('========== 4 uzduotis ==========' );  

sudetosEilutes(); 

function pirmaEilute() { 
    console.log('Pirma eilute');
} 
function antraEilute() { 
    console.log('antra eilute');
} 
function sudetosEilutes() { 
    pirmaEilute(); 
    antraEilute();
} 

console.log('========== 5 uzduotis ==========' ); 

function randomNumbers() { 
    let skaicius1 =  Math.floor(Math.random() * 10) + 1; 
    let skaicius2 = Math.floor(Math.random() * 10) + 1;
    let suma =  skaicius1 + skaicius2;
 
    console.log(`${skaicius1} + ${skaicius2} = ${suma}`);
} 
randomNumbers();  
randomNumbers(); 
randomNumbers();

console.log('========== 6 uzduotis ==========' ); 

function policininkas() { 
    let policininkas = { 
        vardas: 'Andrius', 
        pavarde: 'Andrijauskas', 
        amzius: 25, 
        etatas: 1, 
        alga: 1000, 
        specilizacija: 'Tyrejas'
    }; 
    console.log(policininkas);
} 
policininkas(); 

console.log('========== 7 uzduotis ==========' );  

function atsitiktiniaiSkaiciai() { 
    let skaiciuMasyvas = []; 

    for (let i = 0; i <= 10; i++){ 
        skaiciuMasyvas.push(Math.floor(Math.random() * 10) + 1);
    } 
    console.log(skaiciuMasyvas.join(' '));
}; 
for (let i = 0; i < 5; i++) { 
    atsitiktiniaiSkaiciai()
}; 

console.log('========== 8 uzduotis ==========' );  

function atsitiktinisSkaicius() { 
    console.log(Math.floor(Math.random() * 10) + 1);
}; 

for (let i = 0; i < 1; i++){ 
    atsitiktiniaiSkaiciai()
}; 


