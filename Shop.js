import React from 'react';
import ProductCard from '../components/ProductCard';

const products = [
    {
        id: 1,
        title: 'Gaming Mouse',
        price: 29.99,
        image: 'path/to/mouse-image.jpg',
    },
    {
        id: 2,
        title: 'Mechanical Keyboard',
        price: 89.99,
        image: 'path/to/keyboard-image.jpg',
    },
    {
        id: 3,
        title: 'Gaming Headset',
        price: 49.99,
        image: 'path/to/headset-image.jpg',
    },
    // Add more products as needed
];

const Shop = () => {
    return (
        <div className="shop">
            <h1>Shop</h1>
            <div className="product-list">
                {products.map(product => (
                    <ProductCard 
                        key={product.id} 
                        title={product.title} 
                        price={product.price} 
                        image={product.image} 
                    />
                ))}
            </div>
        </div>
    );
};

export default Shop;