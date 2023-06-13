import * as http from "http";
import { parse } from "url";
import { handleRequest } from "./controllers";

const server = http.createServer((req, res) => {
  console.log({ req });
  console.log(req.url);
  const { pathname, query } = parse(req.url || "", true);

  handleRequest(req, res, pathname || "", query || {});
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
