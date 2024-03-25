"use client";
import React, { useState } from "react";
import { redirect } from "next/navigation";

export default function Signup() {
  const [formData, setFormData] = useState<{
    firstName?: string;
    lastName?: string;
    email?: string;
    password?: string;
  }>({ firstName: "", lastName: "", email: "", password: "" });

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
      const data = await res.json();
      console.log(data);
      //redirect("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-content bg-blue-100 mx-auto md:max-w-4xl mx-w-2xl">
        <h1 className="text-2xl font-semibold ">Sign Up</h1>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <label>First Name</label>
          <input
            type="text"
            id="firstName"
            className="w-full p-2 border border-gray-300"
            placeholder="Enter Your First Name"
            onChange={handleChange}
          />
          <label>Last Name</label>
          <input
            type="text"
            id="lastName"
            placeholder="Enter your last name"
            className="w-full p-2 border border-gray-300"
            onChange={handleChange}
          />
          <label>Email Address</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email adderss"
            className="w-full p-2 border border-gray-300"
            onChange={handleChange}
          />
          <label>Password</label>
          <input
            type="password"
            id="password"
            placeholder="Create your password"
            className="w-full p-2 border border-gray-300"
            onChange={handleChange}
          />
          <button
            type="submit"
            className="border border-green-300 text-black bg-white mt-3 border-rounded"
          >
            Sign Up
          </button>
        </form>
      </div>
      <div className="flex gap-4 self-center">
        <p>Alerady have an account ?</p>
        <button>Sign In</button>
      </div>
    </div>
  );
}
