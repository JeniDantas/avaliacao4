import React from 'react';
import { Product as ProductType } from '../types/Product';

interface Props {
  product: ProductType;
  onAddToCart: (product: ProductType) => void;
}

import React from 'react';
import { Product as ProductType } from '../types/Product';

interface Props {
  product: ProductType;
  onAddToCart: (product: ProductType) => void;
}

const Product: React.FC<Props> = ({ product, onAddToCart }) => {
  return (
    <div>
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.price}</p>
      <button onClick={() => onAddToCart(product)}>Add to cart</button>
    </div>
  );
};

export default Product;