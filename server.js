import http from "node:http";
// import { createServer } from "node:http";

const PORT = 8000;

console.log(req.url);

if (req.url === "/api" && req.method === "GET") {
  res.write("this is write 1\n");
  res.write(
    "You still need to use res.end with write as well to end a request. just res.end() is fine\n"
  );
  res.end(
    "Hi, this is end. End sends data over http and then ends the response.",
    "utf-8",
    () => {
      console.log("Response sent");
    }
  );
}

server.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
