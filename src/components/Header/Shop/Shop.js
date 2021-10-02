import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../../utilities/fakedb';
import Cart from '../../Cart/Cart';
import Product from '../../Product/Product';
import { Link } from 'react-router-dom'
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    //products to be rendered on the UI
    const [displayProducts, setDisplayProducts] = useState([])


    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setDisplayProducts(data);
            });
        // console.log('product recived')
    }, [])

    useEffect(() => {
        console.log('local storge card called')
        if (products.length) {
            const savedCard = getStoredCart();
            const storedCart = [];
            for (const key in savedCard) {
                const addedProduct = products.find(product => product.key === key);
                if (addedProduct) {
                    const quantity = savedCard[key];
                    addedProduct.quantity = quantity;
                    // console.log(addedProduct)
                    storedCart.push(addedProduct);
                }

            }
            setCart(storedCart);
        }
    }, [products])

    const handelAddToCart = (product) => {
        const newCart = [...cart, product]
        setCart(newCart)
        //save to local storage( for now)
        addToDb(product.key)
    }


    const handelCharge = event => {
        const searchText = event.target.value;
        const matchProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
        setDisplayProducts(matchProducts);
        console.log(matchProducts.length)
    }

    return (
        <div>
            <div className="search-container">
                <input type="text" onChange={handelCharge} placeholder="search-product" />
            </div>
            <div className="shop-container">
                <div className="product-container">
                    <h3>Products: {products.length}</h3>
                    {
                        displayProducts.map(product => <Product
                            key={product.key}
                            product={product}
                            handelAddToCart={handelAddToCart}

                        >
                        </Product>)
                    }
                </div>
                <div className="cart-contsiner">
                    <Cart cart={cart}>
                        <Link to="/review">
                            <button className="parches">Review your order</button>
                        </Link>
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;