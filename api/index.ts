import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

import { router as events } from "./event/routes";

dotenv.config();

const app = express();
let port: string | undefined;
let DB_URI: string | undefined;
const env = process.env.NODE_ENV;
console.log('env', env);

if (env === "development") {
  port = process.env.PORT_DEV;
  DB_URI = process.env.MONGODB_DEV_CONNECTION;
} else if (env === "test") {
  port = process.env.PORT_TEST;
  DB_URI = process.env.MONGODB_TEST_CONNECTION;
} else {
  port = "8080";
}
console.log('port, db', port, DB_URI);


function run() {
  if (!DB_URI) {
    console.error("no mongo db config");
    return;
  }

  mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });

  app.use(express.json());
  app.use(cors());
  app.use("/event", events);
}

run();

app.listen(port, () => {
  console.log(`[server]: Server is running at port: ${port}`);
});

export default app;
