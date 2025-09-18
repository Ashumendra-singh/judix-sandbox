import React from 'react'
import Button from '../ui/button'

function CallReq() {
  return (
    <>
      <div className='text-h6 space-y-8 text-center mb-16'>
            <p>Have any questions? Want to discuss?</p>
            <Button variant='primary' size='large' suffixIcon='CallCalling'> 
                Request to callback
            </Button>
        </div>
    </>
  )
}

export default CallReq
