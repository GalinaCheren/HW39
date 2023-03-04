import React from 'react';
import { useField } from 'formik';
import { TextField } from '@mui/material';

const Input = (props) => {
  const [field, meta] = useField(props.name);
  return (
    <>
      <TextField
        error={Boolean(meta.touched && meta.error)}
        {...props}
        {...field}
      />
      <div
        style={{
          color: 'red',
          height: '10px',
          paddingBottom: '25px',
          marginTop: '-5px'
        }}
      >
        {meta.error}
      </div>
    </>
  );
};

export default Input;
