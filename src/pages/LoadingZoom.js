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
        <h3>Click the link that appears below to go your pod's Zoom meeting</h3>
        <a href={this.link}>{this.link}</a>
      </div>
    );
  }
}

export default LoadingZoom;
