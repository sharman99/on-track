import logo from '../logo.svg';
import React, { Component } from 'react';


class LoadingZoom extends Component{
  constructor(props){
    super(props);
    this.state={
    }
    this.link = localStorage.getItem('zoom_link');
    console.log(this.link)
  }
  
  render(){
    return (
      <div className="Zoom">
        <h3>Copy and paste the below link to go your pod's Zoom meeting</h3>
        <h3>{this.link}</h3>
      </div>
    );
  }
}

export default LoadingZoom;
