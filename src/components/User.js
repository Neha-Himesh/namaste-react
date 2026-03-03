import React from "react";
import { useState } from "react";
const User = (props) => {
  const [count] = useState(0);
  const [count2] = useState(1);
  return (
    <div className="user-card">
      <h2>Name: {props.name}</h2>
      <h3>Location: Bangalore</h3>
      <h4>Contact: neha@example.com</h4>
      <h4> Count = {count}</h4>
      <h4> Count2 = {count2}</h4>
    </div>
  );
};

export default User;
