import React from 'react';

const Button = ({type, value, addValue}) => {

  return (
    <>
      <input type={type} value={value} onClick={(e)=>addValue(e)} />
    </>
  )
}

export default Button;