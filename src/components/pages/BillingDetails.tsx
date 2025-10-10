// import React from 'react'

// function BillingDetails() {
//   return (
//       <form className='flex flex-col gap-6'>
//         <div className='flex gap-10'>
//             <div className='flex gap-2 flex-col'>
//                 <label htmlFor="FirstName">First Name</label>
//                 <input type="text" id="FirstName" name="FirstName" placeholder='First Name' className='border border-gray-300 rounded-md px-4 py-3 w-[450px] focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent'/>
//             </div>
//             <div className='flex gap-2 flex-col'>
//                 <label htmlFor="LastName">Last Name</label>
//                 <input type="text" id="LastName" name="LastName" placeholder='Last Name' className='border border-gray-300 rounded-md px-4 py-3 w-[450px] focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent'/>
//             </div>
//         </div>
//         <div className='flex gap-10'>
//             <div className='flex gap-2 flex-col'>
//                 <label htmlFor="Mobile">Mobile</label>
//                 <input type="text" id="Mobile" name="Mobile" placeholder='Mobile Number' className='border border-gray-300 rounded-md px-4 py-3 w-[450px] focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent'/>
//             </div>
//             <div className='flex gap-2 flex-col'>
//                 <label htmlFor="Email">Email</label>
//                 <input type="email" id="Email" name="Email" placeholder='Email Address' className='border border-gray-300 rounded-md px-4 py-3 w-[450px] focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent'/>
//             </div>
//         </div>
//         <div className='flex gap-2 flex-col'>
//             <label htmlFor="BillingAddress">Billing Address</label>
//             <input type="text" id="BillingAddress" name="BillingAddress" placeholder='Billing Address' className='border border-gray-300 rounded-md px-4 py-3 w-[927px] focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent'/>
//         </div>
//         <div className='flex gap-2 flex-col'>
//             <label htmlFor="PinCode">Pin Code</label>
//             <input type="text" id="PinCode" name="PinCode" placeholder='Pin Code' className='border border-gray-300 rounded-md px-4 py-3 w-[450px] focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent'/>
//         </div>
//         <div className='flex gap-2 flex-col'>
//             <label htmlFor="AlternateContact">Alternate Contact Number</label>
//             <input type="text" id="AlternateContact" name="AlternateContact" placeholder='Alternate Contact Number' className='border border-gray-300 rounded-md px-4 py-3 w-[450px] focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent'/>
//         </div>
//       </form>
//   )
// }

// export default BillingDetails


"use client";
import React, { useState } from "react";
import Button from "../ui/button";

function BillingDetails() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    billingAddress: "",
    pinCode: "",
    alternateContact: "",
  });

  
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-6 "
    >
        <h1 className="text-h5 font-satoshi tracking-[0.01em] font-medium">Enter Your Billing Details</h1>
      <div className="flex flex-col md:flex-row gap-10">
        <div className="flex gap-2 flex-col">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-4 py-3 w-[350px] xl:w-[370px] 2xl:w-[450px] focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent"
          />
        </div>

        <div className="flex gap-2 flex-col">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-4 py-3 w-[350px] xl:w-[370px] 2xl:w-[450px] focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-10">
        <div className="flex gap-2 flex-col">
          <label htmlFor="mobile">Mobile</label>
          <input
            type="text"
            id="mobile"
            name="mobile"
            placeholder="Mobile Number"
            value={formData.mobile}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-4 py-3 w-[350px] xl:w-[370px] 2xl:w-[450px] focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent"
          />
        </div>

        <div className="flex gap-2 flex-col">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-4 py-3 w-[350px] xl:w-[370px] 2xl:w-[450px] focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent"
          />
        </div>
      </div>

      <div className="flex gap-2 flex-col">
        <label htmlFor="billingAddress">Billing Address</label>
        <input
          type="text"
          id="billingAddress"
          name="billingAddress"
          placeholder="Billing Address"
          value={formData.billingAddress}
          onChange={handleChange}
          className="border border-gray-300 rounded-md px-4 py-3 w-[350px] md:w-[740px] xl:w-[800px] 2xl:w-[927px] focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent"
        />
      </div>

      <div className="flex gap-2 flex-col">
        <label htmlFor="pinCode">Pin Code</label>
        <input
          type="text"
          id="pinCode"
          name="pinCode"
          placeholder="Pin Code"
          value={formData.pinCode}
          onChange={handleChange}
          className="border border-gray-300 rounded-md px-4 py-3 w-[350px] xl:w-[370px] 2xl:w-[450px] focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent"
        />
      </div>

      <div className="flex gap-2 flex-col">
        <label htmlFor="alternateContact">Alternate Contact Number</label>
        <input
          type="text"
          id="alternateContact"
          name="alternateContact"
          placeholder="Alternate Contact Number"
          value={formData.alternateContact}
          onChange={handleChange}
          className="border border-gray-300 rounded-md px-4 py-3 w-[350px] xl:w-[370px] 2xl:w-[450px] focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent"
        />
      </div>

    <div className="flex justify-end">

        <button
            type="submit"
            className="w-fit bg-accent-400 text-white py-2 px-4 rounded-md tracking-[0.02em] font-medium  hover:bg-accent-500 transition-all"
        >
            save
        </button>
    </div>

    </form>
    //

  );
}

export default BillingDetails;

