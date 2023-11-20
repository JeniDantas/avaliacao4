import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import Home from './pages/Home';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import ConfirmationPage from './pages/ConfirmationPage';

function App() {
  return (
    <CartProvider>
      <Router>
        <Switch>
        <Route path="/" exact component={Home} />
          <Route path="/cart" component={CartPage} /> 
          <Route path="/checkout" component={CheckoutPage} /> 
          <Route path="/confirmation" component={ConfirmationPage} /> 
        </Switch>
      </Router>
    </CartProvider>
  );
}

export default App;
