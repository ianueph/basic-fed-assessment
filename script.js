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
            "qty-remaining": 2,
            "image": "GREJSIMOJS.jpg"
        },
        {
            "name": "GOSIG GOLDEN",
            "price": 500,
            "currency": "PHP",
            "qty-remaining": 23,
            "image": "GOSIG GOLDEN.jpg"
        },
        {
            "name": "DJUNGELSKOG",
            "price": 69,
            "currency": "PHP",
            "qty-remaining": 85,
            "image": "DJUNGELSKOG.jpg"
        },
        {
            "name": "DVÄRGHARE",
            "price": 679,
            "currency": "PHP",
            "qty-remaining": 67,
            "image": "DVÄRGHARE.jpg"
        },
        {
            "name": "SANDLÖPARE",
            "price": 240,
            "currency": "PHP",
            "qty-remaining": 3,
            "image": "SANDLÖPARE.jpg"
        },
        {
            "name": "LILLEPLUTT",
            "price": 3200,
            "currency": "PHP",
            "qty-remaining": 2,
            "image": "LILLEPLUTT.jpg"
        },
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
            "qty-remaining": 2,
            "image": "GREJSIMOJS.jpg"
        },
        {
            "name": "GOSIG GOLDEN",
            "price": 500,
            "currency": "PHP",
            "qty-remaining": 23,
            "image": "GOSIG GOLDEN.jpg"
        },
        {
            "name": "DJUNGELSKOG",
            "price": 69,
            "currency": "PHP",
            "qty-remaining": 85,
            "image": "DJUNGELSKOG.jpg"
        },
        {
            "name": "DVÄRGHARE",
            "price": 679,
            "currency": "PHP",
            "qty-remaining": 67,
            "image": "DVÄRGHARE.jpg"
        },
        {
            "name": "SANDLÖPARE",
            "price": 240,
            "currency": "PHP",
            "qty-remaining": 3,
            "image": "SANDLÖPARE.jpg"
        },
        {
            "name": "LILLEPLUTT",
            "price": 3200,
            "currency": "PHP",
            "qty-remaining": 2,
            "image": "LILLEPLUTT.jpg"
        },
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
            "qty-remaining": 2,
            "image": "GREJSIMOJS.jpg"
        },
        {
            "name": "GOSIG GOLDEN",
            "price": 500,
            "currency": "PHP",
            "qty-remaining": 23,
            "image": "GOSIG GOLDEN.jpg"
        },
        {
            "name": "DJUNGELSKOG",
            "price": 69,
            "currency": "PHP",
            "qty-remaining": 85,
            "image": "DJUNGELSKOG.jpg"
        },
        {
            "name": "DVÄRGHARE",
            "price": 679,
            "currency": "PHP",
            "qty-remaining": 67,
            "image": "DVÄRGHARE.jpg"
        },
        {
            "name": "SANDLÖPARE",
            "price": 240,
            "currency": "PHP",
            "qty-remaining": 3,
            "image": "SANDLÖPARE.jpg"
        },
        {
            "name": "LILLEPLUTT",
            "price": 3200,
            "currency": "PHP",
            "qty-remaining": 2,
            "image": "LILLEPLUTT.jpg"
        },
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
            "qty-remaining": 2,
            "image": "GREJSIMOJS.jpg"
        },
        {
            "name": "GOSIG GOLDEN",
            "price": 500,
            "currency": "PHP",
            "qty-remaining": 23,
            "image": "GOSIG GOLDEN.jpg"
        },
        {
            "name": "DJUNGELSKOG",
            "price": 69,
            "currency": "PHP",
            "qty-remaining": 85,
            "image": "DJUNGELSKOG.jpg"
        },
        {
            "name": "DVÄRGHARE",
            "price": 679,
            "currency": "PHP",
            "qty-remaining": 67,
            "image": "DVÄRGHARE.jpg"
        },
        {
            "name": "SANDLÖPARE",
            "price": 240,
            "currency": "PHP",
            "qty-remaining": 3,
            "image": "SANDLÖPARE.jpg"
        },
        {
            "name": "LILLEPLUTT",
            "price": 3200,
            "currency": "PHP",
            "qty-remaining": 2,
            "image": "LILLEPLUTT.jpg"
        }
    ]
};

const items_per_page = 6;

const getTotalPages = (items_per_page) => {
    return Math.ceil(data.products.length / items_per_page);
}

const loadProducts = (currentPage) => {
    const productGrid = document.querySelector(".products-list__grid");
    productGrid.innerHTML = "";
    const skip = (currentPage - 1) * items_per_page;

    for (let i = skip; i <= skip + 5; i++) {
        if (i >= data.products.length) { break; }
        const product = data.products[i];

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
    }

    loadPagination(currentPage, getTotalPages(items_per_page));
}

const loadPagination = (currentPage, totalPages) => {
    const paginationComponent = document.querySelector(".products-list__pagination");

    paginationComponent.innerHTML = "";

    const pages = [];

    // always show first page
    pages.push(1);

    // left dots
    if (currentPage > 3) {
        pages.push("...");
    }

    // pages around current page
    for (
        let i = Math.max(2, currentPage - 1);
        i <= Math.min(totalPages - 1, currentPage + 1);
        i++
    ) {
        pages.push(i);
    }

    // right dots
    if (currentPage < totalPages - 2) {
        pages.push("...");
    }

    // always show last page if more than 1 page
    if (totalPages > 1) {
        pages.push(totalPages);
    }

    pages.forEach(page => {

        if (page === "...") {

            const dots = document.createElement("span");
            dots.textContent = "...";

            paginationComponent.appendChild(dots);

            return;
        }

        const button = document.createElement("button");
        button.addEventListener('click', () => {
            loadProducts(page);
        })

        button.classList.add("products-list__pagination-button");

        if (page === currentPage) {
            button.classList.add("active");
        }

        button.textContent = page;

        paginationComponent.appendChild(button);
    });
};

loadProducts(1);