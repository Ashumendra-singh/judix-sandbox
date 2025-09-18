import React from 'react'
import Card from '../ui/card'
import Button from '../ui/button'
import InputField from '../ui/inputField'
import { Icon } from 'judix-icon'

function Footer() {
  return (
    <>
      <div className='w-full text-neutral-100 bg-primary-700 py-12'>
            <Card className='bg-primary-700 rounded-none flex-col md:flex-row px-16 py-12 justify-between'>
                <div className='w-full md:w-1/2'>
                    <div className='space-y-4'>
                        <img src="judixlogo.svg" alt="judixlogo"  />
                        <p>Simplifying Legal Complexity with AI</p>
                    </div>
                </div>
                <div className='w-full md:w-1/2 space-y-18 sm:flex sm:justify-around '>
                    <div className='space-y-6'>
                        <h6 className='text-h5'>Product</h6>
                        <ul className='space-y-4'>
                            <li>Legal Research</li>
                            <li>AI Workspace</li>
                            <li>Document Inteligence</li>
                            <li>Case Management</li>
                        </ul>
                    </div>
                    <div className='space-y-6'>
                        <Button variant='outline' size='medium' suffixIcon='CallCalling'>
                            Request a callback
                        </Button>
                        <div >
                            <h2>Follow Us</h2>
                            <div className='flex gap-4 mt-4'>
                                <img src="twitter.svg" alt="twitter" />
                                <Icon name='Instagram' size={20} className='cursor-pointer'/>
                                <img src="linkedIn.svg" alt="" />
                            </div>

                        </div>
                        <div className='space-y-2 '>
                            <InputField placeholder='Enter your email' className='bg-neutral-100 text-neutral-800 border-0' />
                            <Button variant='accent' size='medium' className='w-full md:w-0'>Subscribe</Button>
                        </div>
                    </div>
                </div>
            </Card>
            <p className='ml-16'>Judix Labs @ 2025. All rights reserved.</p>

        </div>
    </>
  )
}

export default Footer


