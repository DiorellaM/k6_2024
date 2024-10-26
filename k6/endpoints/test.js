import http from "k6/http";
import { sleep, check } from "k6";
import { baseUrl, generatePayload, params } from "../config/config.js";
import { baselineOptions } from "../config/scenarios.js";

export const options = baselineOptions;
const payload = generatePayload();
let userRegisterRes;

export default function () {
  const getResponse = http.get(baseUrl);
  sleep(1);

  const postUserRegister = `${baseUrl}/user/register/`;

  userRegisterRes = http.post(postUserRegister, payload, params);
  check(getResponse, {
    "status is 200": (r) => r.status === 200,
  });
}
