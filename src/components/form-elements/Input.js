import React from 'react';

const Input = ({
  name,
  title,
  value,
  inputType,
  handleChange,
  style,
  placeholder,
  ...props
}) => {
  console.log('input: ', value);

  return (
    <div className="form-group">
      <label htmlFor={name} className={style}>
        {title}
      </label>
      <input
        className="form-control"
        id={name}
        name={name}
        type={inputType}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
};

export default Input;
