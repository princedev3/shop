import React from 'react'

const Cart = ({cartItem,addItem,reduceItem,removeItem,clearCart}) => {
  const total = +cartItem.reduce((acc,cur)=> acc + cur.price*cur.quantity ,0).toFixed(2)
  return (
    <div className='cart'>
      <div className='cart-bag'>
        <h3>your bag</h3>
      </div>
      {cartItem.map(item=>
        <div key={item.id} className='cart-element'>
          <div className='cart-element-image'>
            <img src={item.image} alt={item.name}/>
          </div>
            <div className='cart-element-names'>
              <h4>{item.name}</h4>
              <p> ${item.price}</p>
              <button onClick={()=>removeItem(item)}>remove</button>
            </div>
            <div className='cart-element-increment' >
              <button onClick={()=>addItem(item)}> ^</button>
              <h3>{item.quantity}</h3>
              <button onClick={()=>reduceItem(item)}>⌄</button>
            </div>
        </div>
      )}
      <div className='line'></div>
      <div className='cart-element-total'>
        <h3>total:</h3>
        <h3>${total}</h3>
      </div>

      <div className='cart-element-clear'>
        <button onClick={()=>clearCart()}>clear Cart</button>
      </div>
    </div>
  )
}

export default Cart