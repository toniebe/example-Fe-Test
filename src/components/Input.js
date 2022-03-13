import React from "react";

export default function Input(props) {
 const { type, label, ...nativeProps} = props;
  return (
    <div className="mb-3">
      <label for="email" className="form-label">
        {label}
      </label>
      <input type={type} className="form-control" id="email" required {...nativeProps}/>
    </div>
  );
}
