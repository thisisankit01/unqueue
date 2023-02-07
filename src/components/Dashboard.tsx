import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AvgWaitingTime from "./AvgWaitingTime";
import PeopleInQueue from "./PeopleInQueue";
import { auth } from "../data/auth";
import { onAuthStateChanged } from "@firebase/auth";

export default function Dashboard() {
  const navigate = useNavigate();
  const [dataFromAPI, setDataFromAPI] = useState<object[]>([]);
  const [peopleInQueue, setPeopleInQueue] = useState<object[]>([]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user === null) {
        navigate("/");
      }
    });

    //this data will be fetched from the api
    let dataFetched: object[] = [
      { name: "Yash Garg", qid: "HOS1234" },
      { name: "Ankit Pandey", qid: "HOS1235" },
      { name: "Aman Kumar", qid: "HOS1236" },
      { name: "Shauryam Saxena", qid: "HOS1237" },
      { name: "Shauryam Saxena", qid: "HOS1238" },
      { name: "Shauryam Saxena", qid: "HOS1239" },
      { name: "Shauryam Saxena", qid: "HOS1240" },
      { name: "Shauryam Saxena", qid: "HOS1242" },
    ];
    // here write the logic for crud firebase
    //ps: this is a dummy data

    setDataFromAPI(dataFetched);
  }, []);

  return (
    <div className="grid grid-cols-2 pt-10">
      <PeopleInQueue peopleInQueue={peopleInQueue} />
      <AvgWaitingTime
        dataFromAPI={dataFromAPI}
        setPeopleInQueue={setPeopleInQueue}
      />
    </div>
  );
}

