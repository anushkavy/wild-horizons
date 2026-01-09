export const sendJSONResponse = (res, status, payload) => {
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET");
  res.statusCode = status;
  res.end(JSON.stringify(payload));
};
