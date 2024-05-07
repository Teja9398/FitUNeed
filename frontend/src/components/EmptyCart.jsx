import React from 'react'
import img from '../assets/EmptyCart.png'

const EmptyCart = () => {
  return (
    <div className = "w-screen h-screen bg-slate-200 p-24 flex flex-col items-center justify-between">
      <img className="h-96 " src={img} alt="" />
      <p className='text-4xl font-extrabold'>Your Cart is Empty</p>
      <p className='text-lg'>Add Some Products Before Checkout.</p>
    </div>
  )
}

export default EmptyCart
