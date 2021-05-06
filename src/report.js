  
import logo from './logo.svg';
import './App.scss';
import LoadingZoom from './LoadingZoom'
import LoadingSheets from './LoadingSheets'
import React, { Component } from 'react';
import firebase from './firebase';

class Report extends Component{
  constructor(props){
    super(props);
    this.state={
      reportedUser:"temp", //TODO: get this as a prop from last page
    }
    this.onSelect = this.onSelect.bind(this);
    this.uploadReport = this.uploadReport.bind(this);
    this.onChangeOther = this.onChangeOther.bind(this);
  }

  uploadReport = event => {
    event.preventDefault();
    const db = firebase.firestore();
    const addReport = db.collection("reportedUsers").doc(this.state.reportedUser).set({
      "reason": this.state.reason,
    });
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
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>Why are you reporting this profile?</h1>
      <form>
    

          <input type="radio" id="underage" name="neg_behavior" value="underage" onChange={this.onSelect}/>
          <label for="underage">Underage user</label><br />
          <input type="radio" id="pretending" name="neg_behavior" value="pretending"  onChange={this.onSelect}/>
          <label for="pretending">Pretending to be someone else</label><br />
          <input type="radio" id="bullying" name="neg_behavior" value="bullying" onChange={this.onSelect}/>
          <label for="bullying">Bullying or harrassment</label><br />
          <input type="radio" id="scam" name="neg_behavior" value="scam" onChange={this.onSelect}/>
          <label for="scam">Scam or fraud</label><br />
          <input type="radio" id="hurting" name="neg_behavior" value="hurting" onChange={this.onSelect}/>
          <label for="hurting">At risk of hurting themselves or others</label><br />
          <input type="radio" id="not_participating" name="neg_behavior" value="not_participating" onChange={this.onSelect}/>
          <label for="not_participating">Not participating in accountability mechanisms</label><br />
          <input type="radio" id="other" name="neg_behavior" value="other" onChange={this.onSelect}/>
          <label for="other">Other</label>
          <input type="text" id="other_text" name="neg_behavior" onChange={this.onChangeOther}/><br />
          <input type="submit" value="Report User" onClick={this.uploadReport}/>
          <input type="submit" value="Cancel" />

      </form>
      </header>
    </div>
  );
  }
}

export default Report;