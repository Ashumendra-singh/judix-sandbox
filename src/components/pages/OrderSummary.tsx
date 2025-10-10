import { Icon } from 'judix-icon'
import React from 'react'
import Button from '../ui/button';

function OrderSummary() {
  return (
    <div className='flex flex-col gap-4 font-satoshi tracking-[0.02em] bg-base-100 p-6 h-1/2 rounded-lg'>
      <div className='flex flex-col gap-4'>
        <div>
            <h2 className='text-body-lg font-medium'>Order Summary</h2>
            <p className='font-medium text-sm'>2 items</p>
        </div>
        <div className='w-full border-1 border-gray-300'></div>
        <div className='flex flex-col gap-2'>
            <div className='flex items-center justify-between'>
                <h5>Subtotal</h5>
                <p>₹1,248.00</p>
            </div>
            <div className='flex items-center justify-between'>
                <h5>GST</h5>
                <p>₹1,248.00</p>
            </div>
            <div className='flex items-center justify-between'>
                <h5>Amount Total</h5>
                <p>₹1,248.00</p>
            </div>
        </div>
      </div>

      <div className='flex flex-col gap-4'>
        <p>Subtotal does not include applicable taxes</p>
        <div>
            <span>Promo Code:</span>
            <span className='text-accent-400 font-medium underline underline-offset-4'>NEWUSER123</span>
            <img src="trash.svg" alt="" className='inline'/>
        </div>
        <div className='flex items-center gap-2 justify-center w-[80%]'>
          
          <h5 className='inline font-medium text-center'> <img src="checked.svg" alt="" className='inline px-4 py-2'/> VALID PROMO CODE.<span className='font-normal'>Your&apos;e getting the best price we&apos;ve got.</span></h5>
        </div>
      </div>
      
      <div className='flex flex-col gap-4'>
        <p className='text-center'>You saved ₹2,500.00 on your order.</p>
        <Button variant="accent" size="large" style={{ width: '100%' }}>
          Proceed to Checkout
        </Button>
      </div>

      <div className='flex items-center gap-2 justify-center'>
        <img src="lock.svg" alt="locked" />
        <p>Secure Payment</p>
      </div>

      <div></div>
    </div>
  )
}

export default OrderSummary
