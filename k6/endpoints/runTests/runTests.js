import test from "../testk6/test.js";
import userRegister from "../userRegister/userRegister.js";
import { quickValidation } from "../../config/shared-iterations-options.js";

export const options = quickValidation;

export default function () {
  userRegister();
  test();
}
