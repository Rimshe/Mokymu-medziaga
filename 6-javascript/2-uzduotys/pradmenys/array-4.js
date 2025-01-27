console.log('======  1 uzduotis  ========='); 
let patiekalai = ['Lazanija', 'pica', 'mesainis', 'kotletai', 'cepelinai']; 
console.log(patiekalai); 
patiekalai.push('sakotis'); 
console.log(patiekalai); 
patiekalai.unshift('sriuba'); 
console.log(patiekalai); 
patiekalai.splice(2, 0, 'kebabas', 'makaronai'); 
console.log(patiekalai);  
patiekalai.splice(1, 3,);  
console.log(patiekalai);   

console.log('======  2 uzduotis  =========');  

let skaiciuMasyvas = [2, 6, 7, 8]; 
console.log(skaiciuMasyvas); 

let arYra = skaiciuMasyvas.includes(8);
console.log('ar yra 8 ', arYra);

console.log('======  3 uzduotis  =========');  

let randomZodziai = ['oras', 'zeme', 'vanduo', 'ugnis']; 
let tekstas = randomZodziai.join('-'); 
console.log('sujungtas ', tekstas); 

console.log('======  4 uzduotis  =========');  

let pazymiuMAsyvas = [10, 6, 5, 3, 2, 1]; 
let surikiuotiPazymiai = pazymiuMAsyvas.slice().sort((a, b) => a - b); 
let iskarpa = surikiuotiPazymiai.slice(0, 3);
console.log('surikiuoti skaiciai ', surikiuotiPazymiai); 
console.log(iskarpa);

console.log('======  5 uzduotis  ========='); 

let biologijosMokiniai = ['tadas', 'marius', 'simas', 'toma',]
let matematikosMokiniai = ['agne', 'andrius', 'ignas', 'simona'] 

let sujungimas = biologijosMokiniai.concat(matematikosMokiniai); 
console.log(sujungimas);  

let s = new Set(['simas', 'simona']);
let a = Array.from(s); 

console.log('Unikalus vardai', a);

console.log('======  6 uzduotis  ========='); 

let pirmoSemestroTemos = ['Mityba', 'Pratimai', 'Kardio']; 
let antroSemestroTemos = ['Judesiai', 'Apsilimas', 'Istverme']; 

console.log(...pirmoSemestroTemos,...antroSemestroTemos); 

console.log('======  7 uzduotis  ========='); 

let spalvos = ['raudona', 'zalia', 'juoda', 'melyna']; 
let kopija = spalvos.slice(); 
let isvalymas = spalvos;

while (spalvos.length > 0) { 
    spalvos.pop();
}

console.log('originalas ', spalvos);
console.log('kopija ', kopija); 

console.log('======  8 uzduotis  ========='); 

let miestas = ['Vilnius', 'Kaunas', 'Klaipeda', 'Siauliai']; 
console.log(miestas); 

let rastasIndekas = miestas.indexOf('Klaipeda'); 
console.log('Klaipedos indeksas ', rastasIndekas); 

console.log('======  9 uzduotis  ========='); 

let skaiciai9 = [1, 3, 9, 9, 2];  
let yraDuplikatu = false; 

for (let skaicius9 of skaiciai9) { 
    if (skaiciai9.indexOf(skaicius9) != skaiciai9.lastIndexOf(skaicius9)) { 
        yraDuplikatu = true; 
        break;
    }
}
 
if (yraDuplikatu) { 
    console.log('masyve yra duplikatu');
} else { 
    console.log('masyve nera duplikatu');
} 
console.log('======  10 uzduotis  ========='); 

let senasMasyvas = [1, 2, 3, 4, 5, 6]; 
let naujasMasyvas = [];
let naujoMAsyvoKiekis = Math.ceil(senasMasyvas.length / 2); 

for (let i = 0; i < naujoMAsyvoKiekis; i++){ 
    naujasMasyvas.push([ 
        senasMasyvas[i * 2], senasMasyvas[i * 2 + 1]
    ]);
} 
console.log(naujasMasyvas); 

console.log('======  11 uzduotis  ========='); 
let masyvas1 = [1, 2, 3, 4]; 
let masyvas2 = [3, 4, 5, 6]; 
let masyvas3 = [...masyvas1]; 
















