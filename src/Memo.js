import React from 'react';

function Memo() {
  return (
    <div style={{ position: 'relative'}}>
      <div className='memo'
        style={{
          marginTop:'80px',
          padding: '10px 20px',
        font:'inherit',
          color: 'black',
          fontSize: '16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '200px',
          height: '150px',
          backgroundColor: 'rgb(255 223 103)'
        }}
        >
          Hello, world!
      </div>
      <div style={{ 
          position: 'absolute',
          bottom: '0',
          right: '0',
          width: '0',
          height: '0',
          borderStyle: 'solid',
          borderWidth: '30px 30px 0 0',
          borderColor: '#e8c35b transparent #e8c35b transparent'
        }} />
      <div style={{ 
          position: 'absolute',
          bottom: '0',
          right: '0',
          width: '0',
          height: '0',
          borderStyle: 'solid',
          borderWidth: '0 0 30px 30px',
          borderColor: 'transparent transparent #ffffff transparent'
       }} />
    </div>
  );
} 

export default Memo;