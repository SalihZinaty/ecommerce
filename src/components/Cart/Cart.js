import React from 'react';
import CustomButton from '../CustomButton/CustomButton';

import './Cart.scss';

const Cart = () => (
    <div className = 'cart-dropdown'>
        <div className='cart-items' />
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)

export default Cart