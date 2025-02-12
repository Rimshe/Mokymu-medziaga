function countFinalPrice(price, quantity) {
    return price * quantity;
}

function countFinalOrderPrice(items) {
    let sum = 0;
    items.forEach(item => {
        sum += item.finalPrice;
    })

    return sum;
}; 


function updateProductQuantity(productId, action) {
    let product = products.find(p => p.id === productId);
    if (!product) return;

   
    if (action === 'increase') {
        product.quantity++;
    } else if (action === 'decrease' && product.quantity > 1) {
        product.quantity--;
    }

    
    product.finalPrice = countFinalPrice(product.price, product.quantity);

    
    document.querySelector('.product-list').innerHTML = generateProductsHTML(products);
    finalOrderPrice.innerHTML = countFinalOrderPrice(products).toFixed(2) + ' eur';
}

function onDeleteButtonClick(id) { 
        //1budas
            products = products.filter(product => product.id !== id);
            productListHtml.innerHTML = generateProductsHTML(products); 
            finalOrderPrice.innerHTML = countFinalOrderPrice(products).toFixed(2) + ' eur';
        
} 

function refreshBasket() { 
    
}

function generateProductsHTML(products) {
    let finalHtml = '';

    products.forEach(product => {
        finalHtml += `
            <div class="row ${product.id} product-item">
                <div class="col-6 product-name"><img src="${product.imgUrl}"><p> ${product.name}</p></div>
                <div class="col-2"><p> ${product.price} eur</p></div>
                <div class="col-2">
                    <p class="quantity">
                        <button class="remove-item">-</button>
                        <span class="quantity">${product.quantity}</span>
                        <button class="add-item">+</button>
                    </p>
                </div>
                <div class="col-2">
                    <p>
                        <span class="final-price"> ${product.finalPrice}</span> eur
                        <button class="delete-item" onClick="onDeleteButtonClick('${product.id}')"><i class="bi bi-trash3"></i></button>
                    </p>
                </div>
            </div>
        `;
    });

    return finalHtml;
}

let products = [
    {
        id: 'sim-card',
        name: 'Sim kortele',
        price: 2.00,
        quantity: 1,
        imgUrl: 'images/productimage.png'
    },
    {
        id: 'phone',
        name: 'Telefonas',
        price: 1200.00,
        quantity: 1,
        imgUrl: 'images/productimage2.png'
    },
    {
        id: 'sd-card',
        name: 'SD kortele',
        price: 35.00,
        quantity: 2,
        imgUrl: 'images/productimage3.png'
    }
];
let finalOrderPrice = document.querySelector('.basket-price .price'); 



products = products.map(product => {
    return {
        ...product,
        finalPrice: countFinalPrice(product.price, product.quantity)
    }
});

finalOrderPrice.innerHTML = countFinalOrderPrice(products).toFixed(2) + ' eur'; 

document.querySelector('.product-list').innerHTML = generateProductsHTML(products); 

document.querySelector('.product-list').addEventListener('click', (event) => {
    if (event.target.classList.contains('add-item')) {
        let productId = event.target.closest('.row').classList[1];
        updateProductQuantity(productId, 'increase');
    } else if (event.target.classList.contains('remove-item')) {
        let productId = event.target.closest('.row').classList[1]; 
        updateProductQuantity(productId, 'decrease');
    }
});   

    let productListHtml = document.querySelector('.product-list'); 
    productListHtml.innerHTML = generateProductsHTML(products);
