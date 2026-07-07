const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("TeamFlow Server Running");
});

app.get("/tasks", (req, res) => {
  res.json([
    "Complete project design",
    "Create frontend pages",
    "Connect backend API"
  ]);
});

app.listen(5000, "localhost", () => {
  console.log("Server running on port 5000");
});