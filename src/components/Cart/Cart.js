import React from 'react';
import {connect} from 'react-redux';
import CustomButton from '../CustomButton/CustomButton';
import CartItem from '../CartItem/CartItem';
import './Cart.scss';
import {selectCartItems} from '../../redux/cart/cart.selectors'
import {withRouter} from 'react-router-dom';
import {toggleCartHidden} from '../../redux/cart/cartActions';

const Cart = ({ cartItems, history, dispatch }) => (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {
          cartItems.length >0 ? 
          cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        )) : <span className='empty-message'>YOUR CART IS EMPTY</span>}
      </div>
      <CustomButton onClick = {
        () => {
          history.push('/checkout');
          dispatch(toggleCartHidden());
        }
        }>GO TO CHECKOUT</CustomButton>
    </div>
  );
  
  const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
  });
export default withRouter(connect(mapStateToProps)(Cart));