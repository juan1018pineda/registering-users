import mongoose from "mongoose";
import bcrypt from "bcrypt";

//Schema
const schema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

// hashes the password
schema.pre("save", function (next) {
  bcrypt.hash(this.password, 10, (err, hash) => {
    if (err) {
      return next(err);
    }
    this.password = hash;
    next();
  });
});

export const User = mongoose.model("users", schema);

