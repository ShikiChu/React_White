import React, { useState } from 'react';

function LikeButton(props) {
  const [count, setCount] = useState(0);

  return (
    <div style={{ margin: '20px' }}>
      <button
        style={{
          marginTop:'30px',
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
          backgroundColor: '#2E8B57	',
          color: 'black',
          fontWeight:'bolder',
        
          border:'3px solid #534741 ',
          borderRadius: '20px',
          font:'inherit'
        }}
        onClick={() => setCount(count + 1)}
      >
        👍 Like! {count}
      </button>
    </div>
  );
}

export default LikeButton;
