import http from "k6/http";
import { sleep, group, check } from "k6";
import { logResponse } from "../../support/helpers.js";
import { getAuthToken } from "../../support/helpers.js";
import {
  crocodilePayload,
  updatedCrocodilePayload,
} from "../../testData/payloads.js";
import { baseUrl, getPrivateHeaders } from "../../config/config.js";
import { oneHourValidation } from "../../config/constant-arrival-rate-options.js";

export const options = oneHourValidation;

export default function () {
  let token = getAuthToken();
  let crocodileId = getCrocodileId(token);

  group("POST", function () {
    createCrocodile(token);
  });

  group("PUT", function () {
    if (crocodileId) {
      updateCrocodile(token, crocodileId);
    }
  });

  group("DELETE", function () {
    if (crocodileId) {
      deleteCrocodile(token, crocodileId);
    }
  });

  sleep(1);
}

function getCrocodileId(token) {
  const getMyCrocodiles = `${baseUrl}my/crocodiles/`;
  let myCrocodilesRes = http.get(getMyCrocodiles, getPrivateHeaders(token));
  logResponse(myCrocodilesRes);

  check(myCrocodilesRes, {
    "GET my/crocodiles/ status is 200": (r) => r.status === 200,
  });

  try {
    return myCrocodilesRes.json()[0].id;
  } catch (e) {
    console.error("Failed to parse response body:", e);
    return null;
  }
}

function createCrocodile(token) {
  const postMyCrocodileUrl = `${baseUrl}my/crocodiles/`;
  let postRes = http.post(
    postMyCrocodileUrl,
    crocodilePayload,
    getPrivateHeaders(token)
  );
  logResponse(postRes);

  check(postRes, {
    "POST my/crocodiles/ status is 201": (r) => r.status === 201,
  });
}

function updateCrocodile(token, crocodileId) {
  const updateCrocodileUrl = `${baseUrl}my/crocodiles/${crocodileId}`;
  let crocodilePutRes = http.put(
    updateCrocodileUrl,
    updatedCrocodilePayload,
    getPrivateHeaders(token)
  );
  logResponse(crocodilePutRes);

  check(crocodilePutRes, {
    "PUT my/crocodiles/ status is 200": (r) => r.status === 200,
  });
}

function deleteCrocodile(token, crocodileId) {
  const deleteCrocodileUrl = `${baseUrl}my/crocodiles/${crocodileId}/`;
  let deleteRes = http.del(deleteCrocodileUrl, null, getPrivateHeaders(token));
  logResponse(deleteRes);

  check(deleteRes, {
    "DELETE my/crocodiles/ status is 204": (r) => r.status === 204,
  });
}
