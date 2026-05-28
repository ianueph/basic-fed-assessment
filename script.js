const data = {
    "products": [
        {
            "name": "BLÅHAJ (Large)",
            "price": 1080,
            "currency": "PHP",
            "qty-remaining": 15,
            "image": "BLÅHAJ (Large).jpg"
        },
        {
            "name": "BLÅHAJ (Small)",
            "price": 350,
            "currency": "PHP",
            "qty-remaining": 7,
            "image": "BLÅHAJ (Small).jpg"
        },
        {
            "name": "GREJSIMOJS",
            "price": 1205.50,
            "currency": "PHP",
            "qty-remaining": 15,
            "image": "GREJSIMOJS.jpg"
        },
        {
            "name": "GOSIG GOLDEN",
            "price": 500,
            "currency": "PHP",
            "qty-remaining": 15,
            "image": "GOSIG GOLDEN.jpg"
        },
        {
            "name": "DJUNGELSKOG",
            "price": 69,
            "currency": "PHP",
            "qty-remaining": 15,
            "image": "DJUNGELSKOG.jpg"
        },
        {
            "name": "DVÄRGHARE",
            "price": 679,
            "currency": "PHP",
            "qty-remaining": 15,
            "image": "DVÄRGHARE.jpg"
        },
        {
            "name": "SANDLÖPARE",
            "price": 240,
            "currency": "PHP",
            "qty-remaining": 15,
            "image": "SANDLÖPARE.jpg"
        },
        {
            "name": "LILLEPLUTT",
            "price": 3200,
            "currency": "PHP",
            "qty-remaining": 15,
            "image": "LILLEPLUTT.jpg"
        }
    ]
};


const loadProducts = () => {
    const productGrid = document.querySelector(".products-list__grid");

    data.products.forEach(product => {
        const card = document.createElement("div");

        card.classList.add("border");
        card.classList.add("products-list__item")
        card.innerHTML = `
            <img src="./resources/images/products/${[product.name]}.jpg" alt="${[product.name]}">
            <h2> ${product.name} </h2> 
            <h3> ${product.price} ${product.currency} </h3>
            <h3> remaining: ${product["qty-remaining"]} </h3>
            <button> Add to cart! </button>
        `;

        productGrid.appendChild(card);
    });
}

loadProducts();