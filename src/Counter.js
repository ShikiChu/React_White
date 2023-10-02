import React, { useState } from 'react';
import LikeButton from './LikeButton';

const counterDesign={
  display:'flex',textAlign:'center',justifyContent:'space-around',

}
const brownButton={
  marginTop:'30px',
  padding: '10px 20px',
  fontSize: '16px',
  cursor: 'pointer',
  backgroundColor: '#f6e0c8',
  color: 'black',
  fontWeight:'bolder',

  border:'3px solid #534741 ',
  borderRadius: '20px',
  font:'inherit',



}

function Counter(props) {
  const [count, setCount] = useState(0);
  
  return (
    <div style={counterDesign}>
      <div className='buttonCompo'>
      <h2>State example</h2>
      <p>Incrementing Counter</p>

      <button style={brownButton} onClick={() => setCount(count + 1)}>Click me: {count}</button>
      </div>
      <div className='buttonCompo'>
      <h2>Reusable Components example</h2>
      <p>Incrementing counter transforms to Like Button</p>
      <LikeButton style={brownButton}/>
    </div>
    </div>
  );
}

export default Counter;