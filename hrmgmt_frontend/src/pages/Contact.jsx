
import { useState } from 'react';

function Contact() {
  const [name, setName] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    alert('Welcome ' + name);
  }

  return (
    <div className="container mt-4">
      <h2>Contact Form</h2>

      <form onSubmit={handleSubmit}>
        <label className="form-label">
          Enter your name
        </label>

        <input
          type="text"
          className="form-control mb-3"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
