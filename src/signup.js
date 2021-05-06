  
import logo from './logo.svg';
import './App.scss';
import LoadingZoom from './LoadingZoom'
import LoadingSheets from './LoadingSheets'
import React, { Component } from 'react';
import firebase from './firebase';

const INITIAL_STATE = {
  email: '',
  passwordOne: '',
  passwordTwo: '',
};

class SignUp extends Component{
  constructor(props){
    super(props);
    this.state={
      options: [],
      podOptions: [],
      workAccOptions: [],
      private: [],


    }
    this.createAccount = this.createAccount.bind(this)
    this.onSelectPartnershipLength = this.onSelectPartnershipLength.bind(this)
    this.handleWorkHours = this.handleWorkHours.bind(this)
    this.onSelectDesiredFrequency = this.onSelectDesiredFrequency.bind(this)
    this.onChangeWritten = this.onChangeWritten.bind(this)
    this.onSelectMatchingPreference = this.onSelectMatchingPreference.bind(this)
    this.accountabilityOptions = this.accountabilityOptions.bind(this)
    this.podSize = this.podSize.bind(this)
    this.otherWorkOptions = this.otherWorkOptions.bind(this)
    this.workOptions = this.workOptions.bind(this)
    this.remainPrivate = this.remainPrivate.bind(this)
  }

  createAccount = event => {
    event.preventDefault();
    const {email, passwordOne} = this.state;
    console.log(email)

    //create account for user
    firebase.auth().createUserWithEmailAndPassword(email, passwordOne)
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

    if(this.state.fname == null || this.state.fname === "undefined"){
      this.state.fname = ""
    }
    if(this.state.lname == null || this.state.lname === "undefined"){
      this.state.lname = ""
    }
    if(this.state.estimated_hours == null || this.state.estimated_hours === "undefined"){
      this.state.estimated_hours = ""
    }
    if(this.state.pronouns == null || this.state.pronouns === "undefined"){
      this.state.pronouns = ""
    }
    if(this.state.major == null || this.state.major === "undefined"){
      this.state.major = ""
    }
    if(this.state.phone_number == null || this.state.phone_number === "undefined"){
      this.state.phone_number = ""
    }
    if(this.state.matching_preference == null || this.state.matching_preference === "undefined"){
      this.state.matching_preference = ""
    }
    if(this.state.desired_frequency == null || this.state.desired_frequency === "undefined"){
      this.state.desired_frequency = ""
    }
    if(this.state.partnership_length == null || this.state.partnership_length === "undefined"){
      this.state.partnership_length = ""
    }
    if(this.state.written_answer == null || this.state.written_answer === "undefined"){
      this.state.written_answer = ""
    }
    if(this.state.pod_size == null || this.state.pod_size === "undefined"){
      this.state.pod_size = ""
    }
    if(this.state.accountability_style == null || this.state.accountability_style === "undefined"){
      this.state.accountability_style = ""
    }
    if(this.state.set_private == null || this.state.set_private === "undefined"){
      this.state.set_private = ""
    }
    if(this.state.accountability_for == null || this.state.accountability_for === "undefined"){
      this.state.accountability_for = ""
    }
    //attach values to user in database
    const db = firebase.firestore();
    const addReport = db.collection("userInfo").doc(email).set({
      "first_name": this.state.fname,
      "last_name": this.state.lname,
      "pronouns": this.state.pronouns,
      "major": this.state.major,
      "phone_number": this.state.phone_number,
      "estimated_hours": this.state.estimated_hours,
      "matching_preference": this.state.matching_preference,
      "desired_frequency": this.state.desired_frequency,
      "partnership_length": this.state.partnership_length,
      "written_answer": this.state.written_answer,
      "pod_size": this.state.pod_size,
      "accountability_style": this.state.accountability_style,
      "set_private": this.state.set_private,
      "accountability_for": this.state.accountability_for,
    });
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleWorkHours(e){
    this.setState({estimated_hours: e.target.value}, () => {
      console.log(this.state.estimated_hours)
    })
  }

  onSelectMatchingPreference(e){
    if(e.currentTarget.value == "known"){
      this.setState({
        matching_preference: this.state.matching_preference_other
      }, () => {
        console.log(this.state.matching_preference)
      })
    }
    else{
      this.setState({
        matching_preference: e.currentTarget.value
      }, () => {
        console.log(this.state.matching_preference)
      });
    }
  }

  onSelectDesiredFrequency(e){
    this.setState({
      desired_frequency: e.currentTarget.value
    }, () => {
      console.log(this.state.desired_frequency)
    });
  }

  onSelectPartnershipLength(e){
    this.setState({
      partnership_length: e.currentTarget.value
    }, () => {
      console.log(this.state.partnership_length)
    });
  }

  otherPartner = event => {
    this.setState({ matching_preference_other: event.target.value });
  };

  onChangeWritten = event => {
    this.setState({ written_answer: event.target.value });
  };

  podSize(e){
    const podOptions = this.state.podOptions
    if(e.target.checked){
      podOptions.push(e.target.value)
    }
    else{
      let index = podOptions.indexOf(e.target.value)
      podOptions.splice(index, 1)
    }
    this.setState({podOptions: podOptions}, () => {
      let list = ""
      for(let i = 0; i < podOptions.length; i++){
        list = podOptions[i] + ", " + list
      }
      console.log(list)
      this.setState({pod_size: list})
    })
  }

  accountabilityOptions(e){
    const options = this.state.options
    if(e.target.checked){
      options.push(e.target.value)
    }
    else{
      let index = options.indexOf(e.target.value)
      options.splice(index, 1)
    }
    this.setState({options: options}, () => {
      let list = ""
      for(let i = 0; i < options.length; i++){
        list = options[i] + ", " + list
      }
      console.log(list)
      this.setState({accountability_style: list})
    })
  }

  workOptions(e){
    const options = this.state.workAccOptions
    if(e.target.checked){
      if(e.target.value == "other"){
        options.push(this.state.work_other)
      }
      else{
        options.push(e.target.value)
      }
    }
    else{
      let index = options.indexOf(e.target.value)
      options.splice(index, 1)
    }
    this.setState({workAccOptions: options}, () => {
      let list = ""
      for(let i = 0; i < options.length; i++){
        list = options[i] + ", " + list
      }
      console.log(list)
      this.setState({accountability_for: list})
    })
  }

  otherWorkOptions = event => {
    this.setState({ work_other: event.target.value });
  };

  remainPrivate(e){
    const options = this.state.private
    if(e.target.checked){
      options.push(e.target.value)
    }
    else{
      let index = options.indexOf(e.target.value)
      options.splice(index, 1)
    }
    this.setState({private: options}, () => {
      let list = ""
      for(let i = 0; i < options.length; i++){
        list = options[i] + ", " + list
      }
      console.log(list)
      this.setState({set_private: list})
    })
  }
  
  render() {
    const {
      email,
      first_name, 
      last_name,
      pronouns, 
      major, 
      year,
      phone_number,
      set_private,  
      accountability_for, 
      estimated_hours,
      matching_preference,
      desired_frequency,
      partnership_length,
      pod_size, 
      accountability_style, 
      written_answer,
      passwordOne,
      passwordTwo,
    } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <h1>Create an account</h1>
      <form>
          <h2>Basic Info</h2>

          <div className="row">
              <div className="column">
                  <label for="fname">First name:</label>
                  <input 
                    type="text" 
                    id="fname" 
                    name="fname" 
                    value={first_name}
                    onChange={this.onChange}/><br /> <br /> 
                  <label for="lname">Last name:</label>
                  <input 
                    type="text" 
                    id="lname" 
                    name="lname" 
                    value={last_name}
                    onChange={this.onChange}/><br /><br /> 
                  <label for="pronouns">Pronouns (optional):</label>
                  <input 
                    type="text" 
                    id="pronouns" 
                    name="pronouns" 
                    value={pronouns}
                    onChange={this.onChange}/><br /><br /> 
                  <label for="major">Major:</label>
                  <input 
                    type="text" 
                    id="major" 
                    name="major" 
                    value={major}
                    onChange={this.onChange}/><br /><br /> 
                  
              </div> 
              <div className="column">
                  <label for="year">Year:</label>
                  <input 
                    type="text" 
                    id="year" 
                    name="year" 
                    value={year}
                    onChange={this.onChange} /><br /><br /> 
                  <label for="number">Phone number:</label>
                  <input 
                    type="text" 
                    id="number" 
                    name="phone_number" 
                    value={phone_number}
                    onChange={this.onChange}/><br /><br /> 
                  <label for="email">Email:</label>
                  <input className="input"
                    name="email"
                    value={email}
                    onChange={this.onChange}
                    type="text"
                  /><br /><br /> <br />
              </div>
              <div className="column">
                <label for="year">Password:</label>
                <input className="input"
                  name="passwordOne"
                  value={passwordOne}
                  onChange={this.onChange}
                  type="password"
                  placeholder="Password"
                /><br /><br /> 
                <label for="year">Confirm Password:</label>
                <input className="input"
                  name="passwordTwo"
                  value={passwordTwo}
                  onChange={this.onChange}
                  type="password"
                  placeholder="Confirm Password"
                />
                {passwordOne !== passwordTwo && <div style={{ color: 'red'}}> Passwords must match.</div>}
                {passwordOne != null && passwordOne.length < 6 && <div style={{ color: 'red'}}> Password must be at least 6 characters.</div>}
              </div>

              <p>Check the fields you would like to remain private:</p>
              <input type="checkbox" id="fname" name="fname" value="fname" onChange={this.remainPrivate}/>
              <label for="fname">First Name</label>  
              <input type="checkbox" id="lname" name="lname" value="lname" onChange={this.remainPrivate}/>
              <label for="lname">Last Name</label>   
              <input type="checkbox" id="pronouns" name="pronouns" value="pronouns" onChange={this.remainPrivate}/>
              <label for="pronouns">Pronouns</label>    
              <input type="checkbox" id="major" name="major" value="major" onChange={this.remainPrivate}/>
              <label for="major">Major</label>    
              <input type="checkbox" id="year" name="year" value="year" onChange={this.remainPrivate}/>
              <label for="year">Year</label> 
              <input type="checkbox" id="number" name="number" value="number" onChange={this.remainPrivate}/>
              <label for="number">Phone Number</label> 
              <input type="checkbox" id="email" name="email" value="email" onChange={this.remainPrivate}/>  
              <label for="email">Email</label> 
            </div>


          <h2>Accountability Preferences</h2>
          <div className="row">
              <div className="column">
              </div>
          </div>
      
          <p>What would you like to be held accountable for?</p>
          <input type="checkbox" id="technical" name="work_type" value="technical" onChange={this.workOptions}/>
          <label for=" technical">Technical work (eg. coding)</label><br /> 
          <input type="checkbox" id="psets" name="work_type" value="psets" onChange={this.workOptions}/>
          <label for="sheet">Problem sets</label><br />
          <input type="checkbox" id="text" name="work_type" value="readings" onChange={this.workOptions}/>
          <label for="text">Readings</label><br />
          <input type="checkbox" id="text" name="work_type" value="essays" onChange={this.workOptions}/>
          <label for="text">Essays</label><br />
          <input type="checkbox" id="text" name="work_type" value="projects" onChange={this.workOptions}/>
          <label for="text">Projects</label><br />
          <input type="checkbox" id="text" name="work_type" value="personal_goals" onChange={this.workOptions}/>
          <label for="text">Personal goals</label><br />
          <input type="checkbox" id="text" name="work_type" value="other" onChange={this.workOptions}/>
          <label for="text">Other</label>
          <input type="text" id="other" name="other"  onChange={this.otherWorkOptions}/><br /><br />
      
          <label for="work_hours">Weekly estimated hours of work</label>
          <select 
            name="work_hours" 
            id="work_hours"
            defaultValue="work_hours5"
            onChange={this.handleWorkHours}>
              <option value="work_hours5">5</option>
              <option value="work_hours10">10</option>
              <option value="work_hours15">15</option>
              <option value="work_hours20">20</option>
              <option value="work_hours25">25</option>
              <option value="work_hours30">30</option>
          </select>

          <p>Matching preference</p>
          <input type="radio" id="random" name="matching_preference" value="random" onChange={this.onSelectMatchingPreference}/>
          <label for="quarter">A random person</label><br />
          <input type="radio" id="known" name="matching_preference" value="known" onChange={this.onSelectMatchingPreference}/>
          <label for="known">Someone I know</label>
          <input type="text" id="partner_name" name="partner_name" onChange={this.otherPartner}/><br />

          <p>Desired Frequency of check-ins</p>
          <input type="radio" id="daily" name="check_frequency" value="daily" onChange={this.onSelectDesiredFrequency}/>
          <label for="daily">Daily</label>
          <input type="radio" id="weekly" name="check_frequency" value="weekly" onChange={this.onSelectDesiredFrequency}/>
          <label for="weekly">Weekly</label>
          <input type="radio" id="quarterly" name="check_frequency" value="quarterly" onChange={this.onSelectDesiredFrequency}/>
          <label for="quarterly">Quarterly</label>

          <p>Length of partnership</p>
          <input type="radio" id="quarter" name="partnership_length" value="quarter" onChange={this.onSelectPartnershipLength}/>
          <label for="quarter">Quarter</label>
          <input type="radio" id="year" name="partnership_length" value="year" onChange={this.onSelectPartnershipLength}/>
          <label for="year">Year</label>


          <p>Accountability pod size</p>
          <input type="checkbox" id="pod1" name="pod1" value="1" onChange={this.podSize}/>
          <label for="pod1">1</label>  
          <input type="checkbox" id="pod2" name="pod2" value="2" onChange={this.podSize}/>
          <label for="pod2">2</label>  
          <input type="checkbox" id="pod3" name="pod3" value="3" onChange={this.podSize} />
          <label for="pod3">3</label>  
          <input type="checkbox" id="pod4" name="pod4" value="4" onChange={this.podSize}/>
          <label for="pod4">4</label>   
          
          <p>Style of accountability</p>
          <input type="checkbox" id="zoom" name="zoom" value="zoom" onChange={this.accountabilityOptions}/>
          <label for="zoom">Zoom meetings working together</label><br /> 
          <input type="checkbox" id="sheet" name="sheet" value="sheet" onChange={this.accountabilityOptions}/>
          <label for="sheet">Tracking hours of work on a Google Sheet</label><br />
          <input type="checkbox" id="text" name="text" value="text" onChange={this.accountabilityOptions}/>
          <label for="text">Text check-ins</label><br /><br />

          <label for="accountability_strategy">How might you and your partner(s) make sure that you're keeping up with work?</label><br />
          <input type="text" id="accountability_strategy" name="accountability_strategy" onChange={this.onChangeWritten}/><br /><br />
        
          <input type="submit" id="create_account" value="Create Account" onClick={this.createAccount}/>
      </form>
        </header>
      </div>
    );
  }
}


export default SignUp;