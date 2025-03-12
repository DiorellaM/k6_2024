import { generateUniqueUsername } from "../testData/testData.js";

export const generatePayload = () => {
  const username = generateUniqueUsername();
  const password = "test";

  return JSON.stringify({
    username: username,
    password: password,
  });
};

export const payload = () => {
  const username = "pruebitaa1132025";
  const password = "Test.123!";

  return JSON.stringify({
    username: username,
    password: password,
  });
};

export let loginPayload = JSON.stringify({
  username: "pruebitaa1132025", // Replace with your credentials
  password: "Test.123!", // Replace with your credentials
});

export const crocodilePayload = JSON.stringify({
  name: "TestCrocodile",
  sex: "M",
  date_of_birth: "2015-12-13",
});

export const updatedCrocodilePayload = JSON.stringify({
  name: "TestCrocodile",
  sex: "F",
  date_of_birth: "2015-12-13",
});
