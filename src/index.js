const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose
  .connect(`${process.env.MONGO_URI}/invoicing_portal`)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.log("couldn't connected to MongoDB", error));

app.use(express.json());

app.get("/", (req, res) => {
  res.send({ message: "Hello from NodeJS Docker Container!" });
});

app.get("/:name", (req, res) => {
  res.send({ message: `Hello from ${req.params.name}` });
});

const port = process.env.PORT || 5001;
app.listen(port, () => console.log(`App is listining on port ${port}`));
