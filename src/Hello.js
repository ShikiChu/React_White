import React from 'react';
import FunctionalComponent from './FunctionalComponent';
import ClassComponent from './ClassComponent';
import Memo from './Memo';

function Hello() {
  return (
    <div style={{ padding: '10px 20px 20px 20px', textAlign:'center' }}>
      <FunctionalComponent />
      <ClassComponent />
      <p>These are your memos for today:</p>
      <div style={{ display: 'flex',
  justifyContent: 'space-between',
  maxWidth: '800px',
  textAlign: 'center',
  margin: 'auto', 
  position: 'absolute', 
  left: '0',
  right: '0',
}}>
        <Memo />
        <Memo />
        <Memo />
      </div>
    </div>
  )
}

export default Hello;