import React from 'react';
import useProducts from '../../Hooks/UseProduct';
import useCart from '../../Hooks/UseCart';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import { useHistory } from 'react-router'
// import { removeFromDb } from '../../utilities/fakedb';




const OrderReview = () => {
    const [products] = useProducts()
    const [cart, setCart] = useCart(products);
    const history = useHistory()

    const handelRemove = key => {
        const newCart = cart.filter(product => product.key !== key);
        setCart(newCart);
        // removeFromDb(key)
    }

    const handlePlaceOrder = () => {
        history.push('/placeorder')
    }


    return (
        <div className="shop-container">
            <div className="product=container">
                {
                    cart.map(product => <ReviewItem
                        key={product.key}
                        product={product}
                        handelRemove={handelRemove}
                    ></ReviewItem>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <button onClick={handlePlaceOrder} className="parches">Place Oreder</button>
                </Cart>
            </div>
        </div>
    );
};

export default OrderReview;