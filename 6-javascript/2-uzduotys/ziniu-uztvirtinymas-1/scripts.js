//duomenys 

let darboVal = 8; 
let kepalaiPerValanda = 9, kepykluSk = 4, savikaina = 2, kaina = 4, uzsakymai = 64; 

/////////////////1 uzduotis ///////////// 
console.log (kepalaiPerValanda * darboVal * kepykluSk + ' iskepti kepalai per diena '); 
/////////////////2 uzduotis ///////////// 
console.log((kepalaiPerValanda * darboVal * kepykluSk) * savikaina + ' visu kepalu savikaina');  
console.log((kepalaiPerValanda * darboVal * kepykluSk) * kaina + ' gautos pajamos'); 
console.log(((kepalaiPerValanda * darboVal * kepykluSk) * kaina) - ((kepalaiPerValanda * darboVal * kepykluSk) * savikaina) + ' Gautas pelnas');

/////////////////3 uzduotis ///////////// 
if (uzsakymai <= kepalaiPerValanda * darboVal * kepykluSk){ 
    console.log('kepykla spes padaryti uzsakyma')
} else console.log((uzsakymai - (kepalaiPerValanda * darboVal * kepykluSk)) + '  kepalus kepykla nespes iskepti'); 

/////////////////4 uzduotis /////////////  

console.log(kaina * uzsakymai + ' gautos dienos pajamos'); 
console.log(((kaina * uzsakymai) - (uzsakymai * savikaina)) + ' gautas dienos pelnas');
 



