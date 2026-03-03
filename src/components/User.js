import React from "react";
import UserClass from "./UserClass.js";
// import { useState } from "react";
// const User = (props) => {
//   const [count, setCount] = useState(0);
//   const [count2, setCount2] = useState(1);
//   return (
{
  /* <div className="user-card">
  <h2>Name: {props.name}</h2>
  <h3>Location: Bangalore</h3>
  <h4>Contact: neha@example.com</h4>
  <h4> Count = {count}</h4>
  <h4> Count2 = {count2}</h4>
</div>; */
}
//   );
// };
class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 2,
    };
    console.log("Parent constructor called");
  }
  componentDidMount() {
    console.log("Parent Component Mounted");
  }
  render() {
    console.log("Parent Component Rendered");
    return (
      <div className="user-card">
        <h2>Name: {this.props.name}</h2>
        <h3>Location: Bangalore</h3>
        <h4>Contact: neha@example.com</h4>
        <h4> Count = {this.state.count}</h4>
        <h4> Count2 = {this.state.count2}</h4>
        <UserClass name={"Anwesha"} location={"Hyderabad"} />
      </div>
    );
  }
}

export default User;
