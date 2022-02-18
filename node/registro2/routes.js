import mongoose from "mongoose";
import { User } from "./user.js";
import express from "express";
const router = express.Router();

router.get("/", async (req, res) => {
  const users = await User.find();
  res.render("index", { users: users });
});

router.get("/register", (req, res) => {
  res.render("new");
});

router.post("/register", async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  const data = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  };

  try {
    const user = await User.create(data);
  } catch (e) {
    console.error(e);
  }
  res.redirect("/");
});

export default router;
