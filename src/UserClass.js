import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo:{
        name :"Dummy",
        location:"dummy location",
        avatar_url :"avta"
      },
    };
  }

  async componentDidMount() {

   this.timer = setInterval(()=>
    {
      console.log("updtate every time")
    },1000)
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();
    console.log(json)
    this.setState(
        {
            userInfo:json,
        })
  }
  componentWillUnmount()
  {
    clearInterval(this.time)
    console.log("clered all meshh")
  }

  render() {
    
    const { name, location,avatar_url } = this.state.userInfo;
   

    return (
      <div className="usercard">
        <img src={avatar_url} alt="" />
        <h2>Name = {name}</h2>
        <h3>Location = {location}</h3>
        <h3>Email:Nikhilkumawat24120@gmail.com</h3>
      </div>
    );
  }
}
export default UserClass;
