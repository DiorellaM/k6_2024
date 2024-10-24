export const baseUrl = "https://test.k6.io";

export const generatePayload = () => {
  const name = "nombre";
  const alias = "alias";

  return JSON.stringify({
    name: name,
    alias: alias,
  });
};

export const params = {
  headers: {
    "Content-Type": "application/json",
  },
};
