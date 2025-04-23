require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const menuRoute = require("./src/routes/menu.route");

const cors = require("cors");

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

app.use("/api/v1/menu", menuRoute);
 


app.get("/ping", (req, res) => {
  console.log(`[PING] ${new Date().toISOString()} from ${req.ip} - ${req.headers['user-agent']}`);
  res.status(200).send("pong");
});


const start = async () => {
    try {
      const res = await mongoose.connect(process.env.MONGO_URL);
      console.log("Connected to MongoDB");
      app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`);
      });
    } catch (error) {
      console.log(error);
    }
  };
  
  start();  