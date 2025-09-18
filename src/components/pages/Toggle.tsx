import React from 'react'
import PriceCards from './PriceCards'

function Toggle() {
  return (
    <>
      <div className='flex flex-col gap-16 items-center mt-30 sm:mt-10 w-4/5'>

            {/* yearly off toggle */}

            <div className='w-[235px] h-11 flex border border-slate-600 py-0.5 px-1 rounded-full justify-between items-center'>
                <p className='bg-[#208E7C] rounded-full px-[10px] py-[7px] text-white font-bold'>Monthly</p>
                <p className='w-[133px] p-[12px]'>Yearly 20% off</p>
            </div>


                 {/* priceCards */}
                 <PriceCards/>
       
        </div>
    </>
  )
}

export default Toggle
