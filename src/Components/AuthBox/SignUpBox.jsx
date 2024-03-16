import React, { useState } from 'react'
import './LoginBox.css'
import CustomInput from '../Common/CustomInput/CustomInput'
import axios from 'axios'
import { errorToast, successToast } from '../../Plugins/Toast/Toast'
import { useDispatch, useSelector } from 'react-redux'
import { showhideLoader } from '../../redux/generalSlice'

function SignUpBox({setBoxType}) {
  const [signupData,setSignupData]=useState({})

  const {showLoader}=useSelector((store=>store.general))
  const dispatch=useDispatch()
  

  const handleChange = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
};

const doSignUp =()=> {
  dispatch(showhideLoader(true))
  if (signupData.password === signupData.confirmPassword) {
      axios({
          method: 'POST',
          url: process.env.REACT_APP_BASE_URL + '/auth/dosignup',
          data: signupData
      })
      .then(response => {
          // Handle successful signup
          console.log(response.data);
          successToast(response.message)
          setBoxType('login')
          dispatch(showhideLoader(false))
      })

      .catch(error => {
          // Handle error response

          dispatch(showhideLoader(false))
          errorToast(error?.response?.data.message || 'something went wrong'); // Display error message to the user
      });
  } else {
      errorToast("Password is not matching");
  }
};




  return (
    // <div>
      
  //  <>
   <div className='d-flex flex-column'>
    <div className='mt-4'>
      <CustomInput label={'Name'} name={'name'} value={signupData.name} onchange={handleChange}/>
    </div>
    <div className='mt-4'>
    <CustomInput type={'email'} label={'Email'} name={'email'} value={signupData.email} onchange={handleChange}/>
  </div>
  <div className='mt-4'>
      <CustomInput type={'number'} label={'Mobile Number'} name={'phone'} value={signupData.phone} onchange={handleChange}/>
    </div>
    <div className='mt-4'>
      <CustomInput type={'password'} label={'Password'} name={'password'} value={signupData.password} onchange={handleChange}/>
    </div>
    <div className='mt-4'>
      <CustomInput type={'password'} label={'Confirm Pasword'} name={'confirmPassword'} value={signupData.confirmPassword} onchange={handleChange}/>
    </div>
  <button className='common-button mt-4 align-self-center' onClick={doSignUp}>SIGN UP</button>
  <p className='already-account mt-4'>
Already Have An Account <i onClick={()=>setBoxType('login')}> login here </i>
  </p>
  </div>
   )
}

export default SignUpBox
