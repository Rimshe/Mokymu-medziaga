console.log('========== objects-3 ==========' );  
console.log('========== 3 uzduotis ==========' );  

let automobiliai = [ 
    { 
        marke: 'bmw', 
        pagaminimoMetai: 2010,
    }, 
    { 
        marke: 'audi', 
        pagaminimoMetai: 2008,
    }, 
    { 
        marke: 'skoda', 
        pagaminimoMetai: 2017,
    }, 
    { 
        marke: 'porche', 
        pagaminimoMetai: 2020,
    }
];  

let dabartiniaiMetai2 =  new Date(Date.now()).getFullYear(); 


for (let automobilis of automobiliai){  

    let metuSkirtumas2 = dabartiniaiMetai2 - automobilis.pagaminimoMetai;

    console.log('automobiliu marke: ' + automobilis.marke);  
    console.log('pagaminimo metai: ' + automobilis.pagaminimoMetai);
    console.log('automobilio amzius: ' + metuSkirtumas2);
}