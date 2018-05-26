import React, { Component } from 'react';

const FormField = function ({name, label}}) {

  return (
    <div className="form-field">
      <label htmlFor={props.name}>{props.label}</label>
      <input name={props.name} type="text" />
    </div>
  );
};

export default FormField;
