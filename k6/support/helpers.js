import http from "k6/http";
import { baseUrl, params } from "../config/config.js";
import { loginPayload } from "../testData/payloads.js";

export function logResponse(response) {
  if (
    (response.status !== 200 &&
      response.status !== 201 &&
      response.status !== 204) ||
    response.timings.duration > 2000
  ) {
    console.error(
      `Status: ${response.status}, Response time: ${response.timings.duration}ms, Body: ${response.body}`
    );
  }
}

export function getAuthToken() {
  const getTokenUrl = `${baseUrl}auth/token/login/`;
  let loginRes = http.post(getTokenUrl, loginPayload, params);

  if (loginRes.status !== 200) {
    console.log(`❌ Login failed: ${loginRes.status} - ${loginRes.body}`);
    return null;
  }
  let token = JSON.parse(loginRes.body).access;
  return token;
}
