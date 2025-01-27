console.log('========== functions-3 ==========' );  
console.log('========== 1 uzduotis ==========' );   

function masyvoZodis(mas) { 
    for (let item of mas) { 
        console.log(item + ' ' + item.length);
    } 
}
let zodis = ['pienas', 'sviestas', 'pomidorai', 'vanduo']; 
masyvoZodis(zodis); 

console.log('========== 2 uzduotis ==========' );  

function skaiciavimoFunkcija(mas){  
    for (let item of mas) { 
        console.log(`${item} * ${item} / 2 = ${(item * item) / 2}`); 
    } 
    console.log('============')
} 

let skMasyvas1 = [6, 3, 4, 9]; 
let skMasyvas2 = [2, 3, 1, 4];

skaiciavimoFunkcija(skMasyvas1); 
skaiciavimoFunkcija(skMasyvas2); 

console.log('========== 3 uzduotis ==========' ); 

// function isvestiStudentoVidurki(studentas) { 
//     let suma = 0; 

//     for (let value of studentas.pazymiai) { 
//         suma += value;
//     } 
//     let vidurksi = (suma / studentas.pazymiai.length).toFixed(2); 
//     console.log(`${studentas.vardas} ${studentas.pavarde} vidurkis yra: ${vidurksi}`);
// };

 
// let studentai = [ 
//     { 
//         pazymiai: [ 7, 8, 2, 10], 
//         vardas: 'Jonas', 
//         pavarde: 'Jaonaitis'
//     },
//     {
//         pazymiai: [ 7, 8, 2, 10, 4, 3], 
//         vardas: 'Petras', 
//         pavarde: 'Paitis'
//     }
// ]; 

// for (studentas of studentai) { 
//     isvestiStudentoVidurki(studentas)
// }; 

// console.log('========== 4 uzduotis ==========' ); 
