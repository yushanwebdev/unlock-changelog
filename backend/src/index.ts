import express from "express";
import http from "http";
import bodyParser from "body-parser";
import compression from "compression";
import cors from "cors";
import v1Router from "./v1/router";
import morgan from "morgan";

const app = express();
const PORT = process.env.PORT || 8080;

app.use(morgan("tiny"));
app.use(
  cors({
    credentials: true,
  })
);
app.use(compression());
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.use("/api/v1", v1Router());
