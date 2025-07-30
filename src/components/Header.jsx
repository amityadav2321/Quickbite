import React, { useState } from 'react'
import logo from '../assets/Logo-1.png'; 
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import { useSelector } from 'react-redux';


function Header() {
    const [loginBtn,setLoginBtn]=useState("Logout");

    const onlineStatus =useOnlineStatus();
    const status =(onlineStatus ? "🟢" : "🔴")

    const cartItems =useSelector((store)=>store.cart.items)
    
  return (
    <div className='flex font-semibold justify-between text-xl  h-20 items-center border-gray-800 bg-gray-700 text-white sticky top-0 z-50'>
        <div className='flex mx-8 items-center'>
            <div className='w-20  cursor-pointer rounded-full'>
                <img src={logo} alt="" />
            </div>
            <div className='cursor-pointer px-2'>
                <h1>QuickBite</h1>
            </div>
        </div>
       
        <div className=''>
            <ul className='flex items-center mr-10 gap-6 cursor-pointer'>
                <li>Online Status: {status}</li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/grocery">Grocery</Link></li>
                <li><Link to="/cart">🛒 Cart ({cartItems.length})</Link></li>
                <li><button  className=" text-white border border-green-500 px-3 py-1 rounded-md font-semibold flex items-center gap-2 cursor-pointer" onClick={()=>{
                   (loginBtn === "Login")?setLoginBtn("Login") : setLoginBtn("Logout")
                }}>{loginBtn}</button></li>
                
            </ul>
        </div>
    </div>
  )
}

export default Header