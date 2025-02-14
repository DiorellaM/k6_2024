import http from "k6/http";
import { sleep } from "k6";
import { baseUrl } from "../../config/config.js";
import { quickValidation } from "../../config/shared-iterations-options.js";
import { logResponse } from "../../support/helpers.js";

export const options = quickValidation;

export default async function () {
  const getResponse = http.get(baseUrl);
  logResponse(getResponse);
  sleep(1);
}
