import http from "node:http";
// import { createServer } from "node:http";
import { getDataFromDB } from "./database/db.js";

const PORT = 8000;

const server = http.createServer(async (req, res) => {
  console.log(req.url);
  const destinationsData = await getDataFromDB();
  if (req.url === "/api" && req.method === "GET") {
    res.end(JSON.stringify(destinationsData));
  }
});

server.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
