import React from 'react'
import './UspBlocks.css'
import user from '@assets/users-more-svgrepo-com.svg'

function UspBlocks() {
  return (
    <div className='d-flex flex-wrap justify-content-center mt-3 brand-promo-container gap-4'>
      <div className='brand-promo-box text-center'>

<h4>1000+</h4>
<p>Happy customer</p>
<img src={user} height="50px"alt=''/>
      </div>
      <div className='brand-promo-box text-center'>
<img src='' alt=''/>
<h4>1000+</h4>
<p>Happy customer</p>
      </div>
      <div className='brand-promo-box text-center'>
<img src='' alt=''/>
<h4>1000+</h4>
<p>Happy customer</p>
      </div>
    </div>
  )
}

export default UspBlocks
