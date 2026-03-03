import User from "./User";
import UserClass from "./UserClass";
const About = () => {
  return (
    <div>
      <h1>About Us</h1>
      <h2> This is Namaste React Web Series</h2>
      <User name={"Neha"} />
      <UserClass name={"Anwesha"} location={"Hyderabad"} />
    </div>
  );
};
export default About;
