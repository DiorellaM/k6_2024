export const baseUrl = "https://test-api.k6.io/";

export const params = {
  headers: {
    "Content-Type": "application/json",
  },
};

export function getPrivateHeaders(token) {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };
}
