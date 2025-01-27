console.log('======  1 uzduotis  =========');  
console.log('==== for ====');
let programa = ['medicina', 'sportas', 'mityba', 'kulinarija']; 

for (let i = 0; i < programa.length; i++){ 
    console.log(programa[i]);
} 

console.log('==== while ====');
let programa2 = ['medicina', 'sportas', 'mityba', 'kulinarija']; 

j = 0;

while(j < programa2.length){ 
    console.log(`${programa2[j]}`); 
    j++;
}

console.log('======  2 uzduotis  =========');  

let salys = ['Lietuva', 'Ispanija', 'Portugalija', 'Liuksemburgas']; 
console.log('==== for ===='); 

for (i = 0; i < salys.length; i++){ 
    console.log(salys[i] + ' salis')
} 

console.log('==== while ===='); 
let salys2 = ['Lietuva', 'Ispanija', 'Portugalija', 'Liuksemburgas']; 

index = 0; 
while(index < salys2.length) { 
    console.log(`${salys2[index]} salis`); 
    index++;
} 

console.log('======  3 uzduotis  =========');  
console.log('==== for ====');  

let projektas = ['statybos', 'renovacija', 'aikstele', 'baseinas'];

for (i = 0; i < projektas.length; i++){ 
    console.log(`${i + 1} ${projektas[i]}`);
} 

console.log('==== while ===='); 
let projektas2 = ['statybos', 'renovacija', 'aikstele', 'baseinas'];

j = 0; 

while(j < projektas2.length){ 
    console.log(`${j + 1} ${projektas2[j]}`); 
    j++;
} 

console.log('======  4 uzduotis  ========='); 
console.log('==== for ===='); 

let skaiciai = [1, 2, 4, 7, 9, 10]; 

for(i = 0; i < skaiciai.length; i++){ 
    if (skaiciai[i] > 5){ 
        console.log(skaiciai[i]);
    }
} 

console.log('==== while ===='); 

let skaiciai2 = [1, 2, 4, 7, 9, 10]; 

j = 0; 

while(j < skaiciai2.length){ 
    if(skaiciai2[j] > 5){ 
        console.log(skaiciai2[j]);
    } 
    j++;
} 

console.log('======  5 uzduotis  ========='); 
console.log('==== while ===='); 

let = randomSkaiciuMasyvas = []; 
for (let i = 0; i < 10; i++){ 
    randomSkaiciuMasyvas.push(Math.floor(Math.random() * 100) + 1);
}

let skaiciuSuma = 0; 
i = 0; 

while (i < randomSkaiciuMasyvas.length){ 
    if (randomSkaiciuMasyvas[i] % 4 === 0 ){ 
        skaiciuSuma += randomSkaiciuMasyvas[i];
    } 
    i++;
}

console.log('Skaiciu masyvas ' + randomSkaiciuMasyvas); 
console.log('skaiciai kurie dalinasi is 4 suma ' + skaiciuSuma); 

console.log('==== for ===='); 

skaiciuSuma = 0; 

for (let i = 0; i < randomSkaiciuMasyvas.length; i++) { 
    if (randomSkaiciuMasyvas[i] % 4 === 0) { 
        skaiciuSuma += randomSkaiciuMasyvas[i];
    }
} 

console.log('Skaiciu masyvas ' + randomSkaiciuMasyvas); 
console.log('skaiciai kurie dalinasi is 4 suma ' + skaiciuSuma); 


console.log('======  6 uzduotis  ========='); 
console.log('==== for ===='); 

let pazymiuMasyvas = []; 
let pazymiuSuma = 0;
 

for (i = 0; i < 10; i++){  
pazymiuMasyvas.push(Math.floor(Math.random() * 10) + 1);
pazymiuSuma += pazymiuMasyvas[i]; 

} 
let vidurkis = pazymiuSuma / pazymiuMasyvas.length; 
console.log('pazymiai ' + pazymiuMasyvas); 
console.log('pazymiu viurkis ' + vidurkis); 

console.log('==== while ====');  

let pazymiuMasyvas2 = []; 


for (let i = 0; i < 10; i++){ 
    pazymiuMasyvas2.push(Math.floor(Math.random() * 10) + 1); 
}
let pazymiuSuma2 = 0; 
i = 0;
while (i < pazymiuMasyvas2.length){ 
    pazymiuSuma2 += pazymiuMasyvas2[i];
    i++;
}

let vidurkis2 = pazymiuSuma2 / pazymiuMasyvas2.length;  
console.log('pazymiai ' + pazymiuMasyvas2); 
console.log('pazymiu viurkis ' + vidurkis2);  

console.log('======  7 uzduotis  ========='); 
console.log('==== for ===='); 

let pazymiai7 = []; 
for (let i = 0; i < 10; i++){  
    pazymiai7.push(Math.floor(Math.random() * 10) + 1);
} 

let pazymiuSuma7 = 0;
for (let i = 0; i < 10; i++){ 
    pazymiuSuma7 += pazymiai7[i];
}
let vidurkis7 = pazymiuSuma7 / pazymiai7.length; 

let = didesnisNeiVidurkis = []; 
for (let i = 0; i < 10; i++){ 
    if(pazymiai7[i] > vidurkis7){  
        didesnisNeiVidurkis.push(pazymiai7[i]);
    } 
}

console.log('pazymiai', pazymiai7); 
console.log('vidurkis', vidurkis7);
console.log('pazymiai didesni uz vidurki ', didesnisNeiVidurkis); 

console.log('==== while ====');  

let randomPazymiai = []; 


for (let l = 0; l < 10; l++) { 
    randomPazymiai.push(Math.floor(Math.random() * 10) + 1); 
}

let randomPazymiuSuma = 0;  
let l = 0; 


while (l < randomPazymiai.length) { 
    randomPazymiuSuma += randomPazymiai[l]; 
    l++; 
} 

let randomPazymiuVidurkis = randomPazymiuSuma / randomPazymiai.length; 

let didesnisNeiVidurkis2 = [];


for (l = 0; l < 10; l++) { 
    if (randomPazymiai[l] > randomPazymiuVidurkis) { 
        didesnisNeiVidurkis2.push(randomPazymiai[l]);
    }
} 

console.log('pazymiai', randomPazymiai); 
console.log('vidurkis', randomPazymiuVidurkis);
console.log('pazymiai didesni uz vidurki ', didesnisNeiVidurkis2); 

console.log('======  8 uzduotis  ========='); 
console.log('==== for ===='); 

let randomSkaiciai = [3, 4, 7, 9, 12, 20, 28]; 
for( i = 0; i < randomSkaiciai.length; i++){ 
    if (randomSkaiciai[i] % 2 === 0){ 
        console.log(randomSkaiciai[i] * randomSkaiciai[i]);
    }
}  

console.log('======  9 uzduotis  =========');  

let studentoPazymiai = [ 4, 8, 2, 9, 6, 10, 1, 3]; 
i = 0; 

while (i < studentoPazymiai.length){ 
    if (studentoPazymiai[i] >= 5){ 
        console.log(studentoPazymiai[i], ' Teigiamas')
    } 
    else if (studentoPazymiai[i] < 5) { 
        console.log(studentoPazymiai[i] + ' Neigiamas, Truko ' + (5 - studentoPazymiai[i]) );
    } 
    i++;
}




