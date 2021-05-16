import logo from '../logo.svg';
import React, { Component } from 'react';
import firebase from '../Firebase';
var moment = require('moment-timezone');

class Report extends Component{
  constructor(props){
    super(props);
    this.state={
      reportedUser:"temp", //TODO: get this as a prop from last page
      report_unfilled: false,
    }
    this.curr_email = localStorage.getItem('email');
    this.onSelect = this.onSelect.bind(this);
    this.uploadReport = this.uploadReport.bind(this);
    this.onChangeOther = this.onChangeOther.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  componentDidMount(){
    if(this.curr_email == null || this.curr_email == ""){
      //not logged in so send to sign in
      this.props.history.push('/sign_in');
    }
  }

  cancel = event => {
    this.props.history.push({
      pathname: '/profile',
      state: { current_profile: "temp" }
    })
  }

  uploadReport = event => {
    event.preventDefault();

    if(this.state.reason == null || this.state.reason === "undefined"){
      this.setState({report_unfilled: true})
    }
    else{
      var options = { hour12: false };
      let time = moment().tz("America/Los_Angeles").format('MM-DD-YYYY_HH:mm:ss');

      const db = firebase.firestore();
      const addReport = db.collection("reportedUsers").doc(this.state.reportedUser).update({
        [time]: this.state.reason,
      });
      this.props.history.push('/report_recorded');
    }
  }

  onSelect(e){
    if(e.currentTarget.value == "other"){
      this.setState({reason: this.state.other}, () => {
        console.log(this.state.reason)
      });
    }
    else{
      this.setState({
        reason: e.currentTarget.value
      }, () => {
        console.log(this.state.reason)
      });
    }
  }

  onChangeOther = event => {
    this.setState({ other: event.target.value });
  };

  render(){
    return (
      <div className="Report">
        <form>
          <h2>Why are you reporting this profile?</h2>
          <label for="underage">
            <input type="radio" id="underage" name="neg_behavior" value="underage" onChange={this.onSelect}/>
            Underage user
          </label>
          <label for="pretending">
            <input type="radio" id="pretending" name="neg_behavior" value="pretending"  onChange={this.onSelect}/>
            Pretending to be someone else
          </label>
          <label for="bullying">
            <input type="radio" id="bullying" name="neg_behavior" value="bullying" onChange={this.onSelect}/>
            Bullying or harrassment
          </label>
          <label for="scam">
            <input type="radio" id="scam" name="neg_behavior" value="scam" onChange={this.onSelect}/>
            Scam or fraud
          </label>
          <label for="hurting">
            <input type="radio" id="hurting" name="neg_behavior" value="hurting" onChange={this.onSelect}/>
            At risk of hurting themselves or others
          </label>
          <label for="not_participating">
            <input type="radio" id="not_participating" name="neg_behavior" value="not_participating" onChange={this.onSelect}/>
            Not participating in accountability mechanisms
          </label>
          <label for="other">
            <input type="radio" id="other" name="neg_behavior" value="other" onChange={this.onSelect}/>
            Other:
            <input type="text" name="neg_behavior" onChange={this.onChangeOther}/>
          </label>
          {this.state.report_unfilled && <div style={{ color: 'red'}}> You must pick a reason.</div>}
          <div>
            <input type="submit" value="Report User" onClick={this.uploadReport}/>
            <input type="submit" value="Cancel" onClick={this.cancel}/>
          </div>
        </form>
      </div>
    );
  }
}

export default Report;
