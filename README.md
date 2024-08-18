# mixjuice_util

service util for MixJuice / IchigoJam

## Usage

```js
import { serveMixJuice } from "https://ichigojam.github.io/mixjuice_util/serveMixJuice.js";

serveMixJuice((path, params, data) => {
  console.log("path", path, params, data)
  return "'" + path + " " + params + " " + data;
});

```sh
deno run -A echo.js 8080
```

open http://localhost:8080/

## Blog

- [blog](https://fukuno.jig.jp/4407)
