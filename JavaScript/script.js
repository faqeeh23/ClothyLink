const products = [{
        img1: "imags/nike-pante.avif",
        name: "Nike sweatpants",
        logo: "imags/nike-logo.jpg",
        store: "Nike",
        price: "20 JOD",
        desc: "Black sweatpants for men"
    },
    {
        img1: "imags/adidas-shoes.png",
        name: "adidas men Train Essentials",
        logo: "imags/adidas-logo.png",
        store: "Adidas",
        price: "50 JOD",
        desc: "A Comfy, All-Time Classic Made in Part"
    },
    {
        img1: "imags/adidas-tshirt.jpg",
        name: "Adidas Baseball Cotton Cap Black",
        logo: "imags/adidas-logo.png",
        store: "Adidas",
        price: "15 JOD",
        desc: "White sport shirt for men "
    },
    {
        img1: "imags/adidas-cap.webp",
        name: "Adidas Baseball Cotton Cap Black",
        logo: "imags/adidas-logo.png",
        store: "Adidas",
        price: "10 JOD",
        desc: "Adidas Baseball Cotton Cap Black (0891)"
    },
    {
        img1: "imags/nike-revolution-8.jpg",
        name: "nike revolution 8",
        logo: "imags/nike-logo.jpg",
        store: "Nike",
        price: "20 JOD",
        desc: "Adidas Baseball Cotton Cap Black (0891)"
    },
    {
        img1: "imags/puma-t-shirt.webp",
        name: "Puma T-Shirt",
        logo: "imags/puma-logo.png",
        store: "Puma",
        price: "12 JOD",
        desc: "Puma Men Essential Rebel Basic Tee "
    },
    {
        img1: "imags/puma-t-shirt2.webp",
        name: "Puma TeamRISE T Shirt",
        logo: "imags/puma-logo.png",
        store: "Puma",
        price: "17 JOD",
        desc: "Puma TeamRISE Mens T Shirt DryCELL Crew "
    },
]

let currentIndex = 0;

function updateCards() {
    const cards = document.querySelectorAll('.cards')

    for (let i = 0; i < cards.length; i++) {
        let product = products[(currentIndex + i) % products.length]

        cards[i].querySelector('.clothes-images img').src = product.img1
        cards[i].querySelector('.card-title').textContent = product.name
        cards[i].querySelector('.store-logo').src = product.logo
        cards[i].querySelector('.store-name').textContent = product.store;
        cards[i].querySelector('.price').textContent = product.price;
        cards[i].querySelector('.card-desc').textContent = product.desc;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    updateCards(); 

    // <
    document.querySelector('#pag2 a:first-child').addEventListener('click', (e) => {
        e.preventDefault();
        currentIndex = (currentIndex - 1 + products.length) % products.length;
        updateCards();
    });

    // >
    document.querySelector('#pag2 a:last-child').addEventListener('click', (e) => {
        e.preventDefault();
        currentIndex = (currentIndex + 1) % products.length;
        updateCards();
    });
});

document.querySelectorAll('#itmes input[type="checkbox"]').forEach(cb => {
        cb.addEventListener('change', function() {
            const subFilter = document.getElementById(this.value);
            if (subFilter) {
                subFilter.classList.toggle('active', this.checked);
            }
        });
    });

    // إظهار/إخفاء القوائم الفرعية داخل Pants
    document.querySelectorAll('#Pants input[type="checkbox"]').forEach(cb => {
        cb.addEventListener('change', function() {
            const subFilter = document.getElementById(`sub-Pants-${this.value}`);
            if (subFilter) {
                subFilter.classList.toggle('active', this.checked);
            }
        });
    });

