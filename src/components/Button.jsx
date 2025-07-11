import React from 'react'

const Button = ({ label, onClick, className, disabled = false }) => {
  return (
    <button 
      onClick={onClick} 
      className={`${className}`}
      disabled={disabled}
    >
      {label}
    </button>
  )
}

export default Button