import React from 'react';
import './index.css';

const Button = ({className, buttonText}) => {
    return (
        <button className={className}>{buttonText}</button>
    );
};

export default Button;