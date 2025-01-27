console.log('========== objects-2 ==========' );  
console.log('========== 1 uzduotis ==========' );  

let knygynas = { 
    pavadinimas: 'Pegasas', 
    adresas: 'Bangu 6', 
    plotas: 350, 
    knyguSkaicius: 512, 
    darboValandos: 9, 
    arDirba: true
}; 

for (let raktas in knygynas) { 
    console.log('savybe: ' + raktas + ' reiksme:' + knygynas[raktas]); 

    if (typeof knygynas[raktas] !== 'string') { 
        console.log('not string : ' + raktas);
    }
}   

console.log('========== 2 uzduotis ==========' );   

let studentas1 = { 
    vardas: 'name', 
    pavarde: 'surname', 
    studijuProgramosPavadinimas: 'matematika', 
    pazymiai: [1, 2, 5, 8]
}; 

let studentas2 = { 
    vardas: 'name2', 
    pavarde: 'surname2', 
    studijuProgramosPavadinimas: 'chemija', 
    pazymiai: [1, 2, 5, 8, 9, 10, 4]
}; 

let suma = 0; 
for (let pazymys of studentas1.pazymiai) { 
    suma += pazymys;
}
 
studentas1.pazVidurkis = (suma / studentas1.pazymiai.length).toFixed(2); 
console.log(studentas1);
 
suma = 0; 
for (let pazymys of studentas2.pazymiai) { 
    suma += pazymys;
}
 
studentas2.pazVidurkis = (suma / studentas2.pazymiai.length).toFixed(2); 
console.log(studentas2); 

if (studentas1.pazVidurkis > studentas2.pazVidurkis) { 
    console.log(studentas1.vardas); 
    console.log(studentas1.pavarde);
} else { 
    console.log(studentas2.vardas); 
    console.log(studentas2.pavarde);
}
