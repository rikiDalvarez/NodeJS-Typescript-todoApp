import * as http from "http";
import { parse } from "url";
import { handleRequest } from "./requestHandler";

const server = http.createServer((req, res) => {
  console.log("executed");
  const { pathname, query } = parse(req.url || "", true);
  handleRequest(req, res, pathname || "", query || {});
});

const port = 3000;
server.listen(port, () => {
  console.log(
    ` ⚡️⚡️⚡️ Server is running on port http://localhost:${port} ⚡️⚡️⚡️`
  );
});
