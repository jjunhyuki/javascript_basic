import { useState } from 'react';

function FileInput({ name, value, onChange }) {
  const handleChange = e => {
    const nextValue = e.target.files[0];
    // setValue(nextValue);
    onChange(name, nextValue);
  };

  return <input type='file' value={value} onChange={handleChange} />;
}

export default FileInput;
