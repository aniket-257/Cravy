import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // this.state object is reserve for state variables
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Dummy Location",
      },
    };
    console.log(this.props.name + " Constructor");
  }

  async componentDidMount() {
    // this.timer = setInterval(() => {
    //   console.log("..............React OP.............");
    // this will run always (because react doesn't refresh browser)
    // need to clear inside componentWillUnmount
    // }, 1000);
    console.log(this.props.name + " Component Did Mount?");
    //API Call after render method
    //componentDidMount is not useEffect in functional component
    //we can say useEffect with [empty Dependency] is work similar to componentDidMount because it will call once after component render
    const data = await fetch(" https://api.github.com/users/anni-257");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.log(json);

    // it will wait to get data from API meanwhile parent componentDidMount method will execute
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Child component Did Update?");
    // if(this.state.count !== prevState.count || this.state.count2 !== prevState.count2){
    // work similar to useEffect with [count, count2] dependencies
    // }
    // if(this.state.count3 !== prevState.count3){
    // work similar to another useEffect with [count3] dependency
    // }
    //! It was a Pain to write if else condition in componentDidUpdate
  }

  componentWillUnmount() {
    console.log("Child component Will Unmount?");
    // clear our mess like setIntervals, settimeout etc
    // this will run in the background because our react is a SPA(Single Page Application)
    // explicitly we have to clear setIntervals
    clearInterval(this.timer);
  }
  render() {
    console.log(this.props.name + " Render");
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user">
        <img src={avatar_url} />
        <h3>Dev Name: {name}</h3>
        <h3>Location: {location}</h3>
        {/* <h3>Contact:{contact}</h3> */}
      </div>
    );
  }
}

export default UserClass;

//? ----Mounting----
//!Render Phase
// constructor (Dummy)
// render (Dummy)

//!Commit Phase
//<HTML Updated (Dummy)/>
//componentDidMount
// <API CALL/>
// <setState/> update state variable
// triggers update cycle

//? ----Update----
//! Render Phase
// render(updated data)
//!Commit Phase
//<HTML Updated (Updated data)/>
//componentDidUpdate
