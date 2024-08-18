const port = Deno.args[0] || 7001;
const hostname = "[::]"; // for IPv6
//const hostname = "localhost"; // for IPv4

const options = {
  port,
  hostname,
};

const resError = (s) => {
  const bin = new TextEncoder().encode(s);
  return new Response(bin, {
    status: 400,
    statusText: "err",
    headers: [
      ["Access-Control-Allow-Origin", "*"],
      ["Content-Length", bin.length],
      ["Content-Type", "text/plain"],
    ],
  });
};

export const serveMixJuice = (callback) => { // callback(path, data)
  Deno.serve(options, async (req) => {
    try {
      const { pathname, searchParams } = new URL(req.url);
      if (pathname == "/favicon.ico") {
        return resError("no favicons");
      }
      //console.log(req, pathname);
      
      if (req.method == "OPTIONS") {
        return new Response(null, {
          status: 204,
          statusText: "No Content",
          headers: [
            ["Allow", "OPTIONS, GET, HEAD, POST"],
            ["Access-Control-Allow-Origin", "*"],
            //["Access-Control-Allow-Headers", "Content-Type"],
          ],
        });
      }
      const body = req.method == "POST" ? new Uint8Array(await req.arrayBuffer()) : null;
      const res = await callback(pathname, searchParams, body);
      if (!res) {
        throw new Error("res is null");
      }
      return new Response(res, {
        status: 200,
        statusText: "ok",
        headers: [
          ["Access-Control-Allow-Origin", "*"],
          ["Content-Length", res.length],
          ["Content-Type", "text/plain"],
        ],
      });
    } catch (e) {
      console.log(e);
      const res = e.toString();
      return resError(res);
    }
  });
};
