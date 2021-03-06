import React from 'react';
import {Link} from 'react-router-dom'
import {createStructuredSelector} from 'reselect';
import './Header.scss';
import {ReactComponent as Crown} from '../../assets/original.svg';
import CartIcon from '../CartIcon/CartIcon';
import Cart from '../Cart/Cart';
import {auth} from '../../firebase/firebase.utils';

import {connect} from 'react-redux';


import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {selectCurrentUser} from '../../redux/user/user.selector';
const Header = ({currentUser,hidden}) =>
(
    <div className='header'>
        <Link to="/">
            <Crown className='crown mr3' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop' >SHOP</Link>
            <Link className='option' to='/shop' >CONTACT</Link>
            {
                currentUser ?
                    <div className='option pointer' onClick={() => {auth.signOut()}}>
                    <Link to='/'>SIGN OUT</Link>
                    </div>
                    :
                    <Link to='/signin'>SIGN IN</Link>
            }
            <CartIcon/>
        </div>
        {
            hidden ? null : <Cart/>
        }
    </div>
)

const mapStateToProps = createStructuredSelector ({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);