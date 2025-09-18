import React from 'react'
import Navbar from './Navbar'
import { SlidePanel } from '../ui'
import ToggleButton from '../ui/toggleButton'
import Card from '../ui/card'
import Button from '../ui/button'
import { Check, X } from "lucide-react";
import { Icon } from 'judix-icon'
import PriceCards from './PriceCards'
import Savings from './Savings'
import CallReq from './CallReq'
import Questions from './Questions'
import InputField from '../ui/inputField'
import Footer from './Footer'
import Toggle from './Toggle'


function LandingPage() {
  return (
    

            <div className=' flex flex-col gap:18 sm:gap-16 items-center justify-center h-max w-full sm:h-4/5'>

                <p className='font-Satoshi text-h6 tracking-wider text-neutral-600'>PRICING</p>

                <div className='flex flex-col items-center text-center gap-4 font-manrope'>
                  <h1 className='text-7xl text-accent-400 '>Smarter Legal Research </h1> 
                  <h1 className='text-7xl '>at the price of your daily coffee</h1>
                </div>

            <p className='font-Satoshi text-[#121212] text-center text-h6 mt-8 sm:mt-1'>Start with 14 days free trial, upgrade when you need more.</p>
            
        </div>

       
  )
}

export default LandingPage
