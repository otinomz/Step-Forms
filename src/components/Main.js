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

  showStep = () => {
    const { step } = this.state;
    if (step === 1) {
      <PersonalInfo />;
    }
  };

  render() {
    const { step } = this.state;
    return (
      <>
        <h2> Step {step} of 3.</h2>
        {this.showStep}
      </>
    );
  }
}

export default Main;
