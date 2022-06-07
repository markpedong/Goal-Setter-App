import { Express } from "express";

const express = require("express");
const dotenv = require("dotenv").config();
const app: Express = express();
const PORT = process.env.PORT || 5000;

app.use("/api/goals", require("./routes/goalRoutes"));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
