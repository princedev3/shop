import React from 'react'
import { useState,useEffect,useRef } from 'react'
import {motion} from "framer-motion"

const Products = ({data,addItem}) => {
  const [width,setWidth]= useState(0)

  const carousel = useRef()

  useEffect(()=>{

    setWidth(carousel.current.scrollWidth-carousel.current.offsetWidth)
  },[])

  return (
    <motion.div whileTap={{cursor:"grabbing"}} ref={carousel} className='carousel body'>
        <motion.div drag="x" dragConstraints={{right:0,left:-width}} className='inner-carousel'>
        {data.map(item => <div key={item.id}>
            {
              <motion.div className='item'> 
                <img src={item.image} alt={item.name}/>
                <h3>{item.name}</h3>
                <h4>${item.price}</h4>
                <button onClick={()=>addItem(item)}>pick item</button>
              </motion.div>
            }
        </div>)}
        </motion.div>
    </motion.div>
  )
}

export default Products