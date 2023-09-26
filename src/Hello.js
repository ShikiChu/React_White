import React from 'react';
import FunctionalComponent from './FunctionalComponent';
import ClassComponent from './ClassComponent';
import Memo from './Memo';

function Hello() {
  return (
    <div style={{ padding: '10px 20px 20px 20px' }}>
      <FunctionalComponent />
      <ClassComponent />
      <p>These are your memos for today:</p>
      <div style={{ display: 'flex', justifyContent:'space-between', maxWidth: '800px' }}>
        <Memo />
        <Memo />
        <Memo />
      </div>
    </div>
  )
}

export default Hello;