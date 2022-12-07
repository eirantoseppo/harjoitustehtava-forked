import { Button, TextField } from '@mui/material';
import React from 'react';
import { useState } from 'react';

export default function UserCreate({ addUser }) {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [website, setWebsite] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser({ name, username, email, phone, website });
  };

  return (
    <div>
      <h1>Create new user</h1>
      <form id="userForm" onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Username"
          variant="outlined"
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Phone"
          variant="outlined"
          onChange={(e) => setPhone(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Website"
          variant="outlined"
          onChange={(e) => setWebsite(e.target.value)}
        />
        <Button variant="contained" type="submit">
          Create
        </Button>
      </form>
    </div>
  );
}
