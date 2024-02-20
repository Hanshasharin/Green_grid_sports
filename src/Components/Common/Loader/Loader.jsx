import React from 'react'
import './Loader.css'
// import LoaderGif from '../../../Assets/loader.gif'
import LoaderGif from '@assets/loader.gif'
function Loader() {
  return (
    <div className='loader-container'>
      <div className='position-relative spinner-container'>
 <img src={LoaderGif} height={'35px'} width={'35px'} alt=''/>
      </div>
     
      <div className='spinner'></div>
    </div>
  )
}

export default Loader
