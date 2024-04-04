import React from "react";

class UserClass extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            userInfo : {
            name : "dummy",
            bio : "dummyRole",
            location : "Ballia",
            }
        }
    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/M-u-k-u-n-d");
        const json = await data.json();

        this.setState({
            userInfo:json,
        });
    }

    componentWillUnmount(){
        clearInterval(this.timer);
    }
    
    render(){
      const {name , bio , location, avatar_url} = this.state.userInfo;
        return (
            <div className="">
            <img className="w-full h-auto object-cover rounded-lg mb-3"src={avatar_url} alt="avatar"/>
            <h2 className="font-serif"><span className="font-semibold">Name</span> :  {name} </h2>
            <h5 className="font-serif"><span className="font-semibold">Role</span> : {bio}</h5>
            <h6 className="font-serif"><span className="font-semibold">City</span> : {location}</h6>
            </div>
        );
    }
}
    export default UserClass;