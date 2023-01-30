import React from "react";
import Logo from "../images/logo unqueue.svg";

export default function Navbar() {
  return (
    <nav className="flex justify-center p-3 border border-b-gray-200	">
      <img src={Logo} className="w-10 " />
      <h1 className="font-bold text-2xl px-3">UnQueue</h1>
    </nav>
  );
}
