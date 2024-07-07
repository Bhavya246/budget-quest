// src/components/CustomInput.js
import React from 'react';
import { TextField } from '@mui/material';

const CustomInput = ({ label, error, ...props }) => {
  return (
    <TextField
      label={label}
      error={Boolean(error)}
      helperText={error}
      aria-label={`${label} input field`}
      {...props}
      fullWidth
      margin="normal"
    />
  );
};

export default CustomInput;