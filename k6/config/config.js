import { generateUniqueUsername } from "../support/testData.js";

export const baseUrl = "https://test-api.k6.io/";

export const generatePayload = () => {
  const username = generateUniqueUsername();
  const password = "test";

  return JSON.stringify({
    username: username,
    password: password,
  });
};

export const params = {
  headers: {
    "Content-Type": "application/json",
  },
};
