import logo from '../logo.svg';
import TextField from '@material-ui/core/TextField';
import React, { Component } from 'react';
import firebase from '../firebase';
import your_profile_img from "../media/your_profile_img.png";
import onestar from "../media/1s.png";
import twostar from "../media/2s.png";
import threestar from "../media/3s.png";
import fourstar from "../media/4s.png";
import fivestar from "../media/5s.png";
import zerostar from "../media/0s.png";
import unrated from "../media/unrated.png";

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
      console.log("fail")
  
    }
    else{
      //this is how you recieve the props variable sent from the last page
      if (this.props.location.state != undefined  && this.props.location.state.signed_in_email != null ){
        localStorage.setItem( 'curr_email', this.props.location.state.signed_in_email );
      }

      const db = firebase.firestore();
      console.log("success")

      //get the "a" variable from database 
    //get the "a" variable from database 
    db.collection("userInfo").doc(localStorage.getItem('curr_email') ).get().then((doc) => {
      //setting the state variable called "temp" to the variable in the doc with the name "a"
      console.log("curr email", localStorage.getItem('curr_email'))
      
      this.setState({firstname: doc.data().first_name})
      this.setState({lastname: doc.data().last_name})
      this.setState({pronouns: doc.data().pronouns})
      this.setState({major: doc.data().major})
      this.setState({year: doc.data().year})
      this.setState({communication: doc.data().accountability_style})
      this.setState({work: doc.data().accountability_for})
      this.setState({hours: doc.data().estimated_hours})
      this.setState({goals: doc.data().goal})
      if (doc.data().rating == null){
        this.setState({rating: unrated})
      }

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
      <div className="My Profile">
        {/*This is how we display state variables. Below we are displaying the state variables called "temp_val" and "cs"*/}
        <div>{this.state.temp_val}</div>
        <div>{this.state.cs}</div>
        <div>
          <h1>profile</h1>
          <button className="report-button" onClick={this.reportUser}>report user</button>
        </div>
        <img class = "prof" src={your_profile_img} alt="profile picture" />
        <img class = "rate" src={this.state.rating} alt="rating" />

        <h2>{this.state.firstname} {this.state.lastname} ({this.state.pronouns})</h2>
        <p>{this.state.major}</p>
        <p>{this.state.year}</p>
        <p>{this.state.communication}</p>
        <h2>additional info</h2>
        <p>types of work: {this.state.work}</p>
        <p>hours / week: {this.state.hours}</p>
        <p>goals: {this.state.goals}</p>
      </div>
    );
  }
}

export default YourProfile;
