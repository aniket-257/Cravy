import UserContext from "../utils/UserContext";
import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor() {
    //! Always call super() first in constructors of class components.
    //! Even if you're not using this, React might internally.
    //! else don't write construtor if we have constructor then compulsory write
    // super()
    //? When?	When a class extends another using extends
    //?Why?	To correctly initialize this and inherit from the parent
    //! What if skipped?	Throws ReferenceError: Must call super constructor in derived class before accessing 'this'
    super();
    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent Component Did Mount?");
  }

  render() {
    console.log("Parent Render");
    return (
      <div className="about">
        <h1>About Page</h1>
        <UserContext.Consumer>
          {(contextData) => <h1>{contextData.loggedInUser}</h1>}
        </UserContext.Consumer>
        <h2>Building React Project 🚀</h2>
        <UserClass name="Aniket" location="Pune" contact="@ate32" />
      </div>
    );
  }
}

export default About;
