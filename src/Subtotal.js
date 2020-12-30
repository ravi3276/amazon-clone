import React from 'react'
import './subtotal.css';
import CurrencyFormat from 'react-currency-format';
import {useStateValue} from './StateProvider';

function Subtotal() {
    const [{basket},dispatch]=useStateValue();

    return (
        <div>
        <CurrencyFormat 
        renderText={(value)=>(
           <> 
            <p>
            {

                console.log(basket.length)
            }
            Subtotal ({basket.length} items) : <strong>{`0`}</strong>
            </p>
            <small>
            <input type="checkbox"/> this order contains a gift
            </small>
            </>
        )}
        decimalScale={2}
        value={1}
        displaytype={"text"}
        thousandSeparator={true}
        prefix={"₹"}
        />
            <button className="btn__">proceed to checkout</button>
        </div>
    )
}

export default Subtotal
