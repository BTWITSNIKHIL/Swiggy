import { useState } from "react";

const User = ({name}) => {
  const [count1] = useState(0)
  const [count2] = useState(1)

  return(

  <div className="usercard">
    <h1>Count1 : {count1}</h1>
    <h1>Count2 : {count2}</h1>

    <h2>Name : {name}</h2>
    <h3>Location: Sikar</h3>
    <h3>Email:Nikhilkumawat24120@gmail.com</h3>
  </div>
  )
};
export default User;
