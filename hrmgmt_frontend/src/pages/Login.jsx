
import { useState } from 'react';

function Login() {
  const [emailId, setEmailid] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    if (
      emailId === 'admin@gmail.com' &&
      password === 'admin'
    ) {
      console.log('Login successful');
    } else {
      console.log('Login failed');
    }
  };

  return (
    <div>
      <h2>Login Form</h2>

      <form onSubmit={handleLogin}>
        <input
          type="text"
          value={emailId}
          onChange={(e) => setEmailid(e.target.value)}
          placeholder="Enter emailId"
          required
        />
        <br /><br />

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          required
        />
        <br /><br />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
