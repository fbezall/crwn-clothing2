import React from 'react';
import {connect} from 'react-redux'

import CustomButton from '../custom-button/custom-buttom.component';
import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.component';
import {selectCartItems} from '../../redux/cart/cart.selectors';


const CartDropdown = ({cartItems}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.map(cartItems => <CartItem key={cartItems.id} item={cartItems} />)
            }
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
})

export default connect(mapStateToProps)(CartDropdown);