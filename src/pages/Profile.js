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
      temp: "",
    }
    this.curr_email = localStorage.getItem('email');
  }

  componentDidMount(){
    if(this.curr_email == null || this.curr_email == ""){
      //not logged in so send to sign in
      this.props.history.push('/sign_in');
    }
    else{
      //console.log(this.props.location.state.current_profile)
      const db = firebase.firestore();

      //get the "a" variable from database 
      db.collection("userInfo").doc("nesharma@stanford.edu").get().then((doc) => {
        //setting the state variable called "temp" to the variable in the doc with the name "a"
        this.setState({firstname: doc.data().first_name})
        this.setState({lastname: doc.data().last_name})
        this.setState({pronouns: doc.data().pronouns})
        this.setState({major: doc.data().major})
        this.setState({year: doc.data().pronouns})
        this.setState({communication: doc.data().pronouns})
        this.setState({work: doc.data().pronouns})
        this.setState({hours: doc.data().pronouns})
        this.setState({goals: doc.data().pronouns})

      })
    }
  }

  reportUser = event => {
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
        <div>
          <h1>profile</h1>
          <button className="report-button" onClick={this.reportUser}>report user</button>
        </div>
        <img src={profile_img} alt="profile picture" />
        <h2>{this.state.firstname} {this.state.lastname} ({this.state.pronouns})</h2>
        <p>{this.state.major}</p>
        <p>{Person.year}</p>
        <p>{Person.communication.join(', ')}</p>
        <h2>additional info</h2>
        <p>types of work: {Person.work.join(', ')}</p>
        <p>hours / week: {this.state.hours}</p>
        <p>goals: {Person.goals.join(', ')}</p>
        <p>previous pod rating: {Person.rating}/5</p>
      </div>
    );
  }
}

export default Profile;
