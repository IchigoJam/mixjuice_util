import { serveMixJuice } from "./serveMixJuice.js";

serveMixJuice((path, params, data) => {
  console.log("path", path, params, data);
  return "'" + path + " " + params + " " + data;
});
