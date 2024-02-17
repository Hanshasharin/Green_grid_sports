import React from 'react'
import './CustomInput.css'
function CustomInput({type,value,onchange,onblur,label}) {
  return (
    <div className='common-input-box'>
      <input type='text' required className='common-input' value={value} onchange={onchange}onBlur={onblur}/>
      <label htmlFor=''>{label}</label>
    </div>
  )
}

export default CustomInput
