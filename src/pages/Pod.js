import profile_img from "../media/profile_img.png";
import Profiles from "../media/profiles.json";
import React, { Component } from 'react';
import firebase from '../firebase';
import healthy_plant_img from "../media/healthy_plant_img.png";
import unhealthy_plant_img from "../media/unhealthy_plant_img.png";

class Pod extends Component{
  constructor(props){
    super(props);
    this.state={
      array: [],
    }
    this.curr_email = localStorage.getItem('email');
    this.incrementLinkClick = this.incrementLinkClick.bind(this);
    this.checkProgress = this.checkProgress.bind(this);
    this.inside = this.inside.bind(this)
  }

  componentDidMount(){
    const db = firebase.firestore();
    this.checkProgress();

       this.curr_pod = "pod2"
       db.collection("podInfo").doc("pod2").get().then((doc) => {
        //setting the state variable called "temp" to the variable in the doc with the name "a"
        this.setState({check: "check"})
        for  (var i = 0; i < doc.data().num_members; i++) {
          this.setState({email1: doc.data().email1});
          db.collection("userInfo").doc(doc.data().email1).get().then((doc) => {
            this.setState({fname1: doc.data().first_name});
            this.setState({lname1: doc.data().last_name});
            this.setState({pronouns1:doc.data().pronouns});
            this.setState({email1: doc.data().email1});

          }
          )
          i++;

          if (i == doc.data().num_members)
            break;

          this.setState({email2: doc.data().email2});
          db.collection("userInfo").doc(doc.data().email2).get().then((doc) => {
            this.setState({fname2: doc.data().first_name});
            this.setState({lname2: doc.data().last_name});
            this.setState({pronouns2:doc.data().pronouns});
            this.setState({email2: doc.data().email2});

          }
          )
          i++;

          if (i == doc.data().num_members)
            break;

            this.setState({email3: doc.data().email3});
            db.collection("userInfo").doc(doc.data().email3).get().then((doc) => {
              this.setState({fname3: doc.data().first_name});
              this.setState({lname3: doc.data().last_name});
              this.setState({pronouns3:doc.data().pronouns});
              this.setState({email3: doc.data().email3});

            }
            )
            i++;

            if (i == doc.data().num_members)
              break;


              this.setState({email4: doc.data().email4});
              db.collection("userInfo").doc(doc.data().email4).get().then((doc) => {
                this.setState({fname4: doc.data().first_name});
                this.setState({lname4: doc.data().last_name});
                this.setState({pronouns4:doc.data().pronouns});
                this.setState({email4: doc.data().email4});

              }
              )
              i++;

              if (i == doc.data().num_members)
                break;

                this.setState({email5: doc.data().email5});
                db.collection("userInfo").doc(doc.data().email5).get().then((doc) => {
                  this.setState({fname5: doc.data().first_name});
                  this.setState({lname5: doc.data().last_name});
                  this.setState({pronouns5:doc.data().pronouns});
                  this.setState({email5: doc.data().email5});

                }
                )
        }







      })

    // if(this.curr_email == null || this.curr_email == ""){
    //   //not logged in so send to sign in
    //   this.props.history.push('/sign_in');
    // }
  }

  incrementLinkClick(){
    const db = firebase.firestore();

    var today = new Date();
    //console.log(today)

    var date_created = today;
    var meeting_frequency_days = 7;

    db.collection("podInfo").doc("pod2").get().then((doc) => {
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

      // const db = firebase.firestore();
      const addReport = db.collection("podInfo").doc(this.curr_pod).collection("meetingHistory").doc("meeting_" + curr_week).set({
        [this.curr_email]: 1,
      });
  });
    //console.log(this.props.location.state.current_profile)
    // const db = firebase.firestore();

    //get the "a" variable from database
      }

  checkProgress(){
    const db = firebase.firestore();

    var date_created = new Date();
    var meeting_frequency_days = 7;

    db.collection("podInfo").doc("pod2").get().then((doc) => {
      this.setState({date_created: doc.data().date_created})
      this.setState({meeting_freq: doc.data().meeting_frequency_days})
      this.setState({num_members: doc.data().num_members})
      date_created = new Date(doc.data().date_created);
      meeting_frequency_days = doc.data().meeting_frequency_days;
    })
    .then(doc => {
      var today = new Date();

      var difference_in_time = today.getTime() - date_created.getTime();

      // To calculate the number of days between two dates
      var difference_in_days = difference_in_time / (1000 * 3600 * 24);

      var expected_meetings = difference_in_days / meeting_frequency_days
      console.log(meeting_frequency_days)
      var curr_week = Math.ceil(expected_meetings)

      this.state.array= new Array(curr_week);

      console.log(this.state.array)


      for (var j = 1; j < curr_week;j++) {
        console.log("j below first time")
        console.log(j)
        console.log(curr_week)
        console.log("loop")
        this.inside(j)
      }
  });
}

inside(j) {
  const db = firebase.firestore();
  const settings_ref = db.collection("podInfo").doc("pod2").collection("meetingHistory").doc("meeting_" + j);
        settings_ref.get()
        .then(snap =>{
          console.log("i below")
          console.log(j)

          const data = snap.data();
          var count = 0

          for (const key in data) {
              const value = data[key];

              count = count + 1
          }


          if (this.state.num_members != count) {
            //display sad plant
            this.state.array[j-1] = unhealthy_plant_img;
            console.log("sad")
          }
          else {
            //display happy plant
            this.state.array[j-1] = healthy_plant_img;
            console.log("happy")
          }

          console.log("hello")
          console.log(count)
          console.log("size below")
          console.log(this.state.array)
        })
}

  render() {
    var images = this.state.array.map(function(image) {
      return (<img src={image} rounded />);
     });
    return (
      <div className="Pod">
        <div className="container">
          <h1>your accountability pod</h1>
          <nav className="Platforms">
            <a onClick={this.incrementLinkClick}>Zoom</a>
            <a onClick={this.incrementLinkClick}>Google Sheets</a>
          </nav>
          <div className="profiles">
            <div className="icon">
              {this.state.fname1 != null && <img src={profile_img} alt="profile picture" />}
              {this.state.fname1 != null && <h2>{this.state.fname1} {this.state.lname1}</h2>}

              {/* <h2>{this.state.mem_dict.email1.fname} Person.lastname</h2> */}
              {this.state.fname1 != null && <h2>{this.state.pronouns1}</h2>}
            </div>
            <div className="icon">
              {this.state.fname2 != null && <img src={profile_img} alt="profile picture" />}
              {this.state.fname2 != null && <h2>{this.state.fname2} {this.state.lname2}</h2>}

              {/* <h2>{this.state.mem_dict.email1.fname} Person.lastname</h2> */}
              {this.state.fname2 != null && <h2>{this.state.pronouns2}</h2>}
            </div>
            <div className="icon">
              {this.state.fname3 != null && <img src={profile_img} alt="profile picture" />}
              {this.state.fname3 != null && <h2>{this.state.fname3} {this.state.lname3}</h2>}

              {/* <h2>{this.state.mem_dict.email1.fname} Person.lastname</h2> */}
              {this.state.fname3 != null && <h2>{this.state.pronouns1}</h2>}
            </div>
            <div className="icon">
              {this.state.fname4 != null && <img src={profile_img} alt="profile picture" />}
              {this.state.fname4 != null && <h2>{this.state.fname4} {this.state.lname4}</h2>}

              {/* <h2>{this.state.mem_dict.email1.fname} Person.lastname</h2> */}
              {this.state.fname4 != null && <h2>{this.state.pronouns1}</h2>}
            </div>
            <div className="icon">
              {this.state.fname5 != null && <img src={profile_img} alt="profile picture" />}
              {this.state.fname5 != null && <h2>{this.state.fname5} {this.state.lname5}</h2>}

              {/* <h2>{this.state.mem_dict.email1.fname} Person.lastname</h2> */}
              {this.state.fname5 != null && <h2>{this.state.pronouns5}</h2>}
            </div>
            </div>
          <hr />
          <div className="split">
            <div>
              <h2>pod info</h2>
              <h3>Meeting Frequency: </h3>
              <h3>Communication Preferences: </h3>
              <h3>Successful Pod Meetings: </h3>
              {images}
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
