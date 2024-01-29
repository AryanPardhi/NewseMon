import React from 'react'

const Heading = (props) => {
  return (
    <>
        <h1 className='text-center text-decoration-underline fs-3 fw-medium text-body-tertiary' style={{margin: "80px 0 30px 0"}}>Top Headlines in {props.titleCat} category</h1>
    </>
  )
}

export default Heading
