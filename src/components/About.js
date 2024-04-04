import React from "react";
import UserClass from "./UserClass";
import User from "./User";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="flex justify-center items-center bg-gray-900 mt-20 pb-20">
        <div className=" bg-sky-100  w-[25vw] rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105">
          <div className="w-[24vw] m-auto mt-[7px]">
            <UserClass
              name={"Mukund"}
              role={"Frontend Developer and Competitive Programmer"}
            />
          </div>
          <div className="w-[24vw] m-auto mt-[7px]">
            <User
              name={"Mukund"}
              role={"Frontend Developer and Competitive Programmer"}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default About;
