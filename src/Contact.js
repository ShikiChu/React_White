import React, { Component } from "react";

const contactStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '20vw', 
  width: '25vw',
  backgroundColor: 'none',
  borderRadius: '10%', 
  position: 'fixed',
  top: '40%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  border:'5px solid #534741 ',
  fontWeight:'bolder'
};
class Contact extends Component {
  render() {
    return (
      <div style={contactStyle}>
        <h2>GOT QUESTIONS?</h2>
        <p>The easiest thing to do is post on
        our <a
        style={{textDecoration:'none', color:'black'}}
         href="https://www.google.com.ca">forums</a>.
        </p>
      </div>
    );
  }
}
 
export default Contact;