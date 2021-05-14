import logo from '../logo.svg';
import TextField from '@material-ui/core/TextField';
import React, { Component } from 'react';
import firebase from '../firebase';
import profile_img from "../media/profile_img.png";
import Person from "../media/profile.json";

class Profile extends Component{
  constructor(props){
    super(props);
    this.state={

    }
  }

  reportUser = event => {
      //CHANGE THIS BELOW TO BE ABOUT REPORTING USER
    event.preventDefault();
    const {email, password} = this.state;
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      console.log("SUCCESFULLY SIGNED IN")
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log("ERROR SIGNING IN")
      console.log(errorMessage)
    });
  }

  render() {
    const {
      email,
      password,
    } = this.state;
    return (
      <div className="Profile">
        <div>
          <h1>profile</h1>
          <button className="report-button" onClick={this.reportUser}>report user</button>
        </div>
        <img src={profile_img} alt="profile picture" />
        <h2>{Person.firstname} {Person.lastname} ({Person.pronouns})</h2>
        <p>{Person.major}</p>
        <p>{Person.year}</p>
        <p>{Person.communication.join(', ')}</p>
        <h2>additional info</h2>
        <p>types of work: {Person.work.join(', ')}</p>
        <p>hours / week: {Person.hours}</p>
        <p>goals: {Person.goals.join(', ')}</p>
        <p>previous pod rating: {Person.rating}/5</p>
      </div>
    );
  }
}

export default Profile;
