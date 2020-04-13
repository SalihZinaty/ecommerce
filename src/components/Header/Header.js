import React from 'react';
import {Link} from 'react-router-dom'
import './Header.scss';
import {ReactComponent as Crown} from '../../assets/original.svg';
import {auth} from '../../firebase/firebase.utils';
const Header = ({currentUser}) => (
    <div className='header'>
        <Link to="/">
            <Crown className='crown' />
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
        </div>
    </div>
)

export default Header;