"use client";
import React, { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
        const data = await res.text();
        console.log(data); // This will log "Login Successful" as plain text
        document.cookie = 'access_token = ${data}; path=/; SameSite=None; Secure';
      } else {
        console.log("Login failed");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="mx-auto text-center">
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <div className="">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            className="w-auto border rounded border-blue-500"
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            className="w-auto border rounded border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="border rounded border-black mt-3 w-auto text-blue-700 font-bold text-2xl"
        >
          Login
        </button>
      </form>
    </div>
  );
}
