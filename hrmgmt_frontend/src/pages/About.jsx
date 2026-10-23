
import { useState } from 'react';

function About() {
  const [count, setCount] = useState(0);

  return (
    <div className="container mt-4">
      <h2>React State Example</h2>

      <h3>Count: {count}</h3>

      <button
        className="btn btn-success me-2"
        onClick={() => setCount(count + 1)}
      >
        Increase
      </button>

      <button
        className="btn btn-danger"
        onClick={() => setCount(count - 1)}
      >
        Decrease
      </button>
    </div>
  );
}

export default About;
