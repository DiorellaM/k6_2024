import http from "k6/http";
import { sleep } from "k6";
import { baseUrl, generatePayload, params } from "../../config/config.js";
import { quickValidation } from "../../config/scenarios.js";
import { logResponse } from "../../support/helpers.js";

export const options = quickValidation;
let userRegisterRes;

export function userRegister() {
  const payload = generatePayload();
  const postUserRegister = `${baseUrl}user/register/`;

  userRegisterRes = http.post(postUserRegister, payload, params);
  logResponse(userRegisterRes);
  sleep(1);
}
