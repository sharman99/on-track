import React, { Component } from 'react';
import profile_img from "../media/profile_img.png";
import Profiles from "../media/profiles.json";
import Navbar from "../components/navbar.jsx";

class Pod extends Component{
  constructor(props){
    super(props);
    this.state={

    }
  }

  render() {
    return (
      <div className="Pod">
        <div className="container">
          <h1>your accountability pod</h1>
          <nav className="Platforms">
            <a>Zoom</a>
            <a>Google Sheets</a>
          </nav>
          <div className="profiles">
            <div className="icon You">
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
