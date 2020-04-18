import React from 'react';
import './CheckOut.scss';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import CheckOut from '../../components/CheckOut/CheckOut'
import {selectCartItems,selectCartTotal} from '../../redux/cart/cart.selectors'; 
import CartItem from '../../components/CartItem/CartItem';
const CheckOutPage = ({cartItems, total}) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>PRODUCT</span>
            </div>
            <div className='header-block'>
                <span>DESCRIPTION</span>
            </div>
            <div className='header-block'>
                <span>QUANTITY</span>
            </div>
            <div className='header-block'>
                <span>PRICE</span>
            </div>
            <div className='header-block'>
                <span>REMOVE</span>
            </div>
        </div>
        {
            cartItems.map(cartItem => 
            <CheckOut 
                key={CartItem.id}
                cartItem = {cartItem}
             />
            )
        }
        <div className='total'>
            <span>{`TOTAL $${total}`}</span>
        </div>
    </div>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
})
export default connect(mapStateToProps)(CheckOutPage);