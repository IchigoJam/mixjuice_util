import { serve } from "https://deno.land/std@0.114.0/http/server.ts";

const port = Deno.args[0] || 7001;
const hostname = "[::]"; // for IPv6
//const hostname = "localhost"; // for IPv4
const addr = hostname + ":" + port;
console.log(`http://${addr}`)

export const serveMixJuice = (callback) => { // callback(path, data)
  serve(async (req) => {
    try {
      const { pathname, searchParams } = new URL(req.url);
      if (pathname == "/favicon.ico") {
        return null;
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
    }
  }, { addr });
};
