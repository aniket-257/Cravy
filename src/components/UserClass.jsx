import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // this.state object is reserve for state variables
    this.state = {
      count: 0,
    };
    console.log(this.props.name + " Constructor");
  }

  componentDidMount() {
    console.log(this.props.name + " Component Did Mount?");
    //API Call after render method
  }
  render() {
    console.log(this.props.name + " Render");
    const { name, location, contact } = this.props;
    return (
      <div className="user">
        <h1>{this.state.count}</h1>
        <button
          onClick={() => {
            //! Never update state variable like this
            //? this.state.count = this.state.count + 1; //! this will not work
            //! this.setState({stateVariables:updatedValues}) is used to update value on UI, only given states will update and another will be untouched
            this.setState({
              count: this.state.count + 1,
              //count2: this.state.count2+1
            });
          }}
        >
          Count Increase
        </button>
        <h3>Dev Name: {name}</h3>
        <h3>Location: {location}</h3>
        <h3>Contact:{contact}</h3>
      </div>
    );
  }
}

export default UserClass;
