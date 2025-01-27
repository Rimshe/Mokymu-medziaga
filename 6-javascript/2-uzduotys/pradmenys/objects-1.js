console.log('========== objects  ==========' );   
console.log('========== 1 uzduotis ==========' );   

let studentoDuomenys = { 
    vardas: 'Petras', 
    pavarde: 'Petraitis', 
    amzius: 21, 
    studijuPrograma: 'programavimas', 
    atsiskaitytuKRedituSkaicius: 2, 
    pazymiai: [5, 10, 9, 7], 
    ugis: '199cm', 
    kelintasKursas: 2, 
    mokykla: 'Kaimo mokykla'
} 
console.log(studentoDuomenys);
console.log('pazymsiai ' + studentoDuomenys.pazymiai); 
console.log('Mokykla ' + studentoDuomenys.mokykla); 

console.log('========== 2 uzduotis ==========' ); 

console.log('========== 3 uzduotis ==========' ); 

let knyga1 = { 
    pavadinimas: 'Petro nuotykiai', 
    autorius: 'Antanas Petraitis', 
    zanras: 'veiksmo', 
    kaina: 17,
    puslapiuKiekis: 217,  
    skyriuSarasas: ['1skyrius', '2skyrius', '3skyrius', '4skyrius'],
    isleidimoMetai: 2020, 
    galimaPirktiKnigyne: true
} 

let knyga2 = { 
    pavadinimas: 'Antano Romanas', 
    autorius: 'Petras Antanaitiss', 
    zanras: 'Romanas', 
    kaina: 12,
    puslapiuKiekis: 356,  
    skyriuSarasas: ['1skyrius', '2skyrius', '3skyrius', '4skyrius', '5skyrius', '6skyrius'],
    isleidimoMetai: 2017, 
    galimaPirktiKnigyne: true
} 
console.log(knyga1); 
console.log(knyga2); 
if (knyga1.puslapiuKiekis < knyga2.puslapiuKiekis) { 
    console.log('knyga1 plonesne');
} else { 
    console.log('knyga2 plonesne');
} 
if (knyga1.skyriuSarasas.length > knyga2.skyriuSarasas.length) { 
    console.log('knyga1 turi daugiau skyriu');
} else { 
    console.log('knyga2 turi daugiau skyriu');
}
if ((knyga2.kaina * 2) > knyga1.kaina) { 
    console.log('padvigubinta knygos kaina pasidare brangesne uz kita knyga')
} else { 
    console.log('padvigubinta knygos kaina nepasipasidare brangesne uz kita knyga')
} 

console.log('========== 4 uzduotis ==========' ); 
 
console.log('========== 5 uzduotis ==========' );  

let automobilis = {} 

automobilis.marke = 'porshe'; 
automobilis.modelis = '911'; 
automobilis.rida = 10000; 
automobilis.metai = 2010; 
automobilis.spalva = 'salotine'; 
automobilis.turi = 2.0; 
automobilis.arDauzta = false; 
automobilis.arParduodama = true; 

console.log(automobilis);

let dabartiniaiMetai =  new Date(Date.now()).getFullYear(); 
let metuSkirtumas = dabartiniaiMetai - automobilis.metai; 

console.log('automobiliui yra: ' + dabartiniaiMetai - automobilis.metai + ' metai'); 
 
if (metuSkirtumas > 0) { 
    console.log( 
        'per metus nuvaziuoja: ' + (automobilis.rida / metuSkirtumas).toFixed(2) + ' km'); 
} else { 
    console.log(automobilis.rida.toFixed(2));
}
