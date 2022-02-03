import React, { Component } from "react";

class PersonalInfo extends Component {
  render() {
    return (
      <>
        <h2>Enter your personal information</h2>
        <label>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            onChange={handleChange("firstName")}
          />
        </label>
      </>
    );
  }
}

export default PersonalInfo;
