console.log('========== objects-5 ==========' );  
console.log('========== 1 uzduotis ==========' );  

let studentai = [ 
    { 
        vardas: 'Petras', 
        pavarde: 'Petraitis', 
        amzius: 19, 
        pazymiai: [6, 3, 9, 10, 9], 
        studijuPrograma: 'Biologija', 
        kursas: 1
    },
    { 
        vardas: 'Jonas', 
        pavarde: 'Jonaitis', 
        amzius: 20, 
        pazymiai: [9, 7, 9, 4, 9], 
        studijuPrograma: 'Medicina', 
        kursas: 2
    }, 
    { 
        vardas: 'Antanas', 
        pavarde: 'Antanaitis', 
        amzius: 21, 
        pazymiai: [2, 4, 6, 10, 5], 
        studijuPrograma: 'Chemija', 
        kursas: 3
    }
]; 

let bendraSuma = 0; 

for (let studentas of studentai) { 
    console.log('Studento informacija:' + ' Vardas: ' + studentas.vardas + ' Pavarde: ' +  studentas.pavarde + ' Amzius: ' + studentas.amzius + ' Studiju programa: ' +  studentas.studijuPrograma + ' Kursas: ' +  studentas.kursas);
    console.log('Pazymiai: ' + studentas.pazymiai); 

    let pazymiuSuma = 0;

    for (let pazymys of studentas.pazymiai) { 
        pazymiuSuma += pazymys;  
    }   
    let vidurkis = pazymiuSuma / studentas.pazymiai.length;
    bendraSuma += vidurkis;
    
    console.log('Pazymiu vidurkis ' + vidurkis); 
} 
console.log('Bendras vidurkis: ' + bendraSuma / studentai.length); 

console.log('========== 2 uzduotis ==========' );  

let parduotuve = { 
    pavadinimas: 'Senukai', 
    adresas: 'Klaipeda', 
    darbuotojuKiekis: 172, 
    preke: [ 
        { 
            pavadinimas: 'Pjuklas', 
            kodas: 516732, 
            kaina: 8, 
            savikaina: 3, 
            turimasKiekis: 56,
        }, 
        { 
            pavadinimas: 'Karnyzas', 
            kodas: 516733, 
            kaina: 19, 
            savikaina: 9, 
            turimasKiekis: 7,
        }, 
        { 
            pavadinimas: 'Graztas', 
            kodas: 516744, 
            kaina: 22, 
            savikaina: 11, 
            turimasKiekis: 3,
        },
    ]
}; 
console.log('Parduotuves informacija: ' + ' Pavadinimas ' + parduotuve.pavadinimas + ' Adresas: ' + parduotuve.adresas + ' Darbuotoju kiekis: ' + parduotuve.darbuotojuKiekis); 
console.log('Prekes: ' + parduotuve.preke.pavadinimas);