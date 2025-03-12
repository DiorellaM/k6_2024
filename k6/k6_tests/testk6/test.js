import http from "k6/http";
import { sleep } from "k6";
import { baseUrl } from "../../config/config.js";
import { oneHourValidation } from "../../config/constant-arrival-rate-options.js";
import { logResponse } from "../../support/helpers.js";

export const options = oneHourValidation;

export default async function () {
  const getResponse = http.get(baseUrl);
  logResponse(getResponse);
  sleep(1);
}
