import logo from '../logo.svg';
import TextField from '@material-ui/core/TextField';
import React, { Component } from 'react';
import firebase from '../firebase';
import profile_img from "../profile_img.png"

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
        <div className="App">
            <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            </header>

            <p>
                PROFILE
            </p>

            <button onClick={this.reportUser}>REPORT USER</button>

            <p>
                ANSEL DAVIS (HE/THEY)
            </p>

            <img src={profile_img} className="App-logo" alt="profile_img" />


            <p>
                HUMAN BIOLOGY
            </p>

            <p>
                JUNIOR
            </p>

            <p>
                MESSENGER, TEXT
            </p>

            <p>
                ADDITIONAL INFO
            </p>

            <p>
                TYPES OF WORK: ESSAYS, PSETS, READINGS
            </p>

            <p>
                HOURS / WEEK: 20
            </p>

            <p>
                GOALS: COMPLETE SENIOR THESIS
            </p>

            <p>
                PREVIOUS POD RATING:
            </p>


        </div>
    );
  }
}

export default Profile;
