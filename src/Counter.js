import React, { useState } from 'react';
import LikeButton from './LikeButton';

function Counter(props) {
  const [count, setCount] = useState(0);
  
  return (
    <div style={{ padding: '20px' }}>
      <button onClick={() => setCount(count + 1)}>Click me: {count}</button>
      <LikeButton />
    </div>
  );
}

export default Counter;