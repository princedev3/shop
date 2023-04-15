import React from 'react'
import Cart from './Cart'
import { Route,Routes } from 'react-router-dom'
import Products from './Products'

const Rout = ({data,cartItem,addItem,reduceItem,removeItem,clearCart}) => {
  return (
    <Routes>
      <Route path='/' element= {<Products data={data} addItem={addItem}/>} />
      <Route   path='/cart' element={ <Cart reduceItem={reduceItem} removeItem={removeItem} cartItem={cartItem} addItem={addItem} clearCart={clearCart}/>}   />
    </Routes>
  )
}

export default Rout

      