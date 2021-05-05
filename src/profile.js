import logo from './logo.svg';
import './App.scss';
import TextField from '@material-ui/core/TextField';
import background from "./green_background.jpg"
import React, { Component } from 'react';
import firebase from './firebase';

class Profile extends Component{
  constructor(props){
    super(props);
    this.state={

    }
    this.signIn = this.signIn.bind(this)
  }

  signIn = event => {
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

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const {
      email,
      password,
    } = this.state;
    return (
      <div className="App"
          style={{ backgroundImage: `url(${background})`, width:'100%', opacity:'50%', backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}
      >   
      <div>
        <h1>
            profile
        </h1>
      </div>
        <div id="center_square"
            style={{ backgroundColor: 'white', position:'absolute', top:'30%', left:'30%', padding: '10%'}}
        >
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
          <div>
            <p>EMAIL</p>
            <input className="input"
              name="email"
              value={email}
              onChange={this.onChange}
              type="email"
            />
          </div>
          <div>
            <p>PASSWORD</p>
            <input className="input"
              name="password"
              value={password}
              onChange={this.onChange}
              type="password"
            />
          </div>
          <button onClick={this.signIn}>SIGN IN</button>
        </div>
      </div>
    );
  }
}

export default Profile;
