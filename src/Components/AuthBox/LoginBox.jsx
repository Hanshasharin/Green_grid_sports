import React, { useState } from 'react'
import './LoginBox.css'
import CustomInput from '../Common/CustomInput/CustomInput'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { errorToast, successToast } from '../../Plugins/Toast/Toast'
import { setUserData } from '../../redux/userSlice'
import { useDispatch } from 'react-redux'
import { showhideLoader } from '../../redux/generalSlice'




function LoginBox({setBoxType}) {
  const [loginData,setLoginData]= useState({});
    const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin=(e)=>{
    //   console.log(e)
   setLoginData({...loginData,[e.target.name]:e.target.value});
  };
  const doLogin=()=>{
    dispatch(showhideLoader(true))
    axios({
      method: 'POST',
      url: process.env.REACT_APP_BASE_URL + '/auth/doLogin',
      data:loginData
  })
  .then(response => {
      // Handle successful signup
      localStorage.setItem('token',response.data.token)
      localStorage.setItem('user',JSON.stringify(response.data.user))
       dispatch(setUserData(response.data.user))
      
      navigate('/home')
     dispatch(showhideLoader(false))
successToast(response.message)
  })
  .catch(error => {
      // Handle error response
      dispatch(showhideLoader(false))

      errorToast(error?.response?.data.message || 'something went wrong'); // Display error message to the user
  });
}
  return (
   <>
   <div className='d-flex flex-column'>
    <div className='mt-4'>
      <CustomInput label={'Email'} value={loginData.email} onchange={handleLogin} name={'email'} />
    </div>
    <div className='mt-4'>
    <CustomInput label={'Password'} value={loginData.password} onchange={handleLogin} name={'password'}/>
  </div>
  <button className='common-button mt-4 align-self-center' onClick={doLogin}>{" "}LOGIN</button>
  <p className='already-account mt-4'>
Dont Have An Account {" "}<i onClick={()=>setBoxType('signup')}> signup here </i>
  </p>
  </div>
  
  </>
  )
}

export default LoginBox
