import React from 'react'
import logo from  "../assets/Logo.png";
import {VscAccount} from "react-icons/vsc";
import {BsCart3, BsSearch} from "react-icons/bs"
import DropDown from './DropDown';
function NavBar() {
  return (
    <>
    
    <div className='flex w-screen border-slate-400 border-2 h-[4.5rem] justify-between items-center sticky'>
      <button class >{<img src = {logo} alt="notFound" className='w-48  p-0 align-top ml-4' />}</button>  {/*to be changed into link tag*/}
     
      <ul className='flex space-x-10 text-lg font-semibold text-gray-600 items-center'>
        <button className='hover:text-blue-600 hover:border-b-4 hover:mt-[4px] hover:border-blue-600 px-2 py-4 peer'><li>Men</li></button>
        <DropDown className=' h-auto peer-hover:flex peer-focus:flex hidden  mt-[13rem] absolute hover:flex' items = {['casual','Formal','Party']} />
        <button className='hover:text-blue-600 hover:border-b-4 hover:mt-[4px] hover:border-blue-600 px-2 py-4'><li>Women</li></button>
        {/* <DropDown className=' h-auto peer-hover:flex peer-focus:flex hidden  mt-[15rem] absolute hover:flex' items = {['casual','Formal','Party']} /> */}
        <button className='hover:text-blue-600 hover:border-b-4 hover:mt-[4px] hover:border-blue-600 px-2 py-4'><li>Kids</li></button>
      </ul>
      <form action="" className='flex font-light'>
        <input type="text" className='peer px-4 h-10 rounded-l-full my-auto outline-none border-y-[1px] border-l-[1px] focus:border-blue-600'  placeholder='Search'/>
        <button className='bg-white h-10 px-4 rounded-r-full my-auto border-y-[1px] border-r-[1px]  hover:text-blue-600 peer-focus:border-blue-600'><BsSearch/></button>
      </form>

      <span className='flex space-x-4 mr-10 '>
        <span className='p-2 flex flex-col items-center my-auto hover:text-blue-600'>
          <VscAccount className=' rounded-full px-1 text-4xl'/>
          <label className='text-xs'>Profile</label>
        </span>
        <span className='group flex flex-col items-center my-auto justify-center hover:text-blue-600 '>
          <span className='bg-red-600 rounded-full text-[8px] group-hover:inline hidden text-white py-[2px] px-[6px] z-10 absolute ml-8 mb-12'>0</span>
          <BsCart3 className=' rounded-full px-1 text-4xl'/> 
          <label className='text-xs ml-1'>Cart</label>
        </span>

      </span>
    </div>
      
    </>
  )
}

export default NavBar;
