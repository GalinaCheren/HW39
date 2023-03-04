import React, { useState } from 'react';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Modal,
  IconButton
} from '@mui/material';
import { Delete } from '@mui/icons-material';

import { AddNewContact } from './AddNewContact';

export const TableContacts = ({ users, addUser, deleteUser }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box>
      <h3 align="center">Contacts</h3>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Number</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">LastName</TableCell>
              <TableCell align="center">Phone number</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user, index) => (
              <TableRow key={crypto.randomUUID()}>
                <TableCell align="center">{index + 1}</TableCell>
                <TableCell align="center">{user.name.split(' ')[0]}</TableCell>
                <TableCell align="center">{user.name.split(' ')[1]}</TableCell>
                <TableCell align="center">{user.phone}</TableCell>
                <TableCell align="center">
                  <IconButton
                    onClick={() => {
                      deleteUser(user.name);
                    }}
                  >
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div>
        <Button
          variant="outlined"
          fullWidth
          sx={{ marginTop: '20px' }}
          onClick={handleOpen}
        >
          Add contact
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box>
            <AddNewContact onClose={handleClose} addUser={addUser} />
          </Box>
        </Modal>
      </div>
    </Box>
  );
};
