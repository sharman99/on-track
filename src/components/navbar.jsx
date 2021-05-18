

import logo from '../logo.svg';
import '../styles/navbar.scss';
import React, { Component } from 'react';
import firebase from '../firebase';
import { Route , withRouter} from 'react-router-dom';

class Navbar extends Component{
  constructor(props){
    super(props);
    this.state={

    }
    this.doSignOut = this.doSignOut.bind(this)
    this.goToPod = this.goToPod.bind(this)
    this.goToProfile = this.goToProfile.bind(this)
  }

  goToPod = () => {
    this.props.history.push('/pod');
  }

  goToProfile = () => {
    this.props.history.push('/your_profile');
  }

  goToProfile = () => {
    this.props.history.push('/your_profile');
  }

  doSignOut = () => {
    firebase.default.auth().signOut()
    this.props.history.push('/sign_in');
    console.log("signed out")
    localStorage.clear();
    console.log(localStorage.getItem('email'))
  }

  goToGuidelines = () => {
    this.props.history.push('/community_guidelines');
  }

  render() {
    return (
    <div className="Navbar">
      <nav className="container">
        <img src={logo} onClick={this.goToPod} className="Logo" alt="on track logo" />
        <ul>
          <li><a onClick={this.goToProfile}>My Profile</a></li>
          <li><a onClick={this.goToPod}>Accountability Pod</a></li>
          <li><a onClick={this.goToGuidelines}>Community Guidelines</a></li>
          <li><a onClick={this.doSignOut}>Sign Out</a></li>
        </ul>
      </nav>
    </div>
  );
  }
}

export default withRouter(Navbar);
