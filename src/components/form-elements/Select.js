import React from 'react';

const Select = ({ title, value, name, handleChange, placeholder, ...props }) => {
    console.log('Select:: ', ...props);
    return (
        <div className="form-group">
            <label htmlFor={name}> {title} </label>
            <select
                id={name}
                name={name}
                value={value}
                onChange={handleChange}
                className="form-control"
            >
                <option value="" disabled>
                    {placeholder}
                </option>
                {props.options.map(option => {
                    return (
                        <option key={option} value={option} label={option}>
                            {option}
                        </option>
                    );
                })}
            </select>
        </div>
    );
};

export default Select;
