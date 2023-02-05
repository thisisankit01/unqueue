import React, { useState } from "react";
import { handleChange } from "../utils/helper";
import Heading from "./Heading";
import InputField from "./InputField";
import ButtonCTA from "./ButtonCTA";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword , getAuth} from "firebase/auth";

export default function LoginPage() {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();



   async function signInUserWithEmailPass(email: string, password: string) {
    const auth = getAuth();
   await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      const isEmailVerified = user.emailVerified
      console.log(isEmailVerified);  
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode,errorMessage);
    });
    }



  return (
    <div className="flex flex-col items-center p-10">
      <Heading heading="Login" />
      <form
        className="flex flex-col space-y-4 py-10"
        onSubmit={async () => {
          try {
            let user = await signInUserWithEmailPass(
              loginForm.email,
              loginForm.password  
            );
            console.log(user);
            navigate("/dashboard");
          } catch (error) {
            console.error(error);
            alert(error.message);
          }
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
