import React from 'react'
import loader from './loader.gif'
const Spinner = () => {
  return (
    <div className='d-flex justify-content-center mt-5 align-items-center'>
      <img src={loader} alt="loading" />
    </div>
  )
}

export default Spinner
