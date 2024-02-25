import React from "react";

export default function Signup(){
  return (
    <>
      <div className="flex flex-col items-center justify-content bg-blue-100 mx-auto md:max-w-4xl mx-w-2xl">
        <h1 className="text-2xl font-semibold ">Sign Up</h1>
        <form className="flex flex-col" action="">
          <label >First Name</label>
          <input type="text" id="firstName" placeholder="Enter Your First Name" />
          <label >Last Name</label>
          <input type="text" id="firstName" placeholder="Enter your last name" />
          <label >Email Address</label>
          <input type="email" id="email" placeholder="Enter your email adderss" />
        </form>
      </div>
    </>
  );
};
