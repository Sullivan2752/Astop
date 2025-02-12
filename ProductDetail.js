import React from 'react';

const ProductDetail = ({ product }) => {
    return (
        <div className="product-detail">
            <h1>{product.name}</h1>
            <img src={product.image} alt={product.name} />
            <p>{product.description}</p>
            <h2>Price: ${product.price}</h2>
            <button>Add to Cart</button>
        </div>
    );
};

export default ProductDetail;