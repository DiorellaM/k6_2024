export const baseUrl = "https://test-api.k6.io/";

export const generatePayload = () => {
  const username = "testk6";
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
