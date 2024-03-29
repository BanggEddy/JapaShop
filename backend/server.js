const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const routesUrls = require("./routes");
const cors = require("cors");

mongoose.set("strictQuery", false);

dotenv.config();

mongoose.connect(process.env.DATABASE_ACCESS, () =>
  console.log("Database connected")
);

app.use(express.json());
app.use(cors());
app.use("/", routesUrls);
app.listen(4000, () => console.log("Server BackEnd 4000 UP"));
