import { Icon } from 'judix-icon'
import React from 'react'

function Yourcart() {
  return (
    <div className='w-[95%] xl:w-[800px] 2xl:w-[927px] flex flex-col gap-2'>
      <h2 className='font-satoshi text-h5 font-medium tracking-[0.01em] p-2'>Your Cart</h2>
      <div className='border rounded-md border-gray-300'>
        <div className=' mx-6 my-7'>
          <div className='flex flex-col sm:flex-row justify-between gap-8'>
              <div className='flex md:flex-row flex-col gap-4 items-start'>
                  <img src="iconlogo.svg" alt="" className='hidden sm:block'/>
                  <img src="logo.svg" alt="" className='block sm:hidden ml-auto'/>
                  <div className='flex flex-col gap-3'>
                    <div className='flex flex-col gap-3'>
                      <div className=' flex text-body-lg font-medium gap-2 items-center tracking-[0.01em]'>
                        <h3>Judix AI Reasearch</h3>
                        <div className='h-1 w-1 bg-gray-800 rounded-4xl'></div>
                        <h3>STARTER Plan</h3>
                      </div>
                      <p>Find relevant case laws 10x faster and smarter</p>
                    </div>
                    <select name="plan" id="plan" className=' border-1 border-gray-800 rounded-sm px-4 py-3 gap-2 w-30'>
                      <option value="1" >1 Month</option>
                      <option value="2">2 Month</option>
                      <option value="3">3 Month</option>
                    </select>
                    <p className='text-body-sm font-satoshi text-gray-900 tracking-[0.02em]'>Renews October 13 for ₹99.00</p>
                    
                  </div>
              </div>
              <div className=''>
                <div className='font-satoshi sm:items-end flex flex-col gap-1'>
                  <h2 className='font-medium text-primary-400 text-body-lg tracking-[0.02em]'>₹1249.00</h2>
                  <h3 className='text-body-sm font-normal tracking-[0.01em] line-through'>₹149.00</h3>
                  <p className='text-body-sm font-normal tracking-[0.01em]'>33% off</p>
                </div>
                <div className='flex gap-3'>
                  <h2 className='font-medium underline text-accent-400 tracking-[0.01em] underline-offset-4'>Change Plan</h2>
                  <Icon name='Trash' size={20} color='#FF4D4D'/>
                </div>
              </div>
          </div>
          <div></div>
        </div>
        <hr className='border-gray-300'/>
        <div className='my-7 mx-6'>
          <div className='flex flex-col sm:flex-row justify-between gap-8'>
              <div className='flex flex-col sm:flex-row gap-4 items-start'>
                  <img src="whatsapplogo.svg" alt="" className='hidden sm:block'/>
                  <img src="whatsapp.svg" alt="" className='block sm:hidden ml-auto'/>
                  <div className='flex flex-col gap-3'>
                    <div className='flex flex-col gap-3'>
                      <div className=' flex text-body-lg font-medium gap-2 items-center tracking-[0.01em]'>
                        <h3>WhatsApp Integration</h3>
                        <div className='h-1 w-1 bg-gray-800 rounded-4xl'></div>
                        <h3>Add-On</h3>
                      </div>
                      <p>Instant legal research on the go.r</p>
                    </div>
                    <p className='text-body-sm font-satoshi text-gray-900 tracking-[0.02em]'>Renews October 13 for ₹99.00 with your existing plan.</p>
                    
                  </div>
              </div>
              <div className=''>
                <div className='font-satoshi sm:items-end flex flex-col gap-1'>
                  <h2 className='font-medium text-primary-400 text-body-lg tracking-[0.02em]'>₹1249.00</h2>
                  <h3 className='text-body-sm font-normal tracking-[0.01em] line-through'>₹149.00</h3>
                  <p className='text-body-sm font-normal tracking-[0.01em]'>33% off</p>
                  <Icon name='Trash' size={20} color='#FF4D4D'/>
                </div>
              </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default Yourcart
