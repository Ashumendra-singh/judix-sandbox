// import React, { use } from 'react'
// import PriceCards from './PriceCards';
// import { useState } from 'react';

// function Toggle() {
//   const [togglebtn, setTogglebtn] = useState<boolean>(false);

//   return (
//     <>
//       <div className='flex flex-col gap-16 items-center mt-30 sm:mt-10 w-4/5'>

//             {/* yearly off toggle */}

//             <div className='w-[235px] h-11 flex border border-slate-600 py-0.5 px-1 rounded-full justify-between items-center' onClick={() => setTogglebtn(!togglebtn)}>
//                 <p className={`${togglebtn ? "bg-accent-400 rounded-full" :""}  px-[10px] py-[7px] text-white font-bold `}>Monthly</p>
//                 <p className='w-[133px] p-[12px]'>Yearly 20% off</p>
//             </div>


//                  {/* priceCards */}
//                  <PriceCards/>
       
//         </div>
//     </>
//   )
// }

// export default Toggle



"use client";

import React, { useState } from 'react'
import PriceCards from './PriceCards'

function Toggle() {

  const [togglebtn, setTogglebtn] = useState(false);

  return (
    <>
      <div className='flex flex-col gap-16 items-center mt-30 sm:mt-10 w-[95%] sm:mx-0 sm:w-4/5'>

        {/* yearly off toggle */}
        <div
          className='w-[235px] h-11 flex border border-accent-400 py-0.5 px-1 rounded-full justify-between items-center cursor-pointer'
          onClick={() => setTogglebtn(!togglebtn)}
        >
          {/* Monthly */}
          <p
            className={`${!togglebtn ? "bg-accent-400 text-neutral-50" : "text-gray-800"} rounded-full px-[10px] py-[7px] font-bold transition-all duration-300`}
          >
            Monthly
          </p>

          {/* Yearly */}
          <p
            className={`${togglebtn ? "bg-accent-400 text-neutral-50" : "text-gray-800"} rounded-full px-[10px] py-[7px] font-bold transition-all duration-300`}
          >
            Yearly 20% off
          </p>
        </div>

        {/* priceCards */}
        <PriceCards yearly={togglebtn} />
      </div>
    </>
  )
}

export default Toggle
