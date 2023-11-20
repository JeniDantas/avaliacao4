import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import Product from '../components/Product';
import { Product as ProductType } from '../types/Product';

const Home: React.FC = () => {
    const { addToCart } = useContext(CartContext);

    const products: ProductType[] = [
    { id: 1, name: 'Product 1', image: 'https://via.placeholder.com/150', price: 10, quantity: 1 },
    { id: 2, name: 'Product 2', image: 'https://via.placeholder.com/150', price: 20, quantity: 1 },
    ];

    return (
    <div>
        {products.map(product => (
        <Product key={product.id} product={product} onAddToCart={addToCart} />
        ))}
    </div>
    );
};

export default Home;