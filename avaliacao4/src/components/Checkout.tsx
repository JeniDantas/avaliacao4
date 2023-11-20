import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';

const Checkout: React.FC = () => {
    const { cart } = useContext(CartContext);
    const [coupon, setCoupon] = useState('');
    const history = useHistory();

  const subtotal = cart.reduce((total, product) => total + product.price * product.quantity, 0);
  let discount = 0;
  if (coupon === 'DESCONTO10') {
    discount = subtotal * 0.1;
  } else if (coupon === 'DESCONTO20') {
    discount = subtotal * 0.2;
  }

  const total = subtotal - discount;

  const handleCheckout = () => {
      setCart([]);
    
      history.push('/confirmation');
    };

    history.push('/confirmation');
  };

  return (
    <div>
      <h1>Checkout</h1>
      <p>Subtotal: {subtotal}</p>
      <input type="text" value={coupon} onChange={e => setCoupon(e.target.value)} placeholder="Coupon code" />
      <p>Discount: {discount}</p>
      <p>Total: {total}</p>
      <button onClick={handleCheckout}>Finalizar Compra</button>
    </div>
  );
};

export default Checkout;
Agora, o componente Checkout deve aplicar um desconto de 10% se o cupom for 'DESCONTO10' e um desconto de 20% se o cupom for 'DESCONTO20'.



    return (
    <div>
        <h1>Checkout</h1>
        <p>Subtotal: {subtotal}</p>
        <input type="text" value={coupon} onChange={e => setCoupon(e.target.value)} placeholder="Coupon code" />
        <p>Discount: {discount}</p>
        <p>Total: {total}</p>
        <button onClick={handleCheckout}>Finalizar Compra</button>
    </div>
    );
};

export default Checkout;