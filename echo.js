import { serveMixJuice } from "./serveMixJuice.js";

serveMixJuice((path, params, data) => {
  console.log("path", path, params, data)
  //return "'" + path + (data ? " " + new TextDecoder().decode(data) : "");
  return "'" + path + " " + params + " " + data;
});
