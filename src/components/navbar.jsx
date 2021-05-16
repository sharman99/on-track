import logo from '../logo.svg';
import '../styles/navbar.scss';
import React, { Component } from 'react';
import firebase from '../Firebase';

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
          <button onClick={this.doSignOut}>Sign Out </button>
        </ul>
      </nav>
    </div>
  );
  }
}

export default Navbar;
