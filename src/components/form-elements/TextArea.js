import React from 'react';

const TextArea = ({
    title, name,
    rows,
    cols,
    value,
    handleChange,
    placeholder,
    ...props
}) => (
        <div className="form-group">
            <label className="form-label">{title}</label>
            <textarea
                className="form-control"
                name={name}
                rows={rows}
                cols={cols}
                value={value}
                onChange={handleChange}
                placeholder={placeholder}
            />
        </div>
    );

export default TextArea;
