let currencies = [
    {
        id: 'usd',
        name: 'Doleriai',
        shortName: 'USD',
        rates: [
            {
                currencyId: 'eur',
                rate: 0.96
            },
            {
                currencyId: 'rub',
                rate: 91.20
            }
        ]
    },
    {
        id: 'eur',
        name: 'Eurai',
        shortName: 'EUR',
        rates: [
            {
                currencyId: 'usd',
                rate: 1.04
            },
            {
                currencyId: 'rub',
                rate: 94.78
            }
        ]
    },
    {
        id: 'rub',
        name: 'Rubliai',
        shortName: 'RUB',
        rates: [
            {
                currencyId: 'usd',
                rate: 0.011
            },
            {
                currencyId: 'eur',
                rate: 0.011
            }
        ]
    }
];


function addDataIntoDropdownName(items) {
    document.querySelector('.currency-to').innerHTML += `
        <select name="from" id="select-currency-to">
            ${
                items.map(item => {
                    return `<option value='${item.id}'>${item.name}</option>`
                }).join('')
            }
        </select> 
    `;
};

function addDataIntoDropdownShortName(items) {
    document.querySelector('.currency-from').innerHTML += `
        <select name="from" id="select-currency-from">
            ${
                items.map(item => {
                    return `<option value='${item.id}'>${item.shortName}</option>`
                }).join('')
            }
        </select> 
    `;
};

addDataIntoDropdownShortName(currencies);
addDataIntoDropdownName(currencies); 


let isResetButtonShown = false;

document.querySelector('.calculate').addEventListener('click', () => {   

    document.querySelector('.calculate').disabled = true; 

    let disabledButton = document.querySelector('.calculate'); 

    disabledButton.style.backgroundColor = 'lightgrey'; 
    disabledButton.style.color = 'rgba(0, 0, 0, 0.3)';

    isResetButtonShown = true; 
    if (isResetButtonShown) { 
        document.querySelector('.active').style.display = 'inline';
    }; 

        document.querySelector('.active').addEventListener('click', () => { 
            document.querySelector('.active').style.display = 'none';
            resultsDiv.innerHTML = '' 
            document.querySelector('.calculate').disabled = false; 
            disabledButton.style.backgroundColor = 'white'; 
            disabledButton.style.color = 'black';
        })

    let currencyFromValue = document.getElementById('input-from-value').value;
    let fromSelectValue = document.getElementById('select-currency-from').value;
    let toSelectValue = document.getElementById('select-currency-to').value; 

    if (fromSelectValue === toSelectValue || !currencyFromValue) { 
        return;
    }; 

    let currencyRate = currencies.find(currency => currency.id === fromSelectValue).rates.find(rate => rate.currencyId === toSelectValue).rate;
        
    let fromShortName = currencies.find(currency => currency.id === fromSelectValue).shortName;
    let toShortName = currencies.find(currency => currency.id === toSelectValue).shortName;
    let changedCurrency = currencyFromValue * currencyRate; 

    let changingResult = `<span class="underline">${currencyFromValue} ${fromShortName}</span> yra <span class="underline">${changedCurrency} ${toShortName}</span>`; 
    let rateResult = `<strong>Santykis</strong>: 1 ${fromShortName} = ${currencyRate} ${toShortName}`; 
    
    let resultsDiv = document.getElementById('result-area');
    
    let resultElement = document.createElement('p');
    resultElement.classList.add('rezultatas');
    resultElement.innerHTML = `<strong>${changingResult}</strong>`; 
    resultElement.style.fontSize = '30px'; 

    resultsDiv.innerHTML = ''; 
    resultsDiv.appendChild(resultElement);

    let rateDescription = document.createElement('p');
    rateDescription.classList.add('describtion');
    rateDescription.innerHTML = rateResult;
    resultsDiv.appendChild(rateDescription);  

}); 


