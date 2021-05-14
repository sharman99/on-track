import React, { Component } from 'react';
import MyProfile from "../media/profile.json";
import Profiles from "../media/profiles.json";

class Pod extends Component{
  constructor(props){
    super(props);
    this.state={

    }
  }

  render() {
    var icons = []
    /*
    icons.push(
      <div className="icon">
        <img src={profile_img} alt="profile picture" />
        <h2>{Person.firstname} {Person.lastname}</h2>
        <h2>({Person.pronouns})</h2>
      </div>
    );
    for (let i = 0; i++; i < Object.keys(Profiles).length) {
      icons.push(
        <div className="icon">
          <img src={profile_img} alt="profile picture" />
          <h2>{Person.firstname} {Person.lastname}</h2>
          <h2>({Person.pronouns})</h2>
        </div>
      );
    }
    */
    return (
      <div className="Pod">
        <h1>your accountability pod</h1>
      </div>
    );
  }
}

export default Pod;
