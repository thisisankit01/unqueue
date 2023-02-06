import React, { useState } from "react";
import Heading from "./Heading";
import { toggleShowAll } from "../utils/helper";

export default function PeopleInQueue({ peopleInQueue }) {
  // console.log(`People in q - ${props}`);
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="grid grid-cols justify-center overflow-scroll">
      <Heading heading="People In Queue" />
      {(showAll ? peopleInQueue : peopleInQueue.slice(0, 3)).map(
        (user: { name: ""; qid: "" }, index: number) => {
          return (
            <div
              className=" flex flex-row border p-4 h-14 justify-center rounded-md bg-gray-50 "
              key={index}
            >
              <span className=" text-xl font-medium ">
                {user.name} - {user.qid}
              </span>
            </div>
          );
        }
      )}
      {peopleInQueue.length > 3 && (
        <button>
          <div
            className=" flex flex-row border p-4 h-14 justify-center rounded-md hover:bg-sky-400 bg-sky-500 text-white"
            onClick={() => toggleShowAll(showAll, setShowAll)}
          >
            <span className=" text-xl font-medium hover:cursor-pointer">
              {showAll
                ? `Hide all ${peopleInQueue.length}`
                : `+${peopleInQueue.length - 3} other${
                    peopleInQueue.length - 3 > 1 ? "s" : ""
                  }`}
            </span>
          </div>
        </button>
      )}
    </div>
  );
}
