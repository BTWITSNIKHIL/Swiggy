import React from "react";
import UserClass from "../UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}
  render() {
    return (
      <div className="a">
        <h2>Class function</h2>
        <h1>About page</h1>
        <h2>This is about page</h2>
        <UserClass name={"Nikhil Kumawat "} location={"Sikar"} />
      </div>
    );
  }
}

export default About;
