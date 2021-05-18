import logo from '../logo.svg';
import React, { Component } from 'react';


class Guidelines extends Component{
  constructor(props){
    super(props);
    this.state={
    }
  }

  render(){
    return (
      <div className="Guidelines">
        <div className="section">
          <div className="container">
            <h1>Our community guidelines</h1>
            <p>
              First and foremost, we would like to make sure the On Track community is a safe, caring, and supportive space for all peoples, especially people who exist at the margins. We understand safety and wellbeing as collective responsibilities, so we ask all who wish to be members of this community to agree to and practice our community agreements, as listed below.
            </p>
            <p>
              The role of pod members is to support fellow users to achieve their goals in an affirming fashion. Harmful rhetoric, harassment, bullying and/or abuse in any form will not be tolerated by On Track. Should a user be found to have participated in any of these behaviors, they will be de-platformed. This means their account will be blocked and they will lose all pod privileges.
            </p>
          </div>
        </div>
        <div className="alt">
          <div className="container">
            <p>
              The safety and privacy of our users is a top priority at On Track. All personal data is stored in our secure database that can not be accessed by other users. If for whatever reason you would like to keep aspects of your profile related to your identity hidden from other users, please feel free to do so either upon creating your account and selecting to keep certain fields private or through contacting one of our admin members if your account has already been made. Note that the previous pod rating field cannot be hidden from profiles as this is a critical aspect to building accountability and mutual trust between users.
            </p>
            <p>
              Furthermore, if you know of any user that has broken one of On Track’s community norms, please report them via the report user functionality and one of our admin members will look into the issue. Your identity, should you choose to report a user, will remain anonymous to all users, including the reported user. Each and every one of us plays an important role in keeping this community safe and supportive so we thank you in advance for looking out for your fellow pod members!
            </p>
          </div>
        </div>
        <div className="section">
          <div className="container">
            <p>
              We recognize that all of us might be showing up to this space differently, from our physical contexts, to our current emotional states, to the experiences we bring with us. Especially with the ongoing pandemic, uprisings, and other overlapping crises, we want to reaffirm that however you are showing up is valid, and we’re glad to have you! In order to ensure that users get the most out of their experience with On Track, we do have certain expectations of our community members. We expect users to attend pod meetings and/or engage with their pod via the determined communication preferences. We know that things come up and you won't always be able to make it to your pod meetings. Life happens and that's ok! We just ask that you communicate with your other pod members as much as possible.
            </p>
          </div>
        </div>
        <div className="alt">
          <div className="container">
            <p>
              As our community grows and changes, we will continue to adapt our norms to best serve this community and will update these guidelines as such! Furthermore, if you have ideas about how to make our community here at On Track even better, please feel free to suggest ideas to our platform admin.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Guidelines;
