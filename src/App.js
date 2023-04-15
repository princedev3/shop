import React, { useState } from 'react'
import Header from "./component/Header"

import data from './component/Data'
import "./App.css"
import { BrowserRouter } from 'react-router-dom'
import Rout from './component/Rout'


const App = () => {

  const [cartItem,setCartItem] = useState([])

  const addItem =(product)=>{
    const productExist = cartItem.find(item=>item.id ===product.id)

    if(productExist){
      setCartItem(cartItem.map(item=>item.id ===product.id?
        {...productExist,quantity:productExist.quantity+1}:item))
    }else{
      setCartItem([...cartItem,{...product,quantity:1}])
    }
  }

  const reduceItem =(product)=>{
    const productExist = cartItem.find(item=>item.id===product.id)
    if(productExist.quantity===1){
      setCartItem(cartItem.filter(item=>item.id!==product.id))
    }else{
      setCartItem(cartItem.map(item=>item.id===product.id?{...productExist,quantity:productExist.quantity-1}:item))
    }
  }
  const removeItem= (product)=>{
    setCartItem(cartItem.filter(item=>item.id!==product.id))
  }
  const clearCart = ()=>{
    setCartItem([])
  }
  return (
   

    <div className='bg'>
      <BrowserRouter>
        <Header cartItem={cartItem}/>
       <Rout data={data} cartItem={cartItem} addItem={addItem} reduceItem={reduceItem} removeItem={removeItem} clearCart={clearCart}/>

      </BrowserRouter>
    </div>
  
  )
}

export default App