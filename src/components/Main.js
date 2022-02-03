import React, { Component } from "react";
import PersonalInfo from "./PersonalInfo";

class Main extends Component {
  state = {
    step: 1,
    // Step 1
    firstName: "",
    lastName: "",

    // Step 2
    jobTitle: "",
    jobCompany: "",
    jobLocation: ""
  };

  nextStep = () => {
    const { step } = this.state;

    this.setState({
      step: step + 1
    });
  };

  prevStep = () => {
    const { step } = this.state;

    this.setState({
      step: step - 1
    });
  };

  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  showStep = () => {
    const { step } = this.state;
    if (step === 1) return <PersonalInfo />;
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
