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
        <h3>Copy and paste the below link to go to your pod's google sheet</h3>
        <h3>{this.link}</h3>
      </div>
    );
  }
}

export default LoadingSheets;
