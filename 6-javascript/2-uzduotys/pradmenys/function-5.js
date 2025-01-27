console.log('========== functions-5 ==========');
console.log('========== 1 uzduotis =========='); 

function skaiciuSuma(masyvas) { 
    let suma = 0; 
    for (let sk of masyvas) { 
        suma += sk;
    }; 
    return suma;
};

let skaiciuMasyvas1 = [3, 9, 4, 8]; 
let skaiciuMasyvas2 = [1, 10, 4, 5]; 

console.log('pirmas masyvas ' + skaiciuSuma(skaiciuMasyvas1)); 
console.log('antras masyvas ' + skaiciuSuma(skaiciuMasyvas2));  

if (skaiciuSuma(skaiciuMasyvas1) > skaiciuSuma(skaiciuMasyvas2)) { 
    console.log('pirmo masyvo suma didesne')
} else { 
    console.log('antro masyvo suma didesne')
};

console.log('========== 2 uzduotis =========='); 

function ilgiausiasZodis(zodziai) {  
    let ilgiausias = zodziai[0]; 

    for (let i = 1; i < zodziai.length; i++) {  
        if (zodziai[i].length > ilgiausias.length) {  
            ilgiausias = zodziai[i];  
        }
    }
    return ilgiausias;  
}

let zodziuMasyvas = ['vienas', 'du', 'trys'];  


let ilgiausias = ilgiausiasZodis(zodziuMasyvas);
console.log(`Ilgiausias žodis: "${ilgiausias}", jo ilgis yra: ${ilgiausias.length}`); 

console.log('========== 3 uzduotis =========='); 



console.log('========== 1 uzduotis ==========');  

let darbuotojas = { 
    vardas: 'Petras', 
    pavarde: 'Petraitis', 
    dabartinisAtlyginimas: 1000, 
    etatas: 1, 

    pakeltiAtlyginima: function(procentas) { 
        let naujasAtlyginimas = (this.dabartinisAtlyginimas  * procentas / 100); 
        return naujasAtlyginimas;
    }, 

    pakeistiEtata: function(naujasEtatas) {
        let naujasAtlyginimas = this.dabartinisAtlyginimas  * naujasEtatas;
        return naujasAtlyginimas;
    }
};

    let pakeltasAtlyginimas = darbuotojas.pakeltiAtlyginima(20);  
    let naujasAtlyginimasPoEtato = darbuotojas.pakeistiEtata(0.5);  
    
    console.log(`${darbuotojas.vardas} ${darbuotojas.pavarde} naujas atlyginimas po 20% pakėlimo: ${pakeltasAtlyginimas}`);
    console.log(`${darbuotojas.vardas} ${darbuotojas.pavarde} naujas atlyginimas po etato pakeitimo į 0.5: ${naujasAtlyginimasPoEtato}`);
