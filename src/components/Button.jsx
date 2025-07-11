import React from 'react'

const Button = ({ label, onClick, className, onItemClick, disabled }) => {
  const handleClick = (e) => {
    if (onClick) onClick(e);
    if (onItemClick) onItemClick(e);
  };

  return (
    <button 
      onClick={handleClick}
      disabled={disabled} 
      className={`${className}`}
      type="button"
    >
      {label}
    </button>
  )
}

export default Button