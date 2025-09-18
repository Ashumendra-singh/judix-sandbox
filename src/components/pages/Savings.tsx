import React from 'react'
import Card from '../ui/card'

function Savings() {
  return (
    <>
      <div className='w-full md:w-4/5 flex flex-col gap-16 items-center my-16'>
            <p>Trusted by over 1000 Lawyers</p>
            <Card className='w-[80%] lg:w-[65%] flex '>
                <div>
                    <h1 className='text-h3 text-accent-400 font-medium mb-8'>
                        Your Potential Savings
                    </h1>
                    <p className='text-body-md  mt-4 '>
                        Enter your hourly rate and research time to calculate your potential savings.
                    </p>
                </div>

                <div>
                    <div className='flex flex-col sm:flex-row gap-8 mt-8  justify-between'>
                        <div className=''>
                            <h6 >Your hourly value</h6>
                            <h5 className='text-accent-400 border-b-[1px] '>₹ 3000</h5>
                        </div>
                        <div>
                            <h6>Number of hours saved per week</h6>
                            <h5 className='text-accent-400 border-b-[1px] '>5</h5>
                        </div>
                    </div>

                    <Card className='my-8 p-6 bg-accent-500'>
                        <div className='space-y-.5 '>
                            <div className='flex justify-between text-base-100 px-2 py-1'>
                                <p>Billable hours value per month</p>
                                <p className='text-body-sm font-medium'>₹ 60,000</p>
                            </div>
                            <div className='flex justify-between text-base-100 px-2 py-1'>
                                <p>Money spent on Judix per month</p>
                                <p className='text-body-sm font-medium'>₹ 3499</p>
                            </div>
                        </div>
                        <div className='flex justify-between text-accent-400 bg-base-100 px-2 py-1 rounded-md'>
                            <p>Net Potential Savings / month</p>
                            <p>₹56,500</p>
                        </div>
                    </Card>
                    <p className='text-lg'>On an average, every lawyer saves approx 5 hours of billable hours on legal research while using Judix</p>
                </div>
            </Card>

        </div>
    </>
  )
}

export default Savings
