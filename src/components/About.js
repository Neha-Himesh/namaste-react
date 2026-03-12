import UserContext from "../utils/userContext";
import User from "./User";
import UserClass from "./UserClass";
import React from "react";
class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userJson: {
        name: "Dummy Name",
        location: "Dummy Location",
      },
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/neha-himesh");
    const json = await data.json();
    console.log(json);
    console.log(data);
    this.setState({
      userJson: json,
    });
    this.timer = setInterval(() => {
      console.log("Interval called");
    }, 1000);
  }
  componentDidUpdate() {
    console.log("Component Updated");
  }
  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("Interval cleared");
    console.log("Component Unmounted");
  }
  render() {
    const { name, location, avatar_url } = this.state.userJson;
    return (
      <div className="user-card">
        <h1>About Us</h1>
        <h2> This is Namaste React Web Series</h2>
        <img src={avatar_url} alt="User Avatar" width="200" />
        <p>Name: {name}</p>
        <p>Location: {location}</p>
        {/* <User name={"Neha"} /> */}
        <div>
          Logged in User :
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="text-xl font-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
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
