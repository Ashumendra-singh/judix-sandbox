// import React from 'react'
// import Button from '../ui/button'



// function Navbar() {
//   return (
//     <div>
//       <nav className='h-16 flex justify-between py-[12px] px-[24px] items-center'>
//         <img src='logo.svg' alt="logo image" />
//         <div>
//             <ul className='flex gap-8 items-center font-satoshi font-medium  text-body-md'>
//                 <li>Product</li>
//                 <li>Pricing</li>
//                 <li>Customers</li>
//                 <li>About</li>
//                 <Button variant='primary' size='medium' suffixIcon='CallCalling'>
//                     Request a callback
//                     {/* <img src='call.svg' alt='call icon' /> */}
//                 </Button>
//             </ul>
//         </div>
//       </nav>
//     </div>
//   )
// }

// export default Navbar
"use client";
import React, { useState } from "react";
import Button from "../ui/button";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="h-16 flex justify-between items-center py-3 px-6  w-full">
      {/* Logo */}
      <img src="logo.svg" alt="logo image" className="h-8 w-auto" />

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 items-center font-satoshi font-medium text-body-md">
        <li className="cursor-pointer">Product</li>
        <li className="cursor-pointer">Pricing</li>
        <li className="cursor-pointer">Customers</li>
        <li className="cursor-pointer">About</li>
        <Button variant="primary" size="medium" suffixIcon="CallCalling">
          Request a callback
        </Button>
      </ul>

      {/* Mobile Hamburger Button */}
      <button
        className="md:hidden text-2xl"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Toggle Menu"
      >
        {isOpen ? "✖" : "☰"}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="w-full bg-neutral-100 shadow-md md:hidden ">
          <ul className="flex flex-col gap-4 items-center py-6 font-satoshi font-medium text-body-md">
            <li className="cursor-pointer">Product</li>
            <li className="cursor-pointer">Pricing</li>
            <li className="cursor-pointer">Customers</li>
            <li className="cursor-pointer">About</li>
            <Button variant="primary" size="medium" suffixIcon="CallCalling">
              Request a callback
            </Button>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
