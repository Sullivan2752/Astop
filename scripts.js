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

    // Page transition functionality
    document.body.classList.add('fade-in');

    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const href = this.getAttribute('href');
            document.body.classList.remove('fade-in');
            document.body.classList.add('fade-out');
            setTimeout(() => {
                window.location.href = href;
            }, 500);
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
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

    // Page transition functionality
    document.body.classList.add('fade-in');

    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const href = this.getAttribute('href');
            document.body.classList.remove('fade-in');
            document.body.classList.add('fade-out');
            setTimeout(() => {
                window.location.href = href;
            }, 500);
        });
    });

    // Image enlargement functionality
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
        <span class="close">&times;</span>
        <div class="modal-content">
            <img id="modal-img" src="" alt="Product Image">
        </div>
    `;
    document.body.appendChild(modal);

    const modalImg = document.getElementById('modal-img');
    const closeModal = document.querySelector('.close');

    document.querySelectorAll('.product-card img').forEach(img => {
        img.addEventListener('click', function() {
            modal.style.display = 'block';
            modalImg.src = this.src;
        });
    });

    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    let trailActive = false;
    
    // Création du bouton pour activer/désactiver l'effet
    const toggleButton = document.createElement('button');
    toggleButton.innerText = 'Activer Traînée';
    toggleButton.classList.add('toggle-trail');
    document.body.appendChild(toggleButton);
    
    toggleButton.addEventListener('click', function() {
        trailActive = !trailActive;
        toggleButton.innerText = trailActive ? 'Désactiver Traînée' : 'Activer Traînée';
    });
    

    document.addEventListener('mousemove', function(event) {
        if (!trailActive) return;
    
        const x = event.clientX;
        const y = event.clientY;
    
        const trail = document.createElement('div');
        trail.classList.add('mouse-trail');
        document.body.appendChild(trail);
    
        trail.style.left = `${x}px`;
        trail.style.top = `${y}px`;
    
        // Créer une couleur lumineuse
        const hue = Math.random() * 360;
        const lightColor = `hsl(${hue}, 100%, 70%)`;
    
        // Appliquer le dégradé avec un effet de lueur
        trail.style.background = `radial-gradient(circle, ${lightColor} 20%, rgba(255, 255, 255, 0) 70%)`;
        trail.style.boxShadow = `0 0 30px ${lightColor}, 0 0 60px ${lightColor}`;
    
        // Animation d'expansion
        setTimeout(() => {
            trail.classList.add('active');
        }, 50);
    
        // Suppression après 1.5s
        setTimeout(() => {
            trail.remove();
        }, 1500);
    });
    document.addEventListener('DOMContentLoaded', function() {
        let trailActive = false;
        
        const toggleButton = document.createElement('button');
        toggleButton.innerText = 'Activer Traînée';
        toggleButton.classList.add('toggle-trail');
        document.body.appendChild(toggleButton);
        
        const audioPlayer = document.querySelector('.audio-player audio');
        
        toggleButton.addEventListener('click', function() {
            trailActive = !trailActive;
            toggleButton.innerText = trailActive ? 'Désactiver Traînée' : 'Activer Traînée';
            
            if (trailActive) {
                audioPlayer.play();  // Démarre la musique quand la traînée est activée
            } else {
                audioPlayer.pause();  // Arrête la musique quand la traînée est désactivée
            }
        });
    });
    
    
    

}); 