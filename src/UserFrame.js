import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Button } from '@mui/material';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import UserForm from './UserForm';

export default function UserFrame() {
  const [users, setUsers] = useState([]);
  const [createUser, setCreateUser] = useState(false);
  const [editUser, setEditUser] = useState(null);

  /**
   * Create or update user in users list based on weither user has id or not
   * @param {User} user
   */
  const handleUsersModifications = (user) => {
    // If user has id, update user
    if (user.id) {
      const newUsers = users.map((u) => (u.id === user.id ? user : u));
      setUsers(newUsers);
      setEditUser(null);
      setCreateUser(false);
    } else {
      // Add new user
      user.id = users.reduce((max, user) => Math.max(max, user.id), 0) + 1;
      setUsers([user, ...users]);
      setEditUser(null);
      setCreateUser(false);
    }
  };

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div>
        <h1>Users</h1>
        <Button variant="contained" onClick={() => setCreateUser(true)}>
          Add user
        </Button>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Username</TableCell>
                <TableCell align="right">Email</TableCell>
                <TableCell align="right">Phone</TableCell>
                <TableCell align="right">Website</TableCell>
                <TableCell align="center">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell component="th" scope="row">
                    {user.name}
                  </TableCell>
                  <TableCell align="right">{user.username}</TableCell>
                  <TableCell align="right">{user.email}</TableCell>
                  <TableCell align="right">{user.phone}</TableCell>
                  <TableCell align="right">{user.website}</TableCell>
                  <TableCell align="right">
                    <Button variant="contained" onClick={() => setEditUser(user)}>
                      Edit
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      {createUser || editUser ? (
        <div>
          <UserForm user={editUser} handleUser={handleUsersModifications} />
        </div>
      ) : null}
    </div>
  );
}
