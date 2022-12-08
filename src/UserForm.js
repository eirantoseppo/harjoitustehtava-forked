import { Button, TextField } from '@mui/material';
import React from 'react';
import { useState } from 'react';

export default function UserForm({ user, handleUser }) {
  const [name, setName] = useState(user?.name || '');
  const [username, setUsername] = useState(user?.username || '');
  const [email, setEmail] = useState(user?.email || '');
  const [phone, setPhone] = useState(user?.phone || '');
  const [website, setWebsite] = useState(user?.website || '');
  const [error, setError] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    handleUser({
      ...user,
      name,
      username,
      email,
      phone,
      website,
    });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {};
    if (validateName(name)) {
      newErrors.name = 'Name is required';
      valid = false;
    }
    if (validateUsername(username)) {
      newErrors.username = 'Username must be at least 3 characters';
      valid = false;
    }
    if (!validateEmail(email)) {
      newErrors.email = 'Enter a valid email address';
      valid = false;
    }
    setError({
      ...error,
      ...newErrors,
    });
    return valid;
  };

  const handleName = (name) => {
    if (validateName(name)) {
      setError({ ...error, name: 'Name is required' });
    } else {
      delete error.name;
      setError({ ...error });
    }
    setName(name);
  };

  const handleUsername = (username) => {
    if (validateUsername(username)) {
      setError({
        ...error,
        username: 'Username must be at least 3 characters',
      });
    } else {
      delete error.username;
      setError({ ...error });
    }
    setUsername(username);
  };

  const handleEmail = (email) => {
    if (!validateEmail(email)) {
      setError({
        ...error,
        email: 'Enter a valid email address',
      });
    } else {
      delete error.email;
      setError({ ...error });
    }
    setEmail(email);
  };

  const handlePhone = (phone) => {
    // Handle phone number validation with isValidPhoneNumber from libphonenumber-js
    // when you can access user location
    setPhone(phone);
  };

  return (
    <div>
      <h1>User</h1>
      <form id="userForm" onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          error={!!error.name}
          helperText={error.name}
          value={name}
          onChange={(e) => handleName(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Username"
          variant="outlined"
          error={!!error.username}
          helperText={error.username}
          value={username}
          onChange={(e) => handleUsername(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          error={!!error.email}
          helperText={error.email}
          value={email}
          onChange={(e) => handleEmail(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Phone"
          variant="outlined"
          error={!!error.phone}
          helperText={error.phone}
          value={phone}
          onChange={(e) => handlePhone(e.target.value)}
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

const validateName = (name) => {
  return !name;
};

const validateUsername = (username) => {
  return username?.length < 3;
};

// Check if email at least has a valid format
const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};
