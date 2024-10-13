import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product, onAddToCart }) => {
  const { name, image, description, rating, cost, discount } = product;

  const discountedPrice = discount ? (cost - (cost * discount / 100)).toFixed(2) : cost.toFixed(2);

  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{description}</p>
      <div className="product-rating">Rating: {rating} ⭐</div>
      <div className="product-price">
        {discount ? (
          <>
            <span className="original-price">₹{cost.toFixed(2)}</span>
            <span className="discounted-price">₹{discountedPrice}</span>
          </>
        ) : (
          <span className="current-price">₹{cost.toFixed(2)}</span>
        )}
      </div>
      <button onClick={onAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
