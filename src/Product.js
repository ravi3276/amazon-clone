import React from 'react'
import './Product.css'
import {useStateValue} from './StateProvider';

function Product({id, title,price,rating,image}) {
    const [{basket},dispatch]=useStateValue();
        console.log(basket);
   const addToBasket=()=>{
       dispatch({
            type:'ADD_TO_BASKET',
           item:{
             id,
            title,
            price,
            rating,
            image
            }
       })
   }
    return (
        <div className="product">
            <div className='product__info'>
            {title}
            <p className="product__price">
            <small>₹</small>
            <strong>{price}</strong>
            </p>
            <div className='product__rating'>
            {
                
                Array(rating).fill().map((_)=>(
                    <p>⭐</p>
                    ))
            }
            </div>
            </div>
            <img src={image} alt="productimage"/>

            <button onClick={addToBasket}>Add to Cart</button>
        </div>
    )
}

export default Product
