import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AvgWaitingTime from "./AvgWaitingTime";
import PeopleInQueue from "./PeopleInQueue";
import { auth } from "../data/Auth";
import { onAuthStateChanged } from "@firebase/auth";

export default function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user === null) {
        navigate("/");
      }
    });
  }, []);
  return (
    <div className="grid grid-cols-2 pt-10">
      <PeopleInQueue />
      <AvgWaitingTime />
    </div>
  );
}
