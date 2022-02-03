import React, { Component } from "react";
import PersonalInfo from "./PersonalInfo";

class Main extends Component {
  state = {
    // Step 1
    firstName: "",
    lastName: "",

    // Step 2
    jobTitle: "",
    jobCompany: "",
    jobLocation: ""
  };

  render() {
    return (
      <>
        <PersonalInfo />
      </>
    );
  }
}

export default Main;
