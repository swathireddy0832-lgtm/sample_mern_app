
import { useState } from 'react';

function Register() {
  const [name, setName] = useState('');
  const [emailId, setEmailId] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();

    console.log('Name:', name);
    console.log('Email ID:', emailId);
    console.log('Password:', password);
    console.log('Age:', age);
  };

  return (
    <div className="container mt-4">
      <h2>Register Form</h2>

      <form onSubmit={handleRegister}>
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="text"
          className="form-control mb-3"
          placeholder="Enter email ID"
          value={emailId}
          onChange={(e) => setEmailId(e.target.value)}
          required
        />

        <input
          type="password"
          className="form-control mb-3"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <input
          type="number"
          className="form-control mb-3"
          placeholder="Enter age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />

        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
