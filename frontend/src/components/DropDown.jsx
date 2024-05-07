import React from 'react'

const DropDown = (props) => {
  return (
    <>
        <div className={props.className}>
            <ul className='py-2 cursor-pointer px-4 border-2  -ml-24 mr-52  text-sm rounded-lg'>
                {props.items.map((item)  =>
                    <li className='hover:font-semibold font-normal py-1 px-5'><h2 className='p-1'>{item}</h2></li>
                )}
            </ul>
        </div>
    </>
  )
}

export default DropDown
