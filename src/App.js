import React from 'react'
import { ToastContainer } from 'react-toastify'
import Router from './Pages/Login/Router/Router'

const App = () => {
  return (
    <div>
      <ToastContainer/>
      <Router/>
    </div>
  )
}

export default App