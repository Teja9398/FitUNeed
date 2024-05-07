import './App.css'
import {  BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.jsx"
import ProductCard from "./components/ProductCard.jsx"

import img from './assets/DummyProduct.jpeg'
import EmptyCart from './components/EmptyCart.jsx'

function App() {
  const des = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quas repellendus fugiat ad! Iure tenetur reprehenderit a dicta, doloremque neque.'

  return (
    <>
    <div className='m-0 p-0'>
      <NavBar />
      {/* <DropDown/> */}
      {/* <BrowserRouter>
        <Routes>
            <Route path ='/' element = {<NavBar/>}/>  
            <Route path ='productcard' element = {<ProductCard image = {img} description ={des} price ='999'/>}/>
            <Route path ='Cart' element = {<EmptyCart/>}/>  
        </Routes>
      </BrowserRouter> */}
    </div>
    </>
  )
}

export default App
