"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("the button was clicked");

    try {
      const res = await fetch(
        process.env.NEXT_PUBLIC_BASE_URL + "/api/auth/sign-in",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
          credentials: "include",
        }
      );
      if (res.ok) {
        const token = await res.text(); // Extract token from response body
        console.log("Token:", token);

        // Set token in cookie if needed
        document.cookie = `access_token=${token}; Max-Age=86400; path=/`;
        console.log("Login successful");
        alert("Login successful");
        router.push("/");
      } else {
        alert("Login failed");
        console.log("Login failed");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f0e1] p-5">
      <div className="card border-2 py-5 rounded-lg bg-white flex flex-col items-center justify-content mx-auto md:max-w-4xl mx-w-2xl">
        <h1 className="card-header text-2xl font-bold my-3">Sign In</h1>
        <form className="card-body gap-5 my-5 flex flex-col" onSubmit={handleSubmit}>
          <div className="">
            <label>Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter Email"
              className="w-full mt-2 p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Enter Password"
              className="w-full mt-2 p-2 border border-gray-300 rounded-md"
            />
          </div>
          <button
            type="submit"
            className="my-3 bg-green-500 px-3 py-1 rounded text-white font-semibold active:bg-blue-300 focus:ring-2 ring-blue-700 transition duration-300 hover:scale-110 hover:ease-in-outn-75"
          >
            Login
          </button>
        </form>

        <div className="card-footer flex-col text-center justify-center">
          <p className="my-5">Don&apos;t have an account ?</p>
          <button className="bg-red-500 px-3 py-1 rounded text-white font-semibold active:bg-blue-300 focus:ring-2 ring-blue-700 transition duration-300 hover:scale-110  hover:ease-in-out" onClick={() => router.push("/signup")}>Sign Up</button>
        </div>
      </div>
    </div>
  );
}
