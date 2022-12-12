import React from 'react'
import './index.css'

const Button = ({ className, buttonText, onClick, disabled = false }) => {
    return (
        <button className={className} onClick={onClick} disabled={disabled}>
            {buttonText}
        </button>
    )
}

export default Button
