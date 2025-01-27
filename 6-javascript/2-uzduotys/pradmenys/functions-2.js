console.log('========== functions-2 ==========' );  
console.log('========== 1 uzduotis ==========' );  


function pasisveikinti(name) { 
    console.log('Labas ' + name);
};

function atsisveikinti(name) { 
    console.log('Viso gero ' + name);
};  

let name = 'Tomas'; 

pasisveikinti(name); 
atsisveikinti(name); 

console.log('========== 2 uzduotis ==========' ); 

function kurisDidesnis (a, b) { 
    if (a === b) { 
        console.log('Skaiciai yra lygus');
    } else if (a > b) { 
        console.log(`${a} yra didesnis uz ${b}`);
    } else { 
        console.log(`${b} yra didesnis uz ${a}`);
    };
   
}; 
kurisDidesnis(12, 12); 

console.log('========== 3 uzduotis ==========' );

function auto(marke, modelis, gamybosMetai, darbinisTuris) { 
console.log('Automobilio marke: ', marke); 
console.log('Automobilio modelis: ', modelis); 
console.log('Automobilio gamybos metai: ', gamybosMetai); 
console.log('Automobilio darbinis turis ', darbinisTuris); 
}; 

auto('Mercedez-Benz', 'CLS', 2017, '5l');  
console.log('====================' );
auto('BMW', 'M5', 2019, '5l' ); 

console.log('========== 4 uzduotis ==========' );

function suma4(a, b) { 
    console.log(`${a} + ${b} = ${a + b}`);
} 
function skirtumas4(a, b) { 
    console.log(`${a} - ${b} = ${a - b}`);
};  
function sandauga4(a, b) { 
    console.log(`${a} * ${b} = ${a * b}`);
} 
function dalmuo4(a, b) { 
    console.log(`${a} / ${b} = ${a / b}`);
}; 
function pilnaFunkcija(){ 
    let sk1 = Math.floor(Math.random() * 10) + 1; 
    let sk2 = Math.floor(Math.random() * 10) + 1; 
    suma4(sk1, sk2); 
    skirtumas4(sk1, sk2); 
    sandauga4(sk1, sk2); 
    dalmuo4(sk1, sk2);
};  

for (let i = 0; i < 4; i++){ 
    pilnaFunkcija(); 
    console.log('===============')
};


