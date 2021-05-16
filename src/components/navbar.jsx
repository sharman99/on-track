import logo from '../logo.svg';
import '../styles/navbar.scss';
import firebase from '../firebase'
import React, { Component } from 'react';
class Navbar extends Component{
  constructor(props){
    super(props);
    this.state={

    }
    this.doSignOut = this.doSignOut.bind(this)
  }

  doSignOut = () => {
    firebase.default.auth().signOut()
    console.log("signed out")
    localStorage.clear();
    console.log(localStorage.getItem('email'))
  }

  render() {
    return (
    <div className="Navbar">
      <nav className="container">
        <img src={logo} className="Logo" alt="on track logo" />
        <ul>
          <li>My Profile</li>
          <li>Accountability Pod</li>
          <li>Sign Out</li>
        </ul>
      </nav>
    </div>
  );
}
}
export default Navbar;
