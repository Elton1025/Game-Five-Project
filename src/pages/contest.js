import './Contest.css';
import Cart from '../components/playercart.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home.js';
import { CartProvider } from 'react-use-cart';

const Contest = ()=> {
    return (
        <>
            <CartProvider>
                <Home/>
                <Cart/>
            </CartProvider>
        </>
    );
}

export default Contest;