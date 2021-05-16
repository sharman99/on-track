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
    //this is how to check if the person is signed in and reroute to sign in page if not
    if(localStorage.getItem('curr_email') == null && (this.props.location.state == undefined || this.props.location.state.signed_in_email == undefined || this.props.location.state.signed_in_email  == null)){
      console.log("rerouting to sign in")
      this.props.history.push('/sign_in');
    }
    else{
      //this is how you recieve the props variable sent from the last page
      if (localStorage.getItem('curr_email') == null){
        localStorage.setItem( 'curr_email', this.props.location.state.signed_in_email );
      }

      const db = firebase.firestore();

      //get the "a" variable from database 
    //get the "a" variable from database 
    db.collection("userInfo").doc(localStorage.getItem('curr_email') ).get().then((doc) => {
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
          <h1>profile</h1>
          <button className="report-button" onClick={this.reportUser}>report user</button>
        </div>
        {/* <img src={profile_img} alt="profile picture" /> */}
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

export default YourProfile;
