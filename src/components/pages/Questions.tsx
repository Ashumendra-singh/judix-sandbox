// import React from 'react'
// import { Icon } from 'judix-icon'

// function Questions() {
//   return (
//     <>
//       <div className='w-4/5'>
//             <div>
//                 <p className='text-neutral-500 text-body-md'>FAQs</p>
//                 <h1 className='text-h2 text-gray-800'>Frequently Asked Questions</h1>
//             </div>
//             <div className='font-satoshi'>
//                 <div className='border-b border-gray-400 py-6 space-y-6'>
//                     <div className='flex justify-between items-center'>
//                         <h2 className='text-h6 text-neutral-800'>What is Judix, and how does it benefit law firms?</h2>
//                         <Icon name='Minus' size={26} color='#262626'/>
//                     </div>
//                     <p className='text-natural-400 w-[65%] leading-l tracking-m'>JudiX simplifies Case Research and Management with the use of advanced AI tools, empowering Legal Professionals to work smarter, not harder.</p>
//                 </div>
//                 <div className='border-b border-gray-400 py-6 space-y-2'>
//                     <div className='flex justify-between items-center'>
//                         <h2 className='text-h6 text-neutral-800'>What is Judix, and how does it benefit law firms?</h2>
//                         <Icon name='Add' size={26} color='#262626'/>
//                     </div>
//                     <p className='text-natural-400 w-[65%] leading-l tracking-m'>JudiX simplifies Case Research and Management with the use of advanced AI tools, empowering Legal Professionals to work smarter, not harder.</p>

//                 </div>
//                 <div className='border-b border-gray-400 py-6 space-y-2'>
//                     <div className='flex justify-between items-center'>
//                         <h2 className='text-h6 text-neutral-800'>What is Judix, and how does it benefit law firms?</h2>
//                         <Icon name='Add' size={26} color='#262626'/>
//                     </div>
//                     <p className='text-natural-400 w-[80%] leading-l tracking-m'>JudiX simplifies Case Research and Management with the use of advanced AI tools, empowering Legal Professionals to work smarter, not harder.</p>
//                 </div>
//                 <div className='border-b border-gray-400 py-6 space-y-2'>
//                     <div className='flex justify-between items-center'>
//                         <h2 className='text-h6 text-neutral-800'>What is Judix, and how does it benefit law firms?</h2>
//                         <Icon name='Add' size={26} color='#262626'/>
//                     </div>
//                     <p className='text-natural-400 w-[80%] leading-l tracking-m'>JudiX simplifies Case Research and Management with the use of advanced AI tools, empowering Legal Professionals to work smarter, not harder.</p>
//                 </div>
//                 <div className='border-b border-gray-400 py-6 space-y-2'>
//                     <div className='flex justify-between items-center'>
//                         <h2 className='text-h6 text-neutral-800'>What is Judix, and how does it benefit law firms?</h2>
//                         <Icon name='Add' size={26} color='#262626'/>
//                     </div>
//                     <p className='text-natural-400 w-[80%] leading-l tracking-m'>JudiX simplifies Case Research and Management with the use of advanced AI tools, empowering Legal Professionals to work smarter, not harder.</p>
//                 </div>
//                 <div className='border-b border-gray-400 py-6 space-y-2'>
//                     <div className='flex justify-between items-center'>
//                         <h2 className='text-h6 text-neutral-800'>What is Judix, and how does it benefit law firms?</h2>
//                         <Icon name='Add' size={26} color='#262626'/>
//                     </div>
//                     <p className='text-natural-400 w-[80%] leading-l tracking-m'>JudiX simplifies Case Research and Management with the use of advanced AI tools, empowering Legal Professionals to work smarter, not harder.</p>
//                 </div>
                
//             </div>
//         </div>
//     </>
//   )
// }

// export default Questions



"use client";

import React, { useState } from "react";
import { Icon } from "judix-icon";

function Questions() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is Judix, and how does it benefit law firms?",
      answer:
        "JudiX simplifies Case Research and Management with the use of advanced AI tools, empowering Legal Professionals to work smarter, not harder.",
    },
    {
      question: "What is Judix, and how does it benefit law firms?",
      answer:
        "JudiX simplifies Case Research and Management with the use of advanced AI tools, empowering Legal Professionals to work smarter, not harder.",
    },
    {
      question: "What is Judix, and how does it benefit law firms?",
      answer:
        "JudiX simplifies Case Research and Management with the use of advanced AI tools, empowering Legal Professionals to work smarter, not harder.",
    },
    {
      question: "What is Judix, and how does it benefit law firms?",
      answer:
        "JudiX simplifies Case Research and Management with the use of advanced AI tools, empowering Legal Professionals to work smarter, not harder.",
    },
    {
      question: "What is Judix, and how does it benefit law firms?",
      answer:
        "JudiX simplifies Case Research and Management with the use of advanced AI tools, empowering Legal Professionals to work smarter, not harder.",
    },
    {
      question: "What is Judix, and how does it benefit law firms?",
      answer:
        "JudiX simplifies Case Research and Management with the use of advanced AI tools, empowering Legal Professionals to work smarter, not harder.",
    },
    
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-4/5">
      <div>
        <p className="text-neutral-500 text-body-md">FAQs</p>
        <h1 className="text-h2 text-gray-800">Frequently Asked Questions</h1>
      </div>

      <div className="font-satoshi">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`py-6 space-y-2 ${
                index !== faqs.length - 1 ? "border-b border-gray-400" : ""
                }`}
          >
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFaq(index)}
            >
              <h2 className="text-h5 text-neutral-800">{faq.question}</h2>
              {openIndex === index ? (
                <Icon name="Minus" size={26} color="#262626" />
              ) : (
                <Icon name="Add" size={26} color="#262626" />
              )}
            </div>

            
            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden ${
                openIndex === index
                  ? "max-h-40 opacity-100 mt-3"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-neutral-500 w-[80%] leading-l tracking-m text-h6">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Questions;


