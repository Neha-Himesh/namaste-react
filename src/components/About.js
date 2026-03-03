import User from "./User";
import UserClass from "./UserClass";
import React from "react";
class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent constructor called");
  }
  componentDidMount() {
    console.log("Parent Component Mounted");
  }
  render() {
    console.log("Parent Component Rendered");
    return (
      <div>
        <h1>About Us</h1>
        <h2> This is Namaste React Web Series</h2>
        <User name={"Neha"} />
        <UserClass name={"Anwesha"} location={"Hyderabad"} />
      </div>
    );
  }
}
export default About;
// const About = () => {
//   return (
//     <div>
//       <h1>About Us</h1>
//       <h2> This is Namaste React Web Series</h2>
//       <User name={"Neha"} />
//       <UserClass name={"Anwesha"} location={"Hyderabad"} />
//     </div>
//   );
// };
// export default About;
