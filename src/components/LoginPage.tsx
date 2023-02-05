import React, { useState } from "react";
import { handleChange } from "../utils/helper";
import Heading from "./Heading";
import InputField from "./InputField";
import ButtonCTA from "./ButtonCTA";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";

export default function LoginPage() {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const auth = getAuth();

  return (
    <div className="flex flex-col items-center p-10">
      <Heading heading="Login" />
      <form
        className="flex flex-col space-y-4 py-10"
        method="POST"
        onSubmit={async () => {
          await signInWithEmailAndPassword(
            auth,
            loginForm.email,
            loginForm.password
          )
            .then((userCredential) => {
              console.log("called ");
              const user = userCredential.user;
              console.log(user);
              navigate("/dashboard");
              return user;
            })
            .catch((error) => {
              alert("Please check your email id or password");
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log(errorMessage, errorCode);
            });
        }}
      >
        <InputField
          label="Email ID *"
          input="Email ID (as registered) *"
          value={loginForm.email}
          onChange={() => handleChange(setLoginForm)}
          name="email"
          type="email"
          minLength=""
          autoComplete="email-id"
        />

        <InputField
          label="Password *"
          input="********"
          value={loginForm.password}
          onChange={() => handleChange(setLoginForm)}
          name="password"
          type="password"
          minLength="8"
          autoComplete="password"
        />

        <ButtonCTA text="Login" />
      </form>

      <h1 className="pb-8 font-semibold text-3xl text-gray-500">or</h1>

      <a>
        <button
          onClick={() => navigate("/domains")}
          className="px-48 py-5 rounded-md text-white font-semibold primary-color text-center hover:bg-sky-500 active:bg-sky-600"
        >
          Sign Up
        </button>
      </a>
    </div>
  );
}