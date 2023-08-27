const express = require("express");
const bodyParser = require("body-parser");
const v1UpdateRouter = require("./v1/routes/updateRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use("/api/v1/updates", v1UpdateRouter);

app.listen(PORT, () => {
  console.log(
    `API is listening on port ${PORT}. Visit http://localhost:${PORT}`
  );
});
