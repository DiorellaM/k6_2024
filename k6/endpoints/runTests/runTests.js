import { quickValidation } from "../../config/scenarios.js";
import { userRegister } from "../userRegister/userRegister.js";
import { testk6 } from "../testk6/test.js";

export const options = quickValidation;

export default function () {
  userRegister();
  testk6();
}
