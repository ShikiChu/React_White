import React, { Component } from "react";

class Members extends Component {
  render() {
    return (
     
      <div
      style={{
      display:'flex', textAlign:'center',justifyContent:'flex-start', paddingLeft:'25%',
      }}>
        
        <img style={{maxWidth:'300px',maxHeight:'300px',width:'auto',height:'auto'}} 
        src={require('./pictures/team.jpg')} alt="team-pic"></img>
        <ul id="teamlist">
          <li className="memberNames">Ai</li>
          <li className="memberNames">Haneih</li>
          <li className="memberNames">Mariana</li>
          <li className="memberNames">Miku</li>
          <li className="memberNames">Shiki</li>
        </ul>
      </div>
      
    );
  }
}
 
export default Members;