import http from "k6/http";
import { sleep, group } from "k6";
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
  let crocodileId = null;

  group("GET", function () {
    const getMyCrocodiles = `${baseUrl}my/crocodiles/`;

    let myCrocodilesRes = http.get(getMyCrocodiles, getPrivateHeaders(token));
    logResponse(myCrocodilesRes);

    crocodileId = myCrocodilesRes.body
      ? JSON.parse(myCrocodilesRes.body)[0].id
      : null;
  });

  group("POST", function () {
    const postMyCrocodileUrl = `${baseUrl}my/crocodiles/`;

    let postRes = http.post(
      postMyCrocodileUrl,
      crocodilePayload,
      getPrivateHeaders(token)
    );

    logResponse(postRes);
  });

  group("PUT", function () {
    const updateCrocodileUrl = `${baseUrl}my/crocodiles/${crocodileId}`;

    let crocodilePutRes = http.put(
      updateCrocodileUrl,
      updatedCrocodilePayload,
      getPrivateHeaders(token)
    );

    logResponse(crocodilePutRes);
  });
  group("DELETE", function () {
    if (crocodileId) {
      const deleteCrocodileUrl = `${baseUrl}my/crocodiles/${crocodileId}/`;
      let deleteRes = http.del(
        deleteCrocodileUrl,
        null,
        getPrivateHeaders(token)
      );
      logResponse(deleteRes);
    }
  });
  sleep(1);
}
