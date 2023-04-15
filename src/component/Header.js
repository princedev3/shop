import React from 'react'
import {BsBagCheck} from "react-icons/bs"
import { Link } from 'react-router-dom'
const Header = ({cartItem}) => {
  return (
    <div className='header-container'>
        <div className='header-element'>
            <h3><Link className='h3' to="/">MooBomer</Link> </h3>
            <div>
              <Link to="/cart" className='header-element-link'><BsBagCheck/>{cartItem.length} </Link></div>
        </div>
    </div>
  )
}

///{}[] 

export default Header