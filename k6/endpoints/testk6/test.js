import http from "k6/http";
import { sleep, check } from "k6";
import { baseUrl } from "../../config/config.js";
import { quickValidation } from "../../config/scenarios.js";
import { logResponse } from "../../support/helpers.js";

export const options = quickValidation;

export function testk6() {
  const getResponse = http.get(baseUrl);
  logResponse(getResponse);
  sleep(1);
}
