import http from "k6/http";
import { sleep, check } from "k6";
import { baseUrl } from "../../config/config.js";
import { baselineOptions } from "../../config/scenarios.js";

export const options = baselineOptions;

export default function () {
  const getResponse = http.get(baseUrl);
  check(getResponse, {
    "status is 200": (r) => r.status === 200,
  });
  sleep(1);
}
