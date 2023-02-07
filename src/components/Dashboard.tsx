import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AvgWaitingTime from "./AvgWaitingTime";
import PeopleInQueue from "./PeopleInQueue";
import { auth } from "../data/auth";
import { onAuthStateChanged } from "@firebase/auth";
import { fetchData } from "../data/fetchData";

export default function Dashboard() {
  const navigate = useNavigate();
  const [dataFromAPI, setDataFromAPI] = useState<object[]>([]);
  const [peopleInQueue, setPeopleInQueue] = useState<object[]>([]);
  console.log(dataFromAPI);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user === null) {
        navigate("/");
      }
    });

    fetchData(setDataFromAPI);
  }, []);

  return (
    <div className="grid grid-cols-2 pt-10">
      <PeopleInQueue peopleInQueue={peopleInQueue} />
      <AvgWaitingTime
        dataFromAPI={dataFromAPI}
        setPeopleInQueue={setPeopleInQueue}
        peopleInQueue={peopleInQueue}
      />
    </div>
  );
}

