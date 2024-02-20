import React from 'react'
import './SignUpBox.css'
import CustomInput from '../Common/CustomInput/CustomInput'

function SignUpBox({setBoxType}) {
  return (
    <div>
      
   <>
   <div className='d-flex flex-column'>
    <div className='mt-4'>
      <CustomInput label={'Name'} value={null}/>
    </div>
    <div className='mt-4'>
    <CustomInput label={'Email'} value={null}/>
  </div>
  <div className='mt-4'>
      <CustomInput label={'Mobile Number'} value={null}/>
    </div>
    <div className='mt-4'>
      <CustomInput label={'Passworrd'} value={null}/>
    </div>
    <div className='mt-4'>
      <CustomInput label={'Confirm Pasword'} value={null}/>
    </div>
  <button className='common-button mt-4 align-self-center'>SIGN UP</button>
  <p className='already-account mt-4'>
Already Have An Account <i onClick={()=>setBoxType('login')}> login here </i>
  </p>
  </div>
  
  </>









    </div>
  )
}

export default SignUpBox
