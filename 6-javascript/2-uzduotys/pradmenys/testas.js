console.log('========== testas ==========');
console.log('========== 1 uzduotis ==========');

function piniguPervertimas() {
    let euruSuma = Math.floor(Math.random() * 1000) + 1;
    let dolerisEurais = 0.96;
    let doleriuSuma = euruSuma * dolerisEurais;
    console.log(euruSuma + ' eurai yra lygus ' + doleriuSuma + ' Doleriaims');
};
piniguPervertimas();

console.log('========== 2 uzduotis ==========');

function piniguPervertimas2() {
    let doleriuSuma2 = Math.floor(Math.random() * 1000) + 1;
    let eurasDoleriais = 1.04;
    let euruSuma2 = doleriuSuma2 * eurasDoleriais;
    console.log(doleriuSuma2 + ' doleriai yra lygus ' + euruSuma2 + ' Eurams');
};
piniguPervertimas2();

console.log('========== 3 uzduotis ==========');

function apskaiciuojamBmi(svoris, ugis) {
    return svoris / (ugis * ugis);
};
let svoris = 80;
let ugis = 1.95;

let bmi = apskaiciuojamBmi(svoris, ugis);
console.log('BMI' + bmi.toFixed(2));

console.log('========== 4 uzduotis ==========');

function apskaiciuojamZmogausLaika() {

    let amzius = 60;
    let valandosDienoje = 24;
    let minutesDienoje = 1440;
    let sekundesDienoje = 86400;
    let dienosMetuose = 365;
    let laikasSekundem = amzius * dienosMetuose * sekundesDienoje;
    let laikasMinutemis = amzius * dienosMetuose * minutesDienoje;
    let laiaksValandomis = amzius * dienosMetuose * valandosDienoje;
    let laiaksDienomis = amzius * dienosMetuose;

    console.log('laikas sekundemis', laikasSekundem);
    console.log('laikas minutemis ', laikasMinutemis);
    console.log('laikas dienomis ', laiaksValandomis);
    console.log('laikas dienomis ', laiaksDienomis);

};
apskaiciuojamZmogausLaika();

console.log('========== 5 uzduotis ==========');

function konvertuojamTemperatura() {

    let celsius = 15;
    let farenheit = 90;

    let converCelsius = (celsius * 9 / 5) + 32;
    let convertFarenheit = (farenheit - 32) * 5 / 9;
    console.log(celsius + ' Celsijaus konvertuojasi i: ' + converCelsius + ' Farenheito');
    console.log(farenheit + ' Farenheito konvertuojasi i: ' + convertFarenheit + ' Celsijaus');
};
konvertuojamTemperatura();

console.log('========== 6 uzduotis ==========');

let skaiciuMasyvas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let eilute = skaiciuMasyvas.join('-');
console.log(eilute);

console.log('========== 7 uzduotis ==========');

for (let i = 1; i <= 5; i++) {
    let zvaigzdute = '';
    for (let j = 1; j <= i; j++) {
        zvaigzdute += '* '
    };
    console.log(zvaigzdute);
}

console.log('========== 8 uzduotis ==========');
console.log('========== 9 uzduotis ==========');

let masyvas = ['Tomas', 'Justas', 'Tadas', 'Kestas'];
let tekstas = masyvas.join('-');
let tekstas2 = masyvas.join('+');

console.log(tekstas);
console.log(tekstas2);

console.log('========== 10 uzduotis ==========');

