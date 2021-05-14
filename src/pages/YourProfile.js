import logo from '../logo.svg';
import TextField from '@material-ui/core/TextField';
import React, { Component } from 'react';
import firebase from '../firebase';
import your_profile_img from "../media/your_profile_img.png";
import Person from "../media/profile.json";

class YourProfile extends Component{
  constructor(props){
    super(props);
    this.state={
      temp: "",
    }
  }

  componentDidMount(){
    const db = firebase.firestore();

    //get the "a" variable from database 
    db.collection("blah").doc("hello").get().then((doc) => {
      //setting the state variable called "temp" to the variable in the doc with the name "a"
      this.setState({cs: doc.data().cs})
      this.setState({temp_val: doc.data().temp_val})
    })
  }

  editProfile = event => {
      this.props.history.push('/report');
  }

  render() {
    const {
      email,
      password,
    } = this.state;
    return (
      <div className="Profile">
        {/*This is how we display state variables. Below we are displaying the state variables called "temp_val" and "cs"*/}
        <div>{this.state.temp_val}</div>
        <div>{this.state.cs}</div>
        <div>
          <h1>my profile</h1>
          <button className="report-button" onClick={this.editProfile}>edit profile</button>
        </div>
        <img src={your_profile_img} alt="your profile picture" />
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

export default YourProfile;
