import http from "node:http";
// import { createServer } from "node:http";
import { getDataFromDB } from "./database/db.js";
import { sendJSONResponse } from "./utils/sendJSONResponse.js";

const PORT = 8000;

const server = http.createServer(async (req, res) => {
  console.log(req.url);
  const destinationsData = await getDataFromDB();
  if (req.url === "/api" && req.method === "GET") {
    sendJSONResponse(res, 200, destinationsData);
  } else if (req.url.startsWith("/api/continent") && req.method === "GET") {
    const continent = req.url.split("/")[3];
    console.log(continent);
    const filteredData = destinationsData.filter(
      (destination) =>
        destination.continent.toLocaleLowerCase() ===
        continent.toLocaleLowerCase()
    );
    sendJSONResponse(res, 200, filteredData);
  } else {
    sendJSONResponse(res, 404, {
      error: "not found",
      message: "The requested route does not exist",
    });
  }
});

server.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
