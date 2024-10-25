import http from "k6/http";
import { sleep } from "k6";
import { baseUrl, generatePayload, params } from "../config/config.js";

const payload = generatePayload();
let userRegisterRes;

export default function () {
  http.get(baseUrl);

  const postUserRegister = `${baseUrl}/user/register/`;
  userRegisterRes = http.post(postUserRegister, payload, params);

  sleep(1);
}
