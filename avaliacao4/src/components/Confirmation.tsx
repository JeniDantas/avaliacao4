import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { Product as ProductType } from '../types/Product';

const Confirmation: React.FC = () => {
    const { cart } = useContext(CartContext);

    return (
    <div>
        <h1>Order Confirmation</h1>
        {cart.map((product: ProductType) => (
        <div key={product.id}>
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.price}</p>
            <p>Quantity: {product.quantity}</p>
        </div>
        ))}
    </div>
    );
};

export default Confirmation;