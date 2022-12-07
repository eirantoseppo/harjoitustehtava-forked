import { Button, TextField } from '@mui/material';
import React from 'react';
import { useState } from 'react';

export default function UserForm({ user, handleUser }) {
  const [name, setName] = useState(user?.name || '');
  const [username, setUsername] = useState(user?.username || '');
  const [email, setEmail] = useState(user?.email || '');
  const [phone, setPhone] = useState(user?.phone || '');
  const [website, setWebsite] = useState(user?.website || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUser({
      ...user,
      name,
      username,
      email,
      phone,
      website,
    });
  };

  return (
    <div>
      <h1>User</h1>
      <form id="userForm" onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Username"
          variant="outlined"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Phone"
          variant="outlined"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Website"
          variant="outlined"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
        <Button variant="contained" type="submit">
          Save
        </Button>
      </form>
    </div>
  );
}
