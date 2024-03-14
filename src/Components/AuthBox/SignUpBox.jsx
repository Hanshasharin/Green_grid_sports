import React, { useState } from 'react'
import './SignUpBox.css'
import CustomInput from '../Common/CustomInput/CustomInput'

function SignUpBox({setBoxType}) {
  const [signupData,setSignupData]=useState({})
  const handleChange=(e)=>{
    //   console.log(e)
   setSignupData(...signupData,{[e.target.name]:e.target.value})
  }
  const doSignUp=()=>{
    
  }
  return (
    <div>
      
   <>
   <div className='d-flex flex-column'>
    <div className='mt-4'>
      <CustomInput label={'Name'} name={'name'} value={signupData.name} onchange={handleChange}/>
    </div>
    <div className='mt-4'>
    <CustomInput label={'Email'} name={'email'} value={signupData.email} onchange={handleChange}/>
  </div>
  <div className='mt-4'>
      <CustomInput label={'Mobile Number'} name={'phone'} value={signupData.phone} onchange={handleChange}/>
    </div>
    <div className='mt-4'>
      <CustomInput label={'Password'} name={'password'} value={signupData.password} onchange={handleChange}/>
    </div>
    <div className='mt-4'>
      <CustomInput label={'Confirm Pasword'} name={'confirmPassword'} value={signupData.confirmPassword} onchange={handleChange}/>
    </div>
  <button className='common-button mt-4 align-self-center' onClick={doSignUp}>SIGN UP</button>
  <p className='already-account mt-4'>
Already Have An Account <i onClick={()=>setBoxType('login')}> login here </i>
  </p>
  </div>
  
  </>









    </div>
  )
}

export default SignUpBox
