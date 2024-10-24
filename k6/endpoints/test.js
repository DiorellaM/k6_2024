import http from "k6/http";
import { baseUrl } from "../config/config.js";

export default function () {
  http.get(baseUrl);
}
