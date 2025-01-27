console.log('======  array 5  =========');  
console.log('======  1 uzduotis  =========');  

let randomSkaiciai1 = [3, 7, 2, 9, 6, 4]; 

let lyginis = randomSkaiciai1.find(skaicius => { 
    return skaicius % 2 === 0;
}) 
console.log(lyginis); 

console.log('======  2 uzduotis  =========');   

let skaiciai4 = [-3, 0, 5, -8, 2, 7]; 
let teigiamas = skaiciai4.find(skaicius => { 
    return skaicius > 0;
}) 
console.log(teigiamas); 

console.log('======  3 uzduotis  =========');   

let skaiciai3 = [2, 3, 5, -6, 7, -4]; 
let neigiamas = skaiciai3.find(skaicius => { 
    return skaicius < 0; 
})  
let rastasIndeksas = skaiciai3.indexOf(neigiamas);
console.log(skaiciai3);
console.log('pirmas neigiamas skaicius ', neigiamas);
console.log('pirmo neigiamo skaiciaus indeksas ', rastasIndeksas); 

console.log('======  4 uzduotis  =========');

let skaiciai5 = [4, 5, 6, 14, 9, 10]; 
let daugiauNei10 = skaiciai5.find(skaicius => { 
    return skaicius >= 10;
}) 
let skaiciausIndeksas = skaiciai5.indexOf(daugiauNei10); 

console.log(skaiciai5);
console.log('pirmas skaicius >= 10 ', daugiauNei10);
console.log('pirmo skaiciaus >= 10 indeksas ', skaiciausIndeksas); 

console.log('======  5 uzduotis  ========='); 

let skaiciai6 = [5, 9, 12, 7, 18, 4]; 
let reiksme = skaiciai6.find(skaicius => { 
    return skaicius % 3 === 0 && skaicius > 10;
})
console.log(reiksme); 

console.log('======  6 uzduotis  =========');  

let skaiciai7 = [5, 8, -3, -6, 4, 7]; 
let reiksme2 = skaiciai7.find(skaicius => { 
    return skaicius < 0 && skaicius % 2 === 0;
})
console.log(reiksme2); 
  
console.log('======  7 uzduotis  =========');  

let skaiciai8 = [2, 6, 8, 4, 9, 7]; 
let arVisiTeigiami = true; 
let arYraNeigiamu = false; 

let reiksme3 = skaiciai8.every(skaicius => { 
    return skaicius > 0; 
})  
if (reiksme3) { 
    console.log(arVisiTeigiami); 
} else { 
    console.log(arYraNeigiamu);
} 

console.log('======  8 uzduotis  =========');  

skaiciai9 = [2, 4, 6, 8, 9]; 
arSkaicaiLyginiai = true;
arSkaiciaiNelyginiai = false; 

let reiksme4 = skaiciai9.every(skaicius => { 
    return skaicius % 2 === 0;
}) 
if (reiksme4) { 
    console.log(arSkaicaiLyginiai);
} else console.log(arSkaiciaiNelyginiai); 

console.log('======  9 uzduotis  =========');  

let skaiciai10 = [10, 15, 16, 8, 6, 2]; 
let yraMaziauNei5 = true; 
let neraMaziauNei5 = false; 

let reiksme5 = skaiciai10.every(skaicius => { 
    return skaicius >= 5;
})
if (reiksme5) { 
    console.log(neraMaziauNei5);
} else { 
    console.log(yraMaziauNei5);
} 

console.log('======  10 uzduotis  ========='); 

let skaiciai11 = [4, 5, -9, -13, 2]; 
let yraTeigiamas = true; 
let yraNeigiamas = false; 

let reiksme6 = skaiciai11.some(skaicius => { 
    return skaicius > 0;
})
if (reiksme6) { 
    console.log(yraTeigiamas);
} else { 
    console.log(yraNeigiamas);
} 

console.log('======  11 uzduotis  ========='); 

let skaiciai12 = [4, 3, 7, 9, 10]; 
let teisingaReiksme = true; 
let neteisingaReiksme = false; 

let reiskme7 = skaiciai12.every(skaicius => { 
    return skaicius > 0;
}) 
let reiksme77 = skaiciai12.some(skaicius => skaicius % 2 === 0); 
if (reiskme7 && reiksme77) { 
    console.log(teisingaReiksme);
} else { 
    console.log(neteisingaReiksme);
} 

console.log('======  12 uzduotis  ========='); 

let skaiciai13 = [2, -2, 4, 5, -6, -9, 7]; 

let reiksme8 = skaiciai13.filter(skaicius => { 
    return skaicius > 0;
})
console.log('teigiami skaicisi ', reiksme8); 

console.log('======  13 uzduotis  ========='); 

let skaiciai14 = [1, 5, 2, 4, 5, 2, 3, 1]; 

let reiksme9 = skaiciai14.filter(skaicius => { 
    return skaicius <= 2;
}) 
console.log(reiksme9); 

console.log('======  14 uzduotis  ========='); 

let skaiciai15 = [5, -3, 2, 7, 8, -4, 1]; 

let reiksme10 = skaiciai15.filter(skaicius => { 
    return skaicius > 0 && skaicius % 2 === 0;
})
console.log('teigiami ir lyginiai skaiciai ', reiksme10); 

console.log('======  15 uzduotis  =========');  

let skaiciai16 =  [3, 7, 2, 9, 6, 4]; 

let reiksme11 = skaiciai16.filter(skaicius => { 
    return skaicius % 2 === 0; 
}).map(skaicius => skaicius * 2);
console.log(reiksme11); 

console.log('======  16 uzduotis  =========');

let skaicius17 = [7, 8, 10, 6, 5, 9]; 

let reiksme12 = skaicius17.filter(skaicius => { 
    return skaicius >= 8;
})  
let geruPazymiuKiekis = reiksme12.length; 

console.log('geri pazymiai ', reiksme12); 
console.log('geru pazymiu kiekis ', geruPazymiuKiekis); 

console.log('======  17 uzduotis  ========='); 

let fib = []; 
let n = 9; 

for(let i = 0; i < n; i++){ 
    if (i > 1) { 
        fib.push( 
            fib[i - 1] + fib[i - 2]
        );
    } else { 
        fib[i] = i;
    }
}
console.log(fib);
