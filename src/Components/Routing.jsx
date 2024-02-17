import React from 'react'
import {Route,Routes} from 'react-router-dom'
import AuthPage from '../Pages/AuthPage/AuthPage'
function Routing() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<AuthPage/>}/>
      </Routes>
    </div>
  )
}

export default Routing
