import React, { createContext, useState } from 'react';
import { Product } from '../types/Product';

interface CartContextData {
    cart: Product[];
    addToCart: (product: Product) => void;
    removeFromCart: (productId: number) => void;
}

export const CartContext = createContext<CartContextData>({} as CartContextData);

export const CartProvider: React.FC = ({ children }) => {
    const [cart, setCart] = useState<Product[]>([]);

    function addToCart(product: Product) {
    setCart([...cart, product]);
    }

    function removeFromCart(productId: number) {
        setCart(cart.filter(product => product.id !== productId));
    }
    
    return (
    <CartContext.Provider value={{ cart, addToCart }}>
        {children}
    </CartContext.Provider>
    );
};