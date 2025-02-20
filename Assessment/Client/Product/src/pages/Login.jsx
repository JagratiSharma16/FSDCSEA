//rafce

import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const validate = (event) => {
    event.preventDefault();
    if (username === 'admin' && password === 'admin') {
      alert('Login successful');
    } else {
      setError('Invalid credentials, please try again');
    }
  };

  return (
    <div style={styles.container}>
      <h1>Login</h1>
      <form onSubmit={validate} style={styles.form}>
        <div style={styles.inputGroup}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            required
          />
        </div>
        {error && <p style={styles.error}>{error}</p>}
        <button type="submit" style={styles.button}>Login</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '400px',
    margin: '50px auto',
    padding: '50px',
    border: '5px solid green',
    borderRadius: '8px',
    textAlign: 'center',
  },

  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  inputGroup: {
    marginBottom: '15px',
    textAlign: 'left',
  },
  input: {
    width: '90%',
    padding: '8px',
    marginTop: '5px',
    border: '2px solid white',
    borderRadius: '4px',
  },
  error: {
    color: 'red',
    fontSize: '14px',
  },
  button: {
    padding: '13px',
    backgroundColor: 'lightblue',
    color: 'black',
    border: '2px dashed black',
    borderRadius: '4px',
    width:'100%',
    cursor: 'pointer',
  },
};

export default Login;