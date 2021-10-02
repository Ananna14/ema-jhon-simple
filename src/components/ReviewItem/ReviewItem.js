import React from 'react';

const ReviewItem = (props) => {
    const { name, price, quantity, key } = props.product;
    const { handelRemove } = props;
    return (
        <div className="product">

            <div>
                <h4 className="product-name">{name}</h4>
                <h4>Price:{price}</h4>
                <h4>Quantity:{quantity}</h4>
                <button onClick={() => handelRemove(key)} className="parches">Remove</button>
            </div>
        </div>
    );
};

export default ReviewItem;