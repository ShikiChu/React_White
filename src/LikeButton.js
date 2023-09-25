import React, { useState } from 'react';

function LikeButton(props) {
  const [count, setCount] = useState(0);

  return (
    <div style={{ margin: '20px' }}>
      <button
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
          backgroundColor: '#008CBA',
          color: 'white',
          border: 'none',
          borderRadius: '5px'
        }}
        onClick={() => setCount(count + 1)}
      >
        👍 Like! {count}
      </button>
    </div>
  );
}

export default LikeButton;
