// console.log('========== 1 uzduotis ==========' );  
//  let skaicius = 1; 

//  while (skaicius < 20) { 
//     console.log(skaicius); 
//     skaicius++;
//  } 

//  console.log('========== 2 uzduotis ==========' );  

//  skaicius = 1; 

//  while (skaicius < 50) {  
//     console.log(skaicius);
//     if (skaicius % 2 === 0) {  
//         console.log('Lyginis');
//     } 
//     else if (skaicius % 2 !== 0){  
//         console.log('Nelyginis');
//     }   
//     skaicius++
//  }   
//  console.log('========== 3 uzduotis ==========' );  

//  skaicius = 25; 

//  while (skaicius <= 50){   
//     if (skaicius % 3 === 0){ 
//         console.log('skaicius ' + skaicius + " dalinasi is 3"); 
//     }  else { 
//         console.log(skaicius);
//     }
//     skaicius++
//  } 

//  console.log('========== 4 uzduotis ==========' ); 

//  skaicius = 1;  
//  while (true) {  
//     if(skaicius % 3 === 0 && skaicius % 5 === 0){ 
//         console.log('skaicius ' + skaicius + ' dalinasi is 3 ir 5'); 
//         break;
//     } else { 
//         console.log(skaicius);
//     } 
//     skaicius++;
//  }

//  console.log('========== 5 uzduotis ==========' ); 

//  skaicius = 1; 
//  suma = 0; 

//  while(skaicius < 100) { 
//     if(skaicius % 2 === 0){ 
//        suma += skaicius;
//     }
//     skaicius++
//  } 
// console.log('visu skaiciu sum anuo 1 iki 100 yra lygy ', skaicius); 

// console.log('========== 6 uzduotis ==========' ); 

// let i = 1; 

// while (i < 5) { 
//     i++; 
//     let kvadratu = Math.floor(Math.pow(i, 2)); 
//     console.log(i, kvadratu)
// }

// console.log('========== 7 uzduotis ==========' ); 

// let pradzia = 1; 

// while(pradzia < Math.random() * 10) { 
//     pradzia++
//     console.log(pradzia)
// }

// console.log('========== 8 uzduotis ==========' ); 

// let pradzia2 = 1; 
// let suma2 = 0;

// while(pradzia2 < Math.random() * 10) {  
//     let randomNumber = Math.floor(Math.random() * 10);
//     pradzia2++
//     console.log(pradzia2);
//     suma2 += pradzia2; 
//     console.log('suma ',suma2)
// } 

// console.log('========== 9 uzduotis ==========' );  

// let sausainiai = 20;
// let meduoliai = 15;
// let vafliai = 10;

// console.log(`Pradinis kiekis sausiainiu: ${sausainiai}`);
// console.log(`Pradinis kiekis meduoliu: ${meduoliai}`);
// console.log(`Pradinis kiekis vafliu: ${vafliai}`);

// console.log('-------------');

// while (sausainiai > 0 || meduoliai > 0 || vafliai > 0) {
//     // Generuojame atsitiktinį kiekį parduodamų prekių
//     let pirkinys1 = Math.floor(Math.random() * 10);
//     let pirkinys2 = Math.floor(Math.random() * 10);
//     let pirkinys3 = Math.floor(Math.random() * 10);

//     // Parduodame prekes, jei jų yra pakankamai
//     if (sausainiai > 0) {
//         if (pirkinys1 > sausainiai) {
//             console.log(`sausainiu nėra pakankamai.`);
//         } else if (sausainiai >= pirkinys1) {
//             sausainiai -= pirkinys1;
//             console.log(`Nupirkta sausainiu: ${pirkinys1}, liko sausainiu: ${sausainiai}`);
//         } else {
//             sausainiai = 0; // Jei parduodame daugiau nei turime, nustatome kiekį į 0
//             console.log(`Nupirkta sausainiu: ${pirkinys1}, liko sausainiu: ${sausainiai}. sausainiai išparduoti`);
//         }
//     } 
    
//     if (meduoliai > 0) {
//         if (pirkinys2 > meduoliai) {
//             console.log(`Meduoliu nėra pakankamai.`);
//         } else if (meduoliai >= pirkinys2) {
//             meduoliai -= pirkinys2;
//             console.log(`Nupirkta Meduoliu: ${pirkinys2}, liko Meduoliu: ${meduoliai}`);
//         } else {
//             meduoliai = 0;
//             console.log(`Nupirkta Meduoliu: ${pirkinys2}, liko Meduoliu: ${meduoliai}. Meduoliai išparduoti`);
//         }
//     } 
    
//     if (vafliai > 0) {
//         if (pirkinys3 > vafliai) {
//             console.log(`Vafliu nėra pakankamai.`);
//         } else if (vafliai >= pirkinys3) {
//             vafliai -= pirkinys3;
//             console.log(`Nupirkta Vafliu: ${pirkinys3}, liko Vafliu: ${vafliai}`);
//         } else {
//             vafliai = 0;
//             console.log(`Nupirkta Vafliu: ${pirkinys3}, liko Vafliu: ${vafliai}. Vafliai išparduoti.`);
//         }
//     } 
//     console.log('------')
// }
// console.log('Visos prekės išparduotos.'); 

// console.log('====   11 uzduotis:         ====');
// let faktorialas = 1;
// skaicius = 5;

// while (skaicius > 1) {
//     faktorialas *= skaicius;
//     skaicius--;
// }

// console.log('skaiciaus:' + skaicius + ' faktorialas yra: ' + faktorialas);

// console.log('========== 12 uzduotis ==========' );  

// skaicius = 1234; 
// naujasSkaicius = 0;

// while (skaicius > 0) {  
//     naujasSkaicius = naujasSkaicius * 10 + skaicius % 10;
//     console.log('*********');
//     console.log(skaicius % 10); 
//     console.log(Math.floor(skaicius / 10)); 
//     console.log('*********');
//     skaicius = Math.floor(skaicius / 10);
// }
 
// console.log(naujasSkaicius); 

// console.log('========== 13 uzduotis ==========' );  

// let klientoPinigai = 2.45; 
// let kavosKaina = 0.6; 
// let graza = 0; 

// if (klientoPinigai > kavosKaina) { 
//     graza = klientoPinigai - kavosKaina;
// }
// console.log('grazos skaicius:', graza); 

// if (graza > 0) { 
//     let moneta50 = Math.floor(graza / 0.5);
//     let moneta20 =  Math.floor( 
//         (graza - moneta50 * 0.5) / 0.2
//     );  
//     let moneta10 = Math.floor(
//         (graza - moneta50 * 0.5 - moneta20 * 0.2) / 0.1
//     );  
//     let moneta1 = Math.floor(
//         (graza - moneta50 * 0.5 - moneta20 * 0.2 - moneta10 * 0.1) / 0.01
//     ); 
//     console.log('50: ', moneta50); 
//     console.log('20: ', moneta20); 
//     console.log('10: ', moneta10); 
//     console.log('1: ', moneta1);


// moneta50 = 0; 
// moneta20 = 0; 
// moneta10 = 0; 
// moneta1 = 0; 

// graza *= 100; 

// while (graza > 0) { 
//     if (graza > 50) { 
//         moneta50++; 
//         graza -= 50; 
//     } else if (graza >= 20) { 
//         moneta20++; 
//         graza -= 20;
//     } else if (graza >= 10) { 
//         moneta10++; 
//         graza -= 10;
//     } else if (graza >= 0) { 
//         moneta1++; 
//         graza -= 1;
// }
// }
//     console.log('su ciklu '); 
//     console.log('50: ', moneta50); 
//     console.log('20: ', moneta20); 
//     console.log('10: ', moneta10); 
//     console.log('1: ', moneta1); 
// }



 