import React from 'react'
import ProductImage from "../assets/DummyProduct.jpeg"

function ProductCard(props) {
  return (
    <div className=' m-2 border-2 w-[15vw] border-gray-400 group rounded-lg  p-2'>
        <span className='border-gray-300 border-2 rounded-lg block'><img className= "rounded-lg" src={props.image} alt="no Img" /></span>
      <p title={props.title} className='max-w-[15vw] font-normal max-h-[78px] overflow-hidden'> {props.description} </p>
      <p className="inline-block text-sm m-auto font-bold ">₹</p><label className="font-extrabold text-xl">{props.price}</label>
    </div>
  )
}

export default ProductCard
