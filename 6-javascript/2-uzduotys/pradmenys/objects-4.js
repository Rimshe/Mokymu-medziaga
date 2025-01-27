console.log('========== objects-4 ==========' );  
console.log('========== 1 uzduotis ==========' );  

let imones = [ 
    {pavadinimas: 'senukai', darbuotojuSkaicius: 6324, ikurimoMetai: 1991, pelnasPerMenesi: 2000000}, 
    {pavadinimas: 'depo', darbuotojuSkaicius: 4213, ikurimoMetai: 2000, pelnasPerMenesi: 1500000}, 
    {pavadinimas: 'ermitazas', darbuotojuSkaicius: 5736, ikurimoMetai: 2001, pelnasPerMenesi: 1000000},
]; 

let pelnoSuma = 0; 
let darbuotojuSuma = 0; 
let dabartiniaiMetai3 =  new Date(Date.now()).getFullYear();

let suma1 = 0;
for (let imone of imones) {    
     suma1 += (dabartiniaiMetai3 - imone.ikurimoMetai) 

    pelnoSuma += imone.pelnasPerMenesi; 
    darbuotojuSuma += imone.darbuotojuSkaicius;  
    console.log('imones pavadinimas: ' + imone.pavadinimas);
}  
let vidutinisImonesAmzius = suma1 / imones.length;
console.log('bendras darbuotoju skaicius: ' + darbuotojuSuma); 
console.log('bendras imoniu pelnas per menesi: ' + pelnoSuma); 
console.log('vidutinis imoniu amzius ' + vidutinisImonesAmzius); 

console.log('========== 2 uzduotis ==========' );  

let ligonines = [ 
    {pavadinimas: 'Respublikine', adresas: 'Klaipeda', lankytojuKiekis: 6000, darbuotojuSkaicius: 300}, 
    {pavadinimas: 'Jurininku', adresas: 'Siauliai', lankytojuKiekis: 10000, darbuotojuSkaicius: 550}, 
    {pavadinimas: 'Raudonojo kryziaus', adresas: 'Kaunas', lankytojuKiekis: 8500, darbuotojuSkaicius: 660},
]; 

