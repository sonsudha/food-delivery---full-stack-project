import React, { useState } from 'react';
import Navbar from './components/navbar/navbar.jsx'
import { Routes,Route } from 'react-router-dom';
import Cart from './pages/Cart/Cart.jsx';
import Home from './pages/Home/Home.jsx';
import PlaceOrder from './pages/PlaceOreder/PlaceOrder.jsx'
import Footer from './components/Footer/Footer.jsx';
import LoginPopup from './components/LoginPopup/LoginPopup.jsx';
 
const App = () => {
  const[showLogin,setShowLogin]=useState(false)
  return (
    <>
    {showLogin? <LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <div className='app'> 
  <Navbar setShowLogin ={setShowLogin}/>
  <Routes>

    <Route path='/' element={<Home/>}></Route>
    <Route path='/Cart' element={<Cart/>}></Route>
  <Route path='/order' element={<PlaceOrder/>}></Route>
  </Routes>
  </div>
  <Footer/>
    </>
  )
}

export default App;