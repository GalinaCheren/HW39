import React, { useEffect, useState } from 'react';
import { CircularProgress } from '@mui/material';

import { TableContacts } from './Contacts';

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const addUser = (user) => {
    const newUsers = [...users, user];
    setUsers(newUsers);
    localStorage.setItem('users', JSON.stringify(newUsers));
  };
  const deleteUser = (name) => {
    setUsers((prevState) => {
      const newUsers = prevState.filter((user) => user.name !== name);
      localStorage.setItem('users', JSON.stringify(newUsers));
      return newUsers;
    });
  };
  useEffect(() => {
    async function init() {
      let usersData = localStorage.getItem('users');
      if (usersData) {
        usersData = JSON.parse(usersData);
        setUsers(usersData);
      } else {
        setIsLoading(true);
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/users'
        );
        if (response.ok) {
          usersData = await response.json();
          localStorage.setItem('users', JSON.stringify(usersData));
          setUsers(usersData);
        } else {
          alert('Ошибка HTTP: ' + response.status);
        }
        setIsLoading(false);
      }
    }
    init();
  }, []);

  return (
    <>
      {isLoading ? (
        <CircularProgress
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
          }}
          color="secondary"
        />
      ) : (
        <TableContacts
          users={users}
          addUser={addUser}
          deleteUser={deleteUser}
        />
      )}
    </>
  );
}

export default App;
