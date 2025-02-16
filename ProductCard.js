import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
            <img src={product.image} alt={product.title} className="product-image" />
            <h3 className="product-title">{product.title}</h3>
            <p className="product-price">${product.price}</p>
            <Link to={`/product/${product.id}`} className="product-link">View Details</Link>
        </div>
    );
};

export default ProductCard;