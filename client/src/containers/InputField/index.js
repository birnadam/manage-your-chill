import React from "react";

export const InputField = field => (
  <div>
    <input {...field.input} {...field} />
    {field.meta.touched && field.meta.error && (
      <span className="error">{field.meta.error}</span>
    )}
  </div>
);

export default InputField;
