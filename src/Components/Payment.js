import React from 'react'
import "../Payment.css";
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import { Link, useNavigate } from 'react-router-dom';
import { CardElement } from "@stripe/react-stripe-js"
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';


function Payment() {
    const [{ basket}] = useStateValue();
    const navigate = useNavigate();
    
   
  return (
    <div className='payment'>
        <div className='payment__container'>
            <h1>
                Checkout (
                    <Link to="/checkout">{basket?.length} items</Link>
                )
            </h1>
         <div className='payment__section'>
<div className='payment__title'>
<h3>Delivery address</h3>
</div>
<div className='payment__address'>
<p>4th , MiG</p>
<p>123 React lane</p>
<p>Los angels CA</p>
</div>
         </div>
         <div className='payment__section'>
         <div className='payment__title'>
<h3>Review items and Delivery</h3>
</div>
<div className='payment__items'>
{basket.map(item => (
    <CheckoutProduct
    id={item.id}
    title={item.title}
    image={item.image}
    price={item.price}
    rating={item.rating}
    />
))}
</div>
         </div>
         <div className='payment__section'>
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className='payment__details'>

    <CardElement />
    <div className='payment__priceContainer'>
    <CurrencyFormat
        renderText={(value) => (
          <h3>Order Total: {value}</h3>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} 
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button onClick={e => navigate('/orders')}>Buy now</button>
    </div>
         </div>
        </div>

    </div>
    </div>
  )
}


export default Payment