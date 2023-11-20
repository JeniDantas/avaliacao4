import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { Product as ProductType } from '../types/Product';

const Cart: React.FC = () => {
    const { cart, removeFromCart } = useContext(CartContext);

    return (
    <div>
        {cart.map((product: ProductType) => (
        <div key={product.id}>
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.price}</p>
            <p>Quantity: {product.quantity}</p>
            <button onClick={() => removeFromCart(product.id)}>Remove</button>
        </div>
        ))}
    </div>
    );
};

export default Cart;