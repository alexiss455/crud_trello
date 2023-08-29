const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const jwt = require("jsonwebtoken");
app.use(bodyParser.json());
app.use(cors());

let tasks = [];

// const secretKey = "alexiess";
// const token = jwt.sign(secretKey, { expiresIn: "3650d" });
// console.log(token);


app.get("/tasks", (req, res) => {
  res.json(tasks);
});
  

app.post("/tasks", (req, res) => {
  const newTask = req.body;
  tasks.push(newTask);
  res.json(newTask);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
