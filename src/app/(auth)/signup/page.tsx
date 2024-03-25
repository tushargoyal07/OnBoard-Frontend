"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function Signup() {
  const [formData, setFormData] = useState<{
    firstname?: string;
    lastname?: string;
    email?: string;
    password?: string;
  }>({ firstname: "", lastname: "", email: "", password: "" });

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      console.log(formData);
      const res = await fetch(
        process.env.NEXT_PUBLIC_BASE_URL + "/api/auth/sign-up",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      if (res.ok) {
        const data = await res.text();
        router.push("/login");
        console.log(data);
      } else {
        console.log("Sign up failed");
      }

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f0e1] p-5">
        <div className="card border-2 py-5 rounded-lg bg-white flex flex-col items-center justify-content mx-auto md:max-w-4xl mx-w-2xl">
          <h1 className="card-header text-2xl font-bold my-3">Sign Up</h1>
          <form className="card-body gap-5 my-5 flex flex-col" onSubmit={handleSubmit}>
            <div >
              <label className="">First Name</label>
              <input
                type="text"
                id="firstname"
                className="w-full mt-2 p-2 border border-gray-300 rounded-md"
                placeholder="Enter First Name"
                onChange={handleChange}
              />
            </div>
            <div >
              <label>Last Name</label>
              <input
                type="text"
                id="lastname"
                placeholder="Enter Last Name"
                className="w-full mt-2 p-2 border border-gray-300 rounded-md"
                onChange={handleChange}
              />
            </div>
            <div >
              <label>Email Address</label>
              <input
                type="email"
                id="email"
                placeholder="Enter Email Adderss"
                className="w-full mt-2 p-2 border border-gray-300 rounded-md"
                onChange={handleChange}
              />
            </div>
            <div >
              <label>Password</label>
              <input
                type="password"
                id="password"
                placeholder="Create Password"
                className="w-full mt-2 p-2 border border-gray-300 rounded-md"
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              className="my-3 bg-green-500 px-3 py-1 rounded text-white font-semibold active:bg-blue-300 focus:ring-2 ring-blue-700 transition duration-300 hover:scale-110 hover:ease-in-outn-75"
            >
              Sign Up
            </button>
          </form>
          <div className="card-footer flex-col text-center justify-center">
            <p className=" my-5 ">Alerady have an account ?</p>
            <button className="bg-red-500 px-3 py-1 rounded text-white font-semibold active:bg-blue-300 focus:ring-2 ring-blue-700 transition duration-300 hover:scale-110  hover:ease-in-out" onClick={() => router.push("/login")}>Sign In</button>
          </div>
        </div>
      
    </div>
  );
}
