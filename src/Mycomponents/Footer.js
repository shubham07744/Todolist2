import React from 'react'

const Footer = () => {
let footerstyle={
  border:"2px solid red",
  width:"100%",
  top:"94vh",
  position:"sticky"
}
  return (
    <div className='bg-dark text-light' style={footerstyle}>
      <p className='text-center'>
        Copyright &copy;MyTodosList
      </p>
      
    </div>
  )
}

export default Footer
