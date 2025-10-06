import React from 'react'
import Card from '../ui/card'
import Button from '../ui/button'
import { Check, X } from "lucide-react";    


function PriceCards() {
  return (
    <div className='grid grid-cols-1 m-6 lg:m-[0px]  lg:grid-cols-2 xl:grid-cols-3 gap-12 mt-12 '>
        <div className='col-span-1'>
            <Card title='LITE' className='rounded-b-none p-9'>
                <div className='flex flex-col gap-4'>
                    <p> <span className='text-4xl font-bold'>₹149</span> <span className='text-4xl font-light text-[#4C4C4C]'>/</span> per mo</p>         
                    <p>Greate for getting started</p>
                    <Button variant='outline' size='medium' className='w-full mt-4'>
                        Get started with Lite
                    </Button>
                </div>
            </Card>
            <Card className='rounded-t-none p-9'>
                <div className='flex flex-col gap-4'>
                    <ul className='list-none list-inside flex flex-col gap-2 text-body-md text-[#4C4C4C]'>
                        <li className='flex items-center' ><Check size={14} className="text-black mr-2"/> 500 case summaries</li>
                        <li className='flex items-center' ><Check size={14} className="text-black mr-2"/>30 Advanced searches per month</li>
                        <li className='flex items-center' ><Check size={14} className="text-black mr-2"/>100 MB storage for saved research</li>
                        <li className='flex items-center' ><Check size={14} className="text-black mr-2"/>1 project ( Research Folder )</li>
                        <li className='flex items-center' ><Check size={14} className="text-black mr-2"/>7-day research history</li>
                        <li className='flex items-center text-neutral-500' ><X size={14} className="mr-2"/>Import shared research</li>
                        <li className='flex items-center text-neutral-500' ><X size={14} className=" mr-2"/>Team collaboration</li>
                    </ul>
                </div>
            </Card> 
        </div>   

        <div className='border-[2px] border-primary-400 rounded-md col-span-1'>
            <Card title='BASIC' className='rounded-b-none p-9'>
                <div className='flex flex-col gap-4'>
                    <p> <span className='text-4xl font-bold'>₹1249</span> <span className='text-4xl font-light text-[#4C4C4C]'>/</span> per mo</p>         
                    <p>Great for solo-practitioners</p>
                    <Button variant='primary' size='medium' className='w-full mt-4'>
                        Level Up with Starter
                    </Button>
                </div>
            </Card>
            <Card className='rounded-t-none p-9 h-content'>
                <div className='flex flex-col gap-4'>
                    <ul className='list-none list-inside flex flex-col gap-2 text-body-md text-[#4C4C4C]'>
                        <li className='flex items-center' ><Check size={14} className="text-black mr-2"/> 500 case summaries</li>
                        <li className='flex items-center' ><Check size={14} className="text-black mr-2"/>30 Advanced searches per month</li>
                        <li className='flex items-center' ><Check size={14} className="text-black mr-2"/>100 MB storage for saved research</li>
                        <li className='flex items-center' ><Check size={14} className="text-black mr-2"/>1 project ( Research Folder )</li>
                        <li className='flex items-center' ><Check size={14} className="text-black mr-2"/>7-day research history</li>
                        <li className='flex items-center ' ><Check size={14} className="text-black mr-2"/>Import shared research</li>
                        <li className='flex items-center text-neutral-500' ><X size={14} className=" mr-2"/>Team collaboration</li>
                    </ul>
                </div>
            </Card> 
        </div> 

        <div className='col-span-1'>
            <Card title='PRO' className='rounded-b-none p-9'>
                <div className='flex flex-col gap-4'>
                    <p> <span className='text-4xl font-bold'>₹3499</span> <span className='text-4xl font-light text-[#4C4C4C]'>/</span> per mo</p>         
                    <p>Most suited for teams and law firms</p>
                    <Button variant='outline' size='medium' className='w-full mt-4'>
                        Go Unlimited with Pro
                    </Button>
                </div>
            </Card>
            <Card className='rounded-t-none p-9'>
                <div className='flex flex-col gap-4'>
                    <ul className='list-none list-inside flex flex-col gap-2 text-body-md text-[#4C4C4C]'>
                        <li className='flex items-center' ><Check size={14} className="text-neutral-900 mr-2"/> 500 case summaries</li>
                        <li className='flex items-center' ><Check size={14} className="text-neutral-900 mr-2"/>30 Advanced searches per month</li>
                        <li className='flex items-center' ><Check size={14} className="text-neutral-900 mr-2"/>100 MB storage for saved research</li>
                        <li className='flex items-center' ><Check size={14} className="text-neutral-900 mr-2"/>1 project ( Research Folder )</li>
                        <li className='flex items-center' ><Check size={14} className="text-neutral-900 mr-2"/>7-day research history</li>
                        <li className='flex items-center' ><Check size={14} className="text-neutral-900  mr-2"/>Import shared research</li>
                        <li className='flex items-center' ><Check size={14} className="text-neutral-900  mr-2"/>Team collaboration</li>
                    </ul>
                </div>
            </Card> 
        </div>  

        <div className='col-span-1 lg:col-span-2 '>
            <Card  title='ADD ON' className='p-9 font-satoshi min-h-[357px] border-accent-400 border-[2px]'>
                <div className=''>
                    <div className='flex gap-8 items-center mb-4'>
                        <div className='text-[28px] font-satoshi '>Ask your research queries directly on  </div>
                        <img src="whatsapp.svg" alt="whatsapp logo" className='w-[172px]' />
                    </div>
                        
                    <div className='flex flex-col gap-8 text-body-lg'>
                        <p className='font-satoshi text-body-lg tracking-[0.02em] leading-8' >Instant legal research on the go. Perfect for when you’re away from your desk, in transit, or need quick clarity. Uses your existing usage quota.</p>
                        <div className='flex flex-col md:flex-row justify-between gap-8'>
                            <ul className='list-disc list-inside flex flex-col gap-1'>
                                <li>Verified answers with citations</li>
                                <li>Works with all plans</li>
                                <li>Secure & seamless</li>
                            </ul>
                            <div className='flex gap-8'>
                                <div>
                                    <Button variant='primary' size='extraSmall' className=' text-label-md bg-accent-400'>
                                        save 50%
                                    </Button>
                                    <div className='flex gap-4 items-baseline  '>
                                        <h1 className='text-h3'> <span className='text-h5'>₹</span> 49</h1>
                                        <h2 className='line-through text-neutral-500'> ₹ 99</h2>
                                    </div>
                                </div>
                                <Button variant='primary' size='medium' className=' mt-4 bg-accent-400'>
                                    Add to Plan
                                </Button>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </Card>
        </div>

        <div className='col-span-1 lg:col-span-2  xl:col-span-1' >
            <Card title='ENTERPRISE TEAMS' className='p-9 font-satoshi min-h-[365px] bg-primary--100'>
                <h1 className='text-h4 leading-m font-medium'>Want custom pricing?</h1>
                <p className='font-medium'>Structure your plan according to your workload</p>
                <Button variant='primary' size='medium' className='w-full mt-4'>
                    Schedule a meeting
                </Button>
            </Card>
        </div>
    </div>
  )
}

export default PriceCards
