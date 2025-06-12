import express from "express";
import mongoose from "mongoose";
import User from "./models/user.model.js";

const app = express();
app.use(express.json());

app.get("/api/user", async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/api/user/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const users = await User.findById(id);
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// update api using node js

app.put("/api/user/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const users = await User.findByIdAndUpdate(id, req.body);
    const UpeatedProduct = await User.findById(id);
    res.status(200).json(UpeatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/api/user", async (req, res) => {
  // const user = new User({
  //   name: req.body.name,
  //   email: req.body.email,
  //   password: req.body.password,
  // });

  try {
    const user = await User.create(req.body);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(3000);

mongoose
  .connect(
    "mongodb+srv://ZadX0:9803399244555@cluster0.zn66aso.mongodb.net/Node-API"
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });
