export function handleChange(setFunction: Function) {
  const { name, value } = event.target;
  setFunction((prev) => {
    return {
      ...prev,
      [name]: value,
    };
  });
}

export function findValidUser(
  data: object[],
  QID: object,
  setErrorMsg: Function
): object {
  let validUser = {};
  for (let i = 0; i < data.length; i++) {
    if (data[i].qid === QID.qidValue) {
      validUser = data[i];
      setErrorMsg("");
    }
  }
  return validUser;
}

export function addUserToQueue(
  setErrorMsg: Function,
  setPeopleInQueue: Function,
  validUser: object
) {
  if (!validUser.name) {
    setErrorMsg("Please enter a valid QID");
  } else {
    setPeopleInQueue((prev: object[]) => {
      return [...prev, validUser];
    });
  }
}

export function handleKeyDown() {
  if (event.keyCode === 13) {
    event.preventDefault();
  }
}

export const toggleShowAll = (showAll: boolean, setShowAll: Function) => {
  setShowAll(!showAll);
};
