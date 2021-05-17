import logo from '../logo.svg';
import React, { Component } from 'react';


class LoadingSheets extends Component{
  constructor(props){
    super(props);
    this.state={
    }
    this.link = localStorage.getItem('sheets_link');
  }

  render(){
    return (
      <div className="Sheets">
        <h3>Click the link that appears below to go to your pod's google sheet</h3>
        <a href={this.link}>{this.link}</a>

      </div>
    );
  }
}

export default LoadingSheets;
