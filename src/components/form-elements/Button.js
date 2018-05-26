import React from 'react';

const Button = ({ style, type, action, title }) => {
    console.log(style);
    return (
        <button
            style={style}
            className={type === 'primary' ? 'btn btn-primary' : 'btn btn-secondary'}
            onClick={action} >
            {title}
        </button>);
}


export default Button;