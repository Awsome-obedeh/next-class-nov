"use client"
import Image from 'next/image'
import { useState } from 'react'

export default function Products(props) {

  const [counter,setCounter] = useState(1)

  const minus = () => {
    if(counter<=1){
      setCounter(1)
    }
    else{
      setCounter(counter-1)
    }
  } 
  return (
    <div>
      <span>Product quantity:  {props.quantity}</span>
      <Image src={props.src} width={300} height={250} alt="image1"/>
      <p>{props.name}</p>
      <p>{props.price}</p>
      <div>
        <button onClick={minus}>-</button>
        <span>{counter}</span>
        <button onClick={()=>setCounter(counter+1)}>+</button>
      </div>
      {/* {
        props.quantity > 0 ?  <button>{props.buy}</button>: ""
      } */}
      {
        props.quantity>0 && <button>{props.buy}</button>
      }
      
    </div>
  )
}
