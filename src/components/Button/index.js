import React from 'react';
import './index.css';

const Button = ({className, buttonText, onClick}) => {
    return (
        <button
            className={className}
            onClick={onClick}
        >
            {buttonText}
        </button>
    );
};

export default Button;