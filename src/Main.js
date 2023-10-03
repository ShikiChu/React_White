import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter,
    Routes
  } from "react-router-dom";
import Home from "./Home";
import Members from "./Members";
import Contact from "./Contact";
import Counter from "./Counter";
import Hello from "./Hello"
import Optimizing from "./Optimizing"

 
const navBar = {
    background: 'transparent',
    border: '3px solid #534741',
    borderRadius: '20px', 
    marginLeft: '15%', 
    marginRight: '15%',
    color:'black',
    display:'flex',
}
class Main extends Component {
  render() {
    return (
        <HashRouter>
            <div >
              
              <ul className="header" style={navBar}>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/members">Members</NavLink></li>
                <li><NavLink to="/counter">Counter</NavLink></li> 
                <li><NavLink to="/hello">Hello</NavLink></li>
                <li><NavLink to="/optimizing">Optimizing</NavLink></li>
                <li><NavLink to="/contact">Contact Us</NavLink></li>
              </ul>

              <div className="content">
                <Routes>
                  <Route path="/" element={<Home title='Home' /> } />
                  <Route path="/members" element={<Members title='Members' /> } />  
                  {/* https://teamtreehouse.com/community/updated-reactrouterdom-v6-render-does-not-work-fixed-it-by-adding-title-to-elementabout-titleabout */}
                  <Route path="/counter" element={<Counter />} />
                  <Route path="/hello" element={<Hello />} />
                  <Route path="/optimizing" element={<Optimizing />} />
                  <Route path="/contact" element={<Contact title='Contact' /> } />
                </Routes>
              </div>

            </div>
        </HashRouter>
    );
  }
}
export default Main;