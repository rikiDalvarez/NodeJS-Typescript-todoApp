import * as http from "http";
import { parse } from "url";
import { handleRequest } from "./routing";

const server = http.createServer((req, res) => {
  const { pathname, query } = parse(req.url || "", true);
  handleRequest(req, res, pathname || "", query || {});
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
