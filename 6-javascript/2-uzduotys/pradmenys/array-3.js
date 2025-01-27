console.log('======  1 uzduotis  ========='); 

let Zodziai = ['medis', 'tvora', 'siena', 'durys', 'langas']; 

for (let zodis in Zodziai) { 
    console.log(zodis + '-' + Zodziai[zodis]);
} 

console.log('======  2 uzduotis  ========='); 

let pirkiniai = ['pienas', 'duona', 'sviestas', 'agurkai', 'sausainiai']; 
console.log(pirkiniai.length + ' Pirkiniu skaicius'); 

for (let pirkinys in pirkiniai){ 
console.log('-' + pirkiniai[pirkinys]);
} 

console.log('======  3 uzduotis  ========='); 

let pazymiai = [2, 6, 10, 7, 4, 8, 3]; 
suma = 0; 

for (let pazimys of pazymiai){ 
    suma += pazimys
}
vidurkis = suma / pazymiai.length; 
console.log('pazymiai', pazymiai); 
console.log('vidurkis', vidurkis); 

console.log('======  4 uzduotis  =========');  

let atstumai = [120, 90, 190, 155, 60, 160, 122]; 

for (let atstumas in atstumai){ 
    if (atstumas > 150 ) { 
        console.log('atstumai kurie didesni uz 150km ' + atstumas);
    }
}
console.log('======  6 uzduotis  =========');   

let likuciai = [74, 54, 32]; 
let perDienaPerka = 5; 

for (let likutis of likuciai){ 
    console.log(likutis + 'vnt uzteks mazdaug tiek dienu: ' + Math.round(likutis/perDienaPerka));
} 

console.log('======  7 uzduotis  ========='); 

let studentuPazymiai = []; 
pazymiuKiekis = 10;

for (let i = 0; i < pazymiuKiekis; i++){ 
    studentuPazymiai.push(Math.floor(Math.random() * 10) + 1);
} 
console.log(studentuPazymiai); 

let pazymiuSuma3 = 0; 

for (let pazymys of pazymiai){ 
    pazymiuSuma3 += pazymys;
} 
console.log('Vidurkis ', pazymiuSuma3 / studentuPazymiai.length);

let teigiamiSkaiciai = []; 
let neigiamiSkaicai = [];

for (let pazymys of pazymiai){ 
    if (pazymys >= 5){ 
        teigiamiSkaiciai.push(pazymys);
    } else { 
        neigiamiSkaicai.push(pazymys);
    }
} 
console.log('teigiami pazymiai ', teigiamiSkaiciai); 
console.log('neigiami pazymiai ', neigiamiSkaicai); 

console.log('======  8 uzduotis  ========='); 

let pazymiai1 = [9, 6, 8, 7, 10]; 
suma1 = 0; 
vidurkis1 = 0;

let pazymiai2 = [7, 5, 6, 2, 4]; 
suma2 = 0; 
vidurkis2 = 0;

for( pazymys1 of pazymiai1){ 
    suma1 += pazymys1; 
} 
vidurkis1 = suma1 / pazymiai1.length; 

for( pazymys2 of pazymiai2){ 
    suma2 += pazymys2; 
} 
vidurkis2 = suma2 / pazymiai2.length; 

console.log(`Pirmo mokinio pazymiai: ${pazymiai1}`); 
console.log(`Antro mokinio pazymiai: ${pazymiai2}`); 

console.log(`Pirmo mokinio vidurkis: ${vidurkis1}`); 
console.log(`Antro mokinio vidurkis: ${vidurkis2}`); 

if (vidurkis1 > vidurkis2){ 
    console.log('Pirmo mokinio vidurkis didesnis');
} else { 
    console.log('Antro mokinio vidurkis didesnis');
}