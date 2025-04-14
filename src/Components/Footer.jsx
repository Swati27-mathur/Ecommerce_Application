import React from 'react'
import logo from "../assets/image/crousel/logo.png"

const Footer = () => {
  return (
    <div className="grid grid-cols-4 gap-4 mt-20  bg-red-50 h-96">
        <div><img src= {logo} className=" w-32 mt-16"/></div>      
        <div>
            <p className=" font-bold mt-16  mb-5">About us</p>
            <p className="mt-2 text-gray-600 hover:text-black cursor-pointer">Home</p>
            <p className="mt-2 text-gray-600 hover:text-black cursor-pointer">About</p>
            <p className="mt-2 text-gray-600 hover:text-black cursor-pointer">Contact</p>
        </div>
        <div>
            <p className=" font-bold mt-16  mb-5">Shop</p>
            <p className="mt-2 text-gray-600 hover:text-black cursor-pointer">Rings</p>
            <p className="mt-2 text-gray-600 hover:text-black cursor-pointer">Bracelets</p>
            <p className="mt-2 text-gray-600 hover:text-black cursor-pointer">Earrings</p>
            <p className="mt-2 text-gray-600 hover:text-black cursor-pointer">Necklaces</p>
        </div>
        <div>
            <p className=" font-bold mt-16  mb-5">Address</p>
            <p className="mt-2 text-gray-600 hover:text-black cursor-pointer">123 Fifth Avenue, New York,</p>
            <p className="mt-2 text-gray-600 hover:text-black cursor-pointer">NY 10160</p>
            <p className="mt-2 text-gray-600 hover:text-black cursor-pointer">contact@info.com</p>
            <p className="mt-2 text-gray-600 hover:text-black cursor-pointer">929-242-6868</p>
        </div>
    </div>
  )
}

export default Footer
