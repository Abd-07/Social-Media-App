import React from 'react';
import './header.css'
import logo from '/Users/abdulazizsuleymanov/Desktop/Javascript/React/social-media-app/social-media-app/src/logo.svg'

function Header() {
    return(
      <div className='header'>
        Header
        <img src={logo}/>
      </div>
    )
  }

export default Header;