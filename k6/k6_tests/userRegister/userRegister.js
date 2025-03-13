import http from "k6/http";
import { sleep, check } from "k6";
import { baseUrl, params } from "../../config/config.js";
import { generatePayload } from "../../testData/payloads.js";
import { oneHourValidation } from "../../config/constant-arrival-rate-options.js";
import { logResponse } from "../../support/helpers.js";

export const options = oneHourValidation;
let userRegisterRes;

export default function () {
  registerUser();
  sleep(1);
}

function registerUser() {
  const payload = generatePayload();
  const postUserRegister = `${baseUrl}user/register/`;

  userRegisterRes = http.post(postUserRegister, payload, params);
  logResponse(userRegisterRes);

  check(userRegisterRes, {
    "POST user/register/ status is 201": (r) => r.status === 201,
  });
}
