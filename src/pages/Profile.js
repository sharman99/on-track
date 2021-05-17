import logo from '../logo.svg';
import TextField from '@material-ui/core/TextField';
import React, { Component } from 'react';
import firebase from '../firebase';
import profile_img from "../media/profile_img.png";
import Person from "../media/profile.json";
import profile_img1 from "../media/profile_img1.png";
import profile_img2 from "../media/profile_img2.png";
import profile_img3 from "../media/profile_img3.png";
import profile_img4 from "../media/profile_img4.png";
import profile_img5 from "../media/profile_img5.png";
import onestar from "../media/1s.png";
import twostar from "../media/2s.png";
import threestar from "../media/3s.png";
import fourstar from "../media/4s.png";
import fivestar from "../media/5s.png";
import zerostar from "../media/0s.png";
import unrated from "../media/unrated.png";

class Profile extends Component{
  constructor(props){
    super(props);
    this.state={
      temp: "",
    }
    this.curr_email = localStorage.getItem('email');
    this.other_profile = localStorage.getItem('other_profile')
    this.other_profile = props.other_profile;
    console.log(this.curr_email)
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
      db.collection("userInfo").doc(localStorage.getItem('other_profile')).get().then((doc) => {
        //setting the state variable called "temp" to the variable in the doc with the name "a"
        this.setState({num_private: false})
        this.setState({email_private: false})

        var private_fields =  doc.data().set_private
        if (private_fields.includes("email")){
          this.setState({email_private: true})
        }
        if (private_fields.includes("number")){
          this.setState({num_private: true})
        }
        if (private_fields.includes("year")){
          this.setState({year_private: true})
        }
        if (private_fields.includes("major")){
          this.setState({major_private: true})
        }
        this.setState({email: localStorage.getItem('other_profile')})

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
        <div>
          <h1>profile</h1>
        </div>
        <div className="split">
          <div className="profile-image">
            <img className="prof" src={localStorage.getItem('other_profile_img')} alt="profile picture" />
          </div>
          <div>
            <h2>{this.state.firstname} {this.state.lastname}</h2>
            {this.state.pronouns && <p>pronouns: {this.state.pronouns}</p>}
            {!this.state.major_private && this.state.major && <p>major: {this.state.major}</p>}
            {!this.state.year_private && this.state.year && <p>year: {this.state.year}</p>}
            {!this.state.email_private && this.state.email && <p>email: {this.state.email}</p>}

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

export default Profile;
