import React from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./header.styles.scss";

import {auth} from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo"></Logo>
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>
      {
        currentUser ?
        <Link className="option" onClick={() => auth.signOut()}>SIGN OUT</Link>
        :
        <Link className="option" to='/signin'>SIGN IN</Link>
      }
      <CartIcon/>
    </div>
    {
      hidden ? null : <CartDropDown />
    }
  </div>
);


//state bizim top level root reducer 'ımız
//user'ın currentUser'ını aldık, cart'ın hidden özelliğini
//hidden 
const mapStateToProps = ({user : {currentUser}, cart: {hidden}}) => ({
  currentUser,
  hidden
})

export default connect(mapStateToProps)(Header);