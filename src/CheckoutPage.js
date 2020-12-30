import React from 'react'
import './CheckoutPage.css';
import {useStateValue} from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal'

function CheckoutPage() {
    const [{basket},dispatch]=useStateValue();
    return (
        <div className="checkout">
        <div className="checkout__left">
            <img className="checkout__add" src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg' alt='add' />
            
            {  
                (basket?.length ===0)?
                (
                    <div>
                    <h2>your shopping basket is empty</h2>
                    <p>You have no items in your basket.continue to shopping</p>
                    </div>
                ):(
                    <div>
                    <h2 className="checkout__title">Your shopping basket</h2>

                    {
                        basket.map((item)=>(
                            <CheckoutProduct 
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                        ))
                    }
                    </div>
                )
            }
            </div>
            {
                basket.length > 0&& (
                    <div className="checkout__right">
               {/*
                <Subtotal />
            */}     
                    </div>
                )
            }
            </div>
    )
}

export default CheckoutPage
