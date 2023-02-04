import React, { useState } from "react";
import ButtonCTA from "./ButtonCTA";
import Heading from "./Heading";
import InputField from "./InputField";
import { handleChange } from "../utils/helper";
import { postQID } from "../utils/postForms";

export default function AvgWaitingTime() {
  const [QID, setQID] = useState({
    qidValue: "",
  });

  return (
    <div className="grid grid-cols justify-center ">
      <div className="flex flex-col justify-center">
        <Heading heading="Average Waiting Time" />
        <h2 className="text-2xl text-center text-gray-600">10 mins / person</h2>
      </div>

      <form className="pt-12 " onSubmit={(e) => postQID(e, QID)}>
        <InputField
          label="QID of the User *"
          input="QID"
          value={QID.qidValue}
          name="qidValue"
          onChange={() => handleChange(setQID)}
          type="text"
          minLength=""
          autoComplete=""
        />

        <ButtonCTA text="Add User" />

        <h2 className=" p-10 text-lg font-semibold text-center">Or</h2>

        <ButtonCTA text="Scan QR" />
      </form>
    </div>
  );
}
