import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      parentCount: 0,
    };
    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent Component Did Mount?");
  }

  render() {
    console.log("Parent Render");
    return (
      <div className="about">
        <h1>Parent Count: {this.state.parentCount}</h1>
        <button
          onClick={() => {
            this.setState({
              parentCount: this.state.parentCount + 1,
            });
          }}
        >
          Increase Parent Count
        </button>
        <h1>About Page</h1>
        <h2>Building React Project 🚀</h2>
        <UserClass
          name="Aniket Tarale (Functional Component)"
          location="Pune"
          contact="@ate32"
        />
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div className="about">
//       <h1>About Page</h1>
//       <h2>Building React Project 🚀</h2>
//       <User
//         name="Aniket Tarale (Functional Component)"
//         location="Pune"
//         contact="@ate32"
//       />
//       <UserClass
//         name="Shrutika Donde (Class Based Components)"
//         location="Nashik"
//         contact="@keshu3012"
//       />
//     </div>
//   );
// };

export default About;
