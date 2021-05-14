import logo from '../logo.svg';
import background from '../media/background.jpg';
import TextField from '@material-ui/core/TextField';
import React, { Component } from 'react';
import firebase from '../firebase';

class SignIn extends Component{
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
      <div className="SignIn" style={{ backgroundImage: `linear-gradient(rgba(51, 51, 51, 0.35), rgba(51, 51, 51, 0.35)), url(${background})` }}>
          <div className="window">
            <img src={logo} className="Logo" alt="on track logo" />
            <h2>email</h2>
            <input className="input-text"
              name="email"
              value={email}
              onChange={this.onChange}
              type="email"
            />
          <h2>password</h2>
            <input className="input-text"
              name="password"
              value={password}
              onChange={this.onChange}
              type="password"
            />
          <button onClick={this.signIn}>sign in</button>
          </div>
      </div>
    );
  }
}

export default SignIn;
