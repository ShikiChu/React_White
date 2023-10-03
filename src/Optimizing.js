import React, { useState } from 'react';
// import ReactDOM from 'react-dom';
const parent = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
  
}

const counterDesign = {
  textAlign:'center',
  justifyContent:'center',

  display: 'flex',
  flexDirection: 'column',
  border:'5px solid #534741 ',
  padding: '10px',
  width: '230px',
  height: '200px',
  margin: '10px',
}
const brownButton = {
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

function Optimizing() {
  const [input, setInput] = useState("");
  const [count, setCount] = useState(0);

  return (
    <div style={parent}>
      <div style={counterDesign}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button style={brownButton} onClick={() => setCount(count + 1)}>Increment counter</button>
        <h3>Input text: {input}</h3>
        <h3>Count: {count}</h3>
      </div>
      <div  style={counterDesign}>
      <ChildComponent count={count} />
      </div>
      <div  style={counterDesign}>
        <OptimizedChildComponent count={count} />
      </div>
    </div>
  );
}

function ChildComponent({ count }) {
  console.log("child component is rendering");
  return (
    <div>
      <h2>Child component</h2>
      <h3>Count: {count}</h3>
    </div>
  );
}


const OptimizedChildComponent = React.memo(function ChildComponent({ count }) {
  console.log("Optimized child component is rendering");
  return (
    <div>
      <h2>Optimized child component</h2>
      <p>This is using React memo</p>
      <h3>Count: {count}</h3>
    </div>
  );
});
// ReactDOM.render(<Optimizing />,
// document.getElementById("root"))

export default Optimizing;