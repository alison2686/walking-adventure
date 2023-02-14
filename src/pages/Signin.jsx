import React from "react";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import naturePhone from "../assets/eg-img/test-avatar3.png";

const Signin = () => {
  return (
    <div className="h-[100%] bg-white text-black scroll-smooth">
      <NavBar />
      <div className="h-[30%] pb-[2%]">
        <h1 className="font-poppins text-3xl font-bold text-center pt-[4rem]">
          Sign up or sign in to your account <br /> coming soon!
        </h1>
        <div className="flex flex-col-reverse md:flex-row justify-content items-center">
          <p className="font-poppins pt-6 text-center px-2 md:text-left md:ml-4 md:px-4 md:w[50%] lg:text-xl lg:mx-[10rem] ">
            {" "}
            Strolls: A Walking Adventure is here to make walking fun and
            interactive. Our app pairs walking with the thrill of discovery and
            a deeper connection to our neighborhoods, leading to a happier,
            healthier community.{" "}
          </p>
          <img
            src={naturePhone}
            alt=""
            className="md:w-[50%] w-[90%] md:mr-4"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Signin;
