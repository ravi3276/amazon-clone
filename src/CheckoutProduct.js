import React from 'react';
import './checkoutproduct.css';
import {useStateValue} from './StateProvider';

function CheckoutProduct({id,title,image,price,rating}) {
        const [{basket},dispatch]=useStateValue();   
    function removefrombasket(){
            // console.log('Remove')
            dispatch({
                type: 'REMOVE_FROM_BASKET',
                id:id
            })
        }
    return (
        <div className="checkoutproduct">
            <img className="checkoutproduct__img" src={image} alt=""/>

            <div className="checkoutproduct__info">
            <p className="checkoutproduct__title">{title}</p>

            <p className="checkoutproduct__price">
            <small>₹</small>
            <strong>{price}</strong>
            </p>

            <div className='checkoutproduct__rating'>
            {
                
                Array(rating).fill().map((_)=>(
                    <p>⭐</p>
                    ))
            }
            </div>

            <button className='product__btn' onClick={removefrombasket}>Remove</button>

            </div>

        </div>

    )
}

export default CheckoutProduct
