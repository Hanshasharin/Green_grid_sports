import React from 'react'
import './LoginBox.css'
import CustomInput from '../Common/CustomInput/CustomInput'
function LoginBox({setBoxType}) {
  return (
   <>
   <div className='d-flex flex-column'>
    <div className='mt-4'>
      <CustomInput label={'Email'} value={null}/>
    </div>
    <div className='mt-4'>
    <CustomInput label={'Password'} value={null}/>
  </div>
  <button className='common-button mt-4 align-self-center'>LOGIN</button>
  <p className='already-account mt-4'>
Dont Have An Account <i onClick={()=>setBoxType('signup')}> signup here </i>
  </p>
  </div>
  
  </>
  )
}

export default LoginBox
