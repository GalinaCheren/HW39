import React from 'react';
import { Formik, Form } from 'formik';
import { Box, Button } from '@mui/material';
import * as Yup from 'yup';

import Input from './Input';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4
};

export const AddNewContact = ({ onClose, addUser }) => {
  return (
    <Formik
      initialValues={{ name: '', lastName: '', phone: '' }}
      onSubmit={({ name, lastName, phone }) => {
        addUser({ name: `${name} ${lastName}`, phone });
        onClose();
      }}
      validateOnBlur
      validationSchema={Yup.object({
        name: Yup.string().label('Name').max(15).required('Required'),
        lastName: Yup.string().label('LastName').max(15).required('Required'),
        phone: Yup.string()
          .label('Phone number')
          .min(10)
          .max(13)
          .matches(/^\d+$/, 'Use only digits')
          .required('Required')
      })}
    >
      <Form>
        <Box sx={style}>
          <Input
            sx={{ marginBottom: '18px' }}
            fullWidth
            name="name"
            label="Name"
            placeholder="Name"
          />
          <Input
            sx={{ marginBottom: '18px' }}
            fullWidth
            name="lastName"
            label="Last-Name"
            placeholder="Lastname"
          />
          <Input
            sx={{ marginBottom: '18px' }}
            fullWidth
            name="phone"
            label="Phone-number"
            placeholder="Phone number"
          />
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button
              sx={{ display: 'block', width: '150px' }}
              variant="contained"
              type="submit"
            >
              Add Contact
            </Button>
            <Button
              onClick={onClose}
              sx={{ display: 'block', width: '150px' }}
              variant="contained"
            >
              Cancel
            </Button>
          </Box>
        </Box>
      </Form>
    </Formik>
  );
};
