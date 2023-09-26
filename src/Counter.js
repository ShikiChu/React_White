import React, { useState } from 'react';
import LikeButton from './LikeButton';

function Counter(props) {
  const [count, setCount] = useState(0);
  
  return (
    <div style={{ padding: '20px' }}>
      <h2>State example</h2>
      <p>Incrementing Counter</p>
      <button onClick={() => setCount(count + 1)}>Click me: {count}</button>
      <h2>Reusable Components example</h2>
      <p>Incrementing counter transforms to Like Button</p>
      <LikeButton />
    </div>
  );
}

export default Counter;