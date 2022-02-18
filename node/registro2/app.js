import express from "express";
import mongoose from "mongoose";
import path from "path";
import routes from "./routes.js";

//Conexión a DB
mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost:27017/users", {
  useNewUrlParser: true,
});

const app = express();

app.set("view engine", "pug");
app.set("views", "views");

app.use(express.urlencoded({ extended: true }));
app.use("/", routes);

app.listen(3000, () => console.log("Listening on port 3000 ..."));
