console.log('========== functions-4 ==========');
console.log('========== 1 uzduotis ==========');

function tekstoEilute() {
    return 'kazkoks tekstas'
};
console.log(tekstoEilute());

console.log('========== 2 uzduotis ==========');

function sugeneruotasSkaicius() {
    return Math.floor(Math.random() * 10) + 1;
};

for (let i = 0; i < 5; i++) {
    console.log(sugeneruotasSkaicius());
};

console.log('========== 3 uzduotis ==========');

console.log('========== 4 uzduotis ==========');

function maziausiasDaliklis(sk) {
    let maziausias = sk;

    for (let i = 2; i <= sk; i++) {
        if (sk % i === 0) {
            return i;
        }
    }
    return sk;
}


for (i = 10; i <= 30; i++) {
    console.log(`${i} skaiciaus maziausias dalikl,is yra ${maziausiasDaliklis(i)}`);
}

console.log('========== 5 uzduotis ==========');

function arPirminis(sk) {  
    for (let i = 2; i < sk; i++) {  
        if (sk % i === 0) {
            return false;  
        }
    }
    return true;  
}

for (let i = 2; i <= 15; i++) {
    console.log(`${i} ${arPirminis(i)}`); 
} 

console.log('========== 6 uzduotis ==========');

function sumaDvieju(sk1, sk2) { 
    return sk1 + sk2;
}; 
function sumaTrieju(sk1, sk2, sk2) { 
    return sk1 + sk2 + sk3;
}; 
function skirtumas(sk1, sk2) { 
    return sk1 - sk2;
}; 
function sandauga(sk1, sk2) { 
    return sk1 * sk2;
};  
function dalyba(sk1, sk2) { 
    return sk1 / sk2;
}; 
