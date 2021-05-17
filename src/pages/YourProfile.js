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
    this.curr_email = localStorage.getItem('email');
  }

  componentDidMount(){
    if(this.curr_email == null || this.curr_email == ""){
      //not logged in so send to sign in
      this.props.history.push('/sign_in');
    }
    else{
      const db = firebase.firestore();
      console.log("success")

    db.collection("userInfo").doc(this.curr_email).get().then((doc) => {
      //setting the state variable called "temp" to the variable in the doc with the name "a"
      console.log("curr email", this.curr_email)

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
      }else if (doc.data().rating == "0"){
        this.setState({rating: zerostar})

      }else if (doc.data().rating == "1"){
        this.setState({rating: onestar})

      }else if (doc.data().rating == "2"){
        this.setState({rating: twostar})

      }else if (doc.data().rating == "3"){
        this.setState({rating: threestar})

      }else if (doc.data().rating == "4"){
        this.setState({rating: fourstar})

      }else if (doc.data().rating == "5"){
        this.setState({rating: fivestar})

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
      <div className="Profile">
        {/*This is how we display state variables. Below we are displaying the state variables called "temp_val" and "cs"*/}
        <div>
          <h1>profile</h1>
        </div>
        <div className="split">
          <div className="profile-image">
            <img className="prof" src={your_profile_img} alt="profile picture" />
          </div>
          <div>
            <h2>{this.state.firstname} {this.state.lastname}</h2>
            {this.state.pronouns && <p>pronouns: ({this.state.pronouns})</p>}
            {this.state.major && <p>major: {this.state.major}</p>}
            {this.state.year && <p>year: {this.state.year}</p>}
            {this.state.communication && <p>communication: {this.state.communication}</p>}
            <h2>additional info</h2>
            {this.state.work && <p>types of work: {this.state.work}</p>}
            {this.state.hours && <p>hours / week: {this.state.hours}</p>}
            {this.state.goals && <p>goals: {this.state.goals}</p>}
            <p className="rate_text">previous pod rating: <img className="rate" src={this.state.rating} alt="rating" /></p>
          </div>
        </div>
      </div>
    );
  }
}

export default YourProfile;
