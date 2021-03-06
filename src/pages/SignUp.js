import logo from '../logo.svg';
import React, { Component } from 'react';
import firebase from '../firebase';

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
      form_unfilled: false,
    }
    this.createAccount = this.createAccount.bind(this)
    this.onSelectPartnershipLength = this.onSelectPartnershipLength.bind(this)
    this.handleWorkHours = this.handleWorkHours.bind(this)
    this.handleYear = this.handleYear.bind(this)

    this.onSelectDesiredFrequency = this.onSelectDesiredFrequency.bind(this)
    this.onChangeWritten = this.onChangeWritten.bind(this)
    this.onChangeGoal = this.onChangeGoal.bind(this)

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

    if(this.state.fname == null || this.state.fname === "undefined"){
      this.setState({form_unfilled: true})
      return;
      //this.state.fname = ""
    }
    if(this.state.lname == null || this.state.lname === "undefined"){
      this.setState({form_unfilled: true})
      return;
      //this.state.lname = ""
    }
    if(this.state.estimated_hours == null || this.state.estimated_hours === "undefined"){
      this.setState({form_unfilled: true})
      return;
      //this.state.estimated_hours = ""
    }
    if(this.state.pronouns == null || this.state.pronouns === "undefined"){
      this.setState({form_unfilled: true})
      return;
      //this.state.pronouns = ""
    }
    if(this.state.major == null || this.state.major === "undefined"){
      this.setState({form_unfilled: true})
      return;
      //this.state.major = ""
    }
    if(this.state.year == null || this.state.year === "undefined"){
      this.setState({form_unfilled: true})
      return;
      //this.state.major = ""
    }
    if(this.state.phone_number == null || this.state.phone_number === "undefined"){
      this.setState({form_unfilled: true})
      return;
      //this.state.phone_number = ""
    }
    if(this.state.matching_preference == null || this.state.matching_preference === "undefined"){
      this.setState({form_unfilled: true})
      return;
      //this.state.matching_preference = ""
    }
    if(this.state.desired_frequency == null || this.state.desired_frequency === "undefined"){
      this.setState({form_unfilled: true})
      return;
      //this.state.desired_frequency = ""
    }
    if(this.state.partnership_length == null || this.state.partnership_length === "undefined"){
      this.setState({form_unfilled: true})
      return;
      //this.state.partnership_length = ""
    }
    if(this.state.written_answer == null || this.state.written_answer === "undefined"){
      this.setState({form_unfilled: true})
      return;
      //this.state.written_answer = ""
    }
    if(this.state.goal == null || this.state.goal === "undefined"){
      this.setState({form_unfilled: true})
      return;
      //this.state.written_answer = ""
    }
    if(this.state.pod_size == null || this.state.pod_size === "undefined"){
      this.setState({form_unfilled: true})
      return;
      //this.state.pod_size = ""
    }
    if(this.state.accountability_style == null || this.state.accountability_style === "undefined"){
      this.setState({form_unfilled: true})
      return;
      //this.state.accountability_style = ""
    }
    if(this.state.set_private == null || this.state.set_private === "undefined"){
      this.setState({form_unfilled: true})
      return;
      //this.state.set_private = ""
    }
    if(this.state.accountability_for == null || this.state.accountability_for === "undefined"){
      this.setState({form_unfilled: true})
      return;
      //this.state.accountability_for = ""
    }
    else{
      if(!this.state.form_unfilled){
        //create account for user
        firebase.auth().createUserWithEmailAndPassword(email, passwordOne)
        .then((userCredential) => {
          // Signed in
          var user = userCredential.user;
          console.log("SUCCESFULLY CREATED ACCOUNT")
          
          //TODO: re-route to next page here
          this.props.history.push('/waiting_period');
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log("ERROR CREATING ACCOUNT")
          console.log(errorMessage)
        });

        //attach values to user in database
        const db = firebase.firestore();
        const addReport = db.collection("userInfo").doc(email).set({
          "first_name": this.state.fname,
          "last_name": this.state.lname,
          "year": this.state.year,
          "pronouns": this.state.pronouns,
          "major": this.state.major,
          "phone_number": this.state.phone_number,
          "estimated_hours": this.state.estimated_hours,
          "matching_preference": this.state.matching_preference,
          "desired_frequency": this.state.desired_frequency,
          "partnership_length": this.state.partnership_length,
          "written_answer": this.state.written_answer,
          "goal": this.state.goal,

          "pod_size": this.state.pod_size,
          "accountability_style": this.state.accountability_style,
          "set_private": this.state.set_private,
          "accountability_for": this.state.accountability_for,
        });
      }
    }
  }

  onChange = event => {
    this.setState({form_unfilled: false})
    this.setState({ [event.target.name]: event.target.value });
  };

  handleWorkHours(e){
    this.setState({form_unfilled: false})
    this.setState({estimated_hours: e.target.value}, () => {
      console.log(this.state.estimated_hours)
    })
  }

  handleYear(e){
    this.setState({form_unfilled: false})
    this.setState({
      year: e.currentTarget.value
    }, () => {
      console.log(this.state.year)
    });
  }

  onSelectMatchingPreference(e){
    this.setState({form_unfilled: false})
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
    this.setState({form_unfilled: false})
    this.setState({
      desired_frequency: e.currentTarget.value
    }, () => {
      console.log(this.state.desired_frequency)
    });
  }

  onSelectPartnershipLength(e){
    this.setState({form_unfilled: false})
    this.setState({
      partnership_length: e.currentTarget.value
    }, () => {
      console.log(this.state.partnership_length)
    });
  }

  otherPartner = event => {
    this.setState({form_unfilled: false})
    this.setState({ matching_preference_other: event.target.value });
  };

  onChangeWritten = event => {
    this.setState({form_unfilled: false})
    this.setState({ written_answer: event.target.value });
  };
  onChangeGoal = event => {
    this.setState({form_unfilled: false})
    this.setState({ goal: event.target.value });
  };

  podSize(e){
    this.setState({form_unfilled: false})
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
    this.setState({form_unfilled: false})
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
        if (list == ""){
          list = options[i] + list

        }else{
          list = options[i] + ", " + list
        }
      }
      console.log(list)
      this.setState({accountability_style: list})
    })
  }

  workOptions(e){
    this.setState({form_unfilled: false})
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
        if (list == ""){
          list = options[i] + list

        }else{
          list = options[i] + ", " + list
        }
      }
      console.log(list)
      this.setState({accountability_for: list})
    })
  }

  otherWorkOptions = event => {
    this.setState({form_unfilled: false})
    this.setState({ work_other: event.target.value });
  };

  remainPrivate(e){
    this.setState({form_unfilled: false})
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
      <div className="SignUp">
        <h1>Create an account</h1>
        <form>
          <h2>Basic Info</h2>

          <div className="basic-info">
            <label className="field-heading" for="fname">First name</label>
            <input
              type="text"
              id="fname"
              name="fname"
              value={first_name}
              onChange={this.onChange}/>
            <label className="field-heading" for="lname">Last name</label>
            <input
              type="text"
              id="lname"
              name="lname"
              value={last_name}
              onChange={this.onChange}/>
            <label className="field-heading" for="pronouns">Pronouns (enter '-' to keep private)</label>
            <input
              type="text"
              id="pronouns"
              name="pronouns"
              value={pronouns}
              onChange={this.onChange}/>
            <label className="field-heading" for="major">Major</label>
            <input
              type="text"
              id="major"
              name="major"
              value={major}
              onChange={this.onChange}/>
            {/* <label className="field-heading" for="year">Year</label>
            <input
              type="text"
              id="year"
              name="year"
              value={year}
              onChange={this.onChange} /> */}
            <label className="field-heading" for="year">Year</label>
            <select
              name="year"
              id="year"
              defaultValue="freshman"
              onChange={this.handleYear}>
              <option value="Freshman">Freshman</option>
              <option value="Sophomore">Sophomore</option>
              <option value="Junior">Junior</option>
              <option value="Senior">Senior</option>
              <option value="Graduate Student">Graduate Student</option>
            </select>

            <label className="field-heading" for="number">Phone number</label>
            <input
              type="text"
              id="number"
              name="phone_number"
              value={phone_number}
              onChange={this.onChange}/>
            <label className="field-heading" for="email">Email</label>
            <input className="input-text"
              id="email"
              name="email"
              value={email}
              onChange={this.onChange}
              type="email"
              />
            <label className="field-heading" for="passwordOne">Password</label>
            <input className="input-text"
              id="passwordOne"
              name="passwordOne"
              value={passwordOne}
              onChange={this.onChange}
              type="password"
              />
            <label className="field-heading" for="passwordTwo">Confirm Password</label>
            <input className="input-text"
              id="passwordTwo"
              name="passwordTwo"
              value={passwordTwo}
              onChange={this.onChange}
              type="password"
              />
            {passwordOne !== passwordTwo && <div style={{ color: 'red'}}> Passwords must match.</div>}
            {passwordOne != null && passwordOne.length < 6 && <div style={{ color: 'red'}}> Password must be at least 6 characters.</div>}
          </div>

          <h2>Check the fields you would like to remain private. For your safety, we never share phome numbers to users' profiles.</h2>
          <div className="private-info">
            {/* <label>
              <input type="checkbox" name="fname" value="fname" onChange={this.remainPrivate}/>
              First Name
            </label>*/}
            <label>
              <input type="checkbox" name="lname" value="lname" onChange={this.remainPrivate}/>
              Last Name
            </label>
            {/* <label>
              <input type="checkbox" name="pronouns" value="pronouns" onChange={this.remainPrivate}/>
              Pronouns
            </label> */}
            <label>
              <input type="checkbox" name="major" value="major" onChange={this.remainPrivate}/>
              Major
            </label>
            <label>
              <input type="checkbox" name="year" value="year" onChange={this.remainPrivate}/>
              Year
            </label>
            {/* <label>
              <input type="checkbox" name="number" value="number" onChange={this.remainPrivate}/>
              Phone Number
            </label> */}
            <label>
              <input type="checkbox" name="email" value="email" onChange={this.remainPrivate}/>
              Email
            </label>
            <label>
              <input type="checkbox" name="none" value="none" onChange={this.remainPrivate}/>
              None
            </label>
          </div>

          <h2>Accountability Preferences</h2>

          <div className="preferences">
            <h3>What would you like to be held accountable for?</h3>
            <div className="split">
              <label>
                <input type="checkbox" name="work_type" value="Technical" onChange={this.workOptions}/>
                Technical work (eg. coding)
              </label>
              <label>
                <input type="checkbox" name="work_type" value="Psets" onChange={this.workOptions}/>
                Problem sets
              </label>
              <label>
                <input type="checkbox" name="work_type" value="Readings" onChange={this.workOptions}/>
                Readings
              </label>
              <label>
                <input type="checkbox" name="work_type" value="Essays" onChange={this.workOptions}/>
                Essays
              </label>
              <label>
                <input type="checkbox" name="work_type" value="Projects" onChange={this.workOptions}/>
                Projects
              </label>
              <label>
                <input type="checkbox" name="work_type" value="Personal Goals" onChange={this.workOptions}/>
                Personal goals
              </label>
              <label>
                <input type="checkbox" name="work_type" value="other" onChange={this.workOptions}/>
                Other:&nbsp;
                <input type="text" name="other" onChange={this.otherWorkOptions}/>
              </label>
            </div>

            <div className="split">
              <div>
                <label for="work_hours">Weekly estimated hours of work</label>
                <select
                  name="work_hours"
                  id="work_hours"
                  defaultValue="work_hours5"
                  onChange={this.handleWorkHours}>
                  <option value="5">5</option>
                  <option value="10">10</option>
                  <option value="15">15</option>
                  <option value="20">20</option>
                  <option value="25">25</option>
                  <option value="30">30</option>
                </select>
              </div>

              <div>
                <h3>Matching preference</h3>
                <label for="random">
                  <input type="radio" id="random" name="matching_preference" value="random" onChange={this.onSelectMatchingPreference}/>
                  A random person
                </label>
                <label for="known">
                  <input type="radio" id="known" name="matching_preference" value="known" onChange={this.onSelectMatchingPreference}/>
                  Someone I know:&nbsp;
                  <input type="text" id="partner_name" name="partner_name" onChange={this.otherPartner}/>
                </label>
              </div>

              <div>
                <h3>Desired Frequency of check-ins</h3>
                <label for="daily">
                  <input type="radio" id="daily" name="check_frequency" value="daily" onChange={this.onSelectDesiredFrequency}/>
                  Daily
                </label>
                <label for="weekly">
                  <input type="radio" id="weekly" name="check_frequency" value="weekly" onChange={this.onSelectDesiredFrequency}/>
                  Weekly
                </label>
                <label for="quarterly">
                  <input type="radio" id="quarterly" name="check_frequency" value="quarterly" onChange={this.onSelectDesiredFrequency}/>
                  Quarterly
                </label>
              </div>

              <div>
                <h3>Length of partnership</h3>
                <label for="quarter">
                  <input type="radio" id="quarter" name="partnership_length" value="quarter" onChange={this.onSelectPartnershipLength}/>
                  Quarter
                </label>
                <label for="year_length">
                  <input type="radio" id="year_length" name="partnership_length" value="year" onChange={this.onSelectPartnershipLength}/>
                  Year
                </label>
              </div>
            </div>

            <h3>Accountability pod size</h3>
            <div className="split">
              <label for="pod1">
                <input type="checkbox" id="pod1" name="pod1" value="1" onChange={this.podSize}/>
                1
              </label>
              <label for="pod2">
                <input type="checkbox" id="pod2" name="pod2" value="2" onChange={this.podSize}/>
                2
              </label>
              <label for="pod3">
                <input type="checkbox" id="pod3" name="pod3" value="3" onChange={this.podSize} />
                3
              </label>
              <label for="pod4">
                <input type="checkbox" id="pod4" name="pod4" value="4" onChange={this.podSize}/>
                4
              </label>
            </div>

            <h3>Style of accountability</h3>
            <label for="zoom">
              <input type="checkbox" id="zoom" name="zoom" value="Zoom" onChange={this.accountabilityOptions}/>
              Zoom meetings working together
            </label>
            <label for="sheet">
              <input type="checkbox" id="sheet" name="sheet" value="Google Sheet" onChange={this.accountabilityOptions}/>
              Tracking hours of work on a Google Sheet
            </label>
            <label for="text">
              <input type="checkbox" id="text" name="text" value="Text" onChange={this.accountabilityOptions}/>
              Text check-ins
            </label>
            <label for="accountability_goal">What is your overall accountability goal?</label>
            <input type="text" id="accountability_goal" name="accountability_goal" onChange={this.onChangeGoal}/>

            <label for="accountability_strategy">How might you and your partner(s) make sure that you're keeping up with work?</label>
            <input type="text" id="accountability_strategy" name="accountability_strategy" onChange={this.onChangeWritten}/>
          </div>

          {this.state.form_unfilled && <div style={{ color: 'red'}}> You must answer all items in the form before signing up.</div>}

          <input type="submit" id="create_account" value="Create Account" onClick={this.createAccount}/>
        </form>
      </div>
    );
  }
}


export default SignUp;
