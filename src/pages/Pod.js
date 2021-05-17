import profile_img1 from "../media/profile_img1.png";
import profile_img2 from "../media/profile_img2.png";
import profile_img3 from "../media/profile_img3.png";
import profile_img4 from "../media/profile_img4.png";
import profile_img5 from "../media/profile_img5.png";

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
    this.routeZoom = this.routeZoom.bind(this);
    this.routeSheets = this.routeSheets.bind(this);
    this.routeProfile1 = this.routeProfile1.bind(this);
    this.routeProfile2 = this.routeProfile2.bind(this);
    this.routeProfile3 = this.routeProfile3.bind(this);
    this.routeProfile4 = this.routeProfile4.bind(this);
    this.routeProfile5 = this.routeProfile5.bind(this);

  }

  componentDidMount(){
    const db = firebase.firestore();
    this.checkProgress();

       this.curr_pod = localStorage.getItem('pod')
       console.log(this.curr_pod)
       db.collection("podInfo").doc(this.curr_pod).get().then((doc) => {
        //setting the state variable called "temp" to the variable in the doc with the name "a"
        var email = doc.data().member_of_the_week;
        db.collection("userInfo").doc(email).get().then((doc) => {
          console.log(email)
          this.setState({member_of_the_week: doc.data().first_name + " " + doc.data().last_name})
        })
        for  (var i = 0; i < doc.data().num_members; i++) {
          this.setState({email1: doc.data().user1});
          localStorage.setItem('email1', doc.data().user1)
          localStorage.setItem('profile_img1', profile_img1)

          db.collection("userInfo").doc(doc.data().user1).get().then((doc) => {
            this.setState({fname1: doc.data().first_name});
            this.setState({lname1: doc.data().last_name});
            this.setState({pronouns1:doc.data().pronouns});
            this.setState({email1: doc.data().user1});
            
          } 
          )
          i++;
  
          if (i == doc.data().num_members)
            break;
          localStorage.setItem('email2', doc.data().user2)
          localStorage.setItem('profile_img2', profile_img2)

          this.setState({email2: doc.data().user2});
          db.collection("userInfo").doc(doc.data().user2).get().then((doc) => {
            this.setState({fname2: doc.data().first_name});
            this.setState({lname2: doc.data().last_name});
            this.setState({pronouns2:doc.data().pronouns});
            this.setState({email2: doc.data().user2});
            
          } 
          )
          i++;
  
          if (i == doc.data().num_members)
            break;
            localStorage.setItem('email3', doc.data().user3)
            localStorage.setItem('profile_img3', profile_img3)

            this.setState({email3: doc.data().user3});
            db.collection("userInfo").doc(doc.data().user3).get().then((doc) => {
              this.setState({fname3: doc.data().first_name});
              this.setState({lname3: doc.data().last_name});
              this.setState({pronouns3:doc.data().pronouns});
              this.setState({email3: doc.data().user3});
              
            } 
            )
            i++;
    
            if (i == doc.data().num_members)
              break;
            console.log(i, doc.data().num_members)
            localStorage.setItem('email4', doc.data().user4)
            localStorage.setItem('profile_img4', profile_img4)

              this.setState({email4: doc.data().user4});
              db.collection("userInfo").doc(doc.data().user4).get().then((doc) => {
                this.setState({fname4: doc.data().first_name});
                this.setState({lname4: doc.data().last_name});
                this.setState({pronouns4:doc.data().pronouns});
                this.setState({email4: doc.data().user4});
                
              } 
              )
              i++;
      
              if (i == doc.data().num_members)
                break;
                localStorage.setItem('email5', doc.data().user5)
                localStorage.setItem('profile_img5', profile_img5)

                this.setState({email5: doc.data().user5});
                db.collection("userInfo").doc(doc.data().user5).get().then((doc) => {
                  this.setState({fname5: doc.data().first_name});
                  this.setState({lname5: doc.data().last_name});
                  this.setState({pronouns5:doc.data().pronouns});
                  this.setState({email5: doc.data().user5});
                  
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

    db.collection("podInfo").doc(localStorage.getItem('pod')).get().then((doc) => {
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

  routeSheets(){
    this.incrementLinkClick();
    const db = firebase.firestore();

    db.collection("podInfo").doc(localStorage.getItem('pod')).get().then((doc) => {
      this.setState({sheets: doc.data().sheets_link})
    })
    .then(doc => {
      localStorage.setItem('sheets_link', this.state.sheets)
      this.props.history.push('/loading_sheets');
    });

  }


  routeProfile1(){
      localStorage.setItem('other_profile', localStorage.getItem('email1'))
      localStorage.setItem('other_profile_img', localStorage.getItem('profile_img1'))

      this.props.history.push({
        pathname: '/profile',
       });
  }

  routeProfile2(){
    localStorage.setItem('other_profile', localStorage.getItem('email2'))
    localStorage.setItem('other_profile_img', localStorage.getItem('profile_img2'))

    this.props.history.push({
      pathname: '/profile',
     });
}

routeProfile3(){
  localStorage.setItem('other_profile', localStorage.getItem('email3'))
  localStorage.setItem('other_profile_img', localStorage.getItem('profile_img3'))

  this.props.history.push({
    pathname: '/profile',
   });
}

routeProfile4(){
  localStorage.setItem('other_profile', localStorage.getItem('email4'))
  localStorage.setItem('other_profile_img', localStorage.getItem('profile_img4'))

  this.props.history.push({
    pathname: '/profile',
   });
}

routeProfile5(){
  localStorage.setItem('other_profile', localStorage.getItem('email5'))
  localStorage.setItem('other_profile_img', localStorage.getItem('profile_img5'))

  this.props.history.push({
    pathname: '/profile',
   });
}


  routeZoom(){
    this.incrementLinkClick();
    const db = firebase.firestore();

    db.collection("podInfo").doc(localStorage.getItem('pod')).get().then((doc) => {
      this.setState({zoom: doc.data().zoom_link})
    })
    .then(doc => {
      localStorage.setItem('zoom_link', this.state.zoom)
      this.props.history.push('/loading_zoom');
    });
  }
  

  checkProgress(){
    const db = firebase.firestore();

    var date_created = new Date();
    var meeting_frequency_days = 7;

    db.collection("podInfo").doc(localStorage.getItem('pod')).get().then((doc) => {
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
      var curr_week = Math.ceil(expected_meetings)

      this.state.array= new Array(curr_week);
      
      for (var j = 1; j < curr_week;j++) {
        this.inside(j)
      }
  });
}

inside(j) {
  const db = firebase.firestore();
  const settings_ref = db.collection("podInfo").doc(localStorage.getItem('pod')).collection("meetingHistory").doc("meeting_" + j);
        settings_ref.get()
        .then(snap =>{
          const data = snap.data();
          var count = 0
          
          for (const key in data) {
              const value = data[key];

              count = count + 1
          }

          
          if (this.state.num_members != count) {
            //display sad plant
            this.state.array[j-1] = unhealthy_plant_img;
          }
          else {
            //display happy plant
            this.state.array[j-1] = healthy_plant_img;
          }
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
          <nav>
          <div onClick={this.routeZoom}>Zoom</div>
            <div onClick={this.routeSheets}>Google Sheets</div>
          </nav>
          <div className="profiles">
            <div onClick={this.routeProfile1} className="icon">
              {this.state.fname1 != null && <img    className="prof" src={profile_img1} alt="profile picture" />}
              {this.state.fname1 != null && <h2>{this.state.fname1} {this.state.lname1}</h2>}

              {/* <h2>{this.state.mem_dict.email1.fname} Person.lastname</h2> */}
              {this.state.fname1 != null && <h2>{this.state.pronouns1}</h2>}
            </div>
            <div onClick={this.routeProfile2} className="icon">
              {this.state.fname2 != null && <img  className="prof" src={profile_img2} alt="profile picture" />}
              {this.state.fname2 != null && <h2>{this.state.fname2} {this.state.lname2}</h2>}

              {/* <h2>{this.state.mem_dict.email1.fname} Person.lastname</h2> */}
              {this.state.fname2 != null && <h2>{this.state.pronouns2}</h2>}
            </div>
            <div onClick={this.routeProfile3} className="icon">
              {this.state.fname3 != null && <img  className="prof" src={profile_img3} alt="profile picture" />}
              {this.state.fname3 != null && <h2>{this.state.fname3} {this.state.lname3}</h2>}

              {/* <h2>{this.state.mem_dict.email1.fname} Person.lastname</h2> */}
              {this.state.fname3 != null && <h2>{this.state.pronouns1}</h2>}
            </div>
            <div onClick={this.routeProfile4} className="icon">
              {this.state.fname4 != null && <img  className="prof" src={profile_img4} alt="profile picture" />}
              {this.state.fname4 != null && <h2>{this.state.fname4} {this.state.lname4}</h2>}

              {/* <h2>{this.state.mem_dict.email1.fname} Person.lastname</h2> */}
              {this.state.fname4 != null && <h2>{this.state.pronouns1}</h2>}
            </div>
            <div onClick={this.routeProfile5} className="icon">
              {this.state.fname5 != null && <img  className="prof" src={profile_img5} alt="profile picture" />}
              {this.state.fname5 != null && <h2>{this.state.fname5} {this.state.lname5}</h2>}

              {/* <h2>{this.state.mem_dict.email1.fname} Person.lastname</h2> */}
              {this.state.fname5 != null && <h2>{this.state.pronouns5}</h2>}
            </div>
            </div>
          <hr />
          <div className="split">
            <div>
              <h2>pod info</h2>
              <h3>Meeting Preferences: </h3>
              <h3>Communication Preferences: </h3>
              <h3>Successful Pod Meetings: </h3>
              {images}
            </div>
            <div>
              <h2>Pod Member of the Week</h2>
              <img  className="prof" src={profile_img2} alt="profile picture" />
              <h3>congrats {this.state.member_of_the_week} your teammates think you rock! Keep it up</h3>
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
