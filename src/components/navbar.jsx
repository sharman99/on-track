import { HashRouter, Route, Link } from 'react-router-dom';

import logo from '../logo.svg';
import '../styles/navbar.scss';
import React, { Component } from 'react';
import firebase from '../firebase';

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
          <li><Link to={{
            pathname: "/your_profile",
            state: { signed_in_email: this.state.email }
          }}>My Profile</Link></li>
          <li><Link to="/pod">Accountability Pod</Link></li>
          <li><Link to="/sign_in" onClick={this.doSignOut}>Sign Out</Link></li>
        </ul>
      </nav>
    </div>
  );
  }
}

export default Navbar;
