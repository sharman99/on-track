import React, { Component } from 'react';
import profile_img from "../media/profile_img.png";
import Profiles from "../media/profiles.json";
import firebase from '../Firebase';

class Pod extends Component{
  constructor(props){
    super(props);
    this.state={

    }
    this.curr_email = localStorage.getItem('email');
    this.incrementLinkClick = this.incrementLinkClick.bind(this);
  }

  componentDidMount(){
    //temporarily setting currrent pod to pod1. will need to dynamically get current user's pod from firebase and add to local storage
    this.curr_pod = "pod1"

    if(this.curr_email == null || this.curr_email == ""){
      //not logged in so send to sign in
      this.props.history.push('/sign_in');
    }
  }

  incrementLinkClick(){
    const db = firebase.firestore();

    var today = new Date();
    console.log(today)

    var date_created = today;
    var meeting_frequency_days = 7;
    
    db.collection("podInfo").doc(this.curr_pod).get().then((doc) => {
      date_created = new Date(doc.data().date_created);
      console.log("date created: " + date_created)
      meeting_frequency_days = doc.data().meeting_frequency_days;
    })
    .then(doc => {
      var difference_in_time = today.getTime() - date_created.getTime();
  
      // To calculate the number of days between two dates
      var difference_in_days = difference_in_time / (1000 * 3600 * 24);

      console.log("days between: " + difference_in_days)
      var expected_meetings = difference_in_days / meeting_frequency_days
      console.log(expected_meetings)
      var curr_week = Math.ceil(expected_meetings)
      console.log(curr_week)

      /*const addReport = db.collection("podInfo").doc(this.curr_pod).collection("meetingHistory").doc("meeting_" + curr_week).update({
        [this.curr_email]: 1,
      });*/
      const firstDocRef = db.collection("podInfo").doc(this.curr_pod).collection("meetingHistory").doc("meeting_" + curr_week)
      const existDoc = firstDocRef.get()
      .then((resDoc)=>{
          if(resDoc.exists)
          {
            var user = this.curr_email.substring(0, this.curr_email.indexOf("@"))
            const addReport = db.collection("podInfo").doc(this.curr_pod).collection("meetingHistory").doc("meeting_" + curr_week).update({
              [user]: 1,
              //[`${this.curr_email}`]: 1,
            });
          }
          else
          {
            var user = this.curr_email.substring(0, this.curr_email.indexOf("@"))
            const addReport = db.collection("podInfo").doc(this.curr_pod).collection("meetingHistory").doc("meeting_" + curr_week).set({
              //[this.curr_email]: 1,
              [user]: 1,
            });
          }
      });
  });
  }

  render() {
    return (
      <div className="Pod">
        <div className="container">
          <h1>your accountability pod</h1>
          <nav>
            <div onClick={this.incrementLinkClick}>Zoom</div>
            <div onClick={this.incrementLinkClick}>Google Sheets</div>
          </nav>
          <div className="profiles">
            <div className="icon">
              <img src={profile_img} alt="profile picture" />
              <h2>Person.firstname Person.lastname</h2>
              <h2>(Person.pronouns)</h2>
            </div>
            <div className="icon">
              <img src={profile_img} alt="profile picture" />
              <h2>Person.firstname Person.lastname</h2>
              <h2>(Person.pronouns)</h2>
            </div>
            <div className="icon">
              <img src={profile_img} alt="profile picture" />
              <h2>Person.firstname Person.lastname</h2>
              <h2>(Person.pronouns)</h2>
            </div>
            <div className="icon">
              <img src={profile_img} alt="profile picture" />
              <h2>Person.firstname Person.lastname</h2>
              <h2>(Person.pronouns)</h2>
            </div>
          </div>
          <hr />
          <div className="split">
            <div>
              <h2>pod info</h2>
              <h3>Meeting Preferences: </h3>
              <h3>Communication Preferences: </h3>
              <h3>Successful Pod Meetings: </h3>
            </div>
            <div>
              <h2>Pod Member of the Week</h2>
              <img src={profile_img} alt="profile picture" />
              <h3>congrats joyce sun your teammates think you rock! Keep it up</h3>
            </div>
            <div>
              <h2>pod accountability performance</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Pod;
