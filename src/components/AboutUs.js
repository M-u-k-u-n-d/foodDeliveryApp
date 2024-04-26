import { useEffect, useState } from "react";
import AboutUsShimmer from "../Shimmer/AboutUsShimmer";

const AboutUs = () => {
  const [personalInfo, setPersonalInfo] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const url = "https://api.github.com/users/M-u-k-u-n-d";
    let data = await fetch(url);
    let json = await data?.json();
    console.log("json = ", json);
    setPersonalInfo(json);
  };
  const {name , bio , location, avatar_url} = personalInfo;
  console.log(name);
  return personalInfo.length == 0 ? (
    <AboutUsShimmer />
  ) : (
    <div className="mt-10 mb-16 flex items-center justify-center box-border">
    <div className="flex items-center flex-col lg:w-[30vw]  xsm:w-[92vw]  md:w-[45vw]
    rounded-md shadow-lg transition-transform duration-300 transform hover:scale-105 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white">
    <img className="lg:w-[30vw] h-[50vh] xsm:w-[92vw] md:w-[45vw]  rounded-md" 
    src={personalInfo?.avatar_url} alt="card-img"></img>
    <div className="mt-8 lg:w-[28vw] xsm:w-[78vw] p-2 md:w-[43vw]">
      <p className="">
      <h1 className="font-bold text-4xl mb-2 font-mono">Welcome to my corner of the web! </h1>
      <h2 className="font-semibold text-2xl mb-2 font-sans">I'm {name},a {bio} </h2>
      <h3 className="font-serif text-xl">Dive into my world where I've whipped up a flavorful food ordering app using React.</h3>
      </p>
    </div>
    </div>
    </div>
  );
};

export default AboutUs;
