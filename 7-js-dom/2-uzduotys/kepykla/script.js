let calculateButton = document.getElementById('calculate');

calculateButton.addEventListener('click', function() {
    // console.log('clicked'); 
    let employeesCount = parseInt(document.getElementById('employees-count').value); 
    let emplyeeMakesPerDay = parseInt(document.getElementById('employee-makes-per-day').value); 
    let dayReservations = parseInt(document.getElementById('day-reservations').value); 
    let amountOfDays = parseInt(document.getElementById('amount-of-days').value); 
    let price = parseInt(document.getElementById('price').value); 
    let selfCost = parseInt(document.getElementById('self-cost').value);

    let bakeryTotal = employeesCount * emplyeeMakesPerDay * amountOfDays; 
    let isBakeryGonnaMakeIt = bakeryTotal >= dayReservations; 
    let priceTotal = bakeryTotal * price;  
    let profit = bakeryTotal * selfCost;
    let profitTotal = priceTotal - profit;

    // let logInfo = { 
    //     bakeryTotal, 
    //     isBakeryGonnaMakeIt
    // }; 
    // console.log(logInfo); 

    let resultsDiv = document.getElementById('results'); 
    // console.log(resultsDiv); 
    resultsDiv.innerHTML = `<p><strong>Kepykla per diena spes pagaminti: </strong>${bakeryTotal} kepalu</p>`;
    resultsDiv.innerHTML += `<p><strong>Jai reikia speti pagaminti:</strong> ${dayReservations} kepalu</p>`;
    resultsDiv.innerHTML += `<p><strong>Ar spes pagaminti></strong> ${isBakeryGonnaMakeIt ? 'taip' : 'Ne'}</p>`; 
    resultsDiv.innerHTML += `<p><strong>Kaina eurais:></strong> ${priceTotal} Eur.</p>`; 
    resultsDiv.innerHTML += `<p><strong>Pelnas:></strong> ${profitTotal} Eur.</p>`;
});  

function calculation(event) { 
    let inputValue = event.target.valueAsNumber; 
 
    if (inputValue < 0) {
        event.target.classList.add('error');
        event.target.nextElementSibling.classList.add('show');
    } else {
        event.target.classList.remove('error');
        event.target.nextElementSibling.classList.remove('show');
    }
};  

    document.getElementById('employees-count').addEventListener('keyup', calculation);
    document.getElementById('employee-makes-per-day').addEventListener('keyup', calculation);
    document.getElementById('day-reservations').addEventListener('keyup', calculation);
    document.getElementById('amount-of-days').addEventListener('keyup', calculation); 
    document.getElementById('self-cost').addEventListener('keyup', calculation); 
    document.getElementById('price').addEventListener('keyup', calculation);


    document.getElementById('reset').addEventListener('click', function() { 
    document.getElementById('employees-count').value = 0; 
    document.getElementById('employee-makes-per-day').value = 0; 
    document.getElementById('day-reservations').value = 0;  
    document.getElementById('amount-of-days').value = 0; 
    document.getElementById('price').value = 0; 
    document.getElementById('self-cost').value = 0;
    document.getElementById('results').innerHTML = '<p>kolkas nieko nera</p>';
});