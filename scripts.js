document.addEventListener('DOMContentLoaded', function() {
    // Initialize event listeners for interactive elements
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.dataset.productId;
            addToCart(productId);
        });
    });

    // Function to add a product to the cart
    function addToCart(productId) {
        // Logic to add the product to the cart
        console.log(`Product ${productId} added to cart.`);
        // You can implement further functionality here, like updating the cart UI
    }

    // Example of dynamic content update
    const featuredProducts = document.querySelector('.featured-products');
    if (featuredProducts) {
        loadFeaturedProducts();
    }

    function loadFeaturedProducts() {
        // Fetch and display featured products
        // This is a placeholder for actual product fetching logic
        const products = [
            { id: 1, name: 'Gaming Mouse', price: '$29.99' },
            { id: 2, name: 'Mechanical Keyboard', price: '$89.99' },
            { id: 3, name: 'Gaming Headset', price: '$49.99' }
        ];

        products.forEach(product => {
            const productElement = document.createElement('div');
            productElement.classList.add('product');
            productElement.innerHTML = `
                <h3>${product.name}</h3>
                <p>Price: ${product.price}</p>
                <button class="add-to-cart" data-product-id="${product.id}">Add to Cart</button>
            `;
            featuredProducts.appendChild(productElement);
        });
    }

     // Carousel functionality
     let currentSlide = 0;

     function showSlide(index) {
         const slides = document.querySelectorAll('.carousel img');
         if (index >= slides.length) {
             currentSlide = 0;
         } else if (index < 0) {
             currentSlide = slides.length - 1;
         } else {
             currentSlide = index;
         }
         const offset = -currentSlide * 100;
         document.querySelector('.carousel').style.transform = `translateX(${offset}%)`;
     }
 
     function nextSlide() {
         showSlide(currentSlide + 1);
     }
 
     function prevSlide() {
         showSlide(currentSlide - 1);
     }
 
     document.querySelectorAll('.carousel-button.next').forEach(button => {
         button.addEventListener('click', nextSlide);
     });
 
     document.querySelectorAll('.carousel-button.prev').forEach(button => {
         button.addEventListener('click', prevSlide);
     });
 
     showSlide(currentSlide);
 });