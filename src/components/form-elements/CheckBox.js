import React from "react";

const CheckBox = ({ title, name, handleChange, options, selectedOptions, style, ...props }) => {
    console.log(...props)
    return (
        <div className="form-group">
            <label htmlFor={name} className="form-label">
                {title}
            </label>
            <div className="checkbox">
                {options.map(option => {
                    return (
                        <label key={option} className="checkbox-inline">
                            <input
                                id={name}
                                name={name}
                                onChange={handleChange}
                                value={option}
                                className={style}
                                checked={selectedOptions.indexOf(option) > -1}
                                type="checkbox"
                            />
                            {option}
                        </label>
                    );
                })}
            </div>
        </div>
    );
};

export default CheckBox;
